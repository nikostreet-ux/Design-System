(function(){
const { Button, Badge, Tag, Tabs, PriceTag, Breadcrumb, Icon, Card, Tooltip, ProductCard } = window.RosenDesignSystem_99eac3;

const SIZES=['1 plaza','1.5 plazas','2 plazas','King'];
const SPECS=[['Tecnología','Resortes pocket individuales'],['Firmeza','Media-alta'],['Alto','30 cm'],['Garantía','10 años de fábrica'],['Origen','Planta Rosen, Temuco']];

function Product({onNav,addToCart}){
  const [size,setSize]=React.useState('2 plazas');
  const [tab,setTab]=React.useState('Ficha técnica');
  return <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-5) var(--gutter) 0'}}>
    <Breadcrumb items={['Inicio','Colchones','Colchón Élite Pocket 2 plazas']}/>
    <div style={{display:'grid',gridTemplateColumns:'1.15fr 1fr',gap:56,marginTop:'var(--space-5)'}}>
      <div>
        <div style={{position:'relative'}}><Slot label="Imagen principal · 4:3"/><div style={{position:'absolute',top:16,left:16}}><Badge>-30%</Badge></div></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,marginTop:12}}>
          {['1:1','1:1','1:1','1:1'].map((r,i)=><Slot key={i} label={'Vista '+(i+1)} ratio="1 / 1"/>)}
        </div>
      </div>
      <div>
        <div className="rosen-overline" style={{marginBottom:12}}>Colchones · Línea Élite</div>
        <h3 style={{fontSize:'var(--title-3)',marginBottom:16}}>Colchón Élite Pocket {size}</h3>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:24,fontSize:13,color:'var(--text-muted)'}}>
          <span style={{color:'var(--rosen-slate)'}}>★★★★★</span> 4,7 · 218 evaluaciones
        </div>
        <PriceTag price={399990} listPrice={569990} size="lg"/>
        <div style={{fontSize:13,color:'var(--text-muted)',margin:'10px 0 var(--space-6)'}}>o 6 cuotas precio contado de $66.665</div>

        <div className="rosen-overline" style={{marginBottom:12}}>Medida</div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:'var(--space-6)'}}>
          {SIZES.map(s=><Tag key={s} selected={s===size} onClick={()=>setSize(s)}>{s}</Tag>)}
        </div>

        <div style={{display:'flex',gap:12,marginBottom:'var(--space-5)'}}>
          <Button size="lg" full onClick={addToCart}>Agregar al carro</Button>
          <Button size="lg" variant="secondary" style={{flex:'0 0 auto'}}>Comprar ahora</Button>
        </div>

        <Card variant="subtle" padding="var(--space-4)" style={{display:'grid',gap:12}}>
          {[['truck','Despacho a domicilio desde $9.990'],['store','Retiro sin costo en tienda Temuco'],['shield-check','10 años de garantía de fábrica']].map(([ic,t])=>
            <div key={t} style={{display:'flex',alignItems:'center',gap:12,fontSize:14}}><Icon name={ic} size={19} color="var(--rosen-slate)"/>{t}</div>)}
        </Card>
      </div>
    </div>

    <div style={{marginTop:'var(--space-8)'}}>
      <Tabs tabs={['Descripción','Ficha técnica','Garantía','Evaluaciones']} value={tab} onChange={setTab}/>
      <div style={{padding:'var(--space-6) 0',maxWidth:760}}>
        {tab==='Ficha técnica'
          ? <div style={{display:'grid',gap:0}}>{SPECS.map(([k,v])=><div key={k} style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:24,padding:'14px 0',borderBottom:'1px solid var(--border-subtle)',fontSize:15}}><span style={{color:'var(--text-muted)'}}>{k}</span><span style={{color:'var(--text-heading)'}}>{v}</span></div>)}</div>
          : <p style={{fontSize:16}}>El Colchón Élite Pocket combina resortes pocket individuales con capas de espuma de alta densidad para una firmeza media-alta que acompaña la columna sin ceder. Fabricado en nuestra planta de Temuco.</p>}
      </div>
    </div>

    <div style={{marginTop:'var(--space-7)'}}>
      <SectionTitle over="También te puede interesar" title="Completa tu descanso"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
        {[{category:'Camas',name:'Base Europea Nordic 2 plazas',price:189990},{category:'Ropa de cama',name:'Plumón Nórdico 2 plazas',price:79990,listPrice:99990},{category:'Textil hogar',name:'Set sábanas percal 200 hilos',price:39990},{category:'Colchones',name:'Protector impermeable 2 plazas',price:29990}].map(p=>
          <ProductCard key={p.name} {...p} imageSlot={<Slot label="Producto · 4:3"/>}/>)}
      </div>
    </div>
  </div>;
}
Object.assign(window,{Product});
})();
