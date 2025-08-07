const buttons =document.querySelectorAll(".btm")
const textDisplay = document.querySelector(".input-display")


function clearDisplay(){
    textDisplay.innerText = ""
}

function result{
    const resultCalc = eval(textDispaly.innerText)
    textDisplay.innerText = resultCalc
}

buttons.forEach(button =>{
    button.addEventListener("click",() =>{
        const value = button.getAttribute("data-value")
       

        if(value === "C"){
            clearDisplay()
        }else if(value==="="){
            result()

        }else{
             textDisplay.innerText += value
        }
    })
})