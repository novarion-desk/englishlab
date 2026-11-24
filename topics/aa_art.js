/* Gemeinsamer Zeichen-Baukasten (eigene SVG-Figuren) für alle Themen */
window.ART=(()=>{
 /* eigene Zeichnungen (SVG) statt Emojis */
 const SK='#f6c6a0',SKD='#e9ab80',INK='#1f2937',BL='#2f5bea',GR='#16a34a',OR='#f97316';
 const sv=(vb,inner)=>{const q=vb.split(' ');return '<svg viewBox="'+vb+'" width="'+q[2]+'" height="'+q[3]+'" role="img" aria-hidden="true">'+inner+'</svg>'};
 const ch=o=>{
  o=Object.assign({x:0,s:1,top:BL,pants:'#334155',hair:'short',hc:'#5b3a1e',skin:SK,dress:false,pose:'stand',face:'smile',tag:'',item:''},o);
  const S=o.skin,T=o.top,P=o.pants,H=o.hc;let g='';
  g+='<ellipse cx="0" cy="116" rx="24" ry="4.5" fill="#000" opacity=".12"/>';
  if(o.hair==='long')g+='<path d="M-19 28 Q-22 6 0 6 Q22 6 19 28 L22 66 Q0 72 -22 66Z" fill="'+H+'"/>';
  if(o.dress){
   g+='<rect x="-9" y="92" width="6.5" height="19" rx="3" fill="'+S+'"/><rect x="2.5" y="92" width="6.5" height="19" rx="3" fill="'+S+'"/>';
   g+='<ellipse cx="-6" cy="112" rx="8" ry="4" fill="#be123c"/><ellipse cx="6" cy="112" rx="8" ry="4" fill="#be123c"/>';
  }else{
   g+='<rect x="-13" y="78" width="12" height="32" rx="5" fill="'+P+'"/><rect x="1" y="78" width="12" height="32" rx="5" fill="'+P+'"/>';
   g+='<ellipse cx="-7" cy="112" rx="9" ry="4.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/><ellipse cx="7" cy="112" rx="9" ry="4.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>';
  }
  const arm={stand:[[-21,84],[21,84]],wave:[[-21,84],[27,30]],point:[[-21,84],[38,56]],self:[[-21,84],[5,64]],hold:[[-21,84],[25,66]],both:[[-26,32],[26,32]]}[o.pose];
  const hand=(x,y,dx,dy,pt)=>{const r=Math.atan2(dy,dx)*180/Math.PI-90;let h='<g transform="translate('+x+' '+y+') rotate('+r.toFixed(1)+')"><ellipse cx="0" cy="1.5" rx="4.4" ry="4.8" fill="'+S+'"/>';
   const L2=pt?[3.5,9,3.5,3]:[6.5,7.8,7.2,5.5];[-3.1,-1,1.1,3.1].forEach((fx,i)=>{h+='<rect x="'+(fx-1.05)+'" y="2" width="2.1" height="'+L2[i]+'" rx="1.05" fill="'+S+'"/>'});
   h+='<ellipse cx="-4.7" cy="1" rx="1.9" ry="3.2" fill="'+S+'" transform="rotate(-35 -4.7 1)"/></g>';return h};
  const A=(sx,sy,e)=>{const dx=e[0]-sx,dy=e[1]-sy;return '<line x1="'+sx+'" y1="'+sy+'" x2="'+e[0]+'" y2="'+e[1]+'" stroke="'+S+'" stroke-width="7.5" stroke-linecap="round"/><line x1="'+sx+'" y1="'+sy+'" x2="'+(sx+dx*.38)+'" y2="'+(sy+dy*.38)+'" stroke="'+T+'" stroke-width="9" stroke-linecap="round"/>'+hand(e[0],e[1],dx,dy,o.pose==='point'&&sx>0)};
  g+=A(-12,56,arm[0]);
  if(o.item)g+=o.item(arm[1]);
  g+=o.dress
   ?'<path d="M-14 52 Q-14 47 -8 47 L8 47 Q14 47 14 52 L15 72 L25 98 Q0 106 -25 98 L-15 72Z" fill="'+T+'"/><path d="M0 47 L14 47 Q14 47 14 52 L15 72 L25 98 Q12 102 0 103Z" fill="#000" opacity=".09"/><path d="M-15 72 Q0 77 15 72" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>'
   :'<path d="M-15 52 Q-15 47 -9 47 L9 47 Q15 47 15 52 L14 84 Q0 89 -14 84Z" fill="'+T+'"/><path d="M0 47 L9 47 Q15 47 15 52 L14 84 Q8 86 0 87Z" fill="#000" opacity=".09"/><rect x="-14.5" y="66" width="29" height="4.5" fill="#fff" opacity=".4"/>';
  g+=A(12,56,arm[1]);
  if(o.tag)g+='<rect x="-11" y="56" width="22" height="13" rx="2.5" fill="#fff" stroke="#e11d48" stroke-width="1.6"/><text x="0" y="66" text-anchor="middle" font-size="8.5" font-weight="800" fill="'+INK+'" font-family="system-ui,sans-serif">'+o.tag+'</text>';
  g+='<rect x="-4.5" y="42" width="9" height="9" rx="3" fill="'+SKD+'"/><path d="M-6 47 L0 54 L6 47Z" fill="'+S+'"/>';
  g+='<circle cx="-17" cy="31" r="3.6" fill="'+S+'"/><circle cx="17" cy="31" r="3.6" fill="'+S+'"/><circle cx="0" cy="29" r="17.5" fill="'+S+'"/>';
  if(o.hair==='pony')g+='<path d="M16 17 Q36 14 30 46 Q27 32 18 28Z" fill="'+H+'"/><circle cx="17" cy="20" r="3.2" fill="#ef4444"/>';
  if(o.hair==='curly')g+='<g fill="'+H+'"><circle cx="-13" cy="16" r="8"/><circle cx="-5" cy="9" r="8"/><circle cx="6" cy="9" r="8"/><circle cx="14" cy="16" r="8"/><circle cx="-17" cy="26" r="6"/><circle cx="17" cy="26" r="6"/></g>';
  g+='<path d="M-18 28 Q-20 7 0 7 Q20 7 18 28 Q15 19 8 17 Q-1 22 -8 17 Q-14 20 -18 28Z" fill="'+H+'"/>';
  g+='<circle cx="-10" cy="36" r="3.4" fill="#fb7185" opacity=".4"/><circle cx="10" cy="36" r="3.4" fill="#fb7185" opacity=".4"/>';
  if(o.face==='frown')g+='<ellipse cx="-6.5" cy="30" rx="2.3" ry="3" fill="'+INK+'"/><ellipse cx="6.5" cy="30" rx="2.3" ry="3" fill="'+INK+'"/><circle cx="-5.7" cy="28.8" r=".9" fill="#fff"/><circle cx="7.3" cy="28.8" r=".9" fill="#fff"/><path d="M-11 22 l7 3.2 M11 22 l-7 3.2" stroke="'+H+'" stroke-width="1.8" stroke-linecap="round"/><path d="M-5.5 42 Q0 37 5.5 42" stroke="'+INK+'" stroke-width="1.9" fill="none" stroke-linecap="round"/>';
  else if(o.face==='oops')g+='<circle cx="-6.5" cy="30" r="3.4" fill="#fff" stroke="'+INK+'" stroke-width="1.3"/><circle cx="6.5" cy="30" r="3.4" fill="#fff" stroke="'+INK+'" stroke-width="1.3"/><circle cx="-6.5" cy="30.4" r="1.5" fill="'+INK+'"/><circle cx="6.5" cy="30.4" r="1.5" fill="'+INK+'"/><path d="M-10 22 q3.5 -3 7 0 M3 22 q3.5 -3 7 0" stroke="'+H+'" stroke-width="1.6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="41" rx="3" ry="3.6" fill="#7f1d1d"/>';
  else if(o.face==='star')g+='<g fill="#ef4444"><path d="M-6.5 25.5 l1.6 3.4 3.6 .4 -2.7 2.4 .8 3.6 -3.3 -1.9 -3.3 1.9 .8 -3.6 -2.7 -2.4 3.6 -.4z"/><path d="M6.5 25.5 l1.6 3.4 3.6 .4 -2.7 2.4 .8 3.6 -3.3 -1.9 -3.3 1.9 .8 -3.6 -2.7 -2.4 3.6 -.4z"/></g><path d="M-7 37 Q0 46 7 37Z" fill="#7f1d1d"/>';
  else if(o.face==='sleep')g+='<path d="M-10 30 Q-6.5 34 -3 30 M3 30 Q6.5 34 10 30" stroke="'+INK+'" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="40" rx="3.2" ry="3.8" fill="#7f1d1d"/><path d="M-11 24 q4 -3 8 -1 M3 23 q4 -2 8 1" stroke="'+INK+'" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
  else g+='<ellipse cx="-6.5" cy="30" rx="2.3" ry="3" fill="'+INK+'"/><ellipse cx="6.5" cy="30" rx="2.3" ry="3" fill="'+INK+'"/><circle cx="-5.7" cy="28.8" r=".9" fill="#fff"/><circle cx="7.3" cy="28.8" r=".9" fill="#fff"/><path d="M-10 24 q3.5 -2.5 7 0 M3 24 q3.5 -2.5 7 0" stroke="'+H+'" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-5.5 38 Q0 43.5 5.5 38" stroke="'+INK+'" stroke-width="1.9" fill="none" stroke-linecap="round"/>';
  return '<g transform="translate('+o.x+' 0) scale('+o.s+')">'+g+'</g>'};
 const dog=x=>'<g transform="translate('+(x||0)+' 0)"><ellipse cx="0" cy="116" rx="30" ry="4.5" fill="#000" opacity=".12"/><path d="M-22 92 Q-40 80 -34 62" stroke="#c28a4a" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="-18" y="100" width="9" height="14" rx="4" fill="#c28a4a"/><rect x="6" y="100" width="9" height="14" rx="4" fill="#c28a4a"/><ellipse cx="-14" cy="114" rx="7" ry="3.6" fill="#a8702f"/><ellipse cx="11" cy="114" rx="7" ry="3.6" fill="#a8702f"/><ellipse cx="-2" cy="96" rx="25" ry="14" fill="#dca865"/><ellipse cx="-12" cy="92" rx="7" ry="5" fill="#b8793a" opacity=".6"/><rect x="2" y="80" width="14" height="8" rx="3" fill="'+GR+'"/><circle cx="20" cy="74" r="14" fill="#dca865"/><ellipse cx="10" cy="68" rx="5.5" ry="10" fill="#a8702f" transform="rotate(18 10 68)"/><ellipse cx="33" cy="81" rx="9" ry="6.5" fill="#f3d9b1"/><ellipse cx="40" cy="78" rx="3.6" ry="2.8" fill="'+INK+'"/><path d="M33 86 q3 5 7 1 l-1 7 q-3 2 -5 -1z" fill="#f472b6"/><ellipse cx="25" cy="70" rx="2.2" ry="2.8" fill="'+INK+'"/><circle cx="25.8" cy="69" r=".8" fill="#fff"/></g>';
 const bg=(c,r)=>'<circle cx="50" cy="45" r="'+(r||42)+'" fill="'+c+'"/>';
 const cardIc=(c,inner)=>sv('0 0 100 90',bg(c)+inner);
 const kidCard=(c,o,extra)=>cardIc(c,'<g transform="translate(50 3) scale(.7)">'+ch(o)+(extra||'')+'</g>');
 return {SK,SKD,INK,BL,GR,OR,sv,ch,dog,bg,cardIc,kidCard};
})();
