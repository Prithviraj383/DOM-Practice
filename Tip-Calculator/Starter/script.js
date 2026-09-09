function calculateTip(){

    //base cases

    //select elems
    const billAmnt = Number(document.querySelector("#bill").value)
    const serviceQlt = Number(document.querySelector("#service").value)
    const ppl = Number(document.querySelector("#people").value)
    
    if(billAmnt <= 0){
        alert("Enter a valid input")
        return;
    }

    if(ppl < 1){
        alert("Enter a valid input")
        return
    }
    
    const tipAmnt = billAmnt * serviceQlt
    const totalAmnt = billAmnt + tipAmnt
    const perPerson = totalAmnt / ppl
    const tipPerPerson = tipAmnt / ppl

    //injecting these contents back to html

    document.querySelector("#tipAmount").innerHTML =   `${tipPerPerson.toFixed(2)}`
    document.querySelector("#totalAmount").innerHTML = `${totalAmnt.toFixed(2)}`
    document.querySelector("#perPerson").innerHTML = `${perPerson.toFixed(2)}`
    document.querySelector("#tipPerPerson").innerHTML = `${tipPerPerson.toFixed(2)}`
}

document.getElementById("calculateBtn").addEventListener('click', calculateTip)     

