function convertTemp() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const result = document.getElementById("result");

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp = 0;
    let message = "";

    if (unit === "celsius") {
        convertedTemp = (temp * 9/5) + 32;
        message = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
    } else if (unit === "fahrenheit") {
        convertedTemp = (temp - 32) * 5/9;
        message = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
    } else if (unit === "kelvin") {
        convertedTemp = temp - 273.15;
        message = `${temp}K = ${convertedTemp.toFixed(2)}°C`;
    }

    result.textContent = message;
}
