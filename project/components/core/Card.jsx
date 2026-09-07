import React from 'react';
export function Card({variant='flat',padding='var(--space-5)',hoverable=false,as='div',style,children,...rest}){
  const [h,setH]=React.useState(false);
  const v={
    flat:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)'},
    elevated:{background:'var(--surface-card)',border:'1px solid transparent',boxShadow:'var(--shadow-sm)'},
    subtle:{background:'var(--surface-subtle)',border:'1px solid transparent'},
    inverse:{background:'var(--surface-inverse)',border:'1px solid transparent',color:'var(--white)'}
  }[variant];
  return React.createElement(as,{style:{borderRadius:'var(--radius-md)',padding,transition:'var(--transition-base)',...v,...(hoverable&&h?{boxShadow:'var(--shadow-md)',borderColor:'transparent',transform:'translateY(-2px)'}:null),...style},onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),...rest},children);
}
