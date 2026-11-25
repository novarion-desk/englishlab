/* Verbenliste: unregelmässige Verben (base|past|participle|Deutsch|Hinweis), regelmässige (base|Deutsch) */
const VERBS_IRR=`be|was / were|been|sein|I am · you are · he is
become|became|become|werden (Zustand)|
begin|began|begun|beginnen|
bite|bit|bitten|beissen|
blow|blew|blown|blasen, wehen|
break|broke|broken|brechen, kaputt machen|
bring|brought|brought|bringen|
build|built|built|bauen|
buy|bought|bought|kaufen|
catch|caught|caught|fangen|
choose|chose|chosen|wählen|
come|came|come|kommen|
cost|cost|cost|kosten|
cut|cut|cut|schneiden|
dig|dug|dug|graben|
do|did|done|tun, machen|he does
draw|drew|drawn|zeichnen|
drink|drank|drunk|trinken|
drive|drove|driven|fahren (Auto)|
eat|ate|eaten|essen|
fall|fell|fallen|fallen|
feed|fed|fed|füttern|
feel|felt|felt|fühlen|
fight|fought|fought|kämpfen|
find|found|found|finden|
fly|flew|flown|fliegen|
forget|forgot|forgotten|vergessen|
forgive|forgave|forgiven|verzeihen|
freeze|froze|frozen|frieren, gefrieren|
get|got|got|bekommen, werden|AmE Partizip: gotten
give|gave|given|geben|
go|went|gone / been|gehen|he goes · been = hin und zurück gewesen
grow|grew|grown|wachsen, anbauen|
hang|hung|hung|hängen|
have|had|had|haben|he has
hear|heard|heard|hören|
hide|hid|hidden|verstecken|
hit|hit|hit|schlagen, treffen|
hold|held|held|halten|
hurt|hurt|hurt|wehtun, verletzen|
keep|kept|kept|behalten, halten|
know|knew|known|wissen, kennen|
lead|led|led|führen|
leave|left|left|verlassen, weggehen|
lend|lent|lent|ausleihen (verleihen)|
let|let|let|lassen, erlauben|
lie|lay|lain|liegen|lying
lose|lost|lost|verlieren|
make|made|made|machen, herstellen|
mean|meant|meant|bedeuten, meinen|
meet|met|met|treffen|
pay|paid|paid|bezahlen|
put|put|put|legen, stellen, setzen|
read|read|read|lesen|Aussprache Past/Partizip: /red/
ride|rode|ridden|reiten, (Rad) fahren|
ring|rang|rung|klingeln, anrufen|
rise|rose|risen|aufgehen, steigen|
run|ran|run|rennen, laufen|
say|said|said|sagen|he says
see|saw|seen|sehen|
sell|sold|sold|verkaufen|
send|sent|sent|senden, schicken|
set|set|set|setzen, einstellen|
shake|shook|shaken|schütteln|
shine|shone|shone|scheinen, leuchten|
shoot|shot|shot|schiessen|
show|showed|shown|zeigen|
shut|shut|shut|schliessen|
sing|sang|sung|singen|
sink|sank|sunk|sinken|
sit|sat|sat|sitzen|
sleep|slept|slept|schlafen|
speak|spoke|spoken|sprechen|
spend|spent|spent|ausgeben, verbringen|
stand|stood|stood|stehen|
steal|stole|stolen|stehlen|
swim|swam|swum|schwimmen|
take|took|taken|nehmen|
teach|taught|taught|unterrichten|
tear|tore|torn|reissen|
tell|told|told|erzählen, sagen|
think|thought|thought|denken, glauben|
throw|threw|thrown|werfen|
understand|understood|understood|verstehen|
wake|woke|woken|aufwachen, wecken|
wear|wore|worn|tragen (Kleidung)|
win|won|won|gewinnen|
write|wrote|written|schreiben|`.split('\n').map(l=>{const p=l.split('|');return {b:p[0],past:p[1],pp:p[2],de:p[3],note:p[4]||'',irr:1}});
const VERBS_REG=`agree|zustimmen
answer|antworten
arrive|ankommen
ask|fragen
believe|glauben
call|rufen, anrufen
carry|tragen
change|ändern, wechseln
clean|putzen, reinigen
close|schliessen
cook|kochen
copy|kopieren
cry|weinen
dance|tanzen
decide|entscheiden
die|sterben
enjoy|geniessen
explain|erklären
finish|beenden
follow|folgen
happen|passieren
help|helfen
hope|hoffen
invite|einladen
jump|springen
like|mögen
listen|zuhören
live|leben, wohnen
look|schauen
love|lieben
marry|heiraten
miss|vermissen, verpassen
move|bewegen, umziehen
need|brauchen
offer|anbieten
open|öffnen
paint|malen
pass|reichen, bestehen
plan|planen
play|spielen
practise|üben (AmE: practice)
pull|ziehen
push|drücken, schieben
rain|regnen
remember|sich erinnern
repeat|wiederholen
smile|lächeln
start|starten
stay|bleiben
stop|anhalten, aufhören
study|lernen, studieren
talk|sprechen, reden
travel|reisen
try|versuchen
turn|drehen, abbiegen
use|benutzen
visit|besuchen
wait|warten
walk|gehen, spazieren
want|wollen
wash|waschen
watch|anschauen
work|arbeiten
worry|sich Sorgen machen`.split('\n').map(l=>{const p=l.split('|');return {b:p[0],de:p[1],irr:0}});
const DOUBLE=new Set(['run','sit','swim','put','cut','hit','set','shut','get','begin','forget','win','let','dig','stop','plan']);
function v3(b){if(b==='be')return 'is';if(b==='have')return 'has';if(b==='go'||b==='do')return b+'es';if(/(s|x|z|ch|sh)$/.test(b))return b+'es';if(/[^aeiou]y$/.test(b))return b.slice(0,-1)+'ies';return b+'s'}
function ving(b){if(b==='travel')return 'travelling';if(b==='be')return 'being';if(b==='die')return 'dying';if(b==='lie')return 'lying';if(DOUBLE.has(b))return b+b.slice(-1)+'ing';if(/[^e]e$/.test(b)&&b!=='be')return b.slice(0,-1)+'ing';return b+'ing'}
function vreg(b){if(b==='travel')return 'travelled';if(/[^aeiou]y$/.test(b))return b.slice(0,-1)+'ied';if(/e$/.test(b))return b+'d';if(DOUBLE.has(b))return b+b.slice(-1)+'ed';return b+'ed'}
const VERBS=VERBS_IRR.concat(VERBS_REG.map(v=>Object.assign(v,{past:vreg(v.b),pp:vreg(v.b)}))).sort((a,b)=>a.b.localeCompare(b.b));
let vq='',vIrr=false,vOpen='';
function openVerbs(){modalMode='verbs';drawVerbs();modal.classList.remove('hidden');modal.scrollTop=0}
function drawVerbs(){
 const q=vq.trim().toLowerCase();
 const list=VERBS.filter(v=>(!vIrr||v.irr)&&(!q||v.b.startsWith(q)||v.de.toLowerCase().includes(q)||v.past.startsWith(q)||v.pp.startsWith(q)));
 const rows=list.map(v=>{
  const open=vOpen===v.b;
  return `<div class="vlrow ${v.irr?'virr':''} ${open?'open':''}" data-v="${v.b}"><div class="vmain"><b>${v.b}</b><span>${v.past}</span><span>${v.pp}</span><em>${v.de}</em></div>`
   +(open?`<div class="vdet"><div><small>I / you / we / they</small><b>${v.b==='be'?'am / are':v.b}</b></div><div><small>he / she / it</small><b>${v3(v.b)}</b></div><div><small>-ing</small><b>${ving(v.b)}</b></div><div><small>Past simple</small><b>${v.past}</b></div><div><small>Past participle</small><b>${v.pp}</b></div>${v.note?`<p>${v.note}</p>`:''}</div>`:'')+`</div>`}).join('');
 modalBody.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0">📋 ${L('Verben','Verbs')}</h2><button class="btn-link" id="mClose">✕</button></div>
  <input class="search" id="vq" type="search" placeholder="${L('Verb oder deutsches Wort suchen …','Search a verb or German word …')}" value="${esc(vq)}" autocomplete="off" style="margin:10px 0">
  <div class="seg" style="margin-bottom:8px"><button data-vf="all" class="${vIrr?'':'on'}">${L('Alle','All')}</button><button data-vf="irr" class="${vIrr?'on':''}">${L('Unregelmässige','Irregular')}</button></div>
  <div class="vlhead"><b>${L('Grundform','Base form')}</b><span>Past simple</span><span>Past participle</span><em>${L('Deutsch','German')}</em></div>
  <div class="vlist">${rows||`<p class="muted center">${L('Nichts gefunden.','Nothing found.')}</p>`}</div>
  <p class="muted" style="font-size:13px">${L('Tippe auf ein Verb, um alle Formen zu sehen.','Tap a verb to see all forms.')}</p>`;
 modalBody.onclick=e=>{
  const f=e.target.closest('[data-vf]');if(f){vIrr=f.dataset.vf==='irr';return drawVerbs()}
  const r=e.target.closest('.vlrow');if(r){vOpen=vOpen===r.dataset.v?'':r.dataset.v;const y=modal.scrollTop;drawVerbs();modal.scrollTop=y}
 };
 const qi=document.getElementById('vq');qi.oninput=()=>{vq=qi.value;const p=qi.value.length;drawVerbs();const n=document.getElementById('vq');n.focus();n.setSelectionRange(p,p)};
}
