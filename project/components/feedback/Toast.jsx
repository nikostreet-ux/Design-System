import React from 'react';
const tones={info:{border:'var(--rosen-slate)'},sale:{border:'var(--rosen-red)'},neutral:{border:'var(--border-default)'}};
export function Toast({tone='info',title,description,onClose,icon,style,...rest}){
  return React.createElement('div',{style:{display:'flex',alignItems:'flex-start',gap:'var(--space-3)',minWidth:300,maxWidth:420,padding:'var(--space-4)',background:'var(--white)',border:'1px solid var(--border-subtle)',borderTop:'2px solid '+tones[tone].border,borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-md)',...style},...rest},
    icon,
    React.createElement('div',{style:{flex:1}},
      React.createElement('div',{style:{fontSize:15,color:'var(--text-heading)'}},title),
      description?React.createElement('div',{style:{fontSize:13,color:'var(--text-muted)',marginTop:2}},description):null),
    onClose?React.createElement('button',{onClick:onClose,'aria-label':'Cerrar',style:{background:'none',border:'none',cursor:'pointer',color:'var(--text-muted)',fontSize:18,lineHeight:1}},'\u00d7'):null);
}
