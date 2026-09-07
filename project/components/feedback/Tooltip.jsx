import React from 'react';
export function Tooltip({content,placement='top',children,style,...rest}){
  const [on,setOn]=React.useState(false);
  const pos=placement==='top'?{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}:{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'};
  return React.createElement('span',{style:{position:'relative',display:'inline-flex',...style},onMouseEnter:()=>setOn(true),onMouseLeave:()=>setOn(false),...rest},
    children,
    on?React.createElement('span',{style:{position:'absolute',...pos,zIndex:50,whiteSpace:'nowrap',padding:'6px 10px',fontSize:12,color:'var(--white)',background:'var(--rosen-slate)',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-sm)'}},content):null);
}
