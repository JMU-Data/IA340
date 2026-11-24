/* IA340 Week 8 — slide navigation and no-network interactive teaching demos. */

const slides=[...document.querySelectorAll('.slide')], select=document.getElementById('selector');let current=0;
function resize(){document.documentElement.style.setProperty('--scale',Math.min((innerWidth-22)/1280,(innerHeight-100)/720));}
function show(i){current=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,j)=>{s.classList.toggle('active',j===current);s.setAttribute('aria-hidden',j!==current)});select.value=current;document.getElementById('position').textContent=(current+1)+' / '+slides.length;document.getElementById('prev').disabled=current===0;document.getElementById('next').disabled=current===slides.length-1;location.hash='slide-'+(current+1);}
document.getElementById('prev').onclick=()=>show(current-1);document.getElementById('next').onclick=()=>show(current+1);select.onchange=()=>show(+select.value);document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>show(+b.dataset.jump));
document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT','BUTTON'].includes(document.activeElement.tagName)||window.getSelection().toString())return;if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();show(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1)}});
document.getElementById('full').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch(e){notify('Use your browser full-screen command.')}};
function notify(t){const e=document.getElementById('toast');e.textContent=t;e.style.display='block';setTimeout(()=>e.style.display='none',2200)}
document.querySelectorAll('.copy').forEach(b=>b.onclick=async()=>{const t=b.parentElement.querySelector('code').textContent;try{await navigator.clipboard.writeText(t);notify('Code copied')}catch(e){const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();const ok=document.execCommand('copy');a.remove();notify(ok?'Code copied':'Select the code and copy it.')}});
window.addEventListener('resize',resize);resize();const requested=+(location.hash.match(/slide-(\d+)/)||[])[1];show(Number.isFinite(requested)?requested-1:0);
let expanded=false;document.getElementById('hero-change').onclick=()=>{expanded=!expanded;document.getElementById('hero-record').textContent=expanded?'{\n  \"person\": \"James\",\n  \"city\": \"Chicago\",\n  \"interests\": [\"music\", \"hiking\"]\n}':JSON.stringify({person:'James',city:'Chicago'},null,2);document.querySelector('.paper-two').classList.toggle('changed',expanded)};
const profiles={P1:{name:'James Brown',city:'Chicago'},P2:{name:'David Johnson',city:'New York'}};document.querySelectorAll('.key-choice').forEach(b=>b.onclick=()=>{document.getElementById('kv-value').textContent=JSON.stringify(profiles[b.dataset.key],null,2);document.querySelectorAll('.key-choice').forEach(x=>x.setAttribute('aria-pressed',x===b))});
const words={teacher:['P1','P3'],music:['P2','P3'],hiking:['P1']};function searchWord(w){document.getElementById('word-result').textContent=w+' → '+words[w].join(', ');document.querySelectorAll('[data-bio]').forEach(r=>r.classList.toggle('hit',words[w].includes(r.dataset.bio)));document.querySelectorAll('[data-word]').forEach(b=>{b.classList.toggle('chosen',b.dataset.word===w);b.setAttribute('aria-pressed',b.dataset.word===w)})}document.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>searchWord(b.dataset.word));searchWord('teacher');
let rep={writtenA:false,copiedA:false,failed:false,writtenB:false,copiedB:false};
function repDraw(note){
 const state=rep.failed, base=['P1','P2','P3'];
 const recordA=base.concat(rep.writtenA?['P4']:[]);
 const recordB=base.concat(rep.copiedA?['P4']:[],rep.writtenB?['P5']:[]);
 const recordC=base.concat(rep.copiedA?['P4']:[],rep.copiedB?['P5']:[]);
 [['a',recordA],['b',recordB],['c',recordC]].forEach(([id,items])=>{
  const node=document.getElementById('rep-node-'+id);
  const primary=state?id==='b':id==='a', offline=state&&id==='a';
  node.classList.toggle('rep-primary',primary);
  node.classList.toggle('rep-offline',offline);
  node.querySelector('.rep-node-title').textContent=id.toUpperCase()+' · '+(offline?'Offline':primary?'Primary':'Secondary');
  node.querySelector('.rep-node-data').textContent=items.join(' · ');
 });
 document.getElementById('rep-app-label').textContent=state?'Application → Primary B':'Application → Primary A';
 document.getElementById('rep-normal-paths').style.display=state?'none':'';
 document.getElementById('rep-fail-paths').style.display=state?'':'none';
 const write=document.getElementById('rep-write'),copy=document.getElementById('rep-copy');
 write.textContent=state?'Write P5 to B':'1. Insert P4';
 write.disabled=state?rep.writtenB:rep.writtenA;
 copy.textContent=state?'Replicate P5':'2. Replicate';
 copy.disabled=state?(!rep.writtenB||rep.copiedB):(!rep.writtenA||rep.copiedA);
 document.getElementById('rep-fail').disabled=!rep.copiedA||state;
 document.getElementById('rep-reject').textContent=state?'Try writing to C':'Try writing to B';
 document.getElementById('rep-status').textContent=note;
}
document.getElementById('rep-write').onclick=()=>{
 if(rep.failed){rep.writtenB=true;repDraw('B is now primary and accepts P5. C still has P1–P4 until it copies the new write.');}
 else {rep.writtenA=true;repDraw('A stores P4. B and C can briefly show older data until replication catches up.');}
};
document.getElementById('rep-copy').onclick=()=>{
 if(rep.failed){rep.copiedB=true;repDraw('C copies P5 from the new primary B. A remains offline.');}
 else {rep.copiedA=true;repDraw('B and C now have P4 too. Press Primary fails to see B take over.');}
};
document.getElementById('rep-read').onclick=()=>repDraw(rep.failed?'B is primary: reads include its newest write.':rep.copiedA?'B has copied P4 and can serve reads when configured.':'B may still show P1–P3 if it has not copied P4 yet.');
document.getElementById('rep-reject').onclick=()=>repDraw(rep.failed?'C is a secondary: client writes to C are rejected; send new writes to primary B.':'B is a secondary: client writes to B are rejected; send new writes to primary A.');
document.getElementById('rep-fail').onclick=()=>{rep.failed=true;repDraw('A fails. B is elected PRIMARY (with C voting). New client writes now go to B, not A. Click Write P5 to B.');};
document.getElementById('rep-reset').onclick=()=>{rep={writtenA:false,copiedA:false,failed:false,writtenB:false,copiedB:false};repDraw('Start with three people on every member. Insert P4 on A, then replicate it.');};
repDraw('Start with three people on every member. Insert P4 on A, then replicate it.');
let population=10;const bounds={10:[[1,10],null,null],30:[[1,10],[11,20],[21,30]],70:[[1,29],[30,59],[60,70]]};function shDraw(n){population=n;document.getElementById('sh-results').textContent='';document.getElementById('router').textContent='Application → mongos query router';bounds[n].forEach((range,i)=>{const e=document.getElementById('sh'+['a','b','c'][i]);e.classList.toggle('absent',!range);e.classList.remove('selected');e.querySelector('.range').textContent=range?`P${range[0]}–P${range[1]}`:'Not needed yet';e.querySelector('.sh-chips').innerHTML=range?Array.from({length:range[1]-range[0]+1},(_,k)=>`<span class="chip" data-person-id="${k+range[0]}">P${k+range[0]}</span>`).join(''):''});document.getElementById('sh-status').textContent=n===10?'10 people: one shard is enough for this small teaching example.':n===30?'30 people: add B and C and partition the collection. The combined total is 30—not three copies of 30.':'70 people: partition ranges have changed as the data grows. P1, P30, and P70 now live on different shards.';document.getElementById('sh-one').disabled=n===10;document.getElementById('sh-many').disabled=n!==70;}
function route(ids){document.querySelectorAll('.sh-grid article').forEach(e=>e.classList.remove('selected'));document.querySelectorAll('.chip').forEach(e=>e.classList.remove('found'));const dest=new Set();ids.forEach(p=>{const i=bounds[population].findIndex(r=>r&&p>=r[0]&&p<=r[1]);if(i>=0){dest.add(['A','B','C'][i]);document.getElementById('sh'+['a','b','c'][i]).classList.add('selected');document.querySelector(`.chip[data-person-id="${p}"]`).classList.add('found')}});document.getElementById('router').textContent='mongos → '+[...dest].map(s=>'Shard '+s).join(' + ');document.getElementById('sh-results').textContent='Results from '+dest.size+' shard'+(dest.size===1?'':'s')+' → mongos combines them → '+ids.map(n=>'P'+n).join(', ');document.getElementById('sh-status').textContent=dest.size===1?'Targeted query: the shard key lets the router contact one relevant shard.':'Multi-shard query: contact the relevant shards, collect their results, and return the combined answer. A query without a targeting shard key may contact every shard.';}
document.getElementById('sh-ten').onclick=()=>shDraw(10);document.getElementById('sh-thirty').onclick=()=>shDraw(30);document.getElementById('sh-seventy').onclick=()=>shDraw(70);document.getElementById('sh-one').onclick=()=>route([17]);document.getElementById('sh-many').onclick=()=>route([1,30,70]);shDraw(10);

