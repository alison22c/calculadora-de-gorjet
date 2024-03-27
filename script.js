let conta = 0
let pessoas=0
let porcentagem=0
 
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

const botoesgorteja=document.querySelectorAll(".gorjeta input[type='button']")
botoesgorteja.forEach(botao=>{
    botao.addEventListener("click",receberporcentagem)
})

function receberporcentagem(evento){

    botoesgorteja.forEach(botao=> {
        botao.classList.remove("botao-ativo")



        if(botao.value === evento.target.value)
            botao.classList.add("botao-ativo")
    })



    if (evento.target.value !== ""){
        porcentagem=parseFloat(evento.target.value)/100
    }else{
        porcentagem=0
    }

   
    console.log(porcentagem)
}

const gorjetaInput=document.querySelector("#outra")
gorjetaInput.addEventListener("input",receberporcentagem)