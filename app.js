const MANUAL=MANMAP_DATA; // func|sub -> page
const TOC=TOC_DATA;
const GLOSS_PG={'AEL':161,'AF-ON / BBF':114,'AF limiter':128,'Blinkies':383,'Bulb / Live Time':67,'C-AF / S-AF / MF':98,'CP button':86,'ESP':158,'Focus bracket / stack':254,'GND':250,'HDR 3F 2EV':257,'HHHR':243,'Keep Warm Colour':239,'Live ND':247,'MF clutch':148,'Night LV':367,'NR':172,'Peaking':146,'Pro Capture':198,'SCP':88,'SH1 / SH2':188,'SIS':205,'Spot (Sh)':163,'WB shift A / G / M':237};
const LESSONS=[
 {t:'1 · The camera is five cameras',slot:'all',p:[78,80,83],
  b:['The mode dial has C1–C5. Each saves almost every photo setting — exposure defaults, AF, buttons, drive, display, and (the part most people miss) its own four colour and four mono profiles.',
     'Saving: set the camera up exactly how you want it, then Menu › 1 Basic Settings › Custom Mode › Save to C1–C5. Name it so the dial shows a word, not a number.',
     'Hold vs Reset: with Hold, tweaks you make while in C1 stick; with Reset they vanish when you leave the mode. Use Hold while building, Reset once you trust it.',
     'B (Bulb/Time) is not a custom slot. It takes its settings from M. For long-exposure work, recall C1 into memory first so M and B match.']},
 {t:'2 · Exposure: the three dials you actually touch',slot:'all',p:[156,164,353,357],
  b:['Everything here shoots Manual. The front dial is always shutter speed. The rear dial is aperture (lever 2) or exposure compensation (lever 1). ISO lives on the ▶ button.',
     'Lever 1 is for Auto ISO work — birds, street — where the camera chooses ISO and you only need to bias it brighter or darker. Lever 2 is for ISO 200 work where you set everything.',
     'Read the histogram, not the preview. Push it right until the highlight blinkies just start, then back off a third of a stop. The histogram warning is set to 245/10 in Landscape and 250/5 in the other slots, so the blinkies are conservative.',
     'Metering: ESP (whole frame) for most things; the Fn button gives you a spot reading on whatever is under the AF point, held for as long as you hold the button.']},
 {t:'3 · Focus: thumb, not finger',slot:'all',p:[114,103,104,98],
  b:['AF-ON focuses. The shutter half-press does not refocus in Landscape and Macro, so once you have focused — by button or by hand — you can recompose and fire without the camera second-guessing you.',
     'Targets: Small for landscape, Cross or All for moving subjects. The ◀ button moves the target; OK snaps it to the home target — Single in Landscape, Macro and Astro, Small in Street, All in BIF.',
     'S-AF locks once. C-AF keeps tracking while the button is held. MF is the lens clutch — pull the focus ring toward you on Pro lenses and the camera stops touching focus.',
     'Peaking paints sharp edges in colour. Yellow, high intensity, for macro; off for birds because it clutters a busy frame.']},
 {t:'4 · Subject detection and the AF limiter',slot:'bif',p:[118,121,123,128,198],
  b:['Subject Detection picks Birds, Animals, People, Motorsport, Aircraft, Trains. In C2 it is Bird and the AF-ON button runs subject-priority AF; the shutter half-press runs plain C-AF so you have both.',
     'The AF Limiter stops the lens hunting to infinity when the bird drops behind a branch. Three presets are stored for the three long-lens setups; pick the one for the lens on the camera.',
     'Pro Capture SH2 buffers 15 frames while you half-press and keeps them when you fully press. The take-off you always miss is in the buffer.',
     'SH2 at 25 fps keeps focus tracking; SH1 at 100–120 fps locks focus on the first frame. Street uses plain silent sequential at 10 fps so shutter speeds below 1/160 still work.']},
 {t:'5 · The CP button: computational modes',slot:'landscape',p:[86,243,247,250,254,257],
  b:['One button cycles High Res Shot, Live ND, Live GND, Focus Stacking and HDR. Press CP, turn the front dial, press OK.',
     'High Res: 50 MP handheld or 80 MP tripod, from a burst. Needs a still subject. The spreadsheet sets 12-bit RAW (the cheat sheet says 14-bit; 12-bit is the faster, later choice).',
     'Live ND: up to ND64 (6 stops) by stacking frames — long-exposure water with no glass on the lens. Watch the exposure time cap.',
     'Live GND: a graduated filter you can rotate and position on screen, up to 3 stops. Works when the bright/dark boundary is reasonably straight.',
     'Focus Stacking blends in camera (up to 15 frames); Focus Bracketing shoots the series for stacking in Helicon. HDR 3F 2EV shoots three RAWs for blending in post.']},
 {t:'6 · Long exposures: Bulb, Live Time, and the NR trick',slot:'landscape',p:[67,70,172,196,273],
  b:['Mode dial to B. Bulb holds the shutter open while you hold the button; Time opens on one press and closes on the next; Composite keeps only the brighter pixels from each interval.',
     'Live Time refreshes the preview every 15 s. If the histogram is about a third across after the first refresh, a two-minute exposure will land.',
     'Long-exposure NR shoots a second, equal-length dark frame. It doubles every test shot. The fix: silent shutter NR off (so C1 tests are fast), mechanical NR auto (so the final B frame is clean).',
     'BULB/TIME settings set the maximum exposure, the live view refresh and whether the monitor dims. The default 1-minute cap needs raising to 30 min before you start.']},
 {t:'7 · The Creative Dial: looks, not modes',slot:'street',p:[219,225,224,222,237,239],
  b:['Rotate the Creative Dial to COLOR for the twelve-hue saturation wheel plus a three-point curve; MONO for a colour filter, grain and tone; CRT for hue and vividness; ART for the filters.',
     'Each of COLOR and MONO has four profiles. Edit one in place and it stays edited. Save the camera to a C-slot and that slot keeps its own copy of all four — which is where the 24 looks come from.',
     'White balance and the A/M shift are outside the profile. They are what make most recipes work and they only survive inside a saved C-slot.',
     'Keep Warm Colour, on by default, leaves tungsten light warm under Auto WB. Nearly every recipe turns it off.',
     'Shoot RAW+JPEG. The JPEG shows the look; the RAW is unaffected. Keep Warm Colour off. The Looks tab in this app shows the numbers and a preview of each.',
     'The four COLOR and four MONO slots on the Creative Dial itself are separate from the copies inside each C-slot. Treat the dial\'s own four as scratch space for experiments; the C-slot copies are the ones you rely on.']},
 {t:'8 · Macro and astro: manual focus done properly',slot:'macro',p:[111,117,143,148,146,141],
  b:['Macro: AF-ON to get close, pull the clutch, then focus by hand with peaking yellow and Magnify on Fn. Focus bracket: 50 shots at differential 3, stop when the far point is covered.',
     'LV Close Up Mode decides whether magnification clears when you half-press. Mode 1 keeps it; Mode 2 drops it.',
     'Astro: Starry Sky AF, accuracy priority, started and stopped from AF-ON. Night LV brightens the preview; it lags, so compose, then switch it off to focus.',
     'In the dark the camera understates dynamic range — bracket, even when the blinkies say you are fine.']},
];

const GENRES=[
 {k:'landscape',c:'C1',n:'Landscape / LE',iso:'ISO 200',lever:'Position 2',
  intro:'Tripod, manual focus, long exposure. Silent shutter in C1 (no NR) for fast test shots; Bulb/Live Time for the real frame. Spot metering is the default here, with the Fn button giving spot-shadow (−3 EV).',
  key:['Drive: 2 s timer, silent shutter','AF: S-AF + MF, half-press does NOT refocus','Metering: spot by default; Fn = spot shadow, auto-reset after each shot','Image review on (Auto) to check LE results','Histogram 245/10 for a conservative display','HDR 3F 2EV and 50 MP handheld Hi-Res (12-bit) ready on CP']},
 {k:'bif',c:'C2',n:'Birds in flight',iso:'Auto ISO to 12800',lever:'Position 1',
  intro:'Burst, bird detection, exposure compensation on the rear dial. SH2 at 25 fps with Pro Capture SH2 pre-buffering 15 frames. AF-ON triggers subject AF; the shutter half-press does normal C-AF.',
  key:['Drive: SH2 25 fps; ProCap SH2 ready (15 pre-shutter frames)','AF: C-AF + MF, bird detection on, subject AF on AF-ON','AF limiter presets 3–50 m / 5–200 m / 20–300 m for 40-150+TC, 300, 300+TC','Metering: ESP, Fn = spot','Display: highlights & shadows only, no clear-screen page','LV frame rate High, no peaking (distracting)']},
 {k:'street',c:'C3',n:'Street',iso:'Auto ISO to 6400',lever:'Position 1',
  intro:'Low-fps bursts to catch the moment, people detection, exposure compensation on the rear dial. Silent sequential at 10 fps so shutter speeds below 1/160 are still allowed.',
  key:['Drive: silent sequential 10 fps (SH2 forces ≥1/160)','AF: C-AF + MF, people detection, AF-ON = subject AF','Home target: Small','Metering: ESP, Fn = spot','Display: highlights & shadows only, grid off, level off','Rec button = Select Person']},
 {k:'macro',c:'C4',n:'Macro',iso:'ISO 200',lever:'Position 2',
  intro:'Manual focus with the clutch, peaking on, focus bracketing for stacking in Helicon. Magnify on the Fn button instead of spot metering.',
  key:['Drive: single, silent, 2 s timer available','AF: S-AF + MF, MF clutch operative, half-press does NOT refocus','Peaking yellow, high intensity, focus indicator on','Focus BKT on: 50 shots, differential 3; stacking 15 × 4 if in-camera','Fn = Magnify, AF-ON = Peaking toggle? no — AF-ON stays BBF; Astro uses Peaking','Image review Auto; AF illuminator on']},
 {k:'astro',c:'C5',n:'Astro',iso:'ISO 200',lever:'Position 2',
  intro:'Starry Sky AF (accuracy priority), peaking on AF-ON, magnify on Fn, Night LV on the |O| button. 2 s timer drive.',
  key:['AF: Starry Sky AF, accuracy priority, AF-ON start/stop','Fn = Magnify, AF-ON = Peaking, Rec = Focus bracket','Drive: 2 s timer','Peaking yellow, high, with image brightness adjust','Night LV to compose','Grid: thirds']},
];
// fix a sloppy key line
GENRES[3].key[4]='Fn = Magnify (spot metering rarely needed); AF-ON stays back-button focus';

const BUTTONS={
 fn:{n:'Fn',landscape:'AEL / spot shadow',bif:'AEL / spot',street:'AEL / spot',macro:'AEL / spot',astro:'Magnify',
     why:{landscape:'Spot is already default; Fn gives −3 EV spot-shadow for rocks. Double-press for each new reading.',bif:'Default ESP; press for a spot reading on the bird.',street:'Default ESP; spot on a face when backlit.',macro:'Rarely needed in macro.',astro:'Magnify to nail star focus.'}},
 rec:{n:'Rec',landscape:'Focus bracket',bif:'Select Subject',street:'Select Person',macro:'Focus bracket',astro:'Focus bracket',
     why:{landscape:'BKT functions are not on the CP button, so they live here.',bif:'Cycles the subject-detection type.',street:'Toggles people detection.',macro:'Starts the bracket run for stacking.',astro:'Bracket run if needed.'}},
 afon:{n:'AF-ON',landscape:'AF (back button)',bif:'Subject AF',street:'Subject AF',macro:'AF (back button)',astro:'Peaking',
     why:{landscape:'S-AF only when you ask for it; the shutter never refocuses.',bif:'Subject-priority AF; the shutter half-press runs plain C-AF.',street:'Subject-priority AF; shutter half-press runs plain C-AF.',macro:'Back-button focus to get close, then clutch to MF.',astro:'Peaking on demand while focusing manually.'}},
 cp:{n:'CP',all:'Computational menu',why:'Hi-Res, Live ND, HDR, Focus stack, Live GND — press, then front dial.'},
 lv:{n:'|O|',all:'Night LV',why:'Brightens live view in the dark. Essential for low-light landscape, macro and astro.'},
 left:{n:'◀',all:'Move AF point',why:'Replaces the OM-1 joystick. Landscape and astro: use the touch screen instead.'},
 right:{n:'▶',all:'ISO',why:'Replaces a missing function button.'},
 down:{n:'▼',all:'Drive',why:'Replaces a missing function button.'},
 ok:{n:'OK',all:'Home AF target',why:'Press to jump to the home target (Single, centre; Street uses Small).'},
};


