//Joseph Francisco Pereira: 7, 14, 5, 3, 1

//funcao

//getelementbyid

//addeventlistner

//-----------exercicio7---------//
function exercicio7() {

   const numero = Number( prompt("peça um numero"))
   const numeroanterior = Number( prompt(" numero anterio "))
   const numerosucessor = Number( prompt("numero sucessor"))
     const resultado = (numeroanterior + numerosucessor)
     alert ("o resultado é:" + resultado)
}

const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7()})
 
//------------------exercicio 1-----------------//

function exercicio1() {

const numero1 = Number( prompt("digite o primeiro numero"))
const numero2 = Number( prompt(" digite o segundo numero"))
const resultado = (numero1 + numero2)
alert("o resultado è:" + resultado)

}
    const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1()})

//---------3----------//

function exercicio3() {
 
    const pessoa1 = Number(prompt("dogite o peso da rpimeira pessoa"))
    const pessoa2 = Number(prompt("dogite o peso da segunda pessoa"))
    const pessoa3 = Number(prompt("dogite o peso da terceira pessoa"))
    const pessoa4 = Number(prompt("dogite o peso da quarta pessoa"))
    const pessoa5 = Number(prompt("dogite o peso da quinta pessoa"))
      const resultado = (pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5)
    alert (" o resultado é:" + resultado )
}

const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3()})


//----------- exercicio 14 ----------//
 function exercicio14() {

const horario1 = Number(prompt("bom dia 05:11"))
const horario2 = Number(prompt("boa tarde 12:17"))
const horario3 = Number(prompt("boa noite 18:14"))
     const resultado = ( horario1 + horario2 + horario3)
   alert ("horarios" + resultado)


 }
    const buttonexercicio14 = document.getElementById("exercicio14")
buttonexercicio14.addEventListener('click', () => { exercicio14()}) 