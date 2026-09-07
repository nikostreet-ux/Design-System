(function(){
const { ProductCard, Tag, Checkbox, Select, Breadcrumb, Button, Switch } = window.RosenDesignSystem_99eac3;

const ITEMS=[
  {category:'Colchones',name:'Colchón Élite Pocket 2 plazas',price:399990,listPrice:569990},
  {category:'Colchones',name:'Colchón Essence Firme 1.5 plazas',price:229990},
  {category:'Colchones',name:'Colchón Premium Latex King',price:1099990,listPrice:1399990},
  {category:'Colchones',name:'Colchón Base Confort 1 plaza',price:149990},
  {category:'Colchones',name:'Colchón Élite Soft 2 plazas',price:429990,listPrice:539990},
  {category:'Colchones',name:'Colchón Nordic Pocket King',price:749990}
];
const FILTERS=[['Medida',['1 plaza (8)','1.5 plazas (12)','2 plazas (24)','King (9)']],['Firmeza',['Suave (6)','Media (18)','Alta (14)']],['Precio',['Hasta $200.000','$200.000 – $500.000','Sobre $500.000']]];

function Catalog({onNav}){
  const [chips,setChips]=React.useState(['2 plazas','Firmeza media']);
  const [stock,setStock]=React.useState(true);
  return <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-5) var(--gutter) 0'}}>
    <Breadcrumb items={['Inicio','Colchones']}/>
    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',margin:'var(--space-5) 0 var(--space-6)'}}>
      <div><h3 style={{marginBottom:6}}>Colchones</h3><div style={{fontSize:14,color:'var(--text-muted)'}}>53 productos</div></div>
      <Select options={['Recomendados','Menor precio','Mayor precio','Más nuevos']} style={{width:230}}/>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'240px 1fr',gap:48,alignItems:'start'}}>
      <aside style={{display:'grid',gap:'var(--space-6)',position:'sticky',top:150}}>
        <Switch label="Solo con stock" checked={stock} onChange={()=>setStock(!stock)}/>
        {FILTERS.map(([t,opts])=><div key={t}>
          <div className="rosen-overline" style={{marginBottom:14}}>{t}</div>
          <div style={{display:'grid',gap:12}}>{opts.map(o=><Checkbox key={o} label={o} checked={chips.some(c=>o.startsWith(c))} onChange={()=>{}}/>)}</div>
        </div>)}
        <Button variant="ghost" size="sm" onClick={()=>setChips([])}>Limpiar filtros</Button>
      </aside>
      <div>
        {chips.length>0&&<div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:'var(--space-5)'}}>
          {chips.map(c=><Tag key={c} removable onRemove={()=>setChips(chips.filter(x=>x!==c))}>{c}</Tag>)}
        </div>}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {ITEMS.map(p=><ProductCard key={p.name} {...p} imageSlot={<Slot label="Producto · 4:3"/>} onClick={()=>onNav('product')}/>)}
        </div>
        <div style={{display:'grid',placeItems:'center',marginTop:'var(--space-7)'}}>
          <Button variant="secondary">Cargar más productos</Button>
        </div>
      </div>
    </div>
  </div>;
}
Object.assign(window,{Catalog});
})();
