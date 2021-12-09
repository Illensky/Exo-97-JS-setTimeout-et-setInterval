document.querySelector("#timeout").addEventListener("click", () => {
    setTimeout( () => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
        newDiv.style.backgroundColor = "red"
        document.querySelector("#timeout-div").appendChild(newDiv)
    },2000)
})



document.querySelector("#interval-start").addEventListener("click", () => {
    let timer = 0;
    let id = setInterval(() => {
        timer += 60;
        document.querySelector("#interval-div").innerHTML = timer;
    },60)
    document.querySelector("#interval-stop").addEventListener("click", () => {
        clearInterval(id)
    })
})