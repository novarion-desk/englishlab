/* if-Sätze, Relativsätze, indirekte Rede – eigene Szenen */
(()=>{
 const {ip,card,rule,ico,ic,patch,sv,ch}=UI;
 const part=(c,lab,body)=>'<div class="pbox rv" style="--pc:'+c+'"><em>'+lab+'</em>'+body+'</div>';
 const join=(a,b)=>'<div class="pjoin">'+a+'<span class="pplus">+</span>'+b+'</div>';
 const col=(l,c,b)=>'<div class="bcol" style="border-color:'+c+';background:#fff"><h3><span class="bf" style="background:'+c+'">'+l+'</span></h3>'+b+'</div>';
 const two=(a,b)=>'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'+a+b+'</div>';
 const S=t=>'<div class="bper rv"><span>'+t+'</span></div>';
 const chip=(t,c)=>'<span class="bf" style="background:'+c+'">'+t+'</span>';
 patch('k',{
  'Die Form|The form':()=>join(part('#2f5bea','if-clause','<b>If</b> + present simple'),part('#16a34a',L('Hauptsatz','main clause'),'<b>will</b> + base form'))
   +'<div class="exs2"><div class="exr rv" style="--ec:#2f5bea">'+chip('If it rains','#2f5bea')+' '+chip('we will stay at home','#16a34a')+'.</div><div class="exr rv" style="--ec:#16a34a">'+chip('If you study','#2f5bea')+' '+chip('you will pass the test','#16a34a')+'.</div></div>'
   +SL.warn(L('Kein <b>will</b> im if-Satz: <s>If it will rain</s> → <i>If it rains</i>.','There is no <b>will</b> in the if-clause: <s>If it will rain</s> → <i>If it rains</i>.')),
  'Reihenfolge und Komma|Word order and comma':()=>SL.p(L('Die zwei Teile können die Plätze tauschen. Steht der <b>if-Satz vorne</b>, braucht es ein <b>Komma</b>.','The two parts can swap places. When the if-clause comes <b>first</b>, use a <b>comma</b>.'))
   +'<div class="swp rv"><div class="sent">'+chip('If it rains','#2f5bea')+'<b style="color:#dc2626">,</b> '+chip('we will stay at home','#16a34a')+'</div></div><div class="swp"><div class="swa">⇅</div></div><div class="swp rv"><div class="sent">'+chip('We will stay at home','#16a34a')+' '+chip('if it rains','#2f5bea')+'</div></div>'
   +SL.tip(L('Hinten kein Komma.','No comma when the if-clause is second.')),
  'if / when|if / when':()=>two(col('if','#f97316',ip(ico.cloud,L('vielleicht, nicht sicher','maybe, not sure'))+S('<b>If</b> it rains, we will stay at home.')),col('when','#2f5bea',ip(ico.calendar,L('sicher, es passiert','sure, it will happen'))+S('<b>When</b> I am 14, I will have a party.')))
 });
 patch('c2',{
  'Bildung|How to form it':()=>join(part('#f97316','if-clause','<b>If</b> + past simple'),part('#7c3aed',L('Hauptsatz','main clause'),'<b>would</b> + base form'))
   +'<div class="exs2"><div class="exr rv" style="--ec:#f97316">'+chip('If I had a million francs','#f97316')+' '+chip('I would travel the world','#7c3aed')+'.</div><div class="exr rv" style="--ec:#7c3aed">'+chip('I would help you','#7c3aed')+' '+chip('if I knew the answer','#f97316')+'.</div></div>'
   +SL.tip(L('Der if-Satz kann auch hinten stehen. Dann kein Komma.','The if-clause can also come second. Then no comma.'))
 });
 patch('r',{
  'who, which, that, whose|who, which, that, whose':()=>rule('who','#2f5bea',L('Personen','people'),'A teacher is a person <b>who</b> works at a school.')
   +rule('which','#16a34a',L('Dinge, Tiere','things, animals'),'This is the phone <b>which</b> I bought.')
   +rule('that','#f97316',L('Personen und Dinge','people and things'),'The man <b>that</b> is standing there… · The film <b>that</b> we saw…')
   +rule('whose','#7c3aed',L('Besitz','ownership'),'The woman <b>whose</b> car was stolen…')
   +SL.warn(L('Nie <b>what</b>: <s>the book what I read</s>.','Never <b>what</b>: <s>the book what I read</s>.')),
  'Mit oder ohne Komma|With or without commas':()=>two(col(L('ohne Komma','no commas'),'#2f5bea',ip(ic.she,L('wichtige Information (der Satz braucht sie), that möglich','essential information (the sentence needs it), that is possible'))+S('The girl <b>who</b> lives next door is my friend.')),col(L('mit Kommas','with commas'),'#16a34a',ip(ic.he,L('Zusatzinformation, nur who / which','extra information, only who / which'))+S('Anna<b>,</b> who is my best friend<b>,</b> lives in Bern.')+S('My bike<b>,</b> which is red<b>,</b> is new.')))
 });
 patch('ir',{
  'say oder tell?|say or tell?':()=>two(col('say','#2f5bea',S('He <b>said</b> that he was hungry.')+S('She <b>said to me</b> that …')),col('tell + '+L('Person','person'),'#16a34a',S('He <b>told me</b> that he was hungry.')+S('She <b>told us</b> a story.')))
   +SL.warn(L('Nicht: <s>He said me</s> / <s>He told that</s>.','Not: <s>He said me</s> / <s>He told that</s>.'))
 });
})();
