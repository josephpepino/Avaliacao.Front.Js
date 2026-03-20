//Joseph Francisco Pereira: 7, 17, 6, 15

//funcao

//getelementbyid

//addeventlistner

//-----------exercicio7---------//
function exercicio7() {

    const distancia = Number(prompt("distancia em quilometros"))
    const converter = Number(prompt("converter para metros e centimetros"))
    alert("a resposta é:" + distancia + converter) 
 
}

const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7()})
 
//------------------exercicio6-----------------//

function exercicio6() {
 
    const total = Number(prompt("digite a duracao em segundos"))
    const horas = parseInt(total / 3600)
    const resto = total % 3600
    const m = parseInt(resto/60)
    const segundos = resto & 60
    alert("a resposta é" + horas + m + segundos)
}

const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => { exercicio6()})


//--------------exercicio15----------//

function exercicio15() {
 
const numero1 = Number(prompt("digite o primeiro numero"))
const numero2 = Number(prompt("digite o segundo numero"))
if (numero1 > numero2) {
    alert("o maior numero é:" + numero1)
} else if (numero2 > numero1) 
    alert("o maior numero é:" + numero2) 
else {
    alert ("os dois numeros são iguais!")
}
   

}

const buttonexercicio15 = document.getElementById("exercicio15")
buttonexercicio15.addEventListener('click', () => { exercicio15()})
 


