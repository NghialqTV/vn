function showTab(id){
 document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}
showTab('apps');

function render(url, el, showBanner=false){
 fetch(url)
  .then(r=>r.json())
  .then(data=>{
   document.getElementById(el).innerHTML = data.map(i=>`
    <div class="card">

      ${showBanner && i.banner ? `
      <div class="file-banner">
        <img src="${i.banner}">
      </div>` : ``}

      <img src="${i.icon}">
      <b>${i.name}</b>
      <div>${i.version}</div>

      <a href="${i.link}" class="btn">Tải</a>
    </div>
   `).join('')
  })
}

render('data/apps.json','apps');
render('data/keys.json','keys');
render('data/files.json','files', true);

window.addEventListener("load",()=>{document.body.classList.add("loaded");});

function toggleDark(){
 document.body.classList.toggle("dark");
 localStorage.setItem("dark",document.body.classList.contains("dark"));
}
if(localStorage.getItem("dark")==="true"){document.body.classList.add("dark");}

const petals=document.getElementById("petals");
setInterval(()=>{
 const p=document.createElement("div");
 p.className="petal";
 p.innerText="🌼";
 p.style.left=Math.random()*100+"vw";
 p.style.animationDuration=5+Math.random()*5+"s";
 petals.appendChild(p);
 setTimeout(()=>p.remove(),10000);
},500);
