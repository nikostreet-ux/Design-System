(function(){
const { Button, Badge, Icon, Card, Tabs } = window.RosenDesignSystem_99eac3;

const KPIS=[['Pedidos del mes','14','+3 vs. mayo'],['Facturado junio','$18.420.000','86% de la meta'],['Línea de crédito','$6.100.000','de $25.000.000'],['Pedidos en tránsito','3','1 con retraso']];
const ORDERS=[['#R-48210','12 jun 2026','Colchones Élite · 24 u.','$8.640.000','En tránsito','slate'],['#R-48174','04 jun 2026','Plumones Nórdicos · 60 u.','$3.240.000','Entregado','neutral'],['#R-48090','28 may 2026','Sofás Milán · 6 u.','$4.140.000','Entregado','neutral'],['#R-48012','19 may 2026','Sábanas percal · 120 u.','$2.400.000','Facturado','neutral']];

function Dashboard({onNav}){
  const [tab,setTab]=React.useState('Todos');
  return <div style={{display:'grid',gap:'var(--space-5)',padding:'var(--space-6)',background:'var(--gray-10)',minHeight:'calc(100vh - 89px)'}}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
      {KPIS.map(([l,v,d])=><Card key={l}>
        <div className="rosen-overline" style={{marginBottom:12}}>{l}</div>
        <div style={{fontSize:32,color:'var(--text-heading)',lineHeight:1.1}}>{v}</div>
        <div style={{fontSize:12,color:'var(--text-muted)',marginTop:6}}>{d}</div>
      </Card>)}
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:16,alignItems:'start'}}>
      <Panel title="Pedidos recientes" pad="0" action={<Button variant="link" style={{fontSize:13}} onClick={()=>onNav('order')}>Ver todos</Button>}>
        <div style={{padding:'var(--space-4) var(--space-5) 0'}}><Tabs tabs={['Todos','En tránsito','Entregados']} value={tab} onChange={setTab}/></div>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
          <thead><tr>{['Pedido','Fecha','Contenido','Total','Estado'].map(h=><th key={h} style={{textAlign:h==='Total'?'right':'left',padding:'14px var(--space-5)',fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',fontWeight:'var(--weight-light)',borderBottom:'1px solid var(--border-subtle)'}}>{h}</th>)}</tr></thead>
          <tbody>{ORDERS.map(([id,date,content,total,st,tone])=><tr key={id} onClick={()=>onNav('order')} style={{cursor:'pointer',borderBottom:'1px solid var(--border-subtle)'}}>
            <td style={{padding:'16px var(--space-5)',color:'var(--rosen-slate)'}}>{id}</td>
            <td style={{padding:'16px var(--space-5)',color:'var(--text-muted)'}}>{date}</td>
            <td style={{padding:'16px var(--space-5)'}}>{content}</td>
            <td style={{padding:'16px var(--space-5)',textAlign:'right',fontWeight:'var(--weight-medium)'}}>{total}</td>
            <td style={{padding:'16px var(--space-5)'}}><Badge tone={tone}>{st}</Badge></td>
          </tr>)}</tbody>
        </table>
      </Panel>
      <div style={{display:'grid',gap:16}}>
        <Panel title="Alertas">
          <div style={{display:'grid',gap:14}}>
            {[['triangle-alert','Pedido #R-48210 con 2 días de retraso','var(--rosen-red)'],['package','Colchón Nordic King sin stock en planta Temuco','var(--rosen-slate)'],['file-text','Factura 8842 vence en 5 días','var(--rosen-slate)']].map(([ic,t,c])=>
              <div key={t} style={{display:'flex',gap:12,fontSize:14}}><Icon name={ic} size={18} color={c}/><span>{t}</span></div>)}
          </div>
        </Panel>
        <Panel title="Carga rápida">
          <p style={{fontSize:14,color:'var(--text-muted)'}}>Sube tu orden de compra en CSV y la convertimos en pedido.</p>
          <div style={{border:'1px dashed var(--border-default)',borderRadius:'var(--radius-md)',padding:'var(--space-5)',textAlign:'center',fontSize:13,color:'var(--text-muted)',marginBottom:16}}>Arrastra tu archivo aquí</div>
          <Button variant="secondary" full>Seleccionar archivo</Button>
        </Panel>
      </div>
    </div>
  </div>;
}
Object.assign(window,{Dashboard});
})();
