/* used to, Adverbien, Ratschläge – Farbbausteine */
(()=>{
 const {ip,card,rule,ico,ic,patch}=UI;
 const S=t=>'<div class="bper rv"><span>'+t+'</span></div>';
 const chip=(t,c)=>'<span class="bf" style="background:'+c+'">'+t+'</span>';
 const col=(l,c,b)=>'<div class="bcol" style="border-color:'+c+';background:#fff"><h3><span class="bf" style="background:'+c+'">'+l+'</span></h3>'+b+'</div>';
 const two=(a,b)=>'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'+a+b+'</div>';
 patch('us',{
  "Bildung|How to form it":()=>'<div class="swp"><div class="sent">'+chip('Subject','#2f5bea')+' '+chip('used to','#f97316')+' '+chip(L('Grundform','base form'),'#16a34a')+'</div></div>'
   +rule('+','#16a34a',L('Aussage','statement'),'She <b>used to</b> have long hair.')
   +rule('–','#dc2626',L('Verneinung','negative'),"She didn't <b>use to</b> wear glasses.")
   +rule('?','#2f5bea',L('Frage','question'),'Did you <b>use to</b> live here?')
   +SL.warn(L('Mit <b>did</b>: use to (ohne -d), denn did zeigt schon die Vergangenheit.','With <b>did</b>: use to (no -d), because did already shows the past.'))
 });
 patch('ad',{
  "Adjektiv oder Adverb?|Adjective or adverb?":()=>two(col(L('Adjektiv','adjective'),'#2f5bea',ip(ic.she,L('beschreibt ein Nomen','describes a noun'))+S('She is a <b>careful</b> driver.')),col(L('Adverb','adverb'),'#16a34a',ip(ico.bus,L('beschreibt ein Verb: Wie?','describes a verb: How?'))+S('She drives <b>carefully</b>.')))
 });
 patch('hb',{
  "Bildung|How to form it":()=>rule('should','#16a34a','Subject + should + '+L('Grundform','base form'),'You <b>should</b> go.')
   +rule('ought to','#2f5bea','Subject + ought to + '+L('Grundform','base form'),'You <b>ought to</b> go.')
   +rule('had better','#f97316','Subject + had better + '+L('Grundform','base form'),'You <b>had better</b> go. · You\'d better go.')
   +SL.tip(L('had better sieht aus wie Vergangenheit, meint aber jetzt / Zukunft.','had better looks like the past, but refers to now / the future.'))
 });
})();
