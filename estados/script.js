import estados from './estados.js';

let tagUl = document.getElementById('lista-estados');

let estados = listaDeEstados[0];

for(let index = 0; index < estados.lenght; index++){

tagUl.innerHTML = "<li>Estado" + estados.nome + ", Região: " + estados.regiao.nome + "</li>";
key++
}
