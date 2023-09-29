const arregloBoton = document.querySelectorAll("button")
const numberHTML = document.querySelector(".flex>h2")

let numeroReal = 0
numberHTML.innerText = numeroReal

function Sumar(sumando){
    numeroReal = numeroReal + sumando // es lo mismo que +=
    numberHTML.innerText = numeroReal
}

arregloBoton.forEach((btn) => {
    btn.addEventListener('click',(evento)=>{
        let numero = Number(evento.target.innerText)
        Sumar(numero)
        // console.log(numero)
    })
})
