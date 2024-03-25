let conta = 0
let pessoas=0

 
const  contaInput=document.querySelector("#conta")
contaInput.addEventListener("input",recebervalorconta)

function recebervalorconta(evento){
   conta=number(evento.target.value)
}

const pessoasinput= document.querySelector("#pessoas")
pessoasinput.addEventListener("input",receberquantidadesdepessoas)



function receberquantidadesdepessoas(evento){
    const diverro=document.querySelector(".pessoas .input-box")
    const paragrafoerro=document.querySelector(".pessoas #erro")
   if(evento.target.value === "0") {
    
    paragrafoerro.style.display="block"
    diverro.setAttribute("id","erro-div")
    } else {
        paragrafoerro.style.display="none"
        diverro.setAttribute("id","")  
        pessoas=number(evento.target.value)
    }
}