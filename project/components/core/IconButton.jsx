import React from 'react';
const sizes={sm:32,md:40,lg:48};
export function IconButton({variant='ghost',size='md',label,disabled=false,onClick,style,children,...rest}){
  const [h,setH]=React.useState(false);
  const d=sizes[size];
  const v={
    ghost:{background:'transparent',color:'var(--rosen-slate)',border:'1px solid transparent'},
    outline:{background:'transparent',color:'var(--rosen-slate)',border:'1px solid var(--border-default)'},
    solid:{background:'var(--rosen-slate)',color:'var(--white)',border:'1px solid var(--rosen-slate)'},
    inverse:{background:'var(--white)',color:'var(--rosen-slate)',border:'1px solid var(--white)'}
  }[variant];
  const hv={ghost:{background:'var(--rosen-slate-08)'},outline:{borderColor:'var(--rosen-slate)'},solid:{background:'var(--rosen-slate-hover)'},inverse:{background:'var(--gray-10)'}}[variant];
  return React.createElement('button',{'aria-label':label,onClick,disabled,style:{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-sm)',cursor:'pointer',transition:'var(--transition-base)',opacity:disabled?.4:1,...v,...(h&&!disabled?hv:null),...style},onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),...rest},children);
}
