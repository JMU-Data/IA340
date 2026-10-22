/* IA340: fixed illustrative records, used only to visualize the lecture's syntax.
   No database access, file upload, downloaded dataset, or general query evaluator. */
'use strict';

// Shared by lecture and lab: open the picture in-page, without navigation.
(() => {
 const pictures=[...document.querySelectorAll('figure img')];
 if(!pictures.length)return;
 const dialog=document.createElement('dialog');
 dialog.id='image-lightbox';dialog.className='image-lightbox';
 dialog.setAttribute('aria-labelledby','image-lightbox-title');
 dialog.innerHTML=`<div class="image-lightbox-shell"><header class="image-lightbox-header"><strong id="image-lightbox-title">Screenshot</strong><div class="image-lightbox-tools"><button type="button" data-zoom="out" aria-label="Zoom out">−</button><span id="image-zoom-level" aria-live="polite">100%</span><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="fit">Fit</button><button type="button" data-zoom="actual">100%</button><button type="button" class="image-lightbox-close" data-zoom="close" aria-label="Close enlarged screenshot">Close ×</button></div></header><div class="image-lightbox-viewport"><img alt="" draggable="false"></div><p class="image-lightbox-caption"></p></div>`;
 document.body.appendChild(dialog);
 const image=dialog.querySelector('img'),viewport=dialog.querySelector('.image-lightbox-viewport');
 const caption=dialog.querySelector('.image-lightbox-caption'),level=dialog.querySelector('#image-zoom-level');
 let scale=1,opener=null,savedOverflow='',resizeMode='fit';
 function setScale(value){
  if(!image.naturalWidth)return;
  const previous=scale;scale=Math.min(5,Math.max(0.15,value));
  const cx=(viewport.scrollLeft+viewport.clientWidth/2)/(image.naturalWidth*previous||1);
  const cy=(viewport.scrollTop+viewport.clientHeight/2)/(image.naturalHeight*previous||1);
  image.style.width=`${Math.round(image.naturalWidth*scale)}px`;
  image.style.height=`${Math.round(image.naturalHeight*scale)}px`;
  level.textContent=`${Math.round(scale*100)}%`;
  viewport.scrollLeft=Math.max(0,cx*image.naturalWidth*scale-viewport.clientWidth/2);
  viewport.scrollTop=Math.max(0,cy*image.naturalHeight*scale-viewport.clientHeight/2);
 }
 function fit(){
  if(!dialog.open||!image.naturalWidth)return;
  setScale(Math.min((viewport.clientWidth-24)/image.naturalWidth,(viewport.clientHeight-24)/image.naturalHeight));
  viewport.scrollTop=0;viewport.scrollLeft=0;
 }
 image.addEventListener('load',()=>{if(dialog.open&&resizeMode==='fit')fit();});
 image.addEventListener('error',()=>{caption.textContent='The screenshot could not load. Close this view and check that the assets folder has synced.';});
 function openPicture(img,trigger){
  opener=trigger;resizeMode='fit';scale=1;
  image.style.removeProperty('width');image.style.removeProperty('height');
  image.alt=img.alt||'Instructor screenshot';
  const label=img.closest('figure')?.querySelector('figcaption')?.textContent||img.alt||'Screenshot';
  caption.textContent=label.replace(/\s*Click (?:the image for full size|to enlarge in this page)\.?/g,'').trim();
  savedOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
  image.src=img.currentSrc||img.src;
  dialog.showModal();
  requestAnimationFrame(fit);
  dialog.querySelector('[data-zoom="close"]').focus({preventScroll:true});
 }
 pictures.forEach(img=>{
  let trigger=img.closest('.image-zoom-trigger');
  if(!trigger){
   const oldLink=img.closest('a');
   trigger=document.createElement('button');trigger.type='button';trigger.className='image-zoom-trigger';
   if(oldLink){oldLink.replaceWith(trigger);trigger.appendChild(img);}else{img.replaceWith(trigger);trigger.appendChild(img);}
  }
  trigger.setAttribute('aria-label','Enlarge screenshot in this page');trigger.setAttribute('aria-haspopup','dialog');
  trigger.addEventListener('click',event=>{event.preventDefault();openPicture(img,trigger);});
 });
 dialog.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{
  const action=button.dataset.zoom;
  if(action==='close'){dialog.close();return;}
  resizeMode=action==='fit'?'fit':'manual';
  if(action==='fit')fit();
  else if(action==='actual')setScale(1);
  else setScale(scale*(action==='in'?1.25:0.8));
 }));
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{
  document.body.style.overflow=savedOverflow;
  if(opener?.isConnected)opener.focus({preventScroll:true});
 });
 window.addEventListener('resize',()=>{if(dialog.open&&resizeMode==='fit')fit();});
})();

