(function(){
const { Logo, Button, Input, Checkbox } = window.RosenDesignSystem_99eac3;

function Login({onEnter}){
  return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:'100vh'}}>
    <div style={{background:'var(--rosen-slate)',color:'var(--white)',padding:'var(--space-8)',display:'grid',alignContent:'space-between'}}>
      <Logo tone="white" width={128} base="../.."/>
      <div>
        <div style={{fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',opacity:.6,marginBottom:20}}>Portal mayorista</div>
        <h2 style={{color:'var(--white)',fontSize:'var(--title-2)',marginBottom:20}}>Tu cuenta<br/>mayorista Rosen</h2>
        <p style={{fontSize:17,opacity:.75,maxWidth:400}}>Lista de precios vigente, stock por planta y seguimiento de pedidos en un solo lugar.</p>
      </div>
      <div style={{fontSize:12,opacity:.5}}>Chile · Perú · Argentina · Bolivia · Colombia</div>
    </div>
    <div style={{display:'grid',placeItems:'center',padding:'var(--space-8)'}}>
      <form onSubmit={e=>{e.preventDefault();onEnter()}} style={{width:'100%',maxWidth:380,display:'grid',gap:'var(--space-4)'}}>
        <h4 style={{marginBottom:8}}>Ingresa a tu cuenta</h4>
        <Input label="RUT de empresa" placeholder="76.543.210-K"/>
        <Input label="Contraseña" type="password" placeholder="••••••••"/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Checkbox label="Recordarme"/>
          <Button variant="link" style={{fontSize:13}}>Olvidé mi contraseña</Button>
        </div>
        <Button size="lg" full>Ingresar</Button>
        <div style={{fontSize:13,color:'var(--text-muted)',textAlign:'center'}}>¿Aún no eres cliente mayorista? <a href="#">Solicita tu cuenta</a></div>
      </form>
    </div>
  </div>;
}
Object.assign(window,{Login});
})();
