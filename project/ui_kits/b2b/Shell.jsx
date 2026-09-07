(function(){
const { Logo, Icon, IconButton, Input, Badge } = window.RosenDesignSystem_99eac3;

const NAVI=[['layout-dashboard','Resumen','dashboard'],['list','Lista de precios','prices'],['package','Pedidos','order'],['file-text','Documentos','docs'],['users','Mi equipo','team']];

function Sidebar({view,onNav}){
  return <aside style={{width:248,flex:'0 0 auto',background:'var(--rosen-slate)',color:'var(--white)',minHeight:'100vh',padding:'var(--space-5) 0',display:'flex',flexDirection:'column'}}>
    <div style={{padding:'0 var(--space-5) var(--space-6)'}}><Logo tone="white" width={104} base="../.."/>
      <div style={{fontSize:10,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',opacity:.55,marginTop:12}}>Portal mayorista</div></div>
    <nav style={{display:'grid',gap:2,padding:'0 var(--space-3)'}}>
      {NAVI.map(([ic,label,key])=>{const on=view===key;
        return <a key={key} href="#" onClick={e=>{e.preventDefault();onNav(key)}} style={{display:'flex',alignItems:'center',gap:12,padding:'11px 14px',borderRadius:'var(--radius-sm)',fontSize:14,color:'var(--white)',background:on?'rgba(255,255,255,.12)':'transparent',opacity:on?1:.75}}>
          <Icon name={ic} size={18}/>{label}</a>})}
    </nav>
    <div style={{marginTop:'auto',padding:'var(--space-5)',fontSize:12,opacity:.55,lineHeight:1.8}}>Ejecutivo asignado<br/><span style={{opacity:1,color:'var(--white)',fontSize:13}}>Carolina Muñoz</span><br/>+56 9 8765 4321</div>
  </aside>;
}

function Topbar({title,crumb}){
  return <header style={{display:'flex',alignItems:'center',gap:24,padding:'var(--space-4) var(--space-6)',borderBottom:'1px solid var(--border-subtle)',background:'var(--white)',position:'sticky',top:0,zIndex:10}}>
    <div>
      <div style={{fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)'}}>{crumb}</div>
      <div style={{fontSize:'var(--title-4)',color:'var(--text-heading)'}}>{title}</div>
    </div>
    <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:16}}>
      <Input placeholder="Buscar SKU o pedido" style={{width:280}} iconRight={<Icon name="search" size={16}/>}/>
      <IconButton label="Notificaciones" variant="outline"><Icon name="bell"/></IconButton>
      <div style={{display:'flex',alignItems:'center',gap:10,paddingLeft:16,borderLeft:'1px solid var(--border-subtle)'}}>
        <div style={{width:34,height:34,borderRadius:'var(--radius-pill)',background:'var(--gray-40)',display:'grid',placeItems:'center',fontSize:13,color:'var(--rosen-slate)'}}>HP</div>
        <div style={{fontSize:13,lineHeight:1.3}}>Hotel Patagonia<br/><span style={{color:'var(--text-muted)',fontSize:12}}>76.543.210-K</span></div>
      </div>
    </div>
  </header>;
}

const Panel=({title,action,children,pad='var(--space-5)'})=><section style={{background:'var(--white)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)'}}>
  {(title||action)&&<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'var(--space-4) var(--space-5)',borderBottom:'1px solid var(--border-subtle)'}}>
    <div style={{fontSize:16,color:'var(--text-heading)'}}>{title}</div>{action}</div>}
  <div style={{padding:pad}}>{children}</div>
</section>;

Object.assign(window,{Sidebar,Topbar,Panel});
})();
