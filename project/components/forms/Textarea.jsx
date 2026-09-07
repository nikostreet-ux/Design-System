import React from 'react';
export function Textarea({label,hint,rows=4,value,onChange,placeholder,disabled=false,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('label',{style:{display:'block',...style}},
    label?React.createElement('span',{style:{display:'block',fontSize:12,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:'var(--space-2)'}},label):null,
    React.createElement('textarea',{rows,value,onChange,placeholder,disabled,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),style:{width:'100%',padding:'12px 14px',font:'inherit',fontSize:15,color:'var(--text-body)',background:disabled?'var(--gray-10)':'var(--white)',border:'1px solid '+(foc?'var(--rosen-slate)':'var(--border-default)'),borderRadius:'var(--radius-sm)',outline:'none',resize:'vertical',transition:'var(--transition-base)'},...rest}),
    hint?React.createElement('span',{style:{display:'block',fontSize:12,color:'var(--text-muted)',marginTop:'var(--space-2)'}},hint):null);
}