(() => {
 const slides=[...document.querySelectorAll('.slide')];
 const select=document.getElementById('slide-select');
 if (slides.length && select) {
 let current=1;
 function show(n){current=Math.max(1,Math.min(slides.length,n));slides.forEach((s,i)=>s.classList.toggle('current',i+1===current));select.value=String(current);document.getElementById('slide-status').textContent=`${current} / ${slides.length}`;document.getElementById('previous').disabled=current===1;document.getElementById('next').disabled=current===slides.length;history.replaceState(null,'',`#slide-${current}`);const jumps=[...document.querySelectorAll('.chapter-nav [data-jump]')];jumps.forEach((b,i)=>b.classList.toggle('active',current>=Number(b.dataset.jump)&&(!jumps[i+1]||current<Number(jumps[i+1].dataset.jump))));}
 document.getElementById('previous').addEventListener('click',()=>show(current-1));
 document.getElementById('next').addEventListener('click',()=>show(current+1));
 select.addEventListener('change',()=>show(Number(select.value)));
 document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.jump))));
 document.addEventListener('keydown',e=>{if(document.querySelector('#image-lightbox[open]')||e.target.closest('select,input,textarea,.demo,button,a'))return;if(e.key==='ArrowRight'){e.preventDefault();show(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();show(current-1);}});
 document.getElementById('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{document.getElementById('fullscreen').textContent='Use browser fullscreen';}});
 show(Number(location.hash.match(/slide-(\d+)/)?.[1])||1);
 }
 const records=[
  {id:'T1',uid:'U1',name:'Maya',location:'Richmond',followers:600000,lang:'en',likes:8,text:'Learning AI with data',tags:['AI','Data']},
  {id:'T2',uid:'U2',name:'Noah',location:null,followers:800000,lang:'es',likes:0,text:'Aprender con datos',tags:['Data']},
  {id:'T3',uid:'U1',name:'Maya',location:'Richmond',followers:600000,lang:'en',likes:20,text:'AI and cloud tools',tags:['AI','Cloud','Data','Python']},
  {id:'T4',uid:'U3',name:'Leo',followers:200000,lang:'fr',likes:0,text:'Une nouvelle analyse',tags:[]},
  {id:'T5',uid:'U4',name:'Ava',location:'London',followers:10000,lang:'en',likes:12,text:'Teaching with AI',tags:['AI','Teaching']},
  {id:'T6',uid:'U2',name:'Noah',location:null,followers:800000,lang:'en',likes:0,text:'Data and cloud examples',tags:['Data','Cloud']}
 ];
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const labels={id:'tweet.id',uid:'user.id',name:'user.name',location:'user.location',followers:'followers_count',lang:'tweet.lang',likes:'like_count',text:'tweet.text',tags:'hashtags',tag:'tag',count:'count',user_count:'user_count'};
 function textVal(v){return v===undefined?'missing':v===null?'null':typeof v==='number'?v.toLocaleString('en-US'):String(v);}
 function syntaxMarkup(text){
  const rx=/\/\/[^\n]*|"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|\b\d+(?:\.\d+)?\b|\b(?:db|find|aggregate|sort|limit)\b/g;
  let out='',last=0;
  for(const m of text.matchAll(rx)){
   out+=esc(text.slice(last,m.index));const t=m[0];let cls='tk-method';
   if(t.startsWith('//'))cls='tk-comment';
   else if(t.startsWith('"')){
    if(/^\s*:/.test(text.slice(m.index+t.length)))cls=t.startsWith('"$')?'tk-op':'tk-field';
    else cls=t.startsWith('"$')?'tk-path':'tk-value';
   }else if(/^(?:true|false|null|\d)/.test(t))cls='tk-num';
   out+=`<span class="${cls}">${esc(t)}</span>`;last=m.index+t.length;
  }
  return out+esc(text.slice(last));
 }
 function pill(t,match=false){return `<span class="pill tag-${esc(t)}${match?' match':''}">${esc(t)}</span>`;}
 // Reorder visible rows with the same keyed-row animation pattern used in Week 3.
 function draw(panel,cols,data,opt={}){
  const before=new Map([...panel.querySelectorAll('tbody tr[data-key]')].map(r=>[r.dataset.key,r.getBoundingClientRect()]));
  panel.innerHTML=`<table><thead><tr>${cols.map(c=>`<th class="${opt.selected?.includes(c)?'selected':''}">${esc(opt.labels?.[c]||labels[c]||c)}</th>`).join('')}</tr></thead><tbody>${data.map((r,i)=>{
   const cls=opt.rowClass?.(r,i)||'';const key=r.key||r.id||r.name||r.tag||String(i);
   return `<tr data-key="${esc(key)}" class="${cls}">${cols.map(c=>{
    let val=c==='tags'?(r.tags.length?r.tags.map(t=>pill(t,opt.tagMatch===t)).join(' '):'[]'):c==='tag'?pill(r[c]):esc(textVal(r[c]));
    return `<td class="${opt.selected?.includes(c)?'selected':''}">${val}</td>`;
   }).join('')}</tr>`;
  }).join('')}</tbody></table>`;
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){panel.querySelectorAll('tbody tr[data-key]').forEach(r=>{const old=before.get(r.dataset.key),now=r.getBoundingClientRect();if(old?.height&&now.height&&old.y!==now.y)r.animate([{transform:`translateY(${old.y-now.y}px)`},{transform:'translateY(0)'}],{duration:400,easing:'ease-out'});});}
 }
 function setup(el,title='Illustrative documents'){
  const pre=el.previousElementSibling;
  const original=pre?.tagName==='PRE'?pre.textContent.trim():'';
  if(pre?.tagName==='PRE')pre.remove();
  el.innerHTML=`<div class="demo-controls"></div><div class="demo-grid"><div class="demo-panel"><div class="demo-panel-title"><span>${title}</span><span class="demo-count"></span></div><div class="demo-table"></div><div class="extra-output"></div></div><div class="demo-panel demo-code"><div class="demo-panel-title">MongoDB syntax</div><pre><code></code></pre><p class="demo-note" aria-live="polite"></p></div></div><p class="demo-hint">Illustrative records for the lecture. Run your own queries in Atlas.</p>`;
  return {el,original,controls:el.querySelector('.demo-controls'),panel:el.querySelector('.demo-table'),code:el.querySelector('pre code'),note:el.querySelector('.demo-note'),count:el.querySelector('.demo-count'),extra:el.querySelector('.extra-output')};
 }
 function controls(s,items,fn,initial=0){
  s.controls.innerHTML=items.map((x,i)=>`<button data-choice="${i}" aria-pressed="${i===initial}">${esc(x)}</button>`).join('');
  const set=i=>{s.controls.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));fn(i);};
  s.controls.querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(initial);
 }
 function code(s,value,focus=[]){s.code.innerHTML=value.split('\n').map((line,i)=>`<span class="code-line${focus.includes(i)?' focus':''}">${syntaxMarkup(line)||' '}</span>`).join('');}
 function mark(p){return r=>p(r)?'kept':'removed';}
 function stageBody(s,index){
  const title=s.el.querySelector('.demo-code .demo-panel-title');
  if(index===0){title.textContent='Before the first stage';code(s,'');return;}
  const stage=JSON.parse(s.original)[index-1];
  const [operator,input]=Object.entries(stage)[0];
  title.textContent=`Select ${operator} · enter only this body`;
  code(s,JSON.stringify(input,null,2));
 }

 const hasLocation=r=>r.location!==null&&r.location!==undefined;
 const followerHigh=r=>r.followers>500000;
 const isEnglish=r=>r.lang==='en';
 for(const el of document.querySelectorAll('.demo')){
  const type=el.dataset.demo,s=setup(el);
  if(type==='document'){
   el.classList.add('doc-demo');
   const original=s.original;
   controls(s,['Embedded document: tweet','Embedded document: user','Array: hashtags','Nested field: tweet.lang'],i=>{
    const lines=original.split('\n');let focus=[];
    if(i===0)focus=[1,2,3,4,5];if(i===1)focus=[6];if(i===2)focus=[4];if(i===3)focus=[3];
    code(s,original,focus);
    s.panel.innerHTML=`<div class="doc-explain"><strong>${['tweet is an embedded document','user is an embedded document','hashtags is an array','A dot connects nested field names'][i]}</strong>${['The tweet contains text, language, and its own embedded entities document.','The user keeps the author’s fields together.','The array holds two hashtag documents. Each has a tag field.','tweet.lang reaches the lang value inside the tweet document.'][i]}<pre>${esc(['tweet.text\ntweet.lang','user.name\nuser.location','tweet.entities.hashtags.tag','{"tweet.lang": "en"}'][i])}</pre></div>`;
    s.count.textContent='1 document';s.note.textContent=['Highlighted: the tweet document.','Highlighted: the user document.','Highlighted: the hashtag array and its elements.','Highlighted: the lang field inside tweet.'][i];
   });
  }else if(type==='operators'){
   const examples=[
    ['Equals','{"tweet.lang": "en"}',r=>r.lang==='en',['lang'],'An equality filter keeps documents whose language is en.'],
    ['$gt','{"tweet.public_metrics.like_count": {"$gt": 0}}',r=>r.likes>0,['likes'],'$gt keeps values greater than 0.'],
    ['$lt','{"tweet.public_metrics.like_count": {"$lt": 5}}',r=>r.likes<5,['likes'],'$lt keeps values less than 5.'],
    ['$ne','{"user.location": {"$ne": null}}',hasLocation,['location'],'$ne: null keeps records with a present, non-null location.'],
    ['$in','{"tweet.lang": {"$in": ["en", "es"]}}',r=>['en','es'].includes(r.lang),['lang'],'$in accepts either listed language.'],
    ['$exists','{"user.location": {"$exists": true}}',r=>Object.hasOwn(r,'location'),['location'],'$exists checks presence. A stored null still counts as an existing field.']
   ];
   controls(s,examples.map(e=>e[0]),i=>{const [_,q,p,selected,note]=examples[i];draw(s.panel,['id','lang','likes','location'],records,{rowClass:mark(p),selected});code(s,q,[0]);s.count.textContent=`${records.filter(p).length} match`;s.note.textContent=note+' Green rows match; faded rows do not.';});
  }else if(type==='logical'){
   controls(s,['Location condition','Followers condition','$and','$or'],i=>{
    const predicates=[hasLocation,followerHigh,r=>hasLocation(r)&&followerHigh(r),r=>hasLocation(r)||followerHigh(r)];
    const p=predicates[i];let q=s.original.replace('"$and"',i===3?'"$or"':'"$and"');
    draw(s.panel,['id','name','location','followers'],records,{rowClass:mark(p),selected:i===0?['location']:i===1?['followers']:[]});
    code(s,q,i===0?[2]:i===1?[3]:[1,2,3,4]);s.count.textContent=`${records.filter(p).length} match`;s.note.textContent=['First condition only: location is present and not null.','Second condition only: more than 500,000 followers.','Both conditions must be true.','Either condition may be true.'][i];
   },2);
  }else if(type==='arrays'){
   controls(s,['Hashtag AI','Exactly one hashtag'],i=>{const p=i===0?r=>r.tags.includes('AI'):r=>r.tags.length===1;draw(s.panel,['id','tags'],records,{rowClass:mark(p),tagMatch:i===0?'AI':null});code(s,i===0?'{"tweet.entities.hashtags.tag": "AI"}':'{"tweet.entities.hashtags": {"$size": 1}}',[0]);s.count.textContent=`${records.filter(p).length} match`;s.note.textContent=i===0?'The AI element is highlighted inside each matching array.':'Only the array with exactly one element matches.';});
  }else if(type==='querybar'){
   el.classList.add('querybar-demo');
   controls(s,['Reset','Filter','Project','Sort','Limit'],i=>{
    const keep=records.filter(r=>r.likes>0);const sorted=[...keep].sort((a,b)=>b.likes-a.likes);const chosen=(i>=3?sorted:keep).slice(0,i===4?2:6);const ids=new Set(chosen.map(r=>r.id));
    const display=i>=3?[...sorted,...records.filter(r=>r.likes<=0)]:records;
    draw(s.panel,['id','text','likes'],display,{rowClass:i?mark(r=>ids.has(r.id)):()=>'',selected:i===2?['text','likes']:i===3?['likes']:[]});
    const lines=s.original.split('\n');code(s,s.original,i?[2*(i-1),2*(i-1)+1]:[]);s.count.textContent=`${i?chosen.length:6} returned`;
    s.note.textContent=['Click Filter, Project, Sort, then Limit. Each step includes the preceding options.','Filter keeps the three documents with more than zero likes.','Project keeps text and like_count; the selected fields are highlighted.','Sort moves the largest like_count to the top. The row set does not change.','Limit keeps the first two documents after sorting.'][i];
   });
  }else if(type==='count'){
   const count=records.filter(isEnglish).length;
   controls(s,['Original documents','$match','$count'],i=>{
    stageBody(s,i);s.extra.innerHTML='';
    if(i<2){draw(s.panel,['id','lang','text'],records,{rowClass:i===1?mark(isEnglish):()=>'',selected:i===1?['lang']:[]});s.count.textContent=i?`${count} match`:'6 documents';}
    else{s.panel.innerHTML=`<div class="count-result">${count}<small>number of tweets</small></div>`;s.count.textContent='1 result';}
    s.note.textContent=['Start with the six illustrative documents.','The dropdown supplies $match. The body filters for English tweets.','The dropdown supplies $count. Enter a quoted output field name; the stage counts incoming documents.'][i];
   });
  }else if(type==='hashtags'){
   const expanded=records.flatMap(r=>r.tags.map((tag,i)=>({id:r.id,key:`${r.id}-${i}`,tag})));
   const counts=new Map();expanded.forEach(r=>counts.set(r.tag,(counts.get(r.tag)||0)+1));
   const ranking=[...counts].map(([tag,count])=>({tag,count})).sort((a,b)=>b.count-a.count||a.tag.localeCompare(b.tag));
   controls(s,['Original arrays','$unwind','$sortByCount','$limit'],i=>{stageBody(s,i);if(i===0){draw(s.panel,['id','tags'],records);s.count.textContent='6 documents';}else if(i===1){draw(s.panel,['id','tag'],expanded);s.count.textContent=`${expanded.length} occurrences`;}else{draw(s.panel,['tag','count'],i===2?ranking:ranking.slice(0,1),{labels:{tag:'_id (tag)'}});s.count.textContent=i===2?'5 tags':'1 result';}s.note.textContent=['Each tweet may contain several hashtags.','$unwind creates one row for each hashtag occurrence. Empty arrays contribute no rows.','$sortByCount groups by tag text, counts each occurrence, and sorts descending.','$limit: 1 keeps Data, the most frequent tag in this example.'][i];});
  }else if(type==='group'){
   el.classList.add('group-demo');
   s.el.querySelector('.demo-code').appendChild(s.extra);
   const names=[...new Set(records.map(r=>r.name))];const sums=names.map(name=>({name,user_count:records.filter(r=>r.name===name).length}));const ranking=[...sums].sort((a,b)=>b.user_count-a.user_count);
   controls(s,['Original documents','$group','$sort','$limit'],i=>{stageBody(s,i);s.extra.innerHTML='';if(i<=1){draw(s.panel,['id','name'],records,{rowClass:i===1?r=>`group-${names.indexOf(r.name)}`:()=>''});s.count.textContent=i?'4 groups':'6 documents';if(i===1){s.extra.innerHTML='<div class="mini-result"></div>';draw(s.extra.firstChild,['name','user_count'],sums,{labels:{name:'_id (name)'},rowClass:r=>`group-${names.indexOf(r.name)}`});}}else{draw(s.panel,['name','user_count'],i===2?ranking:ranking.slice(0,1),{labels:{name:'_id (name)'},rowClass:r=>`group-${names.indexOf(r.name)}`});s.count.textContent=i===2?'4 groups':'1 result';}s.note.textContent=['Several tweets can belong to the same user.','Rows with the same name share a color. $sum: 1 counts the rows in each group.','Sort the group counts from largest to smallest.','Maya and Noah both have two tweets. This illustrated order returns Maya; ties can return either.'][i];});
  }
 }

 // Switch between fixed syntax demonstrations and the instructor's real screenshots.
 document.querySelectorAll('[data-view-group]').forEach(group=>{
  const buttons=[...group.querySelectorAll(':scope > .view-controls [data-view]')];
  const panels=[...group.querySelectorAll(':scope > [data-view-panel]')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
   buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   panels.forEach(p=>p.hidden=p.dataset.viewPanel!==button.dataset.view);
  }));
 });
 document.querySelectorAll('.shot-gallery').forEach((gallery,index)=>{
  const items=[...gallery.children].filter(el=>el.classList.contains('shot-item'));
  if(items.length<2)return;
  const nav=document.createElement('div');nav.className='shot-controls';
  nav.setAttribute('role','group');nav.setAttribute('aria-label','Choose an instructor screenshot');
  items.forEach((item,i)=>{
   item.hidden=i!==0;item.id=`shot-${index}-${i}`;
   const b=document.createElement('button');b.type='button';b.textContent=item.dataset.label;
   b.setAttribute('aria-pressed',String(i===0));b.setAttribute('aria-controls',item.id);
   b.addEventListener('click',()=>{items.forEach((el,j)=>el.hidden=i!==j);[...nav.children].forEach((el,j)=>el.setAttribute('aria-pressed',String(i===j)));});
   nav.appendChild(b);
  });
  gallery.prepend(nav);
 });
})();
