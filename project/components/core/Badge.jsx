import React from 'react';
const tones={sale:{background:'var(--rosen-red)',color:'var(--white)'},slate:{background:'var(--rosen-slate)',color:'var(--white)'},neutral:{background:'var(--gray-40)',color:'var(--gray-rosen)'},outline:{background:'var(--white)',color:'var(--rosen-slate)',border:'1px solid var(--border-default)'}};
export function Badge({tone='sale',style,children,...rest}){
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',height:24,padding:'0 10px',fontSize:11,fontWeight:'var(--weight-medium)',letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',borderRadius:'var(--radius-sm)',...tones[tone],...style},...rest},children);
}
