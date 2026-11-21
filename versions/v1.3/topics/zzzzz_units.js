/* Zuordnung der Themen zu den Units (Stufe 2 und Stufe 3), in der Reihenfolge der Units */
const UNITS=[
 {s:2,u:0,t:['zbe']},
 {s:2,u:1,t:['zps','q','zpc','r','o']},
 {s:2,u:2,t:['c','m','p','g']},
 {s:2,u:3,t:['zpas','q','zpast','lw']},
 {s:2,u:4,t:['zfut','ad']},
 {s:2,u:5,t:['zpc','zfut','lw','n','ob']},
 {s:2,u:6,t:['zpf','ip','n','lw']},
 {s:2,u:7,t:['m','pa','r','wl']},
 {s:2,u:8,t:['g','k','t','lw']},
 {s:3,u:0,t:['zps','zpc']},
 {s:3,u:1,t:['zps','zpas','zpast']},
 {s:3,u:2,t:['g','sn','pv','lw']},
 {s:3,u:3,t:['dd','m','rf','hb','g','lw']},
 {s:3,u:4,t:['wp','zfut','k']},
 {s:3,u:5,t:['zpf','lw']},
 {s:3,u:6,t:['zpp','us','pv','lw']},
 {s:3,u:7,t:['ia','ir','iq','lw']},
 {s:3,u:8,t:['sh','c2','t']}
];
/* In welchen Stufen kommt ein Thema vor? */
const stagesOf=id=>[...new Set(UNITS.filter(x=>x.t.includes(id)).map(x=>x.s))];
const unitName=x=>x.u?('Unit '+x.u):'Welcome';
const stageName=s=>s===2?L('Jahr 1/2','Year 1/2'):L('Jahr 3','Year 3');
