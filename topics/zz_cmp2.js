/* Vergleichen – eigene Szenen */
(()=>{
 const {rule,patch,ic,sv,ch}=UI;const {BL,GR,OR}=ART;
 const fig=(x,s,o)=>'<g transform="translate(0 '+(116*(1-s)).toFixed(1)+')">'+ch(Object.assign({x:x,s:s},o))+'</g>';
 const lab=(x,t,c)=>'<text x="'+x+'" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="'+c+'" font-family="system-ui,sans-serif">'+t+'</text>';
 const scene=sv('0 0 360 158',
  fig(70,.7,{top:BL,hair:'short',hc:'#5b3a1e'})+fig(180,.85,{top:GR,hair:'short',hc:'#2b1d12'})+fig(290,1,{top:OR,hair:'pony',hc:'#8a4b1c',dress:true})
  +lab(70,'tall','#2f5bea')+lab(180,'taller','#16a34a')+lab(290,'the tallest','#f97316'));
 patch('c',{
  'Vergleichen|Comparing':()=>SL.p(L('Mit dem <b>Comparative</b> vergleicht man zwei Dinge, mit dem <b>Superlative</b> hebt man eins aus mehreren hervor.','The <b>comparative</b> compares two things, the <b>superlative</b> picks out one from several.'))
   +'<div class="negfig rv" style="margin:4px 0">'+scene.replace('width="360" height="158"','style="width:100%;max-width:520px;height:auto"')+'</div>'
   +SL.ex(['A giraffe is <b>taller than</b> a horse.','The giraffe is <b>the tallest</b> land animal.']),
  'than / the / as … as':()=>rule('than','#2f5bea',L('Comparative → <b>than</b>','comparative → <b>than</b>'),'She is older <b>than</b> me.')
   +rule('the','#16a34a',L('Superlative → <b>the</b> + in / of','superlative → <b>the</b> + in / of'),'He is <b>the</b> oldest <b>in</b> the class.')
   +rule('as…as','#f97316',L('gleich → <b>as … as</b>','equal → <b>as … as</b>'),'He is <b>as</b> tall <b>as</b> me.')
   +rule('not as','#dc2626',L('nicht gleich → <b>not as … as</b>','not equal → <b>not as … as</b>'),"It isn't <b>as</b> expensive <b>as</b> that one.")
 });
})();
