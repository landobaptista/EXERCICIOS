cx1 = document.getElementById(`n1`)
cx2 = document.getElementById(`n2`)
resultado = document.getElementById(`resultado`)



function contardor (){

    if(cx1.value.length == 0 || cx2.value.length == 0){

        alert(`Introduza todos os valores de uma só vez`)
        
    }
    else{
        
        n1 = Number(cx1.value)
        n2 = Number(cx2.value)


    }   if(n1 < n2){

         resultado.innerHTML = `<h2>Contangem progreciva de ${n1} até ${n2}</h2>`
        for(let c = n1 ; c <= n2 ; c++){
            resultado.innerHTML += ` &#x1F449 ${c}`
        }
   
    }else{

            resultado.innerHTML += `<h2>Contagem regreciva de ${n1} até ${n2}</h2>`
            for(let c = n1 ; c >= n2 ; c--){
                resultado.innerHTML += `&#x1F449 ${c}`
            }
    }

    cx1.value =``
    cx2.value = ``
    
    cx1.focos()
    cx2.focos()
    
}

cx01 = document.getElementById(`n01`)
cx02 = document.getElementById(`x2`)
resultado2 = document.getElementById(`resultado2`)

function tabuada () {

    if(cx01.value.length == 0 ){

        alert(`Introduza um número para representar-mos a tabuada`)
    }
    else if(x2.checked){

        n1 = Number(cx01.value)

        resultado2.innerHTML = `  <h2> &#x1F449 Tabuada do &#x1F449 ${n1} divisão &#x1F448 </h2>  `
        for(let c = 1 ; c <= 10 ; c++){
            resultado2.innerHTML += `<br> ${n1} ÷ ${c} = ${n1/c}`
        }


    }
    else{
        n1 = Number(cx01.value)
        resultado2.innerHTML = `  <h2> &#x1F449 Tabuada do &#x1F449 ${n1} multiplicação &#x1F448 </h2>  `
        for(let c = 1 ; c <= 10 ; c++){
            resultado2.innerHTML += `<br> ${n1} X ${c} = ${n1*c}`
        }

    }

    cx01.value = ``
    cx01.focos()
}

cxa = document.getElementById(`a`)
cxb = document.getElementById(`b`)
cxc = document.getElementById(`c`)
resultado3 = document.getElementById(`resultado3`)

function equação () {

   if(cxa.value.length == 0 || cxb.value.length == 0 || cxc.value.length == 0 ){

    alert(`Coloque todos os valores para visualisar o resultado`)
   }
   else{

    A = Number(cxa.value)
    B = Number(cxb.value)
    C = Number(cxc.value)

   

    D = ((-B)**2 - 4*A*C)

    if( D < 0 ){

        alert(`Delta menor que zero, não foi posivel enclontrae a raiz`)
    }
    else{

        R = D**(1/2)
        
        X1 = (-B - R)/2*A
        X2 = (-B + R)/2*A

       resultado3.innerHTML = `<h2>Para &#x1F449 A = ${A} &#x1F449 B = ${B} &#x1F449 C = ${C}</h2>`

       resultado3.innerHTML += `<h3>X1 = ${-B} + ${R}/ 2.${A}  &#x1F449 X1 = ${(-B + R)/ 2*A}</h3> `
        resultado3.innerHTML += `<h3>X2 = ${-B} - ${R}/ 2.${A}  &#x1F449 X2 = ${(-B - R)/ 2*A}</h3> `

       
       

    }

   

   }
   cxa.value = ``
   cxb.value = ``
   cxc.value = ``

   cxa.focos()
   cxb.focos()
   cxc.focos()
}

cxa2 = document.getElementById(`ia`)
cxb2 = document.getElementById(`ib`)
resultado4 = document.getElementById(`resultado4`)

function incompleta()  {

    if(cxa2.value.length == 0 || cxb2.value.length == 0){

        alert(`Inttroduza todos os valores para efectuar o calculo`)
    }
    else{

        A = Number(cxa2.value)
        B = Number(cxb2.value)

      if(B <= 0){

       X1 = 0
       X2 = (B/-A)
        

       resultado4.innerHTML = `para &#x1F449 A = ${A} &#x1F449 B = ${B}`

        resultado4.innerHTML += `X1 = ${X1}`
        resultado4.innerHTML += `X2 = ${X2}`
        
      }
      else{

        X1 = 0
        X2 = (-B/A)

        resultado4.innerHTML = `<h2>para &#x1F449 A = ${A} &#x1F449 B = ${B}</h2> `

        resultado4.innerHTML += `<h3>&#x1F449 X1 = ${X1} <br> &#x1F449 X2 = ${X2}</h3>`
       


      }
      
        
      
    }
}