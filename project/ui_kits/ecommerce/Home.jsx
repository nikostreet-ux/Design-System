(function(){
const { Button, ProductCard, Icon, Card } = window.RosenDesignSystem_99eac3;

const FEATURED=[
  {category:'Colchones',name:'Colchón Élite Pocket 2 plazas',price:399990,listPrice:569990},
  {category:'Camas',name:'Cama Europea Nordic 1.5 plazas',price:289990},
  {category:'Muebles',name:'Sofá Milán 3 cuerpos tapiz gris',price:899990,listPrice:1149990},
  {category:'Ropa de cama',name:'Plumón Nórdico King 700g',price:89990,listPrice:119990}
];
const CATS=[['Colchones','1 / 1'],['Camas y bases','1 / 1'],['Sofás','1 / 1'],['Ropa de cama','1 / 1'],['Textil hogar','1 / 1']];
const SERVICES=[['truck','Despacho a todo Chile','Coordina el día en el checkout'],['store','Retiro en 36 tiendas','Sin costo, en 24 horas hábiles'],['shield-check','Garantía de fábrica','Hasta 10 años en colchones'],['wrench','Postventa propia','Servicio técnico Rosen']];

function Home({onNav}){
  return <div>
    <div style={{position:'relative',background:'var(--rosen-slate)',color:'var(--white)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--gutter)',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',gap:64,minHeight:520}}>
        <div style={{padding:'var(--space-8) 0'}}>
          <div className="rosen-overline" style={{color:'rgba(255,255,255,.6)',marginBottom:20}}>Nueva colección de descanso</div>
          <h1 style={{color:'var(--white)',fontSize:'var(--title-1)',marginBottom:24}}>Dormir bien<br/>no es un lujo</h1>
          <p style={{fontSize:18,opacity:.8,maxWidth:420,marginBottom:36}}>Colchones fabricados en nuestra planta de Temuco, con garantía de fábrica y despacho a todo Chile.</p>
          <div style={{display:'flex',gap:14}}>
            <Button variant="inverse" size="lg" onClick={()=>onNav('catalog')}>Ver colchones</Button>
            <Button variant="inverse" size="lg" style={{background:'transparent',color:'var(--white)',borderColor:'rgba(255,255,255,.5)'}}>Encuentra tu firmeza</Button>
          </div>
        </div>
        <Slot label="Hero · ambiente de dormitorio · 4:3" ratio="4 / 3" dark/>
      </div>
    </div>

    <Section>
      <SectionTitle over="Categorías" title="Todo para el hogar"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>
        {CATS.map(([n,r])=><a key={n} href="#" onClick={e=>{e.preventDefault();onNav('catalog')}} style={{display:'block'}}>
          <Slot label={n+' · 1:1'} ratio={r}/>
          <div style={{marginTop:12,fontSize:16,color:'var(--text-heading)',display:'flex',alignItems:'center',gap:6}}>{n}<Icon name="chevron-right" size={15}/></div>
        </a>)}
      </div>
    </Section>

    <Section style={{paddingTop:0}}>
      <SectionTitle over="Destacados" title="Los más vendidos" action={<Button variant="link" onClick={()=>onNav('catalog')}>Ver todo el catálogo</Button>}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
        {FEATURED.map(p=><ProductCard key={p.name} {...p} imageSlot={<Slot label="Producto · 4:3"/>} onClick={()=>onNav('product')}/>)}
      </div>
    </Section>

    <div style={{background:'var(--gray-10)'}}>
      <Section style={{padding:'var(--space-7) var(--gutter)'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32}}>
          {SERVICES.map(([ic,t,d])=><div key={t} style={{display:'flex',gap:14}}>
            <Icon name={ic} size={26} color="var(--rosen-slate)"/>
            <div><div style={{fontSize:16,color:'var(--text-heading)'}}>{t}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>{d}</div></div>
          </div>)}
        </div>
      </Section>
    </div>

    <Section>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,alignItems:'stretch'}}>
        <Slot label="Tienda Rosen · full-bleed 4:3"/>
        <div style={{background:'var(--gray-10)',padding:'var(--space-8)',display:'grid',alignContent:'center'}}>
          <div className="rosen-overline" style={{marginBottom:16}}>Desde 1958</div>
          <h3 style={{marginBottom:20}}>Fabricamos lo que vendemos</h3>
          <p style={{fontSize:16,maxWidth:420}}>Producción propia en Temuco, logística y postventa integradas, y presencia en cinco países. Cada pieza pasa por nuestras manos antes de llegar a tu casa.</p>
          <div><Button variant="secondary">Conoce nuestra historia</Button></div>
        </div>
      </div>
    </Section>
  </div>;
}
Object.assign(window,{Home});
})();
