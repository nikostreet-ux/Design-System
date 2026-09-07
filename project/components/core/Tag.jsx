import React from 'react';
export function Tag({selected=false,removable=false,onRemove,onClick,style,children,...rest}){
  const [h,setH]=React.useState(false);
  return React.createElement('span',{onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',height:32,padding:'0 14px',fontSize:13,borderRadius:'var(--radius-pill)',cursor:onClick?'pointer':'default',transition:'var(--transition-base)',border:'1px solid '+(selected?'var(--rosen-slate)':'var(--border-default)'),background:selected?'var(--rosen-slate)':'transparent',color:selected?'var(--white)':'var(--text-body)',borderColor:!selected&&h?'var(--rosen-slate)':undefined,...style},...rest},
    children,
    removable?React.createElement('span',{onClick:e=>{e.stopPropagation();onRemove&&onRemove()},style:{cursor:'pointer',opacity:.7,fontSize:15,lineHeight:1}},'\u00d7'):null);
}
