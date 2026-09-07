import React from 'react';

const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',fontFamily:'var(--font-sans)',fontWeight:'var(--weight-medium)',letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',border:'1px solid transparent',borderRadius:'var(--radius-sm)',cursor:'pointer',textDecoration:'none',transition:'var(--transition-base)',whiteSpace:'nowrap'};
const sizes={sm:{height:36,padding:'0 16px',fontSize:11},md:{height:46,padding:'0 28px',fontSize:12},lg:{height:56,padding:'0 40px',fontSize:13}};
const variants={
  primary:{background:'var(--rosen-slate)',color:'var(--white)'},
  accent:{background:'var(--rosen-red)',color:'var(--white)'},
  secondary:{background:'transparent',color:'var(--rosen-slate)',borderColor:'var(--rosen-slate)'},
  ghost:{background:'transparent',color:'var(--rosen-slate)',borderColor:'var(--border-default)'},
  inverse:{background:'var(--white)',color:'var(--rosen-slate)'},
  link:{background:'transparent',color:'var(--rosen-slate)',padding:0,height:'auto',textTransform:'none',letterSpacing:0,borderBottom:'1px solid var(--border-default)',borderRadius:0}
};
const hovers={
  primary:{background:'var(--rosen-slate-hover)'},
  accent:{background:'var(--rosen-red-hover)'},
  secondary:{background:'var(--rosen-slate)',color:'var(--white)'},
  ghost:{borderColor:'var(--rosen-slate)'},
  inverse:{background:'var(--gray-10)'},
  link:{color:'var(--rosen-red)',borderBottomColor:'var(--rosen-red)'}
};

export function Button({variant='primary',size='md',full=false,disabled=false,iconLeft,iconRight,as='button',href,onClick,style,children,...rest}){
  const [h,setH]=React.useState(false);const[p,setP]=React.useState(false);
  const Tag=as==='a'?'a':'button';
  const s={...base,...sizes[size],...variants[variant],...(h&&!disabled?hovers[variant]:null),
    ...(variant==='link'?{padding:0,height:'auto'}:null),
    width:full?'100%':undefined,transform:p&&!disabled?'translateY(1px)':'none',
    opacity:disabled?.4:1,pointerEvents:disabled?'none':'auto',...style};
  return React.createElement(Tag,{href,onClick,disabled:Tag==='button'?disabled:undefined,style:s,
    onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setP(false)},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false),...rest},
    iconLeft,children,iconRight);
}