// Scenarios compare model fit; this demo makes no benchmark or database calls.
const workloadExplanations = {
  transfer: 'Relational is a natural starting point for linked, all-or-nothing updates. MongoDB can also use multi-document ACID transactions.',
  joins: 'SQL and JOINs make cross-table analysis natural. MongoDB has $lookup, but data-model design matters.',
  events: 'MongoDB fits evolving, nested event documents; sharding can spread independent writes. SQL can also handle high throughput.',
  profiles: 'Both can serve concurrent indexed lookups. Hot records, caching, hardware and query design often matter more than the database label.'
};
document.querySelectorAll('.choice-case').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.choice-case').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.getElementById('choice-feedback').textContent = workloadExplanations[button.dataset.choice];
}));


// A visual pagination demonstration. No requests, credentials, or database operations.
let pgStep = 0;
const pgMessages = [
  'First request returns Page 1 and TOKEN_A. Pass that cursor as next_token for Page 2.',
  'Page 2 was requested with TOKEN_A. The response gives TOKEN_B for Page 3.',
  'Page 3 has no next_token. The client must stop: no further page is available.'
];
function showPaginationStep(step){
  pgStep = Math.max(0, Math.min(2, step));
  [0,1,2].forEach(i => {
    const card = document.getElementById('pg-card-' + i);
    card.classList.toggle('pg-active', i === pgStep);
    card.classList.toggle('pg-done', i < pgStep);
    card.setAttribute('aria-current', i === pgStep ? 'step' : 'false');
  });
  document.getElementById('pg-status').textContent = pgMessages[pgStep];
  document.getElementById('pg-next').disabled = pgStep === 2;
}
document.getElementById('pg-next').onclick = () => showPaginationStep(pgStep + 1);
document.getElementById('pg-reset').onclick = () => showPaginationStep(0);
showPaginationStep(0);

// Public-safe screenshots are click-to-expand; all content stays local in this HTML file.
const shotBox=document.getElementById('photo-lightbox');
document.querySelectorAll('.teacher-shot img').forEach(im=>im.addEventListener('click',()=>{
 shotBox.querySelector('img').src=im.src;
 shotBox.querySelector('img').alt=im.alt;
 shotBox.querySelector('p').textContent=im.closest('figure').querySelector('figcaption').textContent;
 shotBox.classList.add('active');
}));
const closeShot=()=>shotBox.classList.remove('active');
shotBox.querySelector('button').onclick=closeShot;
shotBox.addEventListener('click',e=>{if(e.target===shotBox)closeShot();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&shotBox.classList.contains('active'))closeShot();});

