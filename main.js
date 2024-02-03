const screen1= document.querySelector(".screen1")
const screen2=document.querySelector(".screen2")
const coockie = document.querySelector("#cookie")
const btn = document.querySelector("button")


const message = [
  one = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  two = "Para cada problema exite um desafio, para cada desafio existe uma solução",
  three = "Não importa que voçê vá devagar, contanto que você não pare",
  four = "A felicidade não é algo pronto. Ela é feita das suas proprias ações ",

]
coockie.addEventListener('click',transformCookie)
btn.addEventListener('click',resetClick)

function transformCookie(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  document
  screen2.querySelector("#luck").innerText = message[Math.floor(Math.random()*4)]
}


function resetClick(event){
  event.preventDefault()
transformCookie()


}






