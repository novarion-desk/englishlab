/* Modalverben – Folien im neuen Stil */
(()=>{
 const {ip,bf,per,card,er,rule,tapSlide,ico,ic,patch}=UI;
 const tg=TOPICS.find(x=>x.id==='m');if(!tg)return;
 const cmp=(l1,c1,b1,l2,c2,b2)=>'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol" style="border-color:'+c1+';background:#fff"><h3><span class="bf" style="background:'+c1+'">'+l1+'</span></h3>'+b1+'</div><div class="bcol" style="border-color:'+c2+';background:#fff"><h3><span class="bf" style="background:'+c2+'">'+l2+'</span></h3>'+b2+'</div></div>';
 patch('m',{
  'Modalverben|Modal verbs':()=>SL.p(L('<b>can, could, must, should, will, would</b> sind <b>Modalverben</b>. Sie verändern sich nicht (kein -s) und danach folgt die <b>Grundform ohne to</b>.','<b>can, could, must, should, will, would</b> are <b>modal verbs</b>. They do not change (no -s) and are followed by the <b>base form without to</b>.'))
   +'<div class="wcards">'+card(ico.swim,'can','She <b>can swim</b>.')+card(ic.he,'must','He <b>must go</b>.')+card(ic.you,'could / should',"<b>Can</b> you help?<br>You <b>shouldn't</b> worry.")+'</div>'
   +SL.tip(L('Frage durch Umstellen, Verneinung mit not. Kein do!','Questions by swapping, negatives with not. No do!')),
  'can / could':()=>rule('can','#16a34a',L('Fähigkeit, Erlaubnis','ability, permission'),'I <b>can</b> play the piano. · <b>Can</b> I open the window?')
   +rule("can't",'#dc2626',L('nicht können / nicht dürfen','cannot / not allowed'),"She <b>can't</b> read yet. · You <b>can't</b> park here.")
   +rule('could','#2f5bea',L('höfliche Bitte, Fähigkeit früher','polite request, ability in the past'),'<b>Could</b> you help me? · I <b>could</b> swim when I was five.'),
  'should / shouldn\'t':()=>SL.p(L('Für einen <b>Rat</b>.','For <b>advice</b>.'))
   +rule('should','#16a34a','',"You <b>should</b> see a doctor.")+rule("shouldn't",'#dc2626','',"You <b>shouldn't</b> eat so much sugar.")+rule('Should I?','#2f5bea','',"<b>Should</b> I call him?"),
  'must / have to':()=>cmp('must','#2f5bea',ip(ic.I,L('starke Pflicht, oft vom Sprecher selbst','strong obligation, often from the speaker'))+'<div class="bper rv"><span>I <b>must</b> call my mum.</span></div>','have to','#f97316',ip(ic.they,L('Pflicht von aussen, Regel','obligation from outside, a rule'))+'<div class="bper rv"><span>We <b>have to</b> wear uniforms.</span></div>')
   +SL.p(L('Frage und Verneinung von <b>have to</b> mit do: <i>Do you have to …? – She doesn\'t have to …</i>','Questions and negatives of <b>have to</b> use do: <i>Do you have to …? – She doesn\'t have to …</i>')),
  'mustn\'t ≠ don\'t have to':()=>cmp("mustn't",'#dc2626',ip(ico.clock,L('Verbot','prohibition'))+'<div class="bper rv"><span>You <b>mustn\'t</b> smoke here.</span></div>',"don't have to",'#16a34a',ip(ico.sun,L('nicht nötig, aber erlaubt','not necessary, but allowed'))+'<div class="bper rv"><span>You <b>don\'t have to</b> come.</span></div>')
   +SL.warn(L('Das ist ein grosser Unterschied! <i>You mustn\'t go</i> = Du darfst nicht gehen. <i>You don\'t have to go</i> = Du musst nicht gehen.','This is a big difference! <i>You mustn\'t go</i> = you are not allowed. <i>You don\'t have to go</i> = it is not necessary.'))
 },()=>tapSlide(L('Übung: Modalverben','Exercise: modal verbs'),[['You look tired. You ___ go to bed early.','should',['should','must']],['Smoking is forbidden here. You ___ smoke.',"mustn't",["mustn't","don't have to"]],['Tomorrow is Sunday. We ___ get up early.',"don't have to",["mustn't","don't have to"]],['Do you ___ wear a helmet?','have to',['have to','must']],['Yesterday I ___ get up at five.','had to',['must','had to']],['___ you help me, please?','Could',['Could','Do']]],L('Wähle das passende Modalverb.','Choose the right modal verb.'),tg.name()));
})();
