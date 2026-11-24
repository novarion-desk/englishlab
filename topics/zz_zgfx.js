/* Grafik-Folien: Zeitstrahl und Bausteine für die Zeitformen */
(()=>{
 const pct=x=>x+'%';
 SL.tl=(o)=>{
  let h='<div class="tlx" style="--c:'+(o.c||'#2f5bea')+'"><div class="ln"></div><div class="ar"></div><div class="nl">'+L('JETZT','NOW')+'</div><div class="now"></div>';
  (o.spans||[]).forEach(s=>{h+='<div class="sp" style="left:'+pct(s[0])+';width:'+pct(s[1]-s[0])+(s[3]?';background:'+s[3]:'')+'">'+(s[2]||'')+'</div>'});
  (o.marks||[]).forEach(m=>{h+='<div class="mk" style="left:'+pct(m[0])+(m[2]?';background:'+m[2]+';box-shadow:0 0 0 2px '+m[2]:'')+'"></div>'+(m[1]?'<div class="ml" style="left:'+pct(m[0])+';top:'+(m[3]||115)+'px">'+m[1]+'</div>':'')});
  h+='<div class="pl" style="left:2%">◀ '+L('Vergangenheit','Past')+'</div><div class="pl" style="right:2%">'+L('Zukunft','Future')+' ▶</div></div>';
  return h;
 };
 SL.fm=(parts)=>'<div class="fm">'+parts.map(p=>p==='+'?'<i>+</i>':'<span class="fp '+p[0]+'">'+p[1]+(p[2]?'<small>'+p[2]+'</small>':'')+'</span>').join('')+'</div>';
 SL.bub=a=>'<div class="bub">'+a.map(x=>'<div>'+x+'</div>').join('')+'</div>';
 const G={
  zbe:()=>[slide(L('Bausteine: be','Building blocks: be'),
    SL.fm([['a','I','→'],['b','am']])+SL.fm([['a','he / she / it'],['b','is']])+SL.fm([['a','you / we / they'],['b','are']])+SL.bub(['I am Tom.','She is 14.','We are friends.'])+SL.tip(L('Verneinung: be + <b>not</b>. Frage: be <b>vor</b> das Subjekt.','Negative: be + <b>not</b>. Question: be <b>before</b> the subject.')),
    L('Alle drei Formen farbig zeigen: Subjekt (blau), be (orange).','Show all three forms in colour: subject (blue), be (orange).'))],
  zps:()=>[slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#2f5bea',marks:[[10,'',],[22,''],[34,''],[46,''],[58,''],[70,''],[82,''],[94,'']]})+SL.p('<center>'+L('Immer wieder, jeden Tag, jede Woche: <b>Gewohnheit</b>','Again and again, every day, every week: a <b>habit</b>')+'</center>')+SL.fm([['a','I / you / we / they'],['b',L('Grundform','base form')]])+SL.fm([['a','he / she / it'],['b',L('Grundform','base form')],['c','+ s']]),
    L('Zeitstrahl: viele Punkte = Wiederholung.','Timeline: many dots = repetition.'))],
  zpc:()=>[slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#e8590c',spans:[[38,62,L('gerade','right now'),'#e8590c']]})+SL.fm([['a','Subject'],'+',['b','am / is / are'],'+',['c','Verb-ing']])+SL.bub(['I am working.','She is not sleeping.','Are they playing?']),
    L('Der Balken liegt um «jetzt»: die Handlung läuft gerade.','The bar sits around “now”: the action is in progress.'))],
  zpf:()=>[slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#7c3aed',spans:[[14,50,L('bis jetzt','up to now'),'#7c3aed']],marks:[[14,'',]]})+SL.p('<center>'+L('Etwas ist <b>früher</b> passiert und hat mit <b>jetzt</b> zu tun.','Something happened <b>earlier</b> and matters <b>now</b>.')+'</center>')+SL.fm([['a','Subject'],'+',['b','have / has'],'+',['c',L('3. Form','past participle'),'seen · been · done']]),
    L('Typische Signalwörter: ever, never, already, yet, just, for, since.','Typical signal words: ever, never, already, yet, just, for, since.'))],
  zpas:()=>[slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#dc2626',marks:[[22,'yesterday · last week · in 2020',]]})+SL.p('<center>'+L('Abgeschlossen in der <b>Vergangenheit</b> – mit Zeitangabe.','Finished in the <b>past</b> – with a time expression.')+'</center>')+SL.fm([['a','Subject'],'+',['b',L('Verb + -ed','verb + -ed'),L('regelmässig','regular')]])+SL.fm([['a','Subject'],'+',['d',L('2. Form','2nd form'),L('unregelmässig: went, saw','irregular: went, saw')]]),
    L('Frage und Verneinung: did / didn\'t + Grundform.','Question and negative: did / didn\'t + base form.'))],
  zpast:()=>[slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#0891b2',spans:[[10,40,L('was playing','was playing'),'#0891b2']],marks:[[30,'when …',"#dc2626",150]]})+SL.fm([['a','Subject'],'+',['b','was / were'],'+',['c','Verb-ing']])+SL.bub(['I was reading when the phone rang.','While we were playing, it started to rain.']),
    L('Der Balken ist die längere Handlung, der Punkt unterbricht sie.','The bar is the longer action, the dot interrupts it.'))],
  zfut:()=>[slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#16a34a',marks:[[78,'tomorrow · next week',]]})+SL.cols(
     '<b>will</b>'+SL.fm([['a','Subject'],'+',['b','will'],'+',['c',L('Grundform','base form')]])+'<small>'+L('spontan, Vorhersage, Versprechen','spontaneous, prediction, promise')+'</small>',
     '<b>going to</b>'+SL.fm([['a','Subject'],'+',['b','am / is / are going to'],'+',['c',L('Grundform','base form')]])+'<small>'+L('Plan, Anzeichen','plan, evidence')+'</small>'),
    L('will = im Moment entschieden. going to = schon geplant.','will = decided now. going to = already planned.'))]
 };
 for(const id in G){const t=TOPICS.find(x=>x.id===id);if(!t)continue;const o=t.slides;t.slides=()=>{const a=o();a.splice(1,0,...G[id]());return a}}
})();
