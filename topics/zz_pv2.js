/* Passiv – eigene Szenen */
(()=>{
 const {ip,per,card,rule,ico,ic,patch,bf}=UI;
 const col=(l,c,b)=>'<div class="bcol" style="border-color:'+c+';background:#fff"><h3><span class="bf" style="background:'+c+'">'+l+'</span></h3>'+b+'</div>';
 const two=(a,b)=>'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'+a+b+'</div>';
 const S=t=>'<div class="bper rv"><span>'+t+'</span></div>';
 patch('pv',{
  "Aktiv und Passiv|Active and passive":()=>two(col(L('Aktiv','Active'),'#2f5bea',ip(ic.they,L('Der Täter steht vorne.','The doer comes first.'))+S('Millions of people <b>speak</b> English.')+S('Someone <b>stole</b> my phone.')),col(L('Passiv','Passive'),'#16a34a',ip(ico.globe,L('Das Objekt steht vorne.','The object comes first.'))+S('English <b>is spoken</b> by millions of people.')+S('My phone <b>was stolen</b>.')))
   +SL.tip(L('Das <b>Objekt</b> des Aktivsatzes wird zum <b>Subjekt</b> des Passivsatzes.','The <b>object</b> of the active sentence becomes the <b>subject</b> of the passive sentence.')),
  "Wer hat es getan? by …|Who did it? by …":()=>SL.p(L('Mit <b>by</b> nennt man den Täter, aber nur wenn es wichtig ist.','Use <b>by</b> to name the doer, but only if it matters.'))
   +'<div class="wcards" style="grid-template-columns:repeat(2,minmax(0,1fr))">'+card(ico.frame,L('Täter wichtig','doer matters'),'The picture was painted <b>by</b> a famous artist.')+card(ico.phone,L('Täter unwichtig','doer not important'),'My phone was stolen.<br><small>'+L('Wer? Unwichtig / unbekannt.','Who? Unimportant / unknown.')+'</small>')+'</div>'
 });
})();
