import React from 'react';
const SRC={dark:'assets/logo-rosen-slate.png',white:'assets/logo-rosen-white.png'};
export function Logo({tone='dark',width=140,base='',style,...rest}){
  return React.createElement('img',{src:(base?base.replace(/\/$/,'')+'/':'')+SRC[tone],alt:'rosen',style:{width,height:'auto',...style},...rest});
}
