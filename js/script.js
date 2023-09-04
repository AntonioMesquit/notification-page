const numero = document.querySelector(".number");
const boxs = document.querySelectorAll(".box");
const mark = document.querySelector(".mark")
const boxs2 = document.querySelectorAll(".box.active");

function vzs(){
    const boxs2 = document.querySelectorAll(".box.active");

    numero.innerHTML = boxs2.length
}
for(let i = 0; i < boxs.length; i++){
    boxs[i].addEventListener('click' , function() {
       this.classList.toggle("active");  
       vzs();
    })
  
}
function desmarcarCaixas() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].classList.remove("active");
    }
    vzs(); 
}

vzs();
mark.addEventListener('click' , function(){
    desmarcarCaixas();
    vzs()
})
vzs()