// Derive per-genre button labels from the settings data so there is one source of truth.
(function(){const map={fn:'Fn (AEL)',rec:'Rec (red)',afon:'AF-ON',lv:'|O| (LV/view)',left:'Left arrow',right:'Right arrow',down:'Down arrow'};
 const pretty=v=>v.replace(/^AEL\/Spot sh$/i,'AEL / spot shadow').replace(/^AEL\/Spot$/i,'AEL / spot').replace(/^AF-on$/i,'AF (back button)').replace(/^Subject AF$/i,'Subject AF').replace(/^Night LV$/i,'Night LV').replace(/^Direct$/i,'Move AF point').replace(/^Focus BKT$/i,'Focus bracket');
 Object.entries(map).forEach(([k,sub])=>{const r=DATA.find(x=>x.tab==='Gear'&&x.func==='Button Settings'&&x.sub===sub);if(!r)return;const b=BUTTONS[k];const all=['landscape','bif','street','macro','astro'].map(g=>pretty(r[g]||r.general||r.default||''));if(all.every(v=>v===all[0])){b.all=all[0];}else{delete b.all;['landscape','bif','street','macro','astro'].forEach((g,i)=>b[g]=all[i]);}});
})();

const WORKFLOWS={
 landscape:[
  ['Before any session',['Recall C1 into main memory (Reset/Custom Modes → Recall) so M and B share the same settings','Fn lever to position 2','Check IS, HDR, BKT, LND, NLV icons are all off on the monitor','Save to slot 2 by default']],
  ['Standard landscape on tripod',['ISO 200, f/5.6, adjust shutter until the histogram sits right and the over/under blinkies balance','Bright day on the monitor: turn monitor brightness up','Touch screen to place the focus point, or focus with AF-ON; confirm with the MF clutch if needed','Fire with 2 s timer or remote','High DR, single shot with movement: GND on CP','High DR, layered shot with movement: HDR 3F 2EV (CP)','High DR, no movement: Live ND 64 (gains ~2.5 stops of DR)']],
  ['Tripod long exposure, 1–2 min, physical filters',['Single shot: stay in C1, ND 64/128, matrix metering, up to 60 s. If that gives the look and ~12 stops of DR, stop there','Very high DR with a flat horizon: 3-stop GND, up to 60 s','Layered (sky / rocks / water): switch to M','Sky exposure first (~30 s)','AEL + touch screen to spot-meter the rocks; expose','Filters off: spot-meter the water, set f/ and ISO so the shutter reads 1/10, 1/60 or 1/640 (see ND table)','Fit the filters from the table, run a 15 s silent test; histogram should reach ~⅓','Switch to Live Time (mechanical shutter, NR on), same ISO and shutter, take the full 2 min frame']],
  ['Tripod LE, fast water 1/5–1/8 s',['Six-stop ND on, tripod mounted','You should get a direct meter reading at 1/5 s']],
  ['Focus stacking / light-point metering',['Auto: press the Rec (focus bracket) button; set the count with the rear dial first time','Manual: touch 3–4 points front to back, AF-ON each, expose','Light points: metering to spot, touch where the light falls, focus with AF-ON, expose']],
  ['Handheld landscape',['BKT, HHHR, LND, NLV all off','ISO 200, f/5.6, shutter for ETTR with blinkies balanced','AF via AF-ON','Extra DR: Live ND 32 or GND. Extra DR + resolution: handheld Hi-Res']],
  ['Dark scene',['Press |O| for Night LV; turn the monitor down','Compose, test shot if under 60 s, correct','If ISO climbs too high for ≤60 s, go to Bulb/Live Time and use the ND table to size the exposure','At night use exposure bracketing — indicated DR in the dark is much worse']],
  ['Handheld LE with Live ND (waterfalls, 1/8 s)',['IS on','CP → Live ND, rear dial picks the ND level','Shutter 1/8; adjust aperture, ISO and ND for correct exposure','Repeat at 1/4 and 1/13, choose the water you like']],
  ['Handheld LE with a VND',['Fit the VND; drive to silent sequential','Aim for 1/8 at f/4, ISO 200, ETTR','Fire 1–2 s bursts and choose the best frame later']],
 ],
 bif:[
  ['Setup check',['Fn lever position 1: rear dial is exposure compensation','Auto ISO, ceiling 12800','Drive SH2 25 fps; ProCap SH2 armed via the drive menu when waiting on a take-off','Subject detection: Bird. AF-ON = subject AF, half-press = normal C-AF','AF limiter set to the lens you have on (On1 40-150+TC, On2 300, On3 300+TC)','Card: slot 1 (fast). Offload and format after the day']],
  ['In the field',['Pre-set aperture in lever position 2, flick back to 1','Shutter 1/1000+ on the front dial, exposure compensation on the rear as the bird crosses bright sky','AF-ON to acquire the bird, hold through the pass','Watch the highlight/shadow blinkies — the only info overlay in this mode']],
 ],
 street:[
  ['Setup check',['Fn lever position 1: rear dial is exposure compensation','Auto ISO to 6400','Drive silent sequential 10 fps so shutter speeds below 1/160 still work','People detection on; Rec button toggles it','Home AF target Small, centre','Display: H&S blinkies only; grid and level off']],
  ['In the field',['Short bursts, pick the frame later','Faces backlit: Fn for a spot reading','Pre-set aperture in position 2, then back to position 1']],
 ],
 macro:[
  ['Setup check',['Fn lever position 2, ISO 200','MF clutch operative; peaking yellow, high','AF illuminator on, image review Auto','Focus BKT: 50 shots, differential 3, 0 s charge — stack in Helicon','Fn = Magnify']],
  ['Stacking a subject',['Rough focus with AF-ON, then pull the clutch to MF','Focus on the nearest point you want sharp','Press Rec to start the bracket; stop it when the far point is covered','Stack in Helicon']],
 ],
 astro:[
  ['Setup check',['Fn lever position 2, ISO 200 start point','Starry Sky AF, accuracy priority, AF-ON start/stop','Night LV on |O|; peaking on AF-ON; magnify on Fn','Drive 2 s timer; grid thirds']],
  ['Shooting',['Compose with Night LV','Starry Sky AF via AF-ON, confirm with magnify','Test frame, adjust ISO, then shoot']],
 ],
};

// ---- state
let genre='landscape', tab='all', q='', onlyDiff=true;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

try{const g=localStorage.getItem('om3genre');if(g&&GENRES.some(x=>x.k===g))genre=g;}catch(e){}

// dial
const dial=$('#dial');
GENRES.forEach(g=>{const b=document.createElement('button');b.innerHTML=`<span class="c">${g.c}</span>${g.n}`;b.onclick=()=>{genre=g.k;try{localStorage.setItem('om3genre',genre)}catch(e){};render();};dial.appendChild(b);});

// tabs
const tabsEl=$('#tabs');
tabsEl.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;e.preventDefault();showSection(a.dataset.s);});
function showSection(s){document.querySelectorAll('section').forEach(x=>x.classList.toggle('on',x.id===s));tabsEl.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.dataset.s===s));window.scrollTo({top:0});location.hash=s;}

// chips
const TABS=['all','Photo 1','Photo 2','AF','Gear','Wrench'];
const chips=$('#tabchips');
TABS.forEach(t=>{const b=document.createElement('button');b.textContent=t==='all'?'All menus':t;b.onclick=()=>{tab=t;renderRows();};chips.appendChild(b);});
$('#q').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();renderRows();});
$('#onlyDiff').addEventListener('change',e=>{onlyDiff=e.target.checked;renderRows();});

let render=function(){
 const g=GENRES.find(x=>x.k===genre);
 dial.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',GENRES[i].k===genre));
 ['#bGenre','#dGenre'].forEach(s=>$(s).textContent=g.n);
 $('#genreIntro').innerHTML=`<div style="font-size:20px;font-weight:600;letter-spacing:-.01em;margin-bottom:6px">${g.c} <span style="color:var(--dial)">·</span> ${g.n}</div><p>${esc(g.intro)}</p><dl class="kv"><dt>Mode</dt><dd>Manual</dd><dt>ISO</dt><dd>${g.iso}</dd><dt>Fn lever</dt><dd>${g.lever}</dd></dl><ul style="margin:8px 0 0;padding-left:18px;font-size:14.5px">${g.key.map(k=>`<li>${esc(k)}</li>`).join('')}</ul>`;
 // buttons
 const lab=(b)=>b.all||b[genre];
 const why=(b)=>typeof b.why==='string'?b.why:b.why[genre];

 $('#btnlist').innerHTML=Object.values(BUTTONS).map(b=>`<li><b>${esc(b.n)}</b><div>${esc(lab(b))}<span class="why">${esc(why(b))}</span></div></li>`).join('');
 $('#leverCard').innerHTML=`<b>Dials in ${g.n}:</b> Fn lever ${g.lever}. Front dial = shutter speed. Rear dial = ${g.lever==='Position 1'?'exposure compensation (aperture is pre-set in position 2)':'aperture'}. ${g.iso}.`;
 // workflows
 $('#wf').innerHTML=WORKFLOWS[genre].map(([t,steps],i)=>`<details ${i===0?'open':''}><summary>${esc(t)}</summary><div class="body"><ol>${steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div></details>`).join('');
 renderRows();
}

function renderRows(){
 chips.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',TABS[i]===tab));
 const g=GENRES.find(x=>x.k===genre);
 let rows=DATA.filter(r=>tab==='all'||r.tab===tab);
 if(q)rows=rows.filter(r=>[r.section,r.func,r.sub,r.default,r.general,r[genre],r.comment].join(' ').toLowerCase().includes(q));
 if(onlyDiff)rows=rows.filter(r=>{const v=r[genre]||r.general;return v&&v!==r.default;});
 $('#count').textContent=`${rows.length} settings`;
 let html='',sec='';
 rows.forEach(r=>{
  const key=r.tab+' › '+r.section;
  if(key!==sec){sec=key;html+=`<div class="sec">${esc(key)}</div>`;}
  const v=r[genre]||'';const gen=r.general||'';
  const eff=v||gen;
  html+=`<div class="row"><div class="name">${esc(r.func)}${r.sub&&r.sub!==r.func?` <span>› ${esc(r.sub)}</span>`:''}</div>
  <div class="vals">${r.default?`<div>Default<b>${esc(r.default)}</b></div>`:''}${gen&&gen!==r.default?`<div>General A/S/M<b>${esc(gen)}</b></div>`:''}<div class="${eff&&eff!==r.default?'g':''}">${esc(g.c)} ${esc(g.n)}<b>${esc(eff||'as default')}</b></div></div>
  ${r.comment?`<div class="note">${esc(r.comment)}</div>`:''}${MANUAL[r.func+'|'+r.sub]?`<div class="mpg">Manual p.${MANUAL[r.func+'|'+r.sub]}</div>`:''}</div>`;
 });
 $('#rows').innerHTML=html||'<p class="muted">Nothing matches. Try a broader word, or untick the “only differs” box.</p>';
}

// ---- ND calculator
const SHUT=[['1/8000',1/8000],['1/4000',1/4000],['1/2000',1/2000],['1/1000',1/1000],['1/640',1/640],['1/500',1/500],['1/400',1/400],['1/320',1/320],['1/250',1/250],['1/200',1/200],['1/160',1/160],['1/125',1/125],['1/100',1/100],['1/80',1/80],['1/60',1/60],['1/50',1/50],['1/40',1/40],['1/30',1/30],['1/25',1/25],['1/20',1/20],['1/15',1/15],['1/13',1/13],['1/10',1/10],['1/8',1/8],['1/6',1/6],['1/5',1/5],['1/4',1/4],['1/3',1/3],['1/2',1/2],['1/1.3',1/1.3],['1s',1],['1.6s',1.6],['2s',2],['3s',3],['4s',4],['6s',6],['8s',8]];
const TARG=[['1/8 s',1/8],['1/4 s',1/4],['1 s',1],['2 s',2],['5 s',5],['10 s',10],['15 s',15],['30 s',30],['60 s',60],['2 min',120],['3 min',180],['4 min',240],['6 min',360]];
const FILTERS=[3,6,10,15];
const base=$('#base'),target=$('#target');
SHUT.forEach(([l,v])=>base.add(new Option(l,v)));TARG.forEach(([l,v])=>target.add(new Option(l,v)));
base.value=1/640;target.value=120;
function combos(st){ // find filter combos summing within +-0.5 stop
 const out=[];const fs=FILTERS;
 for(let m=1;m<(1<<fs.length);m++){let s=0,n=[];fs.forEach((f,i)=>{if(m>>i&1){s+=f;n.push('ND'+f);}});if(Math.abs(s-st)<=0.6)out.push(n.join(' + ')+(s!==Math.round(st*2)/2&&Math.abs(s-st)>0.2?` (${s} stops)`:''));}
 return out;
}
function nd(){
 const b=+base.value,t=+target.value;const stops=Math.log2(t/b);
 if(stops<=0){$('#ndres').innerHTML='<p>No filter needed — the metered shutter is already as long as the target.</p>';return;}
 const half=Math.round(stops*2)/2;
 const nd=Math.pow(2,stops);
 const ndLabel=nd>=1000?Math.round(nd/1000)+'k':Math.round(nd);
 const c=combos(stops);
 $('#ndres').innerHTML=`<div class="big">${half}<small>stops · ND ${ndLabel}</small></div>
 <p style="margin:8px 0 4px">Filters: ${c.length?c.map(x=>`<span class="pill">${x}</span>`).join(''):'<span class="muted">no clean combination of 3/6/10/15 — change ISO or aperture to shift the base shutter</span>'}</p>
 <p class="muted" style="font-size:13.5px">Or shoot without physical filters: ${stops<=7?`Live ND ${Math.pow(2,Math.min(6,Math.floor(stops)))} covers ${Math.min(6,Math.floor(stops))} stops${stops>6?' (short by '+(half-6)+')':''}.`:'Live ND tops out at ND64 (6 stops), so you need glass here.'}</p>
 <p class="muted" style="font-size:13.5px">15 s test on silent shutter: expect the histogram about ${Math.round(100*15/t)}% of the way across when the full exposure is ${target.options[target.selectedIndex].text}.</p>`;
}
base.onchange=target.onchange=nd;nd();


// ---- synthetic recipe preview
const PW=240,PH=160;
let baseScene=null;
function drawScene(){
 const c=document.createElement('canvas');c.width=PW;c.height=PH;const x=c.getContext('2d');
 // sky
 const sky=x.createLinearGradient(0,0,0,PH*0.5);sky.addColorStop(0,'#5a8fd8');sky.addColorStop(1,'#bcd4ee');x.fillStyle=sky;x.fillRect(0,0,PW,PH*0.5);
 // sun glow
 const g=x.createRadialGradient(PW*0.78,PH*0.14,2,PW*0.78,PH*0.14,38);g.addColorStop(0,'rgba(255,245,210,1)');g.addColorStop(1,'rgba(255,245,210,0)');x.fillStyle=g;x.fillRect(0,0,PW,PH*0.5);
 // sea
 const sea=x.createLinearGradient(0,PH*0.5,0,PH*0.68);sea.addColorStop(0,'#2f8fa6');sea.addColorStop(1,'#1d6a7e');x.fillStyle=sea;x.fillRect(0,PH*0.5,PW,PH*0.18);
 // foliage hill
 x.fillStyle='#4f8a3a';x.beginPath();x.moveTo(0,PH*0.62);x.quadraticCurveTo(PW*0.25,PH*0.42,PW*0.55,PH*0.6);x.lineTo(PW*0.55,PH);x.lineTo(0,PH);x.fill();
 x.fillStyle='#2f5e26';x.beginPath();x.moveTo(0,PH*0.75);x.quadraticCurveTo(PW*0.2,PH*0.6,PW*0.4,PH*0.78);x.lineTo(PW*0.4,PH);x.lineTo(0,PH);x.fill();
 // sand / path
 x.fillStyle='#d9c293';x.fillRect(PW*0.4,PH*0.68,PW*0.6,PH*0.32);
 // red wall
 x.fillStyle='#b8352a';x.fillRect(PW*0.62,PH*0.56,PW*0.38,PH*0.2);
 x.fillStyle='#e1a53a';x.fillRect(PW*0.62,PH*0.56,PW*0.1,PH*0.2);
 // skin face
 x.fillStyle='#d9a37e';x.beginPath();x.arc(PW*0.52,PH*0.74,14,0,7);x.fill();
 x.fillStyle='#b9825f';x.beginPath();x.arc(PW*0.52,PH*0.74,14,0.3,2.3);x.fill();
 x.fillStyle='#3a2a22';x.beginPath();x.arc(PW*0.52,PH*0.66,15,3.3,6.1);x.fill();
 // shirt magenta
 x.fillStyle='#b0498d';x.fillRect(PW*0.46,PH*0.86,28,PH*0.14);
 // grey card + chips
 const chips=['#ffffff','#bdbdbd','#777777','#2a2a2a','#f3d64a','#f08a2e','#d13a3a','#d84f94','#9b4fc9','#4d63d1','#3aaac5','#7bc36a'];
 chips.forEach((cc,i)=>{x.fillStyle=cc;x.fillRect(4+i*18,PH-18,16,14)});
 baseScene=x.getImageData(0,0,PW,PH);
}
function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;const M=Math.max(r,g,b),m=Math.min(r,g,b);let h=0,s=0,l=(M+m)/2;if(M!==m){const d=M-m;s=l>0.5?d/(2-M-m):d/(M+m);switch(M){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;default:h=(r-g)/d+4}h*=60}return[h,s,l]}
function hsl2rgb(h,s,l){const C=(1-Math.abs(2*l-1))*s,X=C*(1-Math.abs((h/60)%2-1)),m=l-C/2;let r,g,b;if(h<60){r=C;g=X;b=0}else if(h<120){r=X;g=C;b=0}else if(h<180){r=0;g=C;b=X}else if(h<240){r=0;g=X;b=C}else if(h<300){r=X;g=0;b=C}else{r=C;g=0;b=X}return[(r+m)*255,(g+m)*255,(b+m)*255]}
const SEG=new Uint8Array(360);for(let h=0;h<360;h++){let best=0,bd=999;HUES.forEach((H,i)=>{let d=Math.abs(h-H);d=Math.min(d,360-d);if(d<bd){bd=d;best=i}});SEG[h]=best}
function curveLUT(cv,con){
 const [s,m,h]=cv.map(v=>v||0);const lut=new Float32Array(256);
 for(let i=0;i<256;i++){let v=i/255;
  // contrast around mid
  v=0.5+(v-0.5)*(1+con*0.09);
  // three-point curve: weights peak at 0.2,0.5,0.85
  const ws=Math.max(0,1-Math.abs(v-0.18)/0.3),wm=Math.max(0,1-Math.abs(v-0.5)/0.35),wh=Math.max(0,1-Math.abs(v-0.85)/0.3);
  v+= (s*ws+m*wm+h*wh)*0.022;
  lut[i]=Math.min(1,Math.max(0,v))}
 return lut;
}
function parseWB(wb){ if(!wb)return[0,0];const a=/A\s*([+-]?\d+)/i.exec(wb),m=/M\s*([+-]?\d+)/i.exec(wb),g=/G\s*([+-]?\d+)/i.exec(wb);let A=a?+a[1]:0,M=m?+m[1]:0;if(g)M-= +g[1];if(/5[0-9]00K|Sunny/i.test(wb))A+=1;return[A,M]}
function renderPreview(r){
 if(!baseScene)drawScene();
 const c=document.createElement('canvas');c.width=PW;c.height=PH;const x=c.getContext('2d');
 const img=x.createImageData(PW,PH);const d=img.data,b=baseScene.data;
 const lut=curveLUT(r.curve,r.con||0);const [A,M]=parseWB(r.wb);
 const grain=r.type==='mono'?({Low:6,Medium:11,High:18}[r.grain]||0):0;
 const filt=r.type==='mono'?(r.filter||''):'';
 let fw=[0.3,0.59,0.11];const fm=/(\w+)\s*\+(\d)/.exec(filt);
 if(fm){const k=+fm[2]*0.12;const n=fm[1].toLowerCase();if(n==='red')fw=[0.3+k*2,0.59-k,0.11-k];else if(n==='blue')fw=[0.3-k,0.59-k,0.11+k*2];else if(n==='cyan')fw=[0.3-k*1.5,0.59+k,0.11+k];else if(n==='yellow'||n==='orange')fw=[0.3+k,0.59+k*0.5,0.11-k*1.5];else if(n==='green')fw=[0.3-k,0.59+k*2,0.11-k];const S=fw[0]+fw[1]+fw[2];fw=fw.map(v=>v/S)}
 for(let i=0;i<d.length;i+=4){
  let R=b[i],G=b[i+1],B=b[i+2];
  // WB shift
  R+=A*3.2+M*2.2;G-=M*2.6;B-=A*3.6-M*1.4;
  R=Math.min(255,Math.max(0,R));G=Math.min(255,Math.max(0,G));B=Math.min(255,Math.max(0,B));
  if(r.type==='mono'){
   let L=(R*fw[0]+G*fw[1]+B*fw[2]);L=lut[Math.round(Math.min(255,Math.max(0,L)))]*255;
   if(grain)L+= (Math.random()-0.5)*grain*2;
   L=Math.min(255,Math.max(0,L));d[i]=d[i+1]=d[i+2]=L;d[i+3]=255;continue;
  }
  let [h,s,l]=rgb2hsl(R,G,B);
  if(s>0.04){const v=r.c[SEG[Math.round(h)%360]];s=Math.min(1,Math.max(0,s*(1+v*0.14)));}
  l=lut[Math.round(l*255)];
  const o=hsl2rgb(h,s,l);d[i]=o[0];d[i+1]=o[1];d[i+2]=o[2];d[i+3]=255;
 }
 x.putImageData(img,0,0);return c.toDataURL('image/jpeg',0.82);
}
const PREV={};
function previewFor(r){const k=r.n+'|'+r.a;if(!PREV[k])PREV[k]=renderPreview(r);return PREV[k]}
function baseURL(){if(!baseScene)drawScene();const c=document.createElement('canvas');c.width=PW;c.height=PH;c.getContext('2d').putImageData(baseScene,0,0);return c.toDataURL('image/jpeg',0.82)}
// compare widget
function renderCompare(){
 const el=$('#compare');if(!el)return;
 const opts=RECIPES.map((r,i)=>`<option value="${i}">${esc(r.n)} — ${esc(r.a)}</option>`).join('');
 el.innerHTML=`<div class="cmp"><div><img alt="Base scene, no recipe" src="${baseURL()}"><div class="lab">Camera default (test scene)</div></div><div><img id="cmpImg" alt="Recipe preview"><select id="cmpSel">${opts}</select></div></div>`;
 const sel=$('#cmpSel');sel.onchange=()=>{$('#cmpImg').src=previewFor(RECIPES[+sel.value])};sel.value=0;sel.onchange();
}

// ---- genre icons (inline SVG, 24 viewBox)
const ICONS={
 landscape:'<path d="M3 18l5-8 4 6 3-4 6 6H3z"/><circle cx="17" cy="7" r="2"/>',
 bif:'<path d="M3 13c4-1 6-5 9-5 3 0 4 3 9 2-2 3-5 4-9 4-3 0-5 2-9-1z"/><path d="M12 8l2-3"/>',
 street:'<rect x="4" y="7" width="7" height="13"/><rect x="13" y="4" width="7" height="16"/><path d="M7 11h1M7 14h1M16 8h1M16 11h1M16 14h1"/>',
 macro:'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
 astro:'<path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5z"/><path d="M5 18l.7 1.5L7 20l-1.3.5L5 22l-.7-1.5L3 20l1.3-.5z"/>',
};
dial.querySelectorAll('button').forEach((b,i)=>{b.innerHTML=`<svg class="ic" viewBox="0 0 24 24">${ICONS[GENRES[i].k]}</svg><span class="c">${GENRES[i].c}</span>${GENRES[i].n}`;});

// ---- dial map
let lever=null;
const DIALS={1:{front:'Shutter',rear:'Exp. comp',note:'Lever 1 — front dial shutter speed, rear dial exposure compensation. BIF and Street live here with Auto ISO, so a bird crossing bright sky is one twist from rescued.'},
             2:{front:'Shutter',rear:'Aperture',note:'Lever 2 — front dial shutter speed, rear dial aperture. Landscape, Macro and Astro default here; BIF and Street flick here to pre-set aperture.'}};
const MODEPOS={landscape:[372,76],bif:[388,84],street:[394,98],macro:[388,112],astro:[372,120]};
function renderDials(){
 const g=GENRES.find(x=>x.k===genre);
 const l=lever||(g.lever==='Position 1'?1:2);
 document.querySelectorAll('#leverSeg button').forEach(b=>b.classList.toggle('on',+b.dataset.l===l));
 $('#leverKnob').setAttribute('x',l===1?118:144);
 $('#frontLab').textContent=DIALS[l].front;$('#rearLab').textContent=DIALS[l].rear;
 const p=MODEPOS[genre];$('#modeDot').setAttribute('cx',p[0]);$('#modeDot').setAttribute('cy',p[1]);
 $('#leverCard').innerHTML=`<b>${g.c} ${g.n} defaults to ${g.lever}.</b> ${DIALS[l].note} ISO: ${g.iso} — ISO itself is on the ▶ button, drive on ▼.`;
}
document.querySelectorAll('#leverSeg button').forEach(b=>b.onclick=()=>{lever=+b.dataset.l;renderDials();});
const _render=render;render=function(){lever=null;_render();renderDials();};

// ---- recipes
const SW=(h,v)=>`hsl(${h} ${v===0?10:Math.min(95,55+Math.abs(v)*8)}% ${v<0?62:50}%)`;
function wheelSVG(r,size){
 if(r.type==='mono'){
  return `<svg class="wheel" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="var(--panel2)"/><circle cx="50" cy="50" r="30" fill="url(#g${r.n.replace(/\W/g,'')})"/><defs><linearGradient id="g${r.n.replace(/\W/g,'')}" x1="0" x2="1"><stop offset="0" stop-color="#111"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient></defs><text x="50" y="54" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">${esc(r.filter||'')}</text></svg>`;
 }
 let s=`<svg class="wheel" viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="none" stroke="var(--line)" stroke-dasharray="2 2"/>`;
 r.c.forEach((v,i)=>{
  const a=(i*30-90)*Math.PI/180,a2=((i+1)*30-90)*Math.PI/180,mid=(i*30-75)*Math.PI/180;
  const R=20+ (v+5)*4.4; // -5 → 20, +5 → 64 ... scale: 0 => 42
  const x1=50+R*Math.cos(a),y1=50+R*Math.sin(a),x2=50+R*Math.cos(a2),y2=50+R*Math.sin(a2);
  s+=`<path d="M50 50 L${x1.toFixed(1)} ${y1.toFixed(1)} A${R} ${R} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}Z" fill="${SW(HUES[i],v)}" stroke="var(--panel)" stroke-width="1.2"/>`;
 });
 s+=`<circle cx="50" cy="50" r="42" fill="none" stroke="var(--ink)" stroke-opacity=".35" stroke-width=".8"/><circle cx="50" cy="50" r="13" fill="var(--panel)"/></svg>`;
 return s;
}
function curveSVG(c){
 const [s,m,h]=c; if(s==null&&m==null) return '';
 const pts=[[0,100],[33,66-(s||0)*4],[66,33-(m||0)*4],[100,-(h||0)*4]];
 const d=pts.map((p,i)=>(i?'L':'M')+p[0]+' '+(p[1]+10)).join(' ');
 return `<svg class="curve" viewBox="-2 -12 104 124"><line x1="0" y1="110" x2="100" y2="10" stroke="var(--line)" stroke-dasharray="3 3"/><path d="${d}" fill="none" stroke="var(--dial)" stroke-width="2.5" stroke-linejoin="round"/></svg>`;
}
let rtype='all',rauth='all';
const AUTH=['all',...new Set(RECIPES.map(r=>r.a))];
const rchips=$('#rchips'),achips=$('#achips');
[['all','All'],['color','Colour'],['mono','Mono']].forEach(([k,l])=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>{rtype=k;renderRecipes();};b.dataset.k=k;rchips.appendChild(b);});
AUTH.forEach(a=>{const b=document.createElement('button');b.textContent=a==='all'?'All authors':a;b.onclick=()=>{rauth=a;renderRecipes();};b.dataset.k=a;achips.appendChild(b);});
function renderRecipes(){
 rchips.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===rtype));
 achips.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===rauth));
 const list=RECIPES.filter(r=>(rtype==='all'||r.type===rtype)&&(rauth==='all'||r.a===rauth));
 $('#rcount').textContent=`${list.length} recipes · tap one for the full numbers`;
 $('#rgrid').innerHTML=list.map((r,i)=>{
  const cg=r.type==='color'?`<div class="cgrid">${r.c.map((v,j)=>`<div><i style="background:${SW(HUES[j],v||1)}"></i>${WHEEL[j]}<b>${v>0?'+':''}${v}</b></div>`).join('')}</div>`:`<p><b>Colour filter:</b> ${esc(r.filter)} · <b>Grain:</b> ${esc(r.grain)} · <b>Tone:</b> ${esc(r.tone)}</p>`;
  const cv=r.curve.map(v=>v==null?'—':(v>0?'+':'')+v);
  return `<div class="recipe" data-i="${RECIPES.indexOf(r)}"><div class="top">${wheelSVG(r)}<div><h3>${esc(r.n)}</h3><div class="by">${esc(r.a)}</div><div class="mood">${esc(r.mood)}</div><div class="tags"><span class="tag base">${esc(r.base)}</span>${r.wb?`<span class="tag">WB ${esc(r.wb)}</span>`:''}${r.partial?'<span class="tag" style="color:var(--amber)">partial</span>':''}</div></div></div>
  <div class="rdetail">
   <img class="thumb" alt="Preview of ${esc(r.n)} on the test scene" src="${previewFor(r)}">
   ${cg}
   <div style="display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;margin-top:6px">
    <div><b>Curve</b> — Shadow ${cv[0]} · Midtone ${cv[1]} · Highlight ${cv[2]}<br><b>Shading</b> ${r.shade??'—'} · <b>Sharpness</b> ${r.sharp==null?'—':(r.sharp>0?'+':'')+r.sharp} · <b>Contrast</b> ${r.con==null?'—':(r.con>0?'+':'')+r.con}</div>
    ${curveSVG(r.curve)}
   </div>
   <p style="margin-top:8px"><b>Best for:</b> ${esc(r.best)}${r.avoid&&r.avoid!=='—'?`<br><b>Avoid:</b> ${esc(r.avoid)}`:''}</p>
   ${r.partial?'<p class="partial">The source only lists part of this curve — fill the rest by eye or check the original post.</p>':''}
   ${r.src?`<p><a href="${r.src}" target="_blank" rel="noopener">Source</a></p>`:'<p class="muted" style="font-size:12.5px">From the author\'s published sheet (v3.0, Jan 2026).</p>'}
  </div></div>`;
 }).join('');
}
$('#rgrid').addEventListener('click',e=>{const c=e.target.closest('.recipe');if(c&&!e.target.closest('a'))c.classList.toggle('open');});
$('#bases').innerHTML=`<dl class="kv">${Object.entries(BASES).map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl><p class="muted" style="font-size:13px;margin:8px 0 0">COLOR 1–3 and MONO 1–3 match the Pen-F; COLOR 4 and MONO 4 are new to the OM-3. Every recipe here overrides the base's colour values anyway — the base mostly matters for mono grain and the hidden curve.</p>`;
renderRecipes();
// ---- theme toggle
const root=document.documentElement;
try{const t=localStorage.getItem('om3theme');if(t)root.dataset.theme=t;}catch(e){}
$('#theme').onclick=()=>{const cur=root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const nx=cur==='dark'?'light':'dark';root.dataset.theme=nx;try{localStorage.setItem('om3theme',nx)}catch(e){}};

// ---- overview map follows genre
const _r2=render;render=function(){_r2();const g=GENRES.find(x=>x.k===genre);$('#mapSlotName').textContent=`${g.c} · ${g.n}`;$('#wGenre').textContent=g.n;
 document.querySelectorAll('#mapSlots text').forEach((t,i)=>{t.setAttribute('fill',GENRES[i].k===genre?'var(--amber)':'var(--ink)')});renderTree();};

// ---- decision tree
const TREE={
 q:'What are you looking at?',
 o:[
  {l:'A landscape or seascape, I have a tripod',n:{q:'How is the light?',o:[
    {l:'Even — sky and ground within reach',a:{t:'C1 Landscape, lever 2',d:'ISO 200, f/5.6, shutter until the histogram sits right. Touch to focus or AF-ON. 2 s timer. Done.'}},
    {l:'High contrast — bright sky, dark foreground',n:{q:'Is anything moving (water, cloud, grass)?',o:[
      {l:'Yes, and I want it crisp',a:{t:'C1 + GND on the CP button',d:'Works when the horizon is reasonably straight. 3 stops max; if the boundary is ragged, use HDR 3F 2EV instead and blend.'}},
      {l:'Yes, and I want it smooth',a:{t:'Long exposure — see Procedures',d:'Recall C1 into M first. Test in silent (no NR), shoot in Live Time (NR on). Use the ND calculator.'}},
      {l:'No, static scene',a:{t:'C1 + Live ND 64',d:'Gains about 2.5 stops of DR in one shot with no blend. More flexible in post than GND.'}}]}}]}},
  {l:'A landscape, handheld',a:{t:'C1 Landscape, lever 2, AF-ON to focus',d:'For more DR: Live ND 32 or GND. For DR plus resolution: handheld Hi-Res (50 MP) via CP. Keep SIS on.'}},
  {l:'Birds or fast wildlife',n:{q:'What is the bird doing?',o:[
    {l:'Flying past',a:{t:'C2 BIF, lever 1',d:'SH2 25 fps, bird detection on, AF-ON for subject AF. Rear dial is exposure comp — ride it as the background changes. Set the AF limiter for the lens on the camera.'}},
    {l:'Perched, about to take off',a:{t:'C2 + Pro Capture SH2',d:'Half-press to start buffering 15 frames, full press when it goes. 100 fps SH1 if you need it and the light allows.'}}]}},
  {l:'People, street, travel',a:{t:'C3 Street, lever 1',d:'Silent sequential 10 fps so slow shutters still work. People detection on, Rec toggles it. Fn for a spot reading on a backlit face. Add a colour recipe from the Looks tab.'}},
  {l:'Something small — insect, flower, detail',n:{q:'Do you need front-to-back sharpness?',o:[
    {l:'Yes',a:{t:'C4 Macro + focus bracket',d:'AF-ON for rough focus, pull the clutch, focus on the nearest point, press Rec to run the bracket, stop when the far point is covered. Stack in Helicon.'}},
    {l:'No, one plane is fine',a:{t:'C4 Macro, manual clutch',d:'Peaking yellow/high, magnify on Fn. 2 s timer if on a tripod.'}}]}},
  {l:'Night sky',a:{t:'C5 Astro, lever 2',d:'Night LV on |O| to compose. Starry Sky AF via AF-ON, confirm with magnify on Fn. 2 s timer. Test, adjust ISO, shoot. Bracket — indicated DR lies in the dark.'}},
  {l:'Moving water, no tripod',a:{t:'C1 + Live ND',d:'IS on, CP → Live ND, rear dial picks the level. Shutter 1/8 then try 1/4 and 1/13. Or a VND on the lens and silent sequential bursts.'}},
 ]};
