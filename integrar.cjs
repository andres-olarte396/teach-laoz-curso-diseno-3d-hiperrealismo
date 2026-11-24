const fs=require('fs'),path=require('path');
const base=__dirname;
const mods=JSON.parse(fs.readFileSync(path.join(base,'modulos.json'),'utf8'));
const required=['GUIA_ESTUDIANTE.md','GUIA_INSTRUCTOR.md','REFERENCIAS.md','cronograma.md'];
function read(rel){const file=path.join(base,rel);if(!fs.existsSync(file))throw new Error('Falta '+rel);return fs.readFileSync(file,'utf8');}
function section(rel){let txt=read(rel);const dir=path.posix.dirname(rel.replace(/\\/g,'/'));
 txt=txt.replace(/\]\(([^)]+)\)/g,(m,target)=>{if(/^(https?:|mailto:|#|data:)/.test(target))return m;return ']('+path.posix.normalize(path.posix.join(dir,target))+')';});
 return txt.replace(/^(#{1,5}) /gm,(_,s)=>'#'.repeat(Math.min(s.length+3,6))+' ');
}
let full='# Diseño 3D: del punto al render hiperrealista\n\n';
let index='# Índice del curso D3DH-001\n\n';
for(const file of required){full+='## '+file.replace('.md','').replaceAll('_',' ')+'\n\n'+section(file)+'\n\n';index+='- ['+file+']('+file+')\n';}
full+='## Nivelación integrada\n\n';
for(const rel of ['modulo_0/diagnostico.md','modulo_0/glosario.md']){full+=section(rel)+'\n\n';index+='- ['+path.basename(rel)+']('+rel+')\n';}
for(const mod of mods){if(String(mod.modulo_id)==='0')continue;
 const dir=`modulos/modulo_${mod.modulo_id}`;
 full+=`## Semana ${mod.semana||mod.modulo_id}: ${mod.titulo}\n\n`;
 index+=`\n## Semana ${mod.semana||mod.modulo_id}: ${mod.titulo}\n\n`;
 for(const topic of mod.temas)for(const sub of topic.subtemas||[]){
  const stem=`tema_${topic.tema_id}_subtema_${sub.subtema_id}`;
  full+=`### ${sub.subtema_id} — ${sub.titulo}\n\n`;
  for(const type of ['preconceptos','contenido','ejercicios','evaluacion']){
   const rel=`${dir}/${stem}_${type}.md`;full+=section(rel)+'\n\n';index+=`- [${sub.subtema_id}: ${type}](${rel})\n`;
  }
  const nav=`${dir}/tema_${topic.tema_id}/subtema_${sub.subtema_id}.md`;
  fs.mkdirSync(path.dirname(path.join(base,nav)),{recursive:true});
  fs.writeFileSync(path.join(base,nav),`# ${sub.titulo}\n\n`+['preconceptos','contenido','ejercicios','evaluacion'].map(type=>`- [${type}](../${stem}_${type}.md)`).join('\n')+'\n');
 }
 for(const suffix of ['preguntas','respuestas']){
  const rel=`${dir}/modulo_${mod.modulo_id}_${suffix}.md`;full+=`### ${suffix==='preguntas'?'Cuestionario':'Solucionario'} semanal\n\n`+section(rel)+'\n\n';index+=`- [${suffix}](${rel})\n`;
 }
 const daily=`${dir}/sesiones.md`;if(fs.existsSync(path.join(base,daily))){full+='### Sesiones de la semana\n\n'+section(daily)+'\n\n';index+=`- [Sesiones de 20 minutos](${daily})\n`;}
}
for(const file of ['PROYECTO_FINAL.md','REPORTE_VERIFICACION.md'])if(fs.existsSync(path.join(base,file))){full+='## '+file.replace('.md','').replaceAll('_',' ')+'\n\n'+section(file)+'\n\n';index+='\n- ['+file+']('+file+')\n';}
fs.writeFileSync(path.join(base,'CURSO_COMPLETO.md'),full);fs.writeFileSync(path.join(base,'INDICE.md'),index);
console.log('Integrados '+mods.filter(m=>String(m.modulo_id)!=='0').length+' módulos. '+Buffer.byteLength(full)+' bytes.');
