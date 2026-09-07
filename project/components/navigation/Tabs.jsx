import React from 'react';
export function Tabs({tabs=[],value,onChange,style,...rest}){
  const active=value??(tabs[0]&&(tabs[0].value??tabs[0]));
  return React.createElement('div',{style:{display:'flex',gap:'var(--space-6)',borderBottom:'1px solid var(--border-subtle)',...style},...rest},
    tabs.map(t=>{const v=t.value??t,l=t.label??t,on=v===active;
      return React.createElement('button',{key:v,onClick:()=>onChange&&onChange(v),style:{background:'none',border:'none',padding:'0 0 14px',cursor:'pointer',font:'inherit',fontSize:14,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:on?'var(--rosen-slate)':'var(--text-muted)',fontWeight:on?'var(--weight-medium)':'var(--weight-light)',borderBottom:'1px solid '+(on?'var(--rosen-slate)':'transparent'),marginBottom:-1,transition:'var(--transition-base)'}},l)}));
}
