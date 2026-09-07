import React from 'react';
const fmt=n=>'$'+Number(n).toLocaleString('es-CL');
export function PriceTag({price,listPrice,size='md',style,...rest}){
  const s={sm:{now:16,was:12},md:{now:20,was:13},lg:{now:28,was:15}}[size];
  return React.createElement('div',{style:{display:'flex',alignItems:'baseline',gap:'var(--space-3)',...style},...rest},
    React.createElement('span',{style:{fontSize:s.now,fontWeight:'var(--weight-medium)',color:'var(--text-price)'}},fmt(price)),
    listPrice?React.createElement('span',{style:{fontSize:s.was,color:'var(--text-muted)',textDecoration:'line-through'}},fmt(listPrice)):null);
}
