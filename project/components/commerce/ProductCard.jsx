import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { PriceTag } from './PriceTag.jsx';

export function ProductCard({name,category,price,listPrice,image,badge,imageSlot,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const off=listPrice?Math.round((1-price/listPrice)*100):0;
  return React.createElement('div',{onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{cursor:onClick?'pointer':'default',background:'var(--white)',border:'1px solid '+(h?'var(--border-default)':'var(--border-subtle)'),borderRadius:'var(--radius-md)',overflow:'hidden',transition:'var(--transition-base)',boxShadow:h?'var(--shadow-sm)':'none',...style},...rest},
    React.createElement('div',{style:{position:'relative',aspectRatio:'4 / 3',background:'var(--gray-10)',overflow:'hidden'}},
      image?React.createElement('img',{src:image,alt:name,style:{width:'100%',height:'100%',objectFit:'cover',transform:h?'scale(1.03)':'scale(1)',transition:'transform var(--duration-slow) var(--ease-standard)'}}):imageSlot,
      (badge||off>0)?React.createElement('div',{style:{position:'absolute',top:12,left:12}},badge??React.createElement(Badge,{tone:'sale'},'-'+off+'%')):null),
    React.createElement('div',{style:{padding:'var(--space-4)'}},
      category?React.createElement('div',{style:{fontSize:11,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:6}},category):null,
      React.createElement('div',{style:{fontSize:16,fontWeight:'var(--weight-light)',color:'var(--text-heading)',lineHeight:'var(--leading-snug)',marginBottom:'var(--space-3)'}},name),
      React.createElement(PriceTag,{price,listPrice})));
}
