const btn = document.querySelector("#butt")
const btn1 = document.querySelector("#butt1")
const container = document.querySelector(".Container")
const msg = document.createElement("div")

msg.textContent = " AINDA BEM QUE VC ACEITOU, agora vamos marcar o dia"

btn.addEventListener("click", function(){
    this.textContent= "sim"
    
        btn1.textContent= "não"

        container.insertAdjacentElement("beforeend",msg)

    
})

btn1.addEventListener("click", function(){
    this.textContent= "sim"

    
        btn.textContent= "não"

        container.insertAdjacentElement("afterbegin",msg)

    
})

