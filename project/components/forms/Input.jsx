import React from 'react';
export function Input({label,hint,error,type='text',value,onChange,placeholder,disabled=false,iconRight,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  const border=error?'var(--rosen-red)':foc?'var(--rosen-slate)':'var(--border-default)';
  return React.createElement('label',{style:{display:'block',...style}},
    label?React.createElement('span',{style:{display:'block',fontSize:12,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:'var(--space-2)'}},label):null,
    React.createElement('span',{style:{display:'flex',alignItems:'center',gap:'var(--space-2)',height:46,padding:'0 14px',background:disabled?'var(--gray-10)':'var(--white)',border:'1px solid '+border,borderRadius:'var(--radius-sm)',transition:'var(--transition-base)'}},
      React.createElement('input',{type,value,onChange,placeholder,disabled,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),style:{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',font:'inherit',fontSize:15,color:'var(--text-body)'},...rest}),
      iconRight),
    error?React.createElement('span',{style:{display:'block',fontSize:12,color:'var(--rosen-red)',marginTop:'var(--space-2)'}},error)
      :hint?React.createElement('span',{style:{display:'block',fontSize:12,color:'var(--text-muted)',marginTop:'var(--space-2)'}},hint):null);
}
