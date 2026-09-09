const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");

function calc(){
    const num = Number(numberInput.value)
    const percent = Number(percentInput.value)

    percentageResult.innerHTML = num * percent / 100
    finalResult.innerHTML = num + (num * percent / 100)
}

calculateBtn.addEventListener("click", calc)