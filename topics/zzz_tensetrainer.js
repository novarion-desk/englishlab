/* Tense Trainer in EnglishLab: alle Zeitformen gemischt, Zeiten wählbar */
(()=>{
 const ids=['zbe','zps','zpc','zpas','zpast','zpf','zfut'];
 const ts=ids.map(i=>TOPICS.find(t=>t.id===i)).filter(Boolean);
 const bank=[],err=[],why={_:''};
 ts.forEach(t=>{t.data.bank.forEach(b=>bank.push(Object.assign({},b,{sub:t.id,s:b.s+'  ['+t.name()+']'})));t.data.err.forEach(e=>err.push(e));why[t.id]=t._why||''});
 const names=()=>ts.map(t=>({k:t.id,n:t.name()}));
 const top=bankTopic({id:'ztt',grp:'zeiten',ord:5,ic:'⏱️',de:'Tense Trainer',en:'Tense Trainer',desc:'Alle Zeitformen mischen und gezielt üben',
  fillInstr:()=>L('Setze das Verb in der richtigen Zeit ein.','Put the verb into the correct tense.'),fillDesc:()=>L('das Verb in der richtigen Zeit schreiben','write the verb in the correct tense'),
  lvDe:'C: einfache Sätze. B: dazu Verneinung und Fragen. A: dazu schwierigere Fälle.',lvEn:'C: simple sentences. B: plus negatives and questions. A: plus harder cases.',
  subs:names,why,bank,err,
  slides:()=>[
   slide(L('Alle Zeiten auf einen Blick','All tenses at a glance'),
    SL.tl({c:'#2f5bea',spans:[[6,30,'past continuous','#0891b2'],[38,62,'present continuous','#e8590c'],[70,92,'will / going to','#16a34a']],marks:[[18,'past simple','#dc2626',150],[48,'present simple',null,150],[84,'',null]]})+SL.p('<center>'+L('Jede Zeitform hat ihren Platz auf dem Zeitstrahl.','Every tense has its place on the timeline.')+'</center>'),
    L('Zum Einstieg: Schüler ordnen Beispielsätze auf dem Zeitstrahl ein.','Warm-up: students place example sentences on the timeline.')),
   slide(L('Welche Zeit nehme ich?','Which tense do I use?'),
    SL.tbl([L('Signalwörter','Signal words'),L('Zeit','Tense')],[['always, usually, every day','Present simple'],['now, at the moment, Look!','Present continuous'],['yesterday, last week, ago','Past simple'],[L('when / while (längere Handlung)','when / while (longer action)'),'Past continuous'],['ever, never, already, yet, since, for','Present perfect'],['tomorrow, next week, I think …','will / going to']]),
    L('Danach direkt die Live-Übung: alle Zeiten gemischt.','Then straight to the live practice: all tenses mixed.'))
  ]});
 top.feat=1;
 TOPICS.push(top);
})();
