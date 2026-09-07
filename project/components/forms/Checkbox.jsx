import React from 'react';
export function Checkbox({label,checked=false,onChange,disabled=false,style,...rest}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'default':'pointer',opacity:disabled?.4:1,fontSize:15,...style}},
    React.createElement('input',{type:'checkbox',checked,onChange,disabled,style:{position:'absolute',opacity:0,width:0,height:0},...rest}),
    React.createElement('span',{style:{width:18,height:18,flex:'0 0 auto',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid '+(checked?'var(--rosen-slate)':'var(--border-default)'),background:checked?'var(--rosen-slate)':'var(--white)',borderRadius:'var(--radius-sm)',transition:'var(--transition-base)'}},
      checked?React.createElement('svg',{width:11,height:11,viewBox:'0 0 24 24',fill:'none',stroke:'#fff',strokeWidth:2.5},React.createElement('path',{d:'M20 6L9 17l-5-5'})):null),
    label?React.createElement('span',null,label):null);
}
