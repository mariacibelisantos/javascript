import estados from './estados.js';

let tagUl = document.getElementById('lista-estados');

let estado = estados;
// definir a variável com o nome "estados" porque é o nome do arquivo
for(let index = 0; index < estado.length; index++){

tagUl.innerHTML += "<li>Estado: " + estado[index].nome + "<br>" + "Região: " + estado[index].regiao.nome + "</li>" + "<br>";

}
