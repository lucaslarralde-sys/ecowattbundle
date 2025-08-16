import data from "../data/partners.json";
export default function Partners({ theme="green" }){
  const isGreen = theme==="green";
  const style = isGreen
    ? { background:"linear-gradient(0deg,#1b934e,#1ca75a)", color:"#fff" }
    : { backgroundImage:"linear-gradient(to right, rgba(11,74,139,.95), rgba(11,74,139,.85)), url('/image/brand-water.jpg')", backgroundSize:"cover", backgroundPosition:"center", color:"#fff" };
  return (
    <section>
      <div className="band white">
        <div className="container">
          <h2 className="section-title" style={{marginBottom:0}}>Alianzas estratégicas</h2>
        </div>
      </div>
      <div className="band" style={style}>
        <div className="container">
          <div className="partners-grid">
            {data.map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"><img src={p.img} alt={p.alt} /></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}