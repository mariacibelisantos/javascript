const url = "https://randomuser.me/api/?results=10"

async function randomuser() {
    const response = await fetch(url);
    const data = await response.json();

    let tagUl = document.getElementById('list-user');

    for(let i=0; i<data.results.length; i++) {
        tagUl.innerHTML += "<li>Usuários: " + data.results[i] + "</li>"
    }
}