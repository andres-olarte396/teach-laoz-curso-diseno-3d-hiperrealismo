const fs=require('fs'),path=require('path');
const base=__dirname,mods=JSON.parse(fs.readFileSync(path.join(base,'modulos.json'),'utf8'));
const errors=[], warnings=[], lessons=[];
const prePdf=process.argv.includes('--pre-pdf');
const expectedPdf=path.resolve(base,'../../docs/cursos/diseno-3d/D3DH-001-Diseno-3D-Hiperrealismo.pdf');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{const p=path.join(dir,e.name);return e.isDirectory()&&!['pdf_build'].includes(e.name)?files(p):e.isFile()?[p]:[];});}
for(const mod of mods){if(String(mod.modulo_id)==='0')continue;for(const topic of mod.temas)for(const sub of topic.subtemas||[]){
 const stem=`modulos/modulo_${mod.modulo_id}/tema_${topic.tema_id}_subtema_${sub.subtema_id}`;
 for(const type of ['contenido','preconceptos','ejercicios','evaluacion']){const rel=stem+'_'+type+'.md',p=path.join(base,rel);if(!fs.existsSync(p))errors.push('Falta '+rel);else if(fs.statSync(p).size<100)errors.push('Archivo vacío o demasiado corto: '+rel);}
 const p=path.join(base,stem+'_contenido.md');if(fs.existsSync(p)){const text=fs.readFileSync(p,'utf8'),words=text.trim().split(/\s+/).length;lessons.push({id:sub.subtema_id,words});if(words<200)warnings.push('Revisar profundidad de '+sub.subtema_id+': '+words+' palabras');}
}}
let linkCount=0;
for(const file of files(base).filter(p=>p.endsWith('.md'))){let text=fs.readFileSync(file,'utf8');text=text.replace(/```[\s\S]*?```/g,'');
 for(const m of text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)){let target=m[1].replace(/^<|>$/g,'');if(/^(https?:|mailto:|#|data:)/.test(target))continue;target=decodeURIComponent(target.split('#')[0]);if(!target)continue;linkCount++;const resolved=path.resolve(path.dirname(file),target);if(!fs.existsSync(resolved)){if(prePdf&&resolved===expectedPdf)warnings.push('PDF pendiente de exportación: '+path.relative(base,file));else errors.push('Enlace roto '+path.relative(base,file)+' → '+target);}}
 if(/\[Contenido aquí\]|\[Descripción\]|\bTODO\b/.test(text))errors.push('Marcador pendiente en '+path.relative(base,file));
}
const weekly=mods.filter(m=>String(m.modulo_id)!=='0');
if(weekly.length!==26)errors.push('Se esperaban 26 semanas, hay '+weekly.length);
let minutes=0,sessions=0;const seen=new Set();
for(const mod of weekly){const days=new Set();let weekMinutes=0;
 for(const topic of mod.temas)for(const sub of topic.subtemas||[]){for(const day of sub.dias||[]){if(days.has(day))errors.push('Día duplicado '+day+' en semana '+mod.semana);days.add(day);}weekMinutes+=sub.minutos;seen.add(sub.subtema_id);}
 if(days.has(mod.evaluacion.dia))errors.push('Evaluación solapada en semana '+mod.semana);days.add(mod.evaluacion.dia);weekMinutes+=mod.evaluacion.minutos;
 if(weekMinutes!==mod.minutos||weekMinutes!==140)errors.push('Presupuesto incorrecto en semana '+mod.semana);
 if(days.size!==7||[...days].some(d=>d<1||d>7))errors.push('Distribución semanal incompleta '+mod.semana);
 if(mod.minutos_dia!==20)errors.push('Sesión mayor al tiempo acordado en semana '+mod.semana);
 minutes+=weekMinutes;sessions+=days.size;
}
if(minutes!==3640||sessions!==182)errors.push('Total de tiempo distinto del calendario acordado');
const report={phase:prePdf?'previa a exportación PDF':'entrega completa',weeks:weekly.length,sessions,minutes_per_session:20,total_active_minutes:minutes,subtopics:lessons.length,checked_local_links:linkCount,errors,warnings,limits:['La validación automática no demuestra ejecución en Blender ni eficacia con una persona real.','El tiempo de máquina para renderizar se documenta fuera del tiempo activo.']};
fs.mkdirSync(path.join(base,'material'),{recursive:true});fs.writeFileSync(path.join(base,'material/verificacion_estructura.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
