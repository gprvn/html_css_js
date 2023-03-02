const celsiusEle = document.getElementById("celsius");
const fahrenheitEle = document.getElementById("fahrenheit");
const kelvinEle = document.getElementById("kelvin");


function computeTemp(event){
    const currentValue = +event.target.value;
    switch (event.target.name) {
        case "celsius":
            kelvinEle.value = (currentValue + 273.32).toFixed(2);
            fahrenheitEle.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEle.value = ((currentValue - 32)/1.8).toFixed(2);
            kelvinEle.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEle.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEle.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}