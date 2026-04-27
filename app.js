function toggleTheme(){
  document.body.classList.toggle("light");
}

function switchTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));

  document.getElementById('panel-'+id).classList.add('active');
  event.target.classList.add('active');
}

// 🔥 FULL DATA (FROM YOUR FILE)
const topics = {
s1:[
{title:"Decline of the Mughal Empire",year:"c.1700s",
facts:"By the early 18th century the Mughal Empire had weakened significantly. Aurangzeb's death in 1707 triggered a succession crisis.",
reason:"Wars drained the treasury and governors became independent.",
impact:"British expanded influence.",
dp:"Battle of Plassey (1757) gave British control of Bengal."},

{title:"East India Company",year:"1600–1857",
facts:"Founded in 1600 for trade.",
reason:"Weak Mughal rule allowed expansion.",
impact:"Controlled most of India by 1850.",
dp:"Doctrine of Lapse angered rulers."},

{title:"War of Independence 1857",year:"1857",
facts:"Started in Meerut.",
reason:"Cartridges + taxation.",
impact:"British Crown took control.",
dp:"Muslims heavily punished."}
],

s2:[
{title:"Partition of Bengal",year:"1905",
facts:"Divided Bengal.",
reason:"Administrative + political.",
impact:"Muslims supported, Hindus opposed.",
dp:"Reversal angered Muslims."},

{title:"Simla Deputation",year:"1906",
facts:"Muslims met Viceroy.",
reason:"Wanted representation.",
impact:"Separate electorates accepted.",
dp:"Led to Muslim League."}
],

s3:[
{title:"Jinnah as Governor General",year:"1947–48",
facts:"Led Pakistan early days.",
reason:"Trusted leader.",
impact:"Set direction.",
dp:"11 August speech important."}
]
};

const practiceQs = [
{q:"Was Sir Syed important?",
a:"Write both sides + evaluation"}
];

// RENDER
function renderTopics(section){
  const container = document.getElementById(section+'-topics');
  container.innerHTML = '';

  topics[section].forEach((t,i)=>{
    container.innerHTML += `
      <button class="topic-btn" onclick="toggleTopic('${section}',${i})">
        ${t.title} <span>${t.year}</span>
      </button>

      <div class="content-box" id="${section}-box-${i}">
        <b>Facts</b><p>${t.facts}</p>
        <b>Reason</b><p>${t.reason}</p>
        <b>Impact</b><p>${t.impact}</p>
        <b>DP</b><p>${t.dp}</p>
      </div>
    `;
  });
}

function toggleTopic(section,i){
  const box = document.getElementById(`${section}-box-${i}`);
  box.classList.toggle('open');
}

function filterTopics(section,val){
  const btns = document.querySelectorAll(`#${section}-topics .topic-btn`);
  btns.forEach(b=>{
    b.style.display = b.innerText.toLowerCase().includes(val.toLowerCase()) ? '' : 'none';
  });
}

function renderPractice(){
  const el=document.getElementById('practice-qs');
  practiceQs.forEach((p,i)=>{
    el.innerHTML+=`
      <div class="q-card">
        <b>${p.q}</b>
        <button onclick="toggleAns(${i})">Show</button>
        <div id="ans-${i}" style="display:none">${p.a}</div>
      </div>
    `;
  });
}

function toggleAns(i){
  const el=document.getElementById('ans-'+i);
  el.style.display = el.style.display==="none"?"block":"none";
}

// INIT
renderTopics('s1');
renderTopics('s2');
renderTopics('s3');
renderPractice();
