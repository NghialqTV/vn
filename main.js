function toggleMenu(){menu.classList.toggle('show');}
function toggleDark(){document.body.classList.toggle('dark');
localStorage.setItem('dark',document.body.classList.contains('dark'));}
if(localStorage.getItem('dark')==='true'){document.body.classList.add('dark');}

admin.innerHTML=`<h2>${ADMIN.name}</h2>`;
apps.innerHTML='<h2>Tải App</h2>'+APPS.map(a=>`
<div class="card"><b>${a.name}</b><a href="${a.link}" onclick="count('${a.id}')">⬇</a></div>`).join('');
keys.innerHTML='<h2>Get Key</h2>'+KEYS.map(k=>`
<div class="card"><b>${k.name}</b><a href="${k.link}">↗</a></div>`).join('');
files.innerHTML='<h2>File Mod</h2>'+FILES.map(f=>`
<div class="banner"><img src="${f.image}"><a href="${f.link}">Tải</a></div>`).join('');

function count(id){fetch(`https://api.countapi.xyz/hit/tumadam/${id}`);}