let treePath=[];
function renderTree(){
 let node=TREE;treePath.forEach(i=>node=node.o[i].n||node.o[i]);
 const el=$('#tree');
 const crumb=treePath.length?`<div class="crumb">${treePath.map((i,d)=>{let n=TREE;for(let k=0;k<d;k++)n=n.o[treePath[k]].n;return esc(n.o[i].l)}).join(' › ')} · <a href="#" id="treeBack">back</a></div>`:'';
 if(node.a){el.innerHTML=crumb+`<div class="ans"><b>${esc(node.a.t)}</b>${esc(node.a.d)}</div><button class="btn small" id="treeReset" style="margin-top:8px">Start over</button>`;}
 else{el.innerHTML=crumb+`<div class="q">${esc(node.q)}</div><div class="opts">${node.o.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o.l)}</button>`).join('')}</div>`;}
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{treePath.push(+b.dataset.i);renderTree();});
 const bk=el.querySelector('#treeBack');if(bk)bk.onclick=e=>{e.preventDefault();treePath.pop();renderTree();};
 const rs=el.querySelector('#treeReset');if(rs)rs.onclick=()=>{treePath=[];renderTree();};
}

// ---- slot planner
let plan;
try{plan=JSON.parse(localStorage.getItem('om3plan'))}catch(e){}
if(!plan)plan=GENRES.map(g=>({genre:g.k,color:[],mono:[]}));
function savePlan(){try{localStorage.setItem('om3plan',JSON.stringify(plan))}catch(e){}}
function renderSlots(){
 $('#slots').innerHTML=plan.map((s,i)=>{
  const g=GENRES.find(x=>x.k===s.genre);
  const mk=(list,type)=>list.map((n,j)=>{const r=RECIPES.find(x=>x.n===n&&x.type===type);return r?`<div class="mini">${wheelSVG(r)}<span>${esc(r.n)}</span><button class="x" data-s="${i}" data-t="${type}" data-j="${j}" aria-label="Remove">×</button></div>`:''}).join('')+(list.length<4?`<div class="mini add" data-s="${i}" data-t="${type}">+ add ${type==='color'?'colour':'mono'} (${list.length}/4)</div>`:'');
  return `<div class="slot"><div class="head"><div class="cnum">C${i+1}</div><select data-s="${i}">${GENRES.map(x=>`<option value="${x.k}" ${x.k===s.genre?'selected':''}>${x.n}</option>`).join('')}<option value="looks" ${s.genre==='looks'?'selected':''}>Looks only (A mode)</option></select></div>
  <div class="slotgrid"><div><h4>Colour</h4>${mk(s.color,'color')}</div><div><h4>Mono</h4>${mk(s.mono,'mono')}</div></div></div>`;
 }).join('');
 $('#slots').querySelectorAll('select').forEach(sel=>sel.onchange=()=>{plan[+sel.dataset.s].genre=sel.value;savePlan();});
 $('#slots').querySelectorAll('.x').forEach(b=>b.onclick=()=>{plan[+b.dataset.s][b.dataset.t].splice(+b.dataset.j,1);savePlan();renderSlots();});
 $('#slots').querySelectorAll('.add').forEach(b=>b.onclick=()=>openPicker(+b.dataset.s,b.dataset.t));
}
function openPicker(si,type){
 $('#pickTitle').textContent=`C${si+1} · add a ${type==='color'?'colour':'mono'} look`;
 $('#pickList').innerHTML=RECIPES.filter(r=>r.type===type&&!plan[si][type].includes(r.n)).map(r=>`<div class="row" data-n="${esc(r.n)}">${wheelSVG(r)}<div><b>${esc(r.n)}</b><div class="by">${esc(r.a)} · ${esc(r.base)}</div></div></div>`).join('');
 $('#pickList').querySelectorAll('.row').forEach(x=>x.onclick=()=>{plan[si][type].push(x.dataset.n);savePlan();$('#picker').classList.remove('on');renderSlots();});
 $('#picker').classList.add('on');
}
$('#pickClose').onclick=()=>$('#picker').classList.remove('on');
$('#picker').addEventListener('click',e=>{if(e.target.id==='picker')$('#picker').classList.remove('on')});
$('#planReset').onclick=()=>{plan=GENRES.map(g=>({genre:g.k,color:[],mono:[]}));savePlan();renderSlots();$('#planOut').innerHTML='';};
$('#planBtn').onclick=()=>{
 let out='OM-3 loading sequence\n=====================\n';
 plan.forEach((s,i)=>{
  const g=GENRES.find(x=>x.k===s.genre);
  out+=`\nC${i+1}  ${g?g.n:'Looks only'}\n`;
  out+=g?`  1. Load ${g.n} .set (or dial it in from Settings tab) · lever ${g.lever.replace('Position ','')} · ${g.iso}\n`:'  1. Mode A, your usual exposure defaults\n';
  let step=2;
  const doList=(list,type)=>list.forEach((n,j)=>{const r=RECIPES.find(x=>x.n===n&&x.type===type);if(!r)return;
   out+=`  ${step++}. Creative dial ${type==='color'?'COLOR':'MONO'} → slot ${j+1} ← "${r.n}" (${r.a})\n`;
   if(r.type==='color')out+=`     wheel 0–11: ${r.c.map(v=>(v>0?'+':'')+v).join(' ')}\n`;else out+=`     filter ${r.filter} · grain ${r.grain} · tone ${r.tone}\n`;
   out+=`     curve S${f(r.curve[0])} M${f(r.curve[1])} H${f(r.curve[2])} · shading ${r.shade??'—'} · sharp ${f(r.sharp)} · contrast ${f(r.con)}\n`;
   if(r.wb)out+=`     WB ${r.wb}  (set on SCP — only survives inside the C-slot)\n`;});
  doList(s.color,'color');doList(s.mono,'mono');
  out+=`  ${step}. Menu › Camera 1 › Reset/Custom Modes › Save to C${i+1} · name it\n`;
 });
 out+='\nAfter all five: set each slot\'s Save Settings to Reset.';
 $('#planOut').innerHTML=`<pre class="plan">${esc(out)}</pre><button class="btn" id="copyPlan">Copy</button>`;
 $('#copyPlan').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(out).then(()=>{$('#copyPlan').textContent='Copied'});};
};
const f=v=>v==null?'—':(v>0?'+':'')+v;

// ---- learn
const GLOSS=[
 ['AEL','Auto-exposure lock. On this setup the Fn button both locks exposure and switches to spot metering while held.'],
 ['AF-ON / BBF','Back-button focus. Focus with your thumb, not the shutter, so the camera never refocuses after you have set it.'],
 ['AF limiter','Tells autofocus to ignore distances outside a range — stops it hunting to infinity when a bird drops behind a branch.'],
 ['Blinkies','Highlight/shadow warnings: flashing areas that are clipped white or black.'],
 ['Bulb / Live Time','Exposures longer than 60 s. Live Time shows the image building up every 15 s so you can stop when it is right.'],
 ['C-AF / S-AF / MF','Continuous (tracks movement), single (locks once), manual.'],
 ['CP button','Computational Photography: Hi-Res, Live ND, HDR, focus stack, Live GND in one menu, front dial to cycle.'],
 ['DR','Dynamic range — how much brighter the brightest and darker the darkest parts can be before they clip.'],
 ['ESP','OM System\'s matrix/evaluative metering — reads the whole frame.'],
 ['ETTR','Expose to the right: push the histogram as far right as it goes without clipping, for the cleanest file.'],
 ['Focus bracket / stack','Camera shoots a series stepping focus; stacking merges them for front-to-back sharpness.'],
 ['GND','Graduated ND: darkens one half of the frame (usually sky). Live GND is the computational version on CP.'],
 ['HDR 3F 2EV','Three RAW frames two stops apart, blended in post.'],
 ['HHHR','Handheld Hi-Res: 50 MP composite from a burst, no tripod.'],
 ['Keep Warm Colour','Auto WB option that leaves tungsten light warm. Most recipes turn it off.'],
 ['Live ND','Computational neutral density up to ND64 (6 stops) by stacking frames — no glass needed.'],
 ['MF clutch','Pull the focus ring back on Pro lenses to drop into manual focus with a distance scale.'],
 ['ND stops','Each stop halves the light. ND8 = 3 stops, ND64 = 6, ND1000 = 10.'],
 ['Night LV','Brightens the live view in the dark, at the cost of a laggy, grainy preview.'],
 ['NR','Long-exposure noise reduction: a second dark frame as long as the first. Doubles every test shot — hence the silent-shutter trick.'],
 ['Peaking','Outlines the sharpest edges in colour while manual focusing.'],
 ['Pro Capture','Buffers frames while half-pressed, keeps the ones before you fully pressed. SH1 up to 120 fps, SH2 up to 50.'],
 ['SCP','Super Control Panel: the one-screen summary of every live setting. OK button opens it.'],
 ['SH1 / SH2','Silent high-speed bursts. SH1 fixes focus and exposure on frame one; SH2 keeps tracking.'],
 ['SIS','Sensor image stabilisation. Left on even on a tripod here — it helps in wind.'],
 ['Spot (Sh)','Spot metering biased −3 EV so a dark thing you meter stays dark.'],
 ['WB shift A / G / M','Amber warms, green and magenta tint. OM-3 shows A and M; old Pen-F recipes use A and G — G+2 ≈ M−2.'],
];
function renderGloss(q=''){q=q.toLowerCase();$('#gl').innerHTML=GLOSS.filter(([t,d])=>!q||(t+d).toLowerCase().includes(q)).map(([t,d])=>`<div><b>${esc(t)}${GLOSS_PG[t]?`<span class="mpg">p.${GLOSS_PG[t]}</span>`:''}</b>${esc(d)}</div>`).join('')||'<p class="muted">No match.</p>';}
function renderToc(q=''){q=q.toLowerCase().trim();const l=q?TOC.filter(([t])=>t.toLowerCase().includes(q)).slice(0,40):[];$('#tcount').textContent=q?`${l.length} entries${l.length===40?' (first 40)':''}`:'';$('#tocl').innerHTML=l.map(([t,p])=>`<div><b>${esc(t)}<span class="mpg">p.${p}</span></b></div>`).join('');}
$('#tq').addEventListener('input',e=>renderToc(e.target.value));
$('#lessons').innerHTML=LESSONS.map((L,i)=>`<details ${i===0?'open':''}><summary>${esc(L.t)}</summary><div class="body"><ul>${L.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="mpg">Manual: ${L.p.map(p=>'p.'+p).join(' · ')}</div></div></details>`).join('');
$('#gq').addEventListener('input',e=>renderGloss(e.target.value));

// ---- boot

// ===== menu simulator
const MTABS=[['Photo 1','1'],['Photo 2','2'],['AF','AF'],['Gear','⚙'],['Wrench','🔧']];
let mt=0,mp=0,mi=0,mfocus='page';
function menuData(){const g=genre;const tab=MTABS[mt][0];const rows=DATA.filter(r=>r.tab===tab);const pages=[...new Set(rows.map(r=>r.section))];return{rows,pages};}
function renderMenu(){
 const g=GENRES.find(x=>x.k===genre);$('#mGenre').textContent=g.n;
 $('#mtabs').innerHTML=MTABS.map((t,i)=>`<button class="${i===mt?'on':''}" data-i="${i}">${t[1]}</button>`).join('');
 const {rows,pages}=menuData();mp=Math.min(mp,pages.length-1);
 $('#mpages').innerHTML=pages.map((p,i)=>`<div class="${i===mp?'on':''}" data-i="${i}">${esc(p.replace(/^\d+\.\s*/,''))}</div>`).join('');
 const items=rows.filter(r=>r.section===pages[mp]);const seen=new Set();const list=[];
 items.forEach(r=>{if(!seen.has(r.func)){seen.add(r.func);list.push(r.func)}});
 mi=Math.min(mi,list.length-1);
 $('#mitems').innerHTML=list.map((f,i)=>{const rs=items.filter(r=>r.func===f);const v=rs.length===1?(rs[0][genre]||rs[0].general||rs[0].default||''):'›';const diff=rs.some(r=>{const x=r[genre]||r.general;return x&&x!==r.default});return `<div class="${i===mi&&mfocus==='item'?'on':''}" data-i="${i}"><b>${esc(f)}</b><span style="${diff?'color:var(--dial)':''}">${esc(v)}</span></div>`}).join('');
 const f=list[mi];const rs=items.filter(r=>r.func===f);
 let foot='';
 if(mfocus==='item'&&rs.length){const sub=rs.length>1?rs.map(r=>`${esc(r.sub)}: <b>${esc(r[genre]||r.general||r.default||'—')}</b>`).join(' · '):'';const c=rs.find(r=>r.comment);foot=`${sub}${sub&&c?'<br>':''}${c?esc(c.comment):''}${MANUAL[rs[0].func+'|'+rs[0].sub]?` <span class="mpg">p.${MANUAL[rs[0].func+'|'+rs[0].sub]}</span>`:''}`;}
 else foot=`${MTABS[mt][0]} › ${pages[mp]}`;
 $('#mfoot').innerHTML=foot||'&nbsp;';
}
$('#mtabs').addEventListener('click',e=>{const b=e.target.closest('button');if(b){mt=+b.dataset.i;mp=0;mi=0;mfocus='page';renderMenu();}});
$('#mpages').addEventListener('click',e=>{const d=e.target.closest('div[data-i]');if(d){mp=+d.dataset.i;mi=0;mfocus='item';renderMenu();}});
$('#mitems').addEventListener('click',e=>{const d=e.target.closest('div[data-i]');if(d){mi=+d.dataset.i;mfocus='item';renderMenu();}});
document.querySelectorAll('.dpad button').forEach(b=>b.onclick=()=>{const k=b.dataset.k;const {pages}=menuData();
 if(k==='menu'){mfocus='page';mi=0;}
 else if(mfocus==='page'){if(k==='left')mt=(mt+MTABS.length-1)%MTABS.length,mp=0;else if(k==='right')mt=(mt+1)%MTABS.length,mp=0;else if(k==='up')mp=Math.max(0,mp-1);else if(k==='down')mp=Math.min(pages.length-1,mp+1);else if(k==='ok')mfocus='item',mi=0;}
 else{const n=$('#mitems').children.length;if(k==='up')mi=Math.max(0,mi-1);else if(k==='down')mi=Math.min(n-1,mi+1);else if(k==='left')mfocus='page';else if(k==='right'||k==='ok'){}}
 renderMenu();});
const _r3=render;render=function(){_r3();renderMenu();renderPocket();};

// ===== drills
const SCEN=[
 {s:'Sunset over rocks, bright sky, dark foreground, small waves. Tripod up. You want the water smooth.',slot:'landscape',lever:'2',feat:'Long exposure in M then Live Time',why:'High DR plus moving water means layered exposures and a long shutter. Recall C1 into M so B inherits the right settings.'},
 {s:'Hawk circling over a paddock, bright overcast behind it.',slot:'bif',lever:'1',feat:'AF-ON subject AF, rear dial exposure comp',why:'Bright background fools the meter; lever 1 puts exposure compensation on the rear dial so you can push +1 as it crosses the sky.'},
 {s:'Market street, late afternoon, people moving, faces half in shadow.',slot:'street',lever:'1',feat:'Silent sequential 10 fps, Fn for spot',why:'Short bursts catch the gesture; Fn gives a spot reading on a backlit face.'},
 {s:'Dragonfly on a reed, still, overcast, you want it sharp from eye to tail.',slot:'macro',lever:'2',feat:'Focus bracket via Rec',why:'Depth of field at macro distance is millimetres; a bracket run stacked in Helicon gets it all.'},
 {s:'Milky Way from a dark beach, no moon.',slot:'astro',lever:'2',feat:'Night LV, Starry Sky AF on AF-ON',why:'Compose with Night LV, focus with Starry Sky AF, confirm with magnify on Fn.'},
 {s:'Waterfall, handheld, no filters in the bag.',slot:'landscape',lever:'2',feat:'Live ND via CP',why:'Live ND stacks frames for a long exposure look with no glass. Start at 1/8.'},
 {s:'Heron standing in shallows, likely to take off any second.',slot:'bif',lever:'1',feat:'Pro Capture SH2',why:'Half-press buffers 15 frames; the take-off is already captured when you react.'},
 {s:'Valley view, flat even light, tripod, nothing moving.',slot:'landscape',lever:'2',feat:'Tripod Hi-Res 80 MP via CP',why:'Still scene and tripod: the one case for full Hi-Res. Otherwise ISO 200, f/5.6, ETTR.'},
 {s:'Night city street, neon, people walking.',slot:'street',lever:'1',feat:'Auto ISO to 6400, a mono look from the slot',why:'Silent sequential allows slow shutters; Auto ISO carries the exposure. A mono profile with Red +3 holds the neon.'},
];
function buildCards(){
 const cards=[];
 GENRES.forEach(g=>{
  Object.entries(BUTTONS).forEach(([k,b])=>{const lab=b.all||b[g.k];if(!lab)return;const wrong=[...new Set(Object.values(BUTTONS).flatMap(x=>x.all?[x.all]:GENRES.map(y=>x[y.k])).filter(x=>x&&x!==lab))];cards.push({id:`b-${g.k}-${k}`,t:'buttons',ctx:`${g.c} ${g.n}`,q:`What does the ${b.n} button do?`,a:lab,w:wrong,why:typeof b.why==='string'?b.why:b.why[g.k]});});
  cards.push({id:`l-${g.k}`,t:'buttons',ctx:`${g.c} ${g.n}`,q:'Which Fn lever position, and what is the rear dial?',a:`${g.lever} — ${g.lever==='Position 1'?'exposure compensation':'aperture'}`,w:[`${g.lever==='Position 1'?'Position 2':'Position 1'} — ${g.lever==='Position 1'?'aperture':'exposure compensation'}`,'Position 1 — ISO','Position 2 — shutter speed'],why:g.lever==='Position 1'?'Auto ISO genres want exposure compensation one twist away.':'ISO 200 genres set aperture directly on the rear dial.'});
 });
 DATA.filter(r=>r.comment&&r.comment.length>30&&r.comment.length<260).forEach(r=>{GENRES.forEach(g=>{const v=r[g.k]||r.general;if(!v||v===r.default)return;const pool=[...new Set(DATA.map(x=>x.default).filter(x=>x&&x!==v))];cards.push({id:`w-${g.k}-${r.func}-${r.sub}`.replace(/\W/g,'_'),t:'why',ctx:`${g.c} · ${r.tab} › ${r.func}${r.sub&&r.sub!==r.func?' › '+r.sub:''}`,q:`McAughtry sets this to what, and why? (default ${r.default||'—'})`,a:v,w:[r.default].filter(Boolean).concat(pool.sort(()=>Math.random()-.5).slice(0,3)),why:r.comment});});});
 SCEN.forEach((s,i)=>{const g=GENRES.find(x=>x.k===s.slot);cards.push({id:`s-${i}`,t:'scenario',ctx:'Scene',q:s.s,a:`${g.c} ${g.n} · lever ${s.lever} · ${s.feat}`,w:GENRES.filter(x=>x.k!==s.slot).sort(()=>Math.random()-.5).slice(0,3).map(x=>`${x.c} ${x.n} · lever ${x.lever.replace('Position ','')} · ${x.key[0].split(':')[0]}`),why:s.why});});
 GLOSS.forEach(([t,d])=>{cards.push({id:`g-${t}`.replace(/\W/g,'_'),t:'terms',ctx:'Term',q:`What is ${t}?`,a:d,w:GLOSS.filter(x=>x[0]!==t).sort(()=>Math.random()-.5).slice(0,3).map(x=>x[1]),why:''});});
 return cards;
}
const CARDS=buildCards();
let prog={};try{prog=JSON.parse(localStorage.getItem('om3drill'))||{}}catch(e){}
let dmode='mixed',cur=null,answered=false;
const saveP=()=>{try{localStorage.setItem('om3drill',JSON.stringify(prog))}catch(e){}};
function pickCard(){
 const now=Date.now();let pool=CARDS.filter(c=>dmode==='mixed'||c.t===dmode);
 const due=pool.filter(c=>!prog[c.id]||prog[c.id].due<=now);
 const src=due.length?due:pool;
 // prefer low box
 src.sort((a,b)=>((prog[a.id]||{box:0}).box-(prog[b.id]||{box:0}).box)||Math.random()-.5);
 return src[Math.floor(Math.random()*Math.min(8,src.length))];
}
function renderDrill(){
 document.querySelectorAll('#dmode button').forEach(b=>b.classList.toggle('on',b.dataset.m===dmode));
 const pool=CARDS.filter(c=>dmode==='mixed'||c.t===dmode);const learned=pool.filter(c=>(prog[c.id]||{}).box>=3).length;const seen=pool.filter(c=>prog[c.id]).length;
 $('#dstats').innerHTML=`<div><b>${pool.length}</b> cards</div><div><b>${seen}</b> seen</div><div><b>${learned}</b> learned</div>`;
 cur=pickCard();answered=false;if(!cur){$('#dcard').innerHTML='<p class="muted">No cards.</p>';return;}
 const opts=[cur.a,...cur.w.slice(0,3)].sort(()=>Math.random()-.5);
 $('#dcard').innerHTML=`<div class="dcard"><div class="dctx">${esc(cur.ctx)}</div><div class="dq">${esc(cur.q)}</div><div class="dopts">${opts.map(o=>`<button data-a="${esc(o)}">${esc(o)}</button>`).join('')}</div><div class="dwhy" id="dwhy" style="display:none"></div></div>`;
 $('#dcard').querySelectorAll('.dopts button').forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const ok=b.dataset.a===cur.a;const p=prog[cur.id]||{box:0};p.box=ok?Math.min(5,p.box+1):0;p.due=Date.now()+[0,5,30,120,600,3000][p.box]*60000;prog[cur.id]=p;saveP();
  $('#dcard').querySelectorAll('.dopts button').forEach(x=>{if(x.dataset.a===cur.a)x.classList.add('right');else if(x===b)x.classList.add('wrong')});
  const w=$('#dwhy');w.style.display='block';w.innerHTML=(ok?'<b>Right.</b> ':'<b>Not quite.</b> ')+esc(cur.why||'');});
}
document.querySelectorAll('#dmode button').forEach(b=>b.onclick=()=>{dmode=b.dataset.m;renderDrill();});
$('#dnext').onclick=renderDrill;
$('#dreset').onclick=()=>{prog={};saveP();renderDrill();};

// ===== pocket cards + day one
function renderPocket(){
 $('#pcards').innerHTML=GENRES.map(g=>`<div class="pcard"><div class="ph"><b>${g.c}</b><span>${esc(g.n)}</span></div><dl><dt>Mode</dt><dd>M · ${esc(g.iso)}</dd><dt>Lever</dt><dd>${esc(g.lever.replace('Position ','Pos '))} — rear dial ${g.lever==='Position 1'?'exp. comp':'aperture'}</dd><dt>Fn</dt><dd>${esc(BUTTONS.fn[g.k])}</dd><dt>Rec</dt><dd>${esc(BUTTONS.rec[g.k])}</dd><dt>AF-ON</dt><dd>${esc(BUTTONS.afon[g.k])}</dd><dt>CP</dt><dd>Hi-Res · ND · GND · Stack · HDR</dd><dt>Card</dt><dd>${g.k==='bif'||g.k==='street'?'Slot 1 (fast)':'Slot 2'}</dd></dl><div style="margin-top:8px;border-top:1px solid var(--line);padding-top:6px">${g.key.slice(0,3).map(k=>esc(k)).join('<br>')}</div></div>`).join('');
}
renderMenu();renderDrill();renderPocket();

// ===== exposure simulator
const SS=[1/8000,1/4000,1/2000,1/1000,1/500,1/250,1/125,1/60,1/30,1/15,1/8,1/4,1/2,1,2,4,8,15,30,60];
const FN=[1.2,1.4,1.8,2,2.8,4,5.6,8,11,16,22];
const ISOS=[200,400,800,1600,3200,6400,12800];
const SCENES=[['Sunny beach',15],['Bright overcast',12],['Open shade',10],['Dusk',7],['City night',4],['Moonlit',1]];
const fmtSS=t=>t>=1?t+'s':'1/'+Math.round(1/t);
let sim={lever:2,ss:2,fn:6,iso:0,auto:false,ec:0,nd:0,gnd:0,scene:0,blink:true};
try{Object.assign(sim,JSON.parse(localStorage.getItem('om3sim')||'{}'))}catch(e){}
const SW_=320,SH_=213;let simBase=null;
function simScene(){
 const c=document.createElement('canvas');c.width=SW_;c.height=SH_;const x=c.getContext('2d');
 const sky=x.createLinearGradient(0,0,0,SH_*0.5);sky.addColorStop(0,'#4a86d6');sky.addColorStop(1,'#cfe0f2');x.fillStyle=sky;x.fillRect(0,0,SW_,SH_*0.5);
 const g=x.createRadialGradient(SW_*0.76,SH_*0.16,2,SW_*0.76,SH_*0.16,70);g.addColorStop(0,'rgba(255,250,230,1)');g.addColorStop(.25,'rgba(255,245,210,.9)');g.addColorStop(1,'rgba(255,245,210,0)');x.fillStyle=g;x.fillRect(0,0,SW_,SH_*0.5);
 x.fillStyle='#8aa6c8';x.beginPath();x.moveTo(0,SH_*0.5);x.lineTo(SW_*0.3,SH_*0.38);x.lineTo(SW_*0.55,SH_*0.5);x.fill();
 const sea=x.createLinearGradient(0,SH_*0.5,0,SH_*0.72);sea.addColorStop(0,'#3c93aa');sea.addColorStop(1,'#1f6a80');x.fillStyle=sea;x.fillRect(0,SH_*0.5,SW_,SH_*0.22);
 for(let i=0;i<60;i++){x.fillStyle=`rgba(255,255,255,${0.15+Math.random()*0.35})`;x.fillRect(Math.random()*SW_,SH_*0.52+Math.random()*SH_*0.18,6+Math.random()*18,1.5);}
 x.fillStyle='#2b2520';x.beginPath();x.moveTo(0,SH_*0.74);x.quadraticCurveTo(SW_*0.2,SH_*0.6,SW_*0.42,SH_*0.74);x.lineTo(SW_*0.42,SH_);x.lineTo(0,SH_);x.fill();
 x.fillStyle='#4a3c33';x.beginPath();x.moveTo(SW_*0.1,SH_*0.8);x.quadraticCurveTo(SW_*0.22,SH_*0.68,SW_*0.36,SH_*0.82);x.lineTo(SW_*0.36,SH_);x.lineTo(SW_*0.1,SH_);x.fill();
 x.fillStyle='#d8c9a3';x.fillRect(SW_*0.42,SH_*0.72,SW_*0.58,SH_*0.28);
 x.fillStyle='#8e8a84';x.fillRect(SW_*0.7,SH_*0.76,SW_*0.12,SH_*0.14);
 simBase=x.getImageData(0,0,SW_,SH_);
}
function simEV(){ // exposure value set on camera
 return Math.log2(FN[sim.fn]*FN[sim.fn]/SS[sim.ss])-Math.log2(ISOS[sim.iso]/100);
}
function simExposureOffset(){ // stops relative to correct
 const sceneEV=SCENES[sim.scene][1];
 return sceneEV-simEV()-sim.nd; // positive = overexposed
}
function autoISO(){ // choose ISO so offset+ec ~ 0 within range
 if(!sim.auto)return;
 let best=0,bd=99;
 ISOS.forEach((_,i)=>{const save=sim.iso;sim.iso=i;const d=Math.abs(simExposureOffset()+sim.ec);sim.iso=save;if(d<bd){bd=d;best=i}});
 sim.iso=best;
}
function renderSim(){
 if(!simBase)simScene();
 autoISO();
 const off=simExposureOffset()+(sim.auto?sim.ec:0);
 const cv=$('#simLV');const x=cv.getContext('2d');cv.width=SW_;cv.height=SH_;
 const img=x.createImageData(SW_,SH_);const d=img.data,b=simBase.data;
 const gain=Math.pow(2,off);const ssT=SS[sim.ss];const blur=ssT>=1/15?Math.min(40,Math.round(Math.log2(ssT*15)*6+2)):0;
 const hist=new Uint32Array(64);let clipH=0,clipS=0;
 for(let y=0;y<SH_;y++){const inSea=y>=SH_*0.5&&y<SH_*0.72;const gndF=sim.gnd?(y<SH_*0.42?1:y<SH_*0.56?1-(y-SH_*0.42)/(SH_*0.14):0):0;
  for(let xx=0;xx<SW_;xx++){let i=(y*SW_+xx)*4;let R=b[i],G=b[i+1],B=b[i+2];
   if(blur&&inSea){let r=0,g=0,bb=0,n=0;for(let k=-blur;k<=blur;k+=4){const xs=Math.min(SW_-1,Math.max(0,xx+k));const j=(y*SW_+xs)*4;r+=b[j];g+=b[j+1];bb+=b[j+2];n++}R=r/n;G=g/n;B=bb/n;}
   const gn=gain*Math.pow(2,-sim.gnd*gndF);
   const lin=v=>Math.pow(v/255,2.2)*gn;const enc=v=>Math.min(255,Math.pow(Math.min(1,v),1/2.2)*255);
   const o=[enc(lin(R)),enc(lin(G)),enc(lin(B))];
   const L=0.3*o[0]+0.59*o[1]+0.11*o[2];hist[Math.min(63,L/4|0)]++;
   if(sim.blink&&L>=245){clipH++;o[0]=230;o[1]=40;o[2]=30}else if(sim.blink&&L<=10){clipS++;o[0]=40;o[1]=90;o[2]=220}
   d[i]=o[0];d[i+1]=o[1];d[i+2]=o[2];d[i+3]=255;}}
 x.putImageData(img,0,0);
 // noise overlay for high ISO
 if(ISOS[sim.iso]>=3200){x.fillStyle='rgba(0,0,0,0)';const n=ISOS[sim.iso]>=12800?0.35:0.18;for(let k=0;k<3000;k++){x.fillStyle=`rgba(${Math.random()*255|0},${Math.random()*255|0},${Math.random()*255|0},${n})`;x.fillRect(Math.random()*SW_,Math.random()*SH_,1,1);}}
 // histogram
 const hc=$('#simHist');const hx=hc.getContext('2d');hc.width=256;hc.height=60;hx.clearRect(0,0,256,60);const mx=Math.max(...hist);
 hx.fillStyle=getComputedStyle(document.body).getPropertyValue('--ink2');for(let i=0;i<64;i++){const h=hist[i]/mx*56;hx.fillRect(i*4,60-h,3,h);}
 hx.fillStyle=getComputedStyle(document.body).getPropertyValue('--dial');hx.fillRect(245,0,1,60);hx.fillRect(10,0,1,60);
 // readout
 const meter=Math.max(-3,Math.min(3,off));
 $('#simRead').innerHTML=`<b>${fmtSS(SS[sim.ss])}</b> · <b>f/${FN[sim.fn]}</b> · <b>ISO ${ISOS[sim.iso]}${sim.auto?' A':''}</b>${sim.auto?` · EC ${sim.ec>0?'+':''}${sim.ec}`:''}${sim.nd?` · ND${Math.pow(2,sim.nd)}`:''}${sim.gnd?` · GND ${sim.gnd}`:''}`;
 $('#simMeter').innerHTML=`<span style="left:${(meter+3)/6*100}%"></span>`;
 $('#simVerdict').textContent=Math.abs(off)<0.4?'Exposure centred. Push right until highlights just start to blink, then back off a third.':off>0?`${off.toFixed(1)} stops over — ${clipH>SW_*SH_*0.01?'highlights clipping':'headroom left'}. Faster shutter, smaller aperture, lower ISO, or ND.`:`${(-off).toFixed(1)} stops under — ${clipS>SW_*SH_*0.02?'shadows blocking':'recoverable'}. Slower shutter, wider aperture, or more ISO.`;
 $('#simRear').textContent=sim.lever===1?'Exp. comp':'Aperture';
 $('#simLeverBtns').querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.l===sim.lever));
 $('#simBlur').textContent=blur?`Water blurring at ${fmtSS(ssT)}`:'';
 try{localStorage.setItem('om3sim',JSON.stringify(sim))}catch(e){}
}
function simInit(){
 const sc=$('#simScene');SCENES.forEach(([n,ev],i)=>sc.add(new Option(`${n} (EV ${ev})`,i)));sc.value=sim.scene;sc.onchange=()=>{sim.scene=+sc.value;renderSim()};
 $('#simLeverBtns').querySelectorAll('button').forEach(b=>b.onclick=()=>{sim.lever=+b.dataset.l;sim.auto=sim.lever===1;renderSim();});
 const nd=$('#simND');[0,3,4,5,6].forEach(s=>nd.add(new Option(s?`ND${Math.pow(2,s)} (${s} st)`:'Live ND off',s)));nd.value=sim.nd;nd.onchange=()=>{sim.nd=+nd.value;renderSim()};
 const gnd=$('#simGND');[0,1,2,3].forEach(s=>gnd.add(new Option(s?`GND ${s} stop`:'Live GND off',s)));gnd.value=sim.gnd;gnd.onchange=()=>{sim.gnd=+gnd.value;renderSim()};
 document.querySelectorAll('#simCtl button[data-d]').forEach(b=>b.onclick=()=>{const [w,dir]=b.dataset.d.split(':');const k=+dir;
  if(w==='front')sim.ss=Math.max(0,Math.min(SS.length-1,sim.ss+k));
  else if(w==='rear'){if(sim.lever===1)sim.ec=Math.max(-3,Math.min(3,+(sim.ec+k*0.3).toFixed(1)));else sim.fn=Math.max(0,Math.min(FN.length-1,sim.fn+k));}
  else if(w==='iso'){sim.auto=false;sim.iso=Math.max(0,Math.min(ISOS.length-1,sim.iso+k));}
  renderSim();});
 $('#simAuto').onclick=()=>{sim.auto=!sim.auto;renderSim()};
 $('#simBlink').onclick=()=>{sim.blink=!sim.blink;renderSim()};
 renderSim();
}
simInit();

// ===== guided setup course
const COURSE=[
 {t:'Module 1 · Out of the box',time:'30 min',steps:[
  ['Charge the battery fully','USB-C in the body works; a wall charger is faster. Note the battery is the same BLX-1 as the OM-1.',null],
  ['Fit the strap and set the diopter','Look through the EVF at the menu text, turn the diopter wheel until it is crisp. Do this before anything else — a soft EVF makes every later judgement wrong.',46],
  ['Insert the card in slot 2','For Landscape work this is the one the camera will write to. Insert as on p.32; format it in-camera: Wrench › Card Formatting.',391],
  ['Set date, time, zone, language','Menu › Wrench. The clock drives file names and GPS tagging from the phone.',40],
  ['Check firmware','Menu › Wrench › Firmware. Write the number down. McAughtry\'s .set files were saved on 1.003.',null],
  ['Open the Super Control Panel','Press OK with the camera in shooting mode. This one screen is where you will change most things day to day.',88],
 ],check:{q:'Which single button opens the Super Control Panel?',a:'OK',w:['MENU','INFO','Fn']}},
 {t:'Module 2 · The physical controls',time:'20 min',steps:[
  ['Find the mode dial lock','Press the centre button, turn to M. Confirm the dial will not turn without the press.',23],
  ['Find the Fn lever','Below the mode dial. Flip it 1 → 2 → 1 while watching the rear-dial label on screen change.',357],
  ['Turn the Creative Dial','Front left. Rotate through COLOR, MONO, ART, CRT and back to the centre. Nothing is saved yet.',219],
  ['Press CP, turn the front dial','Watch Hi-Res, Live ND, GND, Stack, HDR cycle. Press OK to leave.',86],
  ['Press the |O| button','This is Night LV on McAughtry\'s layout. On a factory camera it toggles the monitor view.',367],
  ['Half-press the shutter in M','Note the meter bar. In Manual the camera will not change exposure for you — the bar is advice.',164],
 ],check:{q:'Flipping the Fn lever changes which control?',a:'What the rear dial does',w:['The mode','The front dial','ISO']}},
 {t:'Module 3 · Load C1 Landscape',time:'45 min',steps:[
  ['Decide: .set file or by hand','If OM Workspace accepts the Landscape .set on your firmware, load it to C1. If not, use this app\'s Settings tab, filtered to C1 "differs from default", and go item by item.',78],
  ['Set Save Settings to Hold','Menu › Camera 1 › Custom Mode. Hold keeps your tweaks while you are learning the slot.',80],
  ['Verify the five anchor settings','Mode M, ISO 200, lever 2 → rear dial aperture, drive single silent, metering spot. Each visible on the SCP.',88],
  ['Verify the NR trick','Camera 1 › Silent settings › NR off. Camera 1 › Noise Reduction › Auto. Both, or long exposures will double.',172],
  ['Set the histogram to 245/10','Gear › Histogram Settings. Highlight 245, shadow 10.',383],
  ['Choose the JPEG picture mode','Your call: Muted (McAughtry, RAW-first) or a COLOR profile (recipe-first). Set RAW+JPEG either way.',null],
  ['Name and save','Custom Mode › Save to C1 › name it "Landscape". Turn the mode dial away and back; confirm the settings return.',78],
 ],check:{q:'Why is silent-shutter NR set Off while mechanical NR stays Auto?',a:'So test shots are fast and the final Bulb frame is still clean',w:['Silent shutter cannot do NR','To save battery','It is a factory default']}},
 {t:'Module 4 · First shots',time:'1 hour, outside',steps:[
  ['Tripod, C1, lever 2','ISO 200, f/5.6. Turn the front dial until the sun or sky just blinks red, then back off a third. That is your base exposure.',null],
  ['Touch to focus, then fire','Touch the screen on a mid-distance point. Press the shutter: it should not refocus. If it does, half-press AF is still on — fine for now.',114],
  ['CP → Live GND','3 stops, rotate the line to the horizon. Shoot. Compare on playback with the base frame.',250],
  ['CP → Live ND 64','Slow the shutter to 1/8 or slower. Watch the water go smooth.',247],
  ['CP → Hi-Res (tripod)','Shoot once. Note the wait. Compare pixel level on playback.',243],
  ['Playback with INFO','Cycle to the histogram view. Check the blinkies match what you saw live.',55],
 ],check:{q:'What should you do if the shutter half-press refocuses after you touched to focus?',a:'Nothing yet — half-press AF is still on, by design for your first weeks',w:['Reset the camera','Switch to MF','Change the lens']}},
 {t:'Module 5 · One long exposure',time:'1 hour, dusk',steps:[
  ['Recall C1 into memory','Custom Mode › Recall C1. Now M carries the same settings as C1 and B will inherit them.',78],
  ['Raise the Bulb limit','Camera 2 › Bulb/Time settings › max exposure 30 min; Live Time refresh 15 s.',273],
  ['Meter without filters','In M, set f/ and ISO so the water reads 1/640, 1/60 or 1/10. Open this app\'s ND tab.',null],
  ['Fit the ND, test in silent','Mode M, silent shutter, 15 s. Histogram about a third across means a 2-minute frame will land.',null],
  ['Switch to B, Live Time','Same ISO and aperture. Start. Watch the refreshes. Stop when the histogram sits where the test said.',70],
  ['Playback — did it match?','If not, the usual culprits: NR doubled the time, or B inherited old M settings because you skipped the recall.',null],
 ],check:{q:'B mode takes its aperture and ISO from where?',a:'M mode — which is why you recall C1 first',w:['C1 directly','The last shot','The Creative Dial']}},
 {t:'Module 6 · Looks and the other slots',time:'ongoing',steps:[
  ['Load one colour recipe into C1','Creative Dial › COLOR 1, enter the twelve values and curve from the Looks tab, set WB shift on the SCP, Save to C1 again.',225],
  ['Shoot the same scene again','Compare the JPEG with the previous one. This is the moment the recipe idea either clicks or doesn\'t.',null],
  ['Set C1 to Reset','Custom Mode › Save Settings › Reset. C1 is now locked.',80],
  ['Load C2 or C3','Whichever you shoot more. Flip to lever 1 and feel the rear dial become exposure compensation.',null],
  ['Run the Drills tab for a week','Ten cards a day. The buttons and lever questions are the ones that pay off in the field.',null],
  ['Build your Slots plan','Slots tab › assign looks › Build loading sequence. Dial them in one evening.',null],
 ],check:{q:'When should a slot be switched from Hold to Reset?',a:'Once it works and you want tweaks discarded on leaving the mode',w:['Immediately after saving','Never','Before loading the .set file']}},
];
let cp={};try{cp=JSON.parse(localStorage.getItem('om3course')||'{}')}catch(e){}
const saveC=()=>{try{localStorage.setItem('om3course',JSON.stringify(cp))}catch(e){}};
function courseStats(){let done=0,total=0;COURSE.forEach((m,i)=>{m.steps.forEach((s,j)=>{total++;if(cp[`${i}-${j}`])done++});total++;if(cp[`${i}-check`])done++});return{done,total};}
function renderCourse(){
 const el=$('#course');if(!el)return;
 el.innerHTML=COURSE.map((m,i)=>{const mdone=m.steps.every((s,j)=>cp[`${i}-${j}`]);const cdone=cp[`${i}-check`];const open=!cdone&&(i===0||cp[`${i-1}-check`]);
  return `<details ${open?'open':''}><summary><span>${esc(m.t)} <span class="muted" style="font-weight:400;font-size:13px">· ${esc(m.time)}</span></span><span class="muted" style="font-size:12px;font-weight:500">${cdone?'done':m.steps.filter((s,j)=>cp[`${i}-${j}`]).length+'/'+m.steps.length}</span></summary><div class="body">
  ${m.steps.map((s,j)=>`<label class="cstep ${cp[`${i}-${j}`]?'done':''}"><input type="checkbox" data-k="${i}-${j}" ${cp[`${i}-${j}`]?'checked':''}><div><b>${esc(s[0])}</b><span>${esc(s[1])}</span>${s[2]?`<span class="mpg">p.${s[2]}</span>`:''}</div></label>`).join('')}
  <div class="ccheck ${mdone?'':'locked'}"><div class="dctx">Check</div><div class="dq" style="font-size:16px">${esc(m.check.q)}</div>${cdone?`<div class="dwhy"><b>Done.</b> ${esc(m.check.a)}</div>`:mdone?`<div class="dopts">${[m.check.a,...m.check.w].sort(()=>Math.random()-.5).map(o=>`<button data-m="${i}" data-a="${esc(o)}">${esc(o)}</button>`).join('')}</div><div class="dwhy" id="cw${i}" style="display:none"></div>`:'<p class="muted" style="font-size:13px">Tick every step to unlock.</p>'}</div>
  </div></details>`}).join('');
 el.querySelectorAll('input[type=checkbox]').forEach(c=>c.onchange=()=>{cp[c.dataset.k]=c.checked;saveC();renderCourse();renderProgress();});
 el.querySelectorAll('.dopts button').forEach(b=>b.onclick=()=>{const m=COURSE[+b.dataset.m];const ok=b.dataset.a===m.check.a;const w=$('#cw'+b.dataset.m);w.style.display='block';if(ok){cp[`${b.dataset.m}-check`]=true;saveC();w.innerHTML='<b>Right.</b> Module complete.';setTimeout(()=>{renderCourse();renderProgress();},600);}else{w.innerHTML='<b>Not quite.</b> Look back at the steps and try again.';b.classList.add('wrong');}});
}
function renderProgress(){
 const {done,total}=courseStats();const pct=Math.round(done/total*100);
 const next=COURSE.findIndex((m,i)=>!cp[`${i}-check`]);
 const el=$('#progress');if(!el)return;
 el.innerHTML=`<div class="pbar"><i style="width:${pct}%"></i></div><div class="prow"><span><b>Setup course</b> · ${pct}% ${next>=0?'· next: '+esc(COURSE[next].t.replace(/Module \d+ · /,'')):'· complete'}</span><button class="btn small" data-s="course">${done?'Continue':'Start'}</button></div>`;
 el.querySelector('button').onclick=()=>showSection('course');
}
$('#courseReset').onclick=()=>{if(confirm('Clear course progress?')){cp={};saveC();renderCourse();renderProgress();}};
renderCourse();renderProgress();

// ===== accurate camera views (traced from manual p.23-24), tappable
const PARTS={
 mode:{n:'Mode dial (with lock)',p:50,d:'P A S M B and C1–C5. Press the centre lock to turn. Your five setups live on this dial.',map:null},
 rear:{n:'Rear dial',p:57,d:'Aperture in lever position 2, exposure compensation in position 1.',map:'lever'},
 front:{n:'Front dial (around the shutter)',p:57,d:'Shutter speed in every mode on McAughtry\'s setup.',map:null},
 shutter:{n:'Shutter button',p:51,d:'Half-press meters (and focuses in BIF and Street). Full press fires.',map:null},
 fn:{n:'Fn button',p:57,d:'Small button on the top plate behind the shutter.',map:'fn'},
 movie:{n:'Movie (Rec) button',p:73,d:'The red-dot button on the top plate. Re-assigned per slot.',map:'rec'},
 power:{n:'ON/OFF lever',p:37,d:'Top left. The photo/video/S&Q dial sits under it.',map:null},
 pvdial:{n:'Photo / Video / S&Q dial',p:49,d:'Keep it on the camera icon for stills.',map:null},
 lv:{n:'|O| (LV) button',p:45,d:'Top left plate.',map:'lv'},
 creative:{n:'Creative Dial',p:219,d:'On the front face below the shutter side. COLOR · MONO · ART · CRT. Your looks live here.',map:null},
 hotshoe:{n:'Hot shoe',p:174,d:'Flash and accessories.',map:null},
 evf:{n:'Viewfinder',p:45,d:'Diopter dial beside it — set this first.',map:null},
 cp:{n:'CP button',p:350,d:'Top right of the back, by the shoulder.',map:'cp'},
 lever:{n:'Fn lever',p:357,d:'Behind the rear dial. Flips what the rear dial does.',map:null},
 afon:{n:'AF-ON button',p:114,d:'Top right of the back. Your thumb lives here.',map:'afon'},
 menu:{n:'MENU button',p:95,d:'Opens the five-tab menu; see the Menu tab in this app.',map:null},
 info:{n:'INFO button',p:97,d:'Cycles display overlays; reaches the colour wheel inside the Creative Dial screens.',map:null},
 pad:{n:'Arrow pad',p:301,d:'◀ moves the AF point, ▶ is ISO, ▼ is Drive on McAughtry\'s setup.',map:'pad'},
 ok:{n:'OK button',p:88,d:'Opens the Super Control Panel. In shooting, snaps the AF target home.',map:'ok'},
 erase:{n:'Erase button',p:311,d:'Bottom left of the right-hand cluster.',map:null},
 play:{n:'Playback button',p:301,d:'Bottom right.',map:null},
 monitor:{n:'Monitor (touch)',p:42,d:'Tilts and flips. Touch to place focus, and to spot-meter with AEL held.',map:null},
};
function mapLabel(key){const g=genre;if(!key)return'';if(key==='lever'){const G=GENRES.find(x=>x.k===g);return `Here: ${G.lever==='Position 1'?'exposure comp (lever 1)':'aperture (lever 2)'}`;}if(key==='pad')return `Here: ◀ ${BUTTONS.left.all}, ▶ ${BUTTONS.right.all}, ▼ ${BUTTONS.down.all}`;const b=BUTTONS[key];return b?`Here: ${b.all||b[g]}`:'';}
function renderParts(){
 const el=$('#partinfo');if(!el)return;
 const id=el.dataset.id||'afon';const p=PARTS[id];const m=mapLabel(p.map);
 el.innerHTML=`<b>${esc(p.n)}</b> <span class="mpg">p.${p.p}</span><br><span class="muted">${esc(p.d)}</span>${m?`<br><span style="color:var(--dial);font-weight:600">${esc(m)}</span>`:''}`;
 document.querySelectorAll('.hot').forEach(h=>h.classList.toggle('on',h.dataset.id===id));
}
document.querySelectorAll('.hot').forEach(h=>h.addEventListener('click',()=>{$('#partinfo').dataset.id=h.dataset.id;renderParts();}));
const _r4=render;render=function(){_r4();renderParts();};
renderParts();


// ===== backup / restore
const BK_KEYS=['om3plan','om3drill','om3course','om3sim','om3genre','om3theme'];
function bkCollect(){const o={_app:'om3-field-guide',_v:1,_date:new Date().toISOString()};BK_KEYS.forEach(k=>{try{const v=localStorage.getItem(k);if(v!=null)o[k]=v}catch(e){}});return JSON.stringify(o);}
$('#bkExport').onclick=()=>{$('#bkText').value=bkCollect();$('#bkText').select();$('#bkMsg').textContent='Select all, copy, paste into Notes.';};
$('#bkDownload').onclick=()=>{try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([bkCollect()],{type:'application/json'}));a.download='om3-field-guide-backup.json';a.click();$('#bkMsg').textContent='Downloaded.';}catch(e){$('#bkMsg').textContent='Download not available here — use the text instead.';}};
$('#bkImport').onclick=()=>{try{const o=JSON.parse($('#bkText').value);if(o._app!=='om3-field-guide')throw 0;BK_KEYS.forEach(k=>{if(o[k]!=null)localStorage.setItem(k,o[k])});$('#bkMsg').textContent='Restored. Reloading…';setTimeout(()=>location.reload(),600);}catch(e){$('#bkMsg').textContent='That is not a backup from this app.';}};
// ===== keyboard access for tappable things
function keyable(sel){document.querySelectorAll(sel).forEach(el=>{if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','0');if(!el.hasAttribute('role'))el.setAttribute('role','button');el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});});}
keyable('.hot');keyable('.step[data-s]');
const _rr=renderRecipes;renderRecipes=function(){_rr();keyable('.recipe');};renderRecipes();
const _rs=renderSlots;renderSlots=function(){_rs();keyable('.mini.add');};

renderGloss();renderSlots();render();renderCompare();
const h2=location.hash.replace('#','');showSection(['overview','buttons','workflow','sims','planner','settings','nd','course','sim','menu','drills','learn'].includes(h2)?h2:'overview');
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){navigator.serviceWorker.register('sw.js').catch(()=>{});}
