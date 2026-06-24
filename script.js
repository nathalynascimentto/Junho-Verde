let tamanhoFonte = 16;

function aumentarFonte(){

tamanhoFonte += 2;

document.documentElement.style.setProperty(
"--fonte",
tamanhoFonte + "px"
);

}

function diminuirFonte(){

if(tamanhoFonte > 12){

tamanhoFonte -= 2;

document.documentElement.style.setProperty(
"--fonte",
tamanhoFonte + "px"
);

}

}

function alternarContraste(){

document.body.classList.toggle(
"contraste"
);

}

function modoLeitura(){

document.body.classList.toggle(
"modo-leitura"
);

}

function lerPagina(){

const texto =
document.body.innerText;

const fala =
new SpeechSynthesisUtterance(
texto
);

fala.lang = "pt-BR";

speechSynthesis.cancel();

speechSynthesis.speak(fala);

}

for(let i=0;i<30;i++){

const p =
document.createElement("span");

p.classList.add(
"particula"
);

p.style.left =
Math.random()*100 + "%";

p.style.top =
Math.random()*100 + "%";

p.style.animationDelay =
Math.random()*5 + "s";

document.body.appendChild(p);

}

const secoes =
document.querySelectorAll(
".secao"
);

secoes.forEach(secao=>{

secao.style.opacity="0";

secao.style.transform=
"translateY(40px)";

secao.style.transition=
".8s";

});

function revelar(){

secoes.forEach(secao=>{

if(
secao.getBoundingClientRect().top
<
window.innerHeight - 100
){

secao.classList.add(
"ativo"
);

}

});

}

window.addEventListener(
"scroll",
revelar
);

revelar();
