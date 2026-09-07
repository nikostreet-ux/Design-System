import React from 'react';
export function Switch({label,checked=false,onChange,disabled=false,style,...rest}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'default':'pointer',opacity:disabled?.4:1,fontSize:15,...style}},
    React.createElement('input',{type:'checkbox',checked,onChange,disabled,style:{position:'absolute',opacity:0,width:0,height:0},...rest}),
    React.createElement('span',{style:{width:40,height:22,flex:'0 0 auto',padding:2,borderRadius:'var(--radius-pill)',background:checked?'var(--rosen-slate)':'var(--gray-60)',transition:'var(--transition-base)'}},
      React.createElement('span',{style:{display:'block',width:18,height:18,borderRadius:'var(--radius-pill)',background:'var(--white)',transform:'translateX('+(checked?18:0)+'px)',transition:'transform var(--duration-base) var(--ease-standard)'}})),
    label?React.createElement('span',null,label):null);
}
