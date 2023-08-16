// https://api.github.com/users
const divContenedor = document.getElementById("app");

function getGitResults(url) {
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data)
        return data
    })
    .catch(function(err) {
        console.log(err)
    })
}

getGitResults("https://api.github.com/users")
    .then(function(usuarios) {
        const primerosCuatro = limitaUsuarios(usuarios);
        console.log(primerosCuatro)
        primerosCuatro.forEach(function(element) {
            const img = document.createElement('img');
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const a = document.createElement('a');
            div.className = "card"
            img.src = element.avatar_url;
            img.alt = element.login;
            h2.textContent = element.login
            a.textContent = "GitHub"
            a.href = element.avatar_url+"/"+element.login
            a.target = "blank"
            a.className = "button"
            divContenedor.appendChild(div)
            div.appendChild(img)
            div.appendChild(h2)
            div.appendChild(a)
        })
        return primerosCuatro;
    })
    .catch(function(error) {
        console.log(error);
    });
    

function limitaUsuarios(usuarios){
    const limitados = [];
    for(let i = 0 ; i<4; i++){
        limitados.push(usuarios[i])
    }
    return limitados;
}