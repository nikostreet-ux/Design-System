import React from 'react';
export function Breadcrumb({items=[],style,...rest}){
  return React.createElement('nav',{style:{display:'flex',alignItems:'center',gap:'var(--space-2)',fontSize:13,color:'var(--text-muted)',...style},...rest},
    items.map((it,i)=>React.createElement(React.Fragment,{key:i},
      i>0?React.createElement('span',{style:{opacity:.6}},'/'):null,
      i===items.length-1
        ?React.createElement('span',{style:{color:'var(--text-body)'}},it.label??it)
        :React.createElement('a',{href:it.href??'#',style:{color:'var(--text-muted)'}},it.label??it))));
}
