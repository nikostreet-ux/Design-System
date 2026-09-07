import React from 'react';
export function Select({label,options=[],value,onChange,disabled=false,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('label',{style:{display:'block',...style}},
    label?React.createElement('span',{style:{display:'block',fontSize:12,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:'var(--space-2)'}},label):null,
    React.createElement('span',{style:{position:'relative',display:'block'}},
      React.createElement('select',{value,onChange,disabled,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),style:{width:'100%',height:46,padding:'0 40px 0 14px',font:'inherit',fontSize:15,fontWeight:'var(--weight-light)',color:'var(--text-body)',background:disabled?'var(--gray-10)':'var(--white)',border:'1px solid '+(foc?'var(--rosen-slate)':'var(--border-default)'),borderRadius:'var(--radius-sm)',outline:'none',appearance:'none',cursor:'pointer',transition:'var(--transition-base)'},...rest},
        options.map(o=>React.createElement('option',{key:o.value??o,value:o.value??o},o.label??o))),
      React.createElement('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'var(--rosen-slate)',strokeWidth:1.5,style:{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',pointerEvents:'none'}},React.createElement('path',{d:'M6 9l6 6 6-6'}))));
}
