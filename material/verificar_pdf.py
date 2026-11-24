"""Coteja el índice con páginas físicas y prepara imágenes para revisión visual."""
import json,re,unicodedata,html
from pathlib import Path
from pypdf import PdfReader
import pypdfium2 as pdfium
from PIL import Image,ImageDraw

base=Path(__file__).resolve().parent.parent
pdf=base.parents[1]/'docs/cursos/diseno-3d/D3DH-001-Diseno-3D-Hiperrealismo.pdf'
build=base/'material/pdf_build'
mapping=json.loads((build/'paginas_indice.json').read_text(encoding='utf-8'))
reader=PdfReader(pdf)
texts=[p.extract_text() or '' for p in reader.pages]
def norm(t):return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFKD',html.unescape(re.sub('<[^>]+>','',t))).lower())
bad=[]
for e in mapping['entries']:
    p=mapping['pageMap'][e['id']]
    if norm(e['text']) not in norm(texts[p-1]):bad.append({'heading':e['text'],'page':p})
empty=[i+1 for i,t in enumerate(texts) if not re.sub(r'\d+\s+de\s+\d+','',t.replace('TEACH LAOZ','')).strip()]
report={'pages':len(reader.pages),'bytes':pdf.stat().st_size,'toc_entries':len(mapping['entries']),'incorrect_toc_pages':bad,'empty_pages':empty,'cover_separate_from_toc':'Índice' not in texts[0]}
(build/'verificacion_pdf.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False))
assert not bad and not empty and report['cover_separate_from_toc']
doc=pdfium.PdfDocument(pdf)
# Vista de conjunto de cada página; los detalles se revisan con imágenes de tamaño completo.
for offset in range(0,len(doc),40):
    sheet=Image.new('RGB',(1000,8*280),'#dddddd');draw=ImageDraw.Draw(sheet)
    for i in range(offset,min(offset+40,len(doc))):
        page=doc[i];im=page.render(scale=.32).to_pil().convert('RGB');im.thumbnail((190,254));x=((i-offset)%5)*200+5;y=((i-offset)//5)*280+20
        sheet.paste(im,(x,y));draw.text((x,y-16),str(i+1),fill='black');page.close()
    sheet.save(build/f'contacto-{offset//40+1}.png')
sample={0,1,min(7,len(doc)-1),len(doc)-1}
for needle in ['Semana 1:','Semana 13:','Semana 19:','Semana 26:','Base Color','Rúbrica','Proyecto final']:
    matches=[i for i,t in enumerate(texts) if needle in t and i>4]
    if matches:sample.add(matches[len(matches)//2])
for i in sorted(sample):
    page=doc[i];page.render(scale=1.3).to_pil().save(build/f'pagina-{i+1}.png');page.close()
doc.close()
