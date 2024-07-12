import estados from './estados.js';

// let tagUl = document.getElementById('lista-estados');

// let estado = estados;
// // definir a variável com o nome "estados" porque é o nome do arquivo
// for(let index = 0; index < estado.length; index++){

// tagUl.innerHTML += "<li>Estado: " + estado[index].nome + "<br>" + "Região: " + estado[index].regiao.nome + "</li>" + "<br>";

//}

let tagUl = document.getElementById('lista-estados');

// definir a variável com o nome "estados" porque é o nome do arquivo
// let estado = estados[0];
// tagUl.innerHTML += "<li id='item0'>Estado: " + estado.nome + "<br>" + "Região: " + estado.regiao.nome + "</li>" + "<br>"

// let tagLi = document.getElementById('item0');

// tagLi.addEventListener('click', function(){
//     alert("Clicou na Li!")
// })

let estado = estados;

// definir a variável com o nome "estados" porque é o nome do arquivo
for(let index = 0; index < estado.length; index++){
    let estado = estados[index];
    tagUl.innerHTML += "<li id='item-"+index+"'>Estado: " + estado.nome + "<br>" + "Região: " + estado.regiao.nome + "</li>" + "<br>"
}
//"<li id='item-"+index+"'>Estado: " o +index+ serve para rodar a lista toda dentro do for(let i = 0; i<estado.length; i++){}, porém, ainda dentro do for criar outra variável "let estado = estados[i]" para conseguir executar toda lista.


for(let index = 0; index < estado.length; index++){
let tagLi = document.getElementById("item-" + index);
tagLi.addEventListener('click', function(){
    alert("Clicou na Li!")
});

}
