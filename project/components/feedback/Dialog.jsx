import React from 'react';
export function Dialog({open=false,title,onClose,footer,width=520,children,style,...rest}){
  if(!open)return null;
  return React.createElement('div',{style:{position:'fixed',inset:0,zIndex:100,display:'grid',placeItems:'center',background:'var(--surface-overlay)',backdropFilter:'blur(2px)',padding:'var(--space-5)'},onClick:onClose},
    React.createElement('div',{onClick:e=>e.stopPropagation(),style:{width:'100%',maxWidth:width,background:'var(--white)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lg)',...style},...rest},
      React.createElement('div',{style:{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'var(--space-4)',padding:'var(--space-5) var(--space-5) 0'}},
        React.createElement('h4',{style:{margin:0,fontSize:'var(--title-4)',fontWeight:'var(--weight-light)',color:'var(--text-heading)'}},title),
        React.createElement('button',{onClick:onClose,'aria-label':'Cerrar',style:{background:'none',border:'none',cursor:'pointer',fontSize:22,lineHeight:1,color:'var(--text-muted)'}},'\u00d7')),
      React.createElement('div',{style:{padding:'var(--space-4) var(--space-5) var(--space-5)',color:'var(--text-body)'}},children),
      footer?React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',gap:'var(--space-3)',padding:'var(--space-4) var(--space-5)',borderTop:'1px solid var(--border-subtle)'}},footer):null));
}
