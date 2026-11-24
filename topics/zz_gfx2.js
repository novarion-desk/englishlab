/* Zeichnungen für Folien (eigene SVG-Grafiken): Präpositionen und Vergleichsformen */
(()=>{
 const K='#2f5bea',R='#e11d48',G='#94a3b8',F='#dbe7ff';
 const wrap=(w,h,inner,cap)=>'<figure class="gfx"><svg viewBox="0 0 '+w+' '+h+'" width="100%" role="img" aria-label="'+(cap||'')+'" font-family="system-ui,sans-serif" font-size="15" text-anchor="middle">'+inner+'</svg></figure>';
 const box=(x,y,w,h,f)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="'+(f||F)+'" stroke="'+K+'" stroke-width="2.5"/>';
 const ball=(x,y)=>'<circle cx="'+x+'" cy="'+y+'" r="11" fill="'+R+'"/>';
 const lab=(x,t)=>'<text x="'+x+'" y="128" fill="currentColor" font-weight="600">'+t+'</text>';
 const floor=x=>'<line x1="'+(x-62)+'" y1="100" x2="'+(x+62)+'" y2="100" stroke="'+G+'" stroke-width="2.5"/>';
 const place=[
  x=>box(x-30,50,60,50)+ball(x,86)+'<line x1="'+(x-30)+'" y1="50" x2="'+(x+30)+'" y2="50" stroke="'+F+'" stroke-width="4"/>'+lab(x,'in'),
  x=>box(x-30,55,60,45)+ball(x,43)+lab(x,'on'),
  x=>'<rect x="'+(x-40)+'" y="40" width="80" height="10" fill="'+F+'" stroke="'+K+'" stroke-width="2.5"/><line x1="'+(x-34)+'" y1="50" x2="'+(x-34)+'" y2="100" stroke="'+K+'" stroke-width="2.5"/><line x1="'+(x+34)+'" y1="50" x2="'+(x+34)+'" y2="100" stroke="'+K+'" stroke-width="2.5"/>'+ball(x,87)+lab(x,'under'),
  x=>box(x-30,38,60,50)+ball(x+10,93)+lab(x,'in front of'),
  x=>ball(x+26,78)+box(x-30,40,60,60)+lab(x,'behind'),
  x=>box(x-50,55,45,45)+ball(x+30,89)+lab(x,'next to'),
  x=>box(x-55,55,35,45)+box(x+20,55,35,45)+ball(x,89)+lab(x,'between'),
  x=>box(x-60,55,35,45)+'<line x1="'+(x-10)+'" y1="62" x2="'+(x-10)+'" y2="100" stroke="'+G+'" stroke-width="2" stroke-dasharray="4 4"/>'+ball(x+45,89)+lab(x,'opposite')
 ];
 const arrow=(d)=>'<path d="'+d+'" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round" marker-end="url(#ah)"/>';
 const def='<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="'+R+'"/></marker></defs>';
 const lab2=(x,t)=>'<text x="'+x+'" y="128" fill="currentColor" font-weight="600">'+t+'</text>';
 const move=[
  x=>'<rect x="'+(x-14)+'" y="36" width="28" height="64" fill="'+F+'" stroke="'+K+'" stroke-width="2"/>'+arrow('M'+(x-58)+',68 L'+(x+58)+',68')+lab2(x,'across'),
  x=>'<path d="M'+(x-55)+',90 Q'+x+',60 '+(x+55)+',90" fill="none" stroke="'+K+'" stroke-width="2.5"/>'+arrow('M'+(x-50)+',62 L'+(x+50)+',62')+lab2(x,'along'),
  x=>'<rect x="'+(x-30)+'" y="40" width="60" height="55" fill="'+F+'" stroke="'+K+'" stroke-width="2.5"/>'+'<rect x="'+(x-14)+'" y="62" width="28" height="33" fill="#fff"/>'+arrow('M'+(x-55)+',78 L'+(x+55)+',78')+lab2(x,'through'),
  x=>'<rect x="'+(x-18)+'" y="40" width="36" height="50" fill="'+F+'" stroke="'+K+'" stroke-width="2.5"/>'+arrow('M'+(x-55)+',100 L'+(x+55)+',100')+lab2(x,'past'),
  x=>'<circle cx="'+x+'" cy="65" r="13" fill="'+F+'" stroke="'+K+'" stroke-width="2.5"/>'+arrow('M'+(x+30)+',65 A30,30 0 1 1 '+(x+8)+',38')+lab2(x,'round'),
  x=>'<path d="M'+(x-55)+',96 L'+(x+10)+',96 L'+(x+55)+',40" fill="none" stroke="'+K+'" stroke-width="2.5"/>'+arrow('M'+(x-30)+',84 L'+(x+30)+',50')+lab2(x,'up'),
  x=>'<path d="M'+(x-55)+',40 L'+(x-10)+',40 L'+(x+55)+',96" fill="none" stroke="'+K+'" stroke-width="2.5"/>'+arrow('M'+(x-30)+',46 L'+(x+30)+',84')+lab2(x,'down'),
  x=>box(x-18,45,50,50)+arrow('M'+(x-58)+',70 L'+(x-4)+',70')+lab2(x,'into'),
  x=>box(x-32,45,50,50)+arrow('M'+(x-4)+',70 L'+(x+55)+',70')+lab2(x,'out of'),
  x=>'<line x1="'+(x+35)+'" y1="40" x2="'+(x+35)+'" y2="100" stroke="'+K+'" stroke-width="3"/>'+arrow('M'+(x-55)+',70 L'+(x+28)+',70')+lab2(x,'to')
 ];
 SL.gfxPlace=()=>wrap(4*170,2*150,def+place.map((f,i)=>'<g transform="translate('+(i%4*170)+','+(Math.floor(i/4)*150)+')">'+floor(85)+f(85)+'</g>').join(''),'Prepositions of place');
 SL.gfxMove=()=>wrap(5*150,2*150,def+move.map((f,i)=>'<g transform="translate('+(i%5*150)+','+(Math.floor(i/5)*150)+')">'+f(75)+'</g>').join(''),'Prepositions of direction');
 const bars=(col,hs,labels,y0)=>hs.map((h,i)=>'<rect x="'+(60+i*190)+'" y="'+(y0-h)+'" width="70" height="'+h+'" rx="4" fill="'+col+'" opacity="'+(0.45+i*0.275)+'"/><text x="'+(95+i*190)+'" y="'+(y0+20)+'" fill="currentColor" font-weight="600">'+labels[i]+'</text>').join('');
 SL.gfxComp=()=>wrap(600,330,'<line x1="30" y1="130" x2="570" y2="130" stroke="'+G+'" stroke-width="2"/>'+bars(K,[40,75,110],['tall','taller','the tallest'],130)+'<line x1="30" y1="290" x2="570" y2="290" stroke="'+G+'" stroke-width="2"/>'+bars('#0d9488',[40,75,110],['expensive','more expensive','the most expensive'],290),'Comparatives and superlatives');
 const ins=(id,after,title,html)=>{const t=TOPICS.find(x=>x.id===id);if(!t)return;if(t.rules){const o=t.rules;t.rules=()=>{const a=o();const i=a.findIndex(r=>String(r[0]).replace(/<[^>]+>/g,'').startsWith(after));a.splice(after===null?1:(i<0?a.length:i+1),0,[title,html()]);return a}}if(!t.slides)return;const o=t.slides;t.slides=()=>{const a=o();const i=a.findIndex(s=>String(s.t||'').replace(/<[^>]+>/g,'')===after);a.splice(after===null?1:(i<0?a.length:i+1),0,slide(title,html()));return a}};
 ins('p',L('Lage','Position'),L('Ort im Bild','Place in pictures'),()=>SL.gfxPlace()+SL.tip(L('Der rote Ball zeigt, wo etwas ist.','The red ball shows where something is.')));
 ins('p',L('Bewegung','Movement'),L('Richtung im Bild','Direction in pictures'),()=>SL.gfxMove());
 ins('c',L('Kurze Adjektive','Short adjectives'),L('Vergleichen im Bild','Comparing in pictures'),()=>SL.gfxComp()+SL.tip(L('Kurze Adjektive: <b>-er / -est</b>. Lange Adjektive: <b>more / most</b>.','Short adjectives: <b>-er / -est</b>. Long adjectives: <b>more / most</b>.')));

 const chip=(x,y,w,t,c,tc)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="34" rx="17" fill="'+c+'"/><text x="'+(x+w/2)+'" y="'+(y+22)+'" fill="'+(tc||'#fff')+'" font-weight="600">'+t+'</text>';
 const bub=(x,y,w,t)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="40" rx="12" fill="#fff" stroke="'+K+'" stroke-width="2.5"/><text x="'+(x+w/2)+'" y="'+(y+26)+'" fill="#1e293b">'+t+'</text>';
 const ar=(x1,y1,x2,y2)=>'<path d="M'+x1+','+y1+' L'+x2+','+y2+'" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round" marker-end="url(#ah)"/>';
 SL.gfxRep=()=>wrap(640,300,def+[['I am tired.','She said she was tired.','present → past'],['I saw it.','He said he had seen it.','past → past perfect'],['I will come.','They said they would come.','will → would']].map((r,i)=>bub(10,10+i*95,200,r[0])+ar(215,30+i*95,300,30+i*95)+bub(305,10+i*95,325,r[1])+'<text x="260" y="'+(62+i*95)+'" fill="'+R+'" font-size="13" font-weight="600">'+r[2]+'</text>').join(''),'Reported speech');
 SL.gfxCond=()=>wrap(640,230,def+[['☔ If it rains,','🏠 we will stay at home.','first conditional: possible','#e0ecff'],['💭 If I were rich,','⛵ I would buy a boat.','second conditional: only imagined','#fef3c7']].map((r,i)=>'<rect x="10" y="'+(10+i*110)+'" width="250" height="60" rx="12" fill="'+r[3]+'" stroke="'+K+'" stroke-width="2.5"/><text x="135" y="'+(47+i*110)+'" fill="#1e293b" font-size="17">'+r[0]+'</text>'+ar(268,40+i*110,345,40+i*110)+'<rect x="352" y="'+(10+i*110)+'" width="278" height="60" rx="12" fill="#fff" stroke="'+K+'" stroke-width="2.5"/><text x="491" y="'+(47+i*110)+'" fill="#1e293b" font-size="17">'+r[1]+'</text><text x="320" y="'+(96+i*110)+'" fill="currentColor" font-size="13" font-weight="600">'+r[2]+'</text>').join(''),'Conditionals');
 SL.gfxCount=()=>wrap(640,230,'<rect x="10" y="10" width="300" height="170" rx="14" fill="#fff" stroke="'+K+'" stroke-width="2.5"/><text x="160" y="80" font-size="40">🍎🍎🍎🍎</text><text x="160" y="118" fill="currentColor" font-weight="600">apples · bottles · friends</text><text x="160" y="146" fill="currentColor">countable: one, two, three …</text><text x="160" y="168" fill="'+K+'" font-weight="600">many · a few · how many?</text><rect x="330" y="10" width="300" height="170" rx="14" fill="#fff" stroke="#0d9488" stroke-width="2.5"/><text x="480" y="80" font-size="40">💧🥛🍚</text><text x="480" y="118" fill="currentColor" font-weight="600">water · milk · rice</text><text x="480" y="146" fill="currentColor">uncountable: no plural</text><text x="480" y="168" fill="#0d9488" font-weight="600">much · a little · how much?</text><text x="320" y="212" fill="currentColor">a lot of / some / any: for both</text>','Countable and uncountable');
 SL.gfxPass=()=>wrap(640,210,'<text x="10" y="28" fill="currentColor" font-weight="600" text-anchor="start">Active</text>'+chip(10,40,120,'Anna',K)+chip(140,40,140,'wrote','#64748b')+chip(290,40,170,'the email',R)+'<text x="10" y="118" fill="currentColor" font-weight="600" text-anchor="start">Passive</text>'+chip(10,130,170,'The email',R)+chip(190,130,180,'was written','#64748b')+chip(380,130,150,'by Anna',K)+'<text x="560" y="64" font-size="30">✉️</text>','Active and passive');
 const light=(y,c,t,d)=>'<circle cx="60" cy="'+y+'" r="22" fill="'+c+'"/><text x="110" y="'+(y-2)+'" text-anchor="start" fill="currentColor" font-weight="600" font-size="17">'+t+'</text><text x="110" y="'+(y+18)+'" text-anchor="start" fill="currentColor" font-size="14">'+d+'</text>';
 SL.gfxModal=()=>wrap(640,310,'<rect x="25" y="8" width="70" height="294" rx="20" fill="#1e293b"/>'+[['#22c55e','can · may','allowed, possible'],['#facc15','should · ought to','good advice'],['#fb923c','must · have to','necessary'],['#ef4444','mustn\'t','forbidden']].map((r,i)=>light(50+i*72,r[0],r[1],r[2])).join('').replace(/cx="60"/g,'cx="60"'),'Modal verbs traffic light');
 SL.gfxQuant=()=>wrap(640,200,'<rect x="20" y="60" width="600" height="14" rx="7" fill="'+K+'" opacity="0.25"/>'+[['no',0,'0'],['few',1,'●'],['a few',2,'●●'],['some',3,'●●●'],['many / a lot of',4,'●●●●●●●'],['all',5,'●●●●●●●●●●']].map((r,i)=>'<circle cx="'+(60+i*108)+'" cy="67" r="9" fill="'+K+'"/><text x="'+(60+i*108)+'" y="110" fill="currentColor" font-weight="600" font-size="14">'+r[0]+'</text><text x="'+(60+i*108)+'" y="140" fill="'+R+'" font-size="12">'+r[2]+'</text>').join('')+'<text x="320" y="185" fill="currentColor" font-size="14">'+L('few = fast keine · a few = ein paar','few = almost none · a few = some')+'</text>','Quantifiers');
 ins('ir',null,L('Rückschritt im Bild','Step back in pictures'),()=>SL.gfxRep());
 ins('k',null,L('Wenn … dann im Bild','If … then in pictures'),()=>SL.gfxCond());
 ins('c2',null,L('Wenn … dann im Bild','If … then in pictures'),()=>SL.gfxCond());
 ins('n',null,L('Zählbar oder nicht im Bild','Countable or not in pictures'),()=>SL.gfxCount()+SL.gfxQuant());
 ins('pv',null,L('Aktiv und Passiv im Bild','Active and passive in pictures'),()=>SL.gfxPass());
 ins('m',null,L('Modalverben: Ampel','Modal verbs: traffic light'),()=>SL.gfxModal());
 const EMO=[[/giraffe/i,'🦒'],[/\bpizza\b/i,'🍕'],[/\bfootball|soccer|goal\b/i,'⚽'],[/\bguitar\b/i,'🎸'],[/\bpiano\b/i,'🎹'],[/\bswim|\bpool\b/i,'🏊'],[/\brain(s|ing|ed)?\b/i,'🌧️'],[/\bsnow\b/i,'❄️'],[/\bdogs?\b/i,'🐶'],[/\bcats?\b/i,'🐱'],[/\bhorses?\b/i,'🐴'],[/\bphone\b/i,'📱'],[/\bfilm|movie\b/i,'🎬'],[/\bmusic|song\b/i,'🎵'],[/\btea\b|\bcoffee\b/i,'☕'],[/\bice cream\b/i,'🍦'],[/\bbus\b/i,'🚌'],[/\btrain\b/i,'🚆'],[/\bbook\b/i,'📖'],[/\bbirthday|cake\b/i,'🎂'],[/\bghost\b/i,'👻'],[/\bmoney\b/i,'💰'],[/\bbike\b/i,'🚲'],[/\bcar\b/i,'🚗'],[/\bhungry\b/i,'🍽️'],[/\btired|asleep|sleep/i,'😴'],[/\bparty\b/i,'🎉'],[/\bcamera\b/i,'📷'],[/\bkeys?\b/i,'🔑'],[/\bumbrella\b/i,'☂️'],[/\bhomework\b/i,'📚'],[/\bsunny\b/i,'☀️']];
 const ex0=SL.ex;SL.ex=a=>ex0(a.map(x=>{const t=String(x).replace(/<[^>]+>/g,'');if(/[\u{1F300}-\u{1FAFF}☀-➿]/u.test(t))return x;for(const [re,e] of EMO)if(re.test(t))return e+' '+x;return x}));
})();
