(function(){
const { Button, Card, Input, Radio, PriceTag, Icon, IconButton } = window.RosenDesignSystem_99eac3;

function Cart({onNav,items}){
  const [ship,setShip]=React.useState('domicilio');
  const lines=[{name:'Colchón Élite Pocket 2 plazas',variant:'2 plazas · Firmeza media-alta',price:399990,listPrice:569990,qty:1},{name:'Plumón Nórdico King 700g',variant:'King · Blanco',price:89990,qty:1}];
  const sub=lines.reduce((a,l)=>a+l.price*l.qty,0);
  const envio=ship==='domicilio'?9990:0;
  return <div style={{maxWidth:1080,margin:'0 auto',padding:'var(--space-7) var(--gutter) 0'}}>
    <h3 style={{marginBottom:'var(--space-6)'}}>Tu carro <span style={{color:'var(--text-muted)',fontSize:20}}>({lines.length} productos)</span></h3>
    <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:40,alignItems:'start'}}>
      <div>
        {lines.map(l=><div key={l.name} style={{display:'grid',gridTemplateColumns:'140px 1fr auto',gap:20,padding:'var(--space-5) 0',borderBottom:'1px solid var(--border-subtle)'}}>
          <Slot label="4:3" ratio="4 / 3"/>
          <div>
            <div style={{fontSize:17,color:'var(--text-heading)',marginBottom:6}}>{l.name}</div>
            <div style={{fontSize:13,color:'var(--text-muted)',marginBottom:14}}>{l.variant}</div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div style={{display:'flex',alignItems:'center',border:'1px solid var(--border-default)',borderRadius:'var(--radius-sm)'}}>
                <IconButton label="Quitar uno" size="sm"><Icon name="minus" size={14}/></IconButton>
                <span style={{width:28,textAlign:'center',fontSize:14}}>{l.qty}</span>
                <IconButton label="Agregar uno" size="sm"><Icon name="plus" size={14}/></IconButton>
              </div>
              <Button variant="link" style={{fontSize:13}}>Eliminar</Button>
            </div>
          </div>
          <PriceTag price={l.price} listPrice={l.listPrice}/>
        </div>)}
        <div style={{marginTop:'var(--space-6)'}}>
          <div className="rosen-overline" style={{marginBottom:14}}>Entrega</div>
          <div style={{display:'grid',gap:12}}>
            <Radio name="s" label="Despacho a domicilio — $9.990 · 3 a 5 días hábiles" checked={ship==='domicilio'} onChange={()=>setShip('domicilio')}/>
            <Radio name="s" label="Retiro en tienda — sin costo · 24 h hábiles" checked={ship==='retiro'} onChange={()=>setShip('retiro')}/>
          </div>
        </div>
      </div>
      <Card variant="subtle" padding="var(--space-5)" style={{display:'grid',gap:16}}>
        <div className="rosen-overline">Resumen</div>
        {[['Subtotal',sub],['Despacho',envio]].map(([k,v])=><div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:15}}><span style={{color:'var(--text-muted)'}}>{k}</span><span>{v===0?'Sin costo':'$'+v.toLocaleString('es-CL')}</span></div>)}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingTop:16,borderTop:'1px solid var(--border-default)'}}>
          <span style={{fontSize:16}}>Total</span><PriceTag price={sub+envio} size="lg"/>
        </div>
        <Input placeholder="Código de descuento" iconRight={<Icon name="tag" size={16}/>}/>
        <Button size="lg" full>Ir a pagar</Button>
        <Button variant="link" onClick={()=>onNav('catalog')} style={{justifySelf:'center'}}>Seguir comprando</Button>
      </Card>
    </div>
  </div>;
}
Object.assign(window,{Cart});
})();
