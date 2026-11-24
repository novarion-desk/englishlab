/* Gerund/Infinitiv, Fragen, Tags, so/neither – Farbbausteine */
(()=>{
 const {ip,rule,ico,ic,patch}=UI;
 const S=t=>'<div class="bper rv"><span>'+t+'</span></div>';
 const chip=(t,c)=>'<span class="bf" style="background:'+c+'">'+t+'</span>';
 const col=(l,c,b)=>'<div class="bcol" style="border-color:'+c+';background:#fff"><h3><span class="bf" style="background:'+c+'">'+l+'</span></h3>'+b+'</div>';
 const two=(a,b)=>'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'+a+b+'</div>';
 const B='#2f5bea',G='#16a34a',O='#f97316',R='#dc2626';
 const line=(a)=>'<div class="exr rv" style="--ec:'+a[0]+'">'+a[1]+'</div>';
 patch('g',{
  'Zwei Möglichkeiten|Two possibilities':()=>SL.p(L('Folgen zwei Verben aufeinander, hat das zweite eine besondere Form. Welche, hängt vom <b>ersten Verb</b> ab.','When two verbs follow each other, the second has a special form. Which one depends on the <b>first verb</b>.'))
   +two(col('-ing',B,ip(ico.music,L('Gerund','gerund'))+S('I love <b>going</b> to festivals.')),col('to + '+L('Grundform','base form'),G,ip(ico.house,L('Infinitiv','infinitive'))+S('She wants <b>to go</b> home.')))
   +SL.tip(L('Nach <b>can</b>, <b>must</b>, <b>should</b> … steht nur die Grundform: He can swim.','After <b>can</b>, <b>must</b>, <b>should</b> … only the base form: He can swim.'))
 });
 patch('q',{
  'Das Hilfsverb do|The auxiliary do':()=>SL.p(L('Im Present simple und Past simple braucht es <b>do</b>, <b>does</b> oder <b>did</b>. Das Hauptverb bleibt in der Grundform.','In the present simple and past simple you need <b>do</b>, <b>does</b> or <b>did</b>. The main verb stays in the base form.'))
   +line([B,chip('Does','#2f5bea')+' she '+chip('play','#16a34a')+' tennis?'])
   +line([R,'She '+chip('doesn\'t','#2f5bea')+' '+chip('play','#16a34a')+' tennis.'])
   +line([O,chip('Did','#2f5bea')+' he '+chip('see','#16a34a')+' a film?'])
   +SL.tip(L('Das <b>-s</b> und das <b>-ed</b> wandern zum Hilfsverb.','The <b>-s</b> and the <b>-ed</b> move to the auxiliary.')),
  'Kurzantworten|Short answers':()=>two(col('Yes',G,S('Yes, I <b>do</b>.')+S('Yes, she <b>does</b>.')+S('Yes, they <b>did</b>.')),col('No',R,S('No, I <b>don\'t</b>.')+S('No, she <b>doesn\'t</b>.')+S('No, they <b>didn\'t</b>.')))
   +SL.tip(L('Das Hauptverb wird nicht wiederholt.','The main verb is not repeated.'))
 });
 patch('t',{
  'Die Regel: Gegensätze|The rule: opposites':()=>two(col('+  →  –',G,S('She is from Spain, <b>isn\'t she</b>?')+S('They play, <b>don\'t they</b>?')),col('–  →  +',R,S('She isn\'t late, <b>is she</b>?')+S('You don\'t know him, <b>do you</b>?')))
   +SL.tip(L('Positiv → negativ, negativ → positiv.','Positive → negative, negative → positive.')),
  'Sonderfälle|Special cases':()=>rule('I am','#2f5bea','',"I am right, <b>aren't I</b>?")
   +rule("Let's",'#16a34a','',"Let's go, <b>shall we</b>?")
   +rule(L('Befehl','order'),'#f97316','','Open the door, <b>will you</b>?')
   +rule('there','#7c3aed','','There is a problem, <b>isn\'t there</b>?')
 });
 patch('sn',{
  'Zustimmen|Agreeing':()=>two(col('So',G,ip(ico.heart,L('Erster Satz positiv: «ich auch»','first sentence positive: “me too”'))+S('I like pizza.')+S('<b>So do I.</b>')),col('Nor / Neither',R,ip(ico.cloud,L('Erster Satz negativ: «ich auch nicht»','first sentence negative: “me neither”'))+S('I don\'t like fish.')+S('<b>Nor do I.</b>')))
   +SL.tip(L('Danach: Hilfsverb + Subjekt.','Then: auxiliary + subject.')),
  'Welches Hilfsverb?|Which auxiliary?':()=>rule('be','#2f5bea',L('gleiche Form von be','same form of be'),'She is tired. – So <b>am</b> I.')
   +rule('do','#16a34a','present / past simple','I play. – So <b>do</b> we. · We went. – So <b>did</b> they.')
   +rule('have','#f97316','present perfect',"I've finished. – So <b>have</b> I.")
   +rule(L('Modal','modal'),'#7c3aed',L('dasselbe Modalverb','same modal'),'I can swim. – So <b>can</b> I.')
 });
})();
