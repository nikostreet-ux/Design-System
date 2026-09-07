(function(){
const { Button, Badge, Icon, Tabs } = window.RosenDesignSystem_99eac3;
const clp=n=>'$'+n.toLocaleString('es-CL');
const LINES=[['COL-EP-2P','Colchón Élite Pocket 2 plazas',24,329990],['PLU-NK-70','Plumón Nórdico King 700g',30,64990]];
const STEPS=[['Pedido recibido','12 jun · 09:14',true],['Producción confirmada','12 jun · 16:40',true],['Despachado desde Temuco','15 jun · 07:20',true],['En ruta a Puerto Varas','Estimado 18 jun',false],['Entregado','—',false]];

function OrderDetail(){
  const [tab,setTab]=React.useState('Detalle');
  const net=LINES.reduce((a,[,,q,p])=>a+q*p,0);
  return <div style={{padding:'var(--space-6)',background:'var(--gray-10)',minHeight:'calc(100vh - 89px)',display:'grid',gap:'var(--space-4)',alignContent:'start'}}>
    <div style={{display:'flex',alignItems:'center',gap:16}}>
      <div style={{fontSize:'var(--title-4)',color:'var(--text-heading)'}}>Pedido #R-48210</div>
      <Badge tone="slate">En tránsito</Badge>
      <Badge>2 días de retraso</Badge>
      <div style={{marginLeft:'auto',display:'flex',gap:10}}>
        <Button variant="ghost" size="sm" iconLeft={<Icon name="file-text" size={15}/>}>Factura</Button>
        <Button variant="secondary" size="sm">Contactar ejecutivo</Button>
      </div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:16,alignItems:'start'}}>
      <Panel pad="0">
        <div style={{padding:'var(--space-4) var(--space-5) 0'}}><Tabs tabs={['Detalle','Documentos','Historial']} value={tab} onChange={setTab}/></div>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
          <thead><tr>{['SKU','Producto','Cantidad','Precio unitario','Subtotal'].map((h,i)=><th key={h} style={{textAlign:i>1?'right':'left',padding:'14px var(--space-5)',fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',fontWeight:'var(--weight-light)',borderBottom:'1px solid var(--border-subtle)'}}>{h}</th>)}</tr></thead>
          <tbody>{LINES.map(([sku,name,q,p])=><tr key={sku} style={{borderBottom:'1px solid var(--border-subtle)'}}>
            <td style={{padding:'16px var(--space-5)',color:'var(--text-muted)'}}>{sku}</td>
            <td style={{padding:'16px var(--space-5)',color:'var(--text-heading)'}}>{name}</td>
            <td style={{padding:'16px var(--space-5)',textAlign:'right'}}>{q}</td>
            <td style={{padding:'16px var(--space-5)',textAlign:'right'}}>{clp(p)}</td>
            <td style={{padding:'16px var(--space-5)',textAlign:'right',fontWeight:'var(--weight-medium)',color:'var(--text-heading)'}}>{clp(q*p)}</td>
          </tr>)}</tbody>
        </table>
        <div style={{display:'grid',gap:8,padding:'var(--space-5)',justifyItems:'end',fontSize:14}}>
          {[['Neto',net],['IVA 19%',Math.round(net*.19)],['Total',Math.round(net*1.19)]].map(([k,v],i)=>
            <div key={k} style={{display:'flex',gap:32,minWidth:300,justifyContent:'space-between',paddingTop:i===2?12:0,borderTop:i===2?'1px solid var(--border-default)':'none',fontSize:i===2?17:14}}>
              <span style={{color:'var(--text-muted)'}}>{k}</span><span style={{fontWeight:'var(--weight-medium)',color:'var(--text-heading)'}}>{clp(v)}</span></div>)}
        </div>
      </Panel>
      <div style={{display:'grid',gap:16}}>
        <Panel title="Seguimiento">
          <div style={{display:'grid',gap:0}}>
            {STEPS.map(([t,d,done],i)=><div key={t} style={{display:'grid',gridTemplateColumns:'20px 1fr',gap:14,paddingBottom:i<STEPS.length-1?20:0}}>
              <div style={{display:'grid',justifyItems:'center'}}>
                <span style={{width:10,height:10,borderRadius:'var(--radius-pill)',background:done?'var(--rosen-slate)':'var(--gray-60)'}}></span>
                {i<STEPS.length-1&&<span style={{width:1,flex:1,minHeight:28,background:done?'var(--rosen-slate)':'var(--border-default)'}}></span>}
              </div>
              <div><div style={{fontSize:14,color:done?'var(--text-heading)':'var(--text-muted)'}}>{t}</div><div style={{fontSize:12,color:'var(--text-muted)'}}>{d}</div></div>
            </div>)}
          </div>
        </Panel>
        <Panel title="Entrega">
          <div style={{fontSize:14,lineHeight:1.9}}>Hotel Patagonia<br/><span style={{color:'var(--text-muted)'}}>Av. Costanera 1240, Puerto Varas<br/>Contacto: Rodrigo Silva · +56 9 5544 3322</span></div>
        </Panel>
      </div>
    </div>
  </div>;
}
Object.assign(window,{OrderDetail});
})();
