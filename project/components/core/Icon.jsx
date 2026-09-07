import React from 'react';
const CDN='https://unpkg.com/lucide-static@0.544.0/icons/';
const cache={};
export function Icon({name,size=20,strokeWidth=1.5,color='currentColor',style,...rest}){
  const [svg,setSvg]=React.useState(cache[name]||null);
  React.useEffect(()=>{
    if(cache[name]){setSvg(cache[name]);return}
    let live=true;
    fetch(CDN+name+'.svg').then(r=>r.ok?r.text():'').then(t=>{cache[name]=t;if(live)setSvg(t)}).catch(()=>{});
    return()=>{live=false}
  },[name]);
  const inner=svg?svg.replace(/width="24"/,'width="'+size+'"').replace(/height="24"/,'height="'+size+'"').replace(/stroke-width="2"/,'stroke-width="'+strokeWidth+'"'):'';
  return React.createElement('span',{'aria-hidden':true,style:{display:'inline-flex',width:size,height:size,color,flex:'0 0 auto',...style},dangerouslySetInnerHTML:{__html:inner},...rest});
}
