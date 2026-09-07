import React from 'react';
export function Radio({label,checked=false,onChange,name,value,disabled=false,style,...rest}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'default':'pointer',opacity:disabled?.4:1,fontSize:15,...style}},
    React.createElement('input',{type:'radio',name,value,checked,onChange,disabled,style:{position:'absolute',opacity:0,width:0,height:0},...rest}),
    React.createElement('span',{style:{width:18,height:18,flex:'0 0 auto',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid '+(checked?'var(--rosen-slate)':'var(--border-default)'),borderRadius:'var(--radius-pill)',transition:'var(--transition-base)'}},
      checked?React.createElement('span',{style:{width:8,height:8,borderRadius:'var(--radius-pill)',background:'var(--rosen-slate)'}}):null),
    label?React.createElement('span',null,label):null);
}
