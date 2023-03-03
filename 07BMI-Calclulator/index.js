const btnEle = document.getElementById("btn");
const bmiInputEle = document.getElementById("bmi-result")
const weightCondition = document.getElementById("info-text")

function calculateBMI(){
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;
    console.log(heightValue+", "+weightValue)
    
    const bmiValue = weightValue / (heightValue * heightValue)
    console.log(bmiValue)
    bmiInputEle.value = bmiValue;
    if(bmiValue < 18.5){
        weightCondition.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        weightCondition.innerText = "Normal Weight"
    } else if (bmiValue >= 25 && bmiValue <= 29.9){
        weightCondition.innerText = "Over Weight"
    } else {
        weightCondition.innerText = "Obessity"
    }
}
btnEle.addEventListener("click", calculateBMI)
