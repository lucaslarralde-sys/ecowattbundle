import { useState } from "react";
import Modal from "./Modal";
const AREAS=[
  {id:'industriales',title:'Efluentes industriales y biogás',brief:'Tratamiento biológico, físico-químico y valorización energética.',body:(<><p>Diseñamos y optimizamos plantas para industrias (alimentos, bebidas, curtiembres, química, etc.). Aplicamos procesos biológicos aerobios/anaerobios, DAF, MBR, MBBR y tecnologías de deshidratación.</p><p>Integramos digestión anaerobia para producción de biogás, upgrading y cogeneración.</p></>)},
  {id:'urbanos',title:'Efluentes urbanos',brief:'Saneamiento, ampliaciones y performance de PTAR.',body:(<><p>Soluciones para plantas de tratamiento municipales, con foco en eficiencia y cumplimiento normativo.</p><p>Puesta a punto y operación asistida para alcanzar y sostener parámetros.</p></>)},
  {id:'aguas',title:'Aguas',brief:'Potabilización, reúso y calidad de agua de proceso.',body:(<><p>Potabilización, filtros multimedia, carbón activado, UF/RO y producción de agua de proceso.</p></>)},
  {id:'aire',title:'Aire',brief:'Control de emisiones y tratamiento de olores.',body:(<><p>Scrubbers, biofiltros y soluciones combinadas para control de emisiones y olores.</p></>)},
];
export default function Areas(){
  const [openId,setOpenId]=useState(null);
  return(<section id='areas' className='band white'><div className='container'><h2 className='section-title'>Áreas de servicio</h2><div className='cards'>{AREAS.map(a=> (<article key={a.id} className='card'><h3>{a.title}</h3><p>{a.brief}</p><p className='cta' onClick={()=>setOpenId(a.id)}>Ver más</p><Modal open={openId===a.id} onClose={()=>setOpenId(null)} title={a.title}>{a.body}</Modal></article>))}</div></div></section>)
}