const buttons = document.querySelectorAll("button")
const textDisplay = document.querySelector(".display")



function clearDisplay() {
    textDisplay.innerText = ""
}

function result() {
    try {

        const resultCalc = eval(textDisplay.innerText)
        textDisplay.innerText = resultCalc


    } catch {
        textDisplay.innerText = "ERROR"
    }
}



buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value")


        if (value === "C") {
            clearDisplay()
        } else if (value === "=") {
            result()


        } else {
            textDisplay.innerText += value

        }



    })
})