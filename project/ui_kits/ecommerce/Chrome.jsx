(function(){
const { Logo, Icon, IconButton, Input, Button } = window.RosenDesignSystem_99eac3;

const NAV=['Colchones','Camas','Muebles','Ropa de cama','Textil hogar','Outlet'];

function Announce(){
  return <div style={{background:'var(--rosen-slate)',color:'var(--white)',fontSize:12,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',textAlign:'center',padding:'10px 16px'}}>
    Despacho a todo Chile · Retiro sin costo en 36 tiendas
  </div>;
}

function Header({onNav,cart}){
  return <header style={{position:'sticky',top:0,zIndex:20,background:'var(--white)',borderBottom:'1px solid var(--border-subtle)'}}>
    <Announce/>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'20px var(--gutter)',display:'flex',alignItems:'center',gap:40}}>
      <a href="#" onClick={e=>{e.preventDefault();onNav('home')}} style={{flex:'0 0 auto'}}><Logo tone="dark" width={132} base="../.."/></a>
      <Input placeholder="Buscar colchones, sofás, plumones…" style={{flex:1,maxWidth:520}} iconRight={<Icon name="search" size={17}/>}/>
      <div style={{display:'flex',alignItems:'center',gap:8,marginLeft:'auto'}}>
        <IconButton label="Tiendas"><Icon name="map-pin"/></IconButton>
        <IconButton label="Mi cuenta"><Icon name="user"/></IconButton>
        <div style={{position:'relative'}}>
          <IconButton label="Carro" onClick={()=>onNav('cart')}><Icon name="shopping-bag"/></IconButton>
          {cart>0&&<span style={{position:'absolute',top:2,right:0,minWidth:16,height:16,padding:'0 4px',display:'grid',placeItems:'center',fontSize:10,fontWeight:'var(--weight-medium)',color:'var(--white)',background:'var(--rosen-red)',borderRadius:'var(--radius-pill)'}}>{cart}</span>}
        </div>
      </div>
    </div>
    <nav style={{borderTop:'1px solid var(--border-subtle)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--gutter)',display:'flex',gap:36}}>
        {NAV.map(n=><a key={n} href="#" onClick={e=>{e.preventDefault();onNav('catalog')}} style={{padding:'14px 0',fontSize:13,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:n==='Outlet'?'var(--rosen-red)':'var(--text-body)'}}>{n}</a>)}
      </div>
    </nav>
  </header>;
}

function Footer(){
  const cols=[['Productos',['Colchones','Camas y bases','Sofás','Ropa de cama','Outlet']],['Ayuda',['Estado de mi pedido','Despacho y retiro','Garantía','Cambios y devoluciones']],['Rosen',['Nuestra historia','Tiendas','Venta mayorista','Trabaja con nosotros']]];
  return <footer style={{background:'var(--rosen-slate)',color:'var(--white)',marginTop:'var(--space-9)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-8) var(--gutter)',display:'grid',gridTemplateColumns:'1.4fr repeat(3,1fr)',gap:48}}>
      <div>
        <Logo tone="white" width={120} base="../.."/>
        <p style={{marginTop:20,fontSize:14,opacity:.75,maxWidth:280}}>Fabricamos descanso en Chile desde 1958. Producción, logística y postventa propias en Chile, Perú, Argentina, Bolivia y Colombia.</p>
      </div>
      {cols.map(([t,items])=><div key={t}>
        <div style={{fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',opacity:.6,marginBottom:16}}>{t}</div>
        <div style={{display:'grid',gap:10}}>{items.map(i=><a key={i} href="#" style={{color:'var(--white)',fontSize:14,opacity:.85}}>{i}</a>)}</div>
      </div>)}
    </div>
    <div style={{borderTop:'1px solid rgba(255,255,255,.15)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'20px var(--gutter)',display:'flex',justifyContent:'space-between',fontSize:12,opacity:.6}}>
        <span>© 1958–2026 Rosen S.A.</span><span>Precios en pesos chilenos, IVA incluido.</span>
      </div>
    </div>
  </footer>;
}

const Slot=({label,ratio='4 / 3',dark=false})=><div style={{aspectRatio:ratio,width:'100%',background:dark?'var(--rosen-stone)':'var(--gray-10)',display:'grid',placeItems:'center',color:dark?'var(--white)':'var(--text-muted)',fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',textAlign:'center',padding:16}}>{label}</div>;

const Section=({children,style})=><section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-9) var(--gutter)',...style}}>{children}</section>;

const SectionTitle=({over,title,action})=><div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'var(--space-6)'}}>
  <div>{over&&<div className="rosen-overline" style={{marginBottom:10}}>{over}</div>}<h3 style={{fontSize:'var(--title-3)'}}>{title}</h3></div>
  {action}
</div>;

Object.assign(window,{Header,Footer,Slot,Section,SectionTitle,Announce});
})();
