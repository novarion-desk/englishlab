/* Meine Liste: Wörter aus dem Wörterbuch merken (nur auf diesem Gerät) und im Vokabeltrainer abfragen */
(()=>{
const KEY='el-mylist';let A=[];
try{A=JSON.parse(localStorage.getItem(KEY))||[]}catch(e){A=[]}
if(!Array.isArray(A))A=[];
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(A))}catch(e){}};
const mk=(en,p,de)=>({id:'my.'+String(en).toLowerCase()+'.'+(p||''),y:0,u:0,l:'',en:String(en),p:p||'',de:String(de||''),ex:''});
const has=(en,p)=>{const id=mk(en,p).id;return A.some(x=>x.id===id)};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
window.MYLIST={
 all:()=>A.slice(),
 count:()=>A.length,
 has,
 toggle(en,p,de){const w=mk(en,p,de);const i=A.findIndex(x=>x.id===w.id);if(i>=0)A.splice(i,1);else A.push(w);save();return i<0},
 remove(id){A=A.filter(x=>x.id!==id);save()},
 clear(){A=[];save()},
 star(en,p,de){const on=has(en,p);return `<button class="mystar${on?' on':''}" data-my="${encodeURIComponent(JSON.stringify([en,p||'',de||'']))}" aria-label="Zu meiner Liste" title="Zu meiner Liste">${on?'★':'☆'}</button>`}
};
document.addEventListener('click',e=>{
 const b=e.target.closest('.mystar[data-my]');if(!b)return;
 e.preventDefault();e.stopPropagation();
 let a;try{a=JSON.parse(decodeURIComponent(b.dataset.my))}catch(x){return}
 const on=window.MYLIST.toggle(a[0],a[1],a[2]);
 b.textContent=on?'★':'☆';b.classList.toggle('on',on);
},true);
const st=document.createElement('style');
st.textContent='.mystar{border:0;background:none;cursor:pointer;font-size:1.25rem;line-height:1;padding:.1rem .35rem;color:#94a3b8;min-width:2.2rem;min-height:2.2rem}.mystar.on{color:#f59e0b}.mylrow{display:flex;justify-content:space-between;align-items:center;gap:.5rem;padding:.35rem 0;border-bottom:1px solid #e2e8f0}.mylrow small{color:#64748b}';
document.head.appendChild(st);
})();
