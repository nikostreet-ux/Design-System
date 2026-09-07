(function(){
const { Button, Select, Checkbox, Tag, Icon, IconButton, Badge } = window.RosenDesignSystem_99eac3;

const ROWS=[
  ['COL-EP-2P','Colchón Élite Pocket 2 plazas','Colchones',329990,399990,'Temuco','Disponible'],
  ['COL-EP-KG','Colchón Élite Pocket King','Colchones',489990,599990,'Temuco','Disponible'],
  ['COL-NP-KG','Colchón Nordic Pocket King','Colchones',629990,749990,'Temuco','Sin stock'],
  ['SOF-ML-3C','Sofá Milán 3 cuerpos','Muebles tapizados',719990,899990,'Santiago','Disponible'],
  ['PLU-NK-70','Plumón Nórdico King 700g','Ropa de cama',64990,89990,'Santiago','Disponible'],
  ['SAB-PC-200','Set sábanas percal 200 hilos','Textil hogar',27990,39990,'Santiago','Bajo stock']
];
const tone=s=>s==='Sin stock'?'sale':s==='Bajo stock'?'outline':'neutral';
const clp=n=>'$'+n.toLocaleString('es-CL');

function PriceList(){
  const [sel,setSel]=React.useState(['COL-EP-2P']);
  const toggle=id=>setSel(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);
  return <div style={{padding:'var(--space-6)',background:'var(--gray-10)',minHeight:'calc(100vh - 89px)',display:'grid',gap:'var(--space-4)',alignContent:'start'}}>
    <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
      <Select options={['Todas las categorías','Colchones','Muebles tapizados','Ropa de cama','Textil hogar']} style={{width:230}}/>
      <Select options={['Todas las plantas','Temuco','Santiago']} style={{width:190}}/>
      <Tag selected>Lista vigente · junio 2026</Tag>
      <div style={{marginLeft:'auto',display:'flex',gap:10}}>
        <Button variant="ghost" size="sm" iconLeft={<Icon name="download" size={15}/>}>Descargar CSV</Button>
        <Button size="sm" disabled={sel.length===0}>Agregar {sel.length>0?sel.length+' al pedido':'al pedido'}</Button>
      </div>
    </div>
    <Panel pad="0">
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
        <thead><tr>{['','SKU','Producto','Categoría','Precio mayorista','Precio sugerido','Planta','Stock',''].map((h,i)=>
          <th key={i} style={{textAlign:h.includes('Precio')?'right':'left',padding:'14px var(--space-4)',fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',fontWeight:'var(--weight-light)',borderBottom:'1px solid var(--border-subtle)',whiteSpace:'nowrap'}}>{h}</th>)}</tr></thead>
        <tbody>{ROWS.map(([sku,name,cat,wholesale,retail,plant,stock])=>{const on=sel.includes(sku);
          return <tr key={sku} style={{borderBottom:'1px solid var(--border-subtle)',background:on?'var(--rosen-slate-08)':'transparent'}}>
            <td style={{padding:'14px var(--space-4)'}}><Checkbox checked={on} onChange={()=>toggle(sku)}/></td>
            <td style={{padding:'14px var(--space-4)',color:'var(--text-muted)',whiteSpace:'nowrap'}}>{sku}</td>
            <td style={{padding:'14px var(--space-4)',color:'var(--text-heading)'}}>{name}</td>
            <td style={{padding:'14px var(--space-4)',color:'var(--text-muted)'}}>{cat}</td>
            <td style={{padding:'14px var(--space-4)',textAlign:'right',fontWeight:'var(--weight-medium)',color:'var(--text-heading)'}}>{clp(wholesale)}</td>
            <td style={{padding:'14px var(--space-4)',textAlign:'right',color:'var(--text-muted)'}}>{clp(retail)}</td>
            <td style={{padding:'14px var(--space-4)',color:'var(--text-muted)'}}>{plant}</td>
            <td style={{padding:'14px var(--space-4)'}}><Badge tone={tone(stock)}>{stock}</Badge></td>
            <td style={{padding:'14px var(--space-4)'}}><IconButton label="Ver ficha" size="sm"><Icon name="chevron-right" size={16}/></IconButton></td>
          </tr>})}</tbody>
      </table>
    </Panel>
    <div style={{fontSize:12,color:'var(--text-muted)'}}>Precios netos por unidad, sin IVA. Pedido mínimo mayorista: 6 unidades por SKU.</div>
  </div>;
}
Object.assign(window,{PriceList});
})();
