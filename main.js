function render(url, boxId){
 fetch(url)
  .then(res=>res.json())
  .then(data=>{
   document.getElementById(boxId).innerHTML =
    data.map(i=>`
     <div class="card">
       <img class="icon" src="${i.icon}">
       <div class="info">
         <b>${i.name}</b>
         <div>${i.version}</div>
       </div>
       <a href="${i.link}">⬇</a>
     </div>
    `).join("");
  });
}

render("data/apps.json","apps");
render("data/keys.json","keys");
render("data/files.json","files");

/* DARK MODE */
if(localStorage.getItem("dark")==="true"){
 document.body.classList.add("dark");
}
window.addEventListener("load",()=>{
 document.body.classList.add("loaded");
});
const maiBox = document.getElementById("mai-fall");

function createMai(){
  const maiFall = document.getElementById("mai-fall");

function createMai(){
  const m = document.createElement("div");
  m.className = "mai";
  m.innerText = "🌼";

  m.style.left = Math.random() * 100 + "vw";
  m.style.fontSize = (14 + Math.random() * 10) + "px";
  m.style.animationDuration = (5 + Math.random() * 4) + "s";
  m.style.opacity = Math.random() * 0.6 + 0.4;

  maiFall.appendChild(m);

  setTimeout(()=>m.remove(), 10000);
}

setInterval(createMai, 500);
