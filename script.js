function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(temperatureInput)) {
        resultDiv.innerText = 'Please enter a valid number!';
        return;
    }
    
    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    if (unitInput === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unitInput === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unitInput === 'Kelvin') {
        convertedTemperature = temperature - 273.15;
        convertedUnit = 'Celsius';
    }
    
    if (unitInput === 'Celsius') {
        convertedTemperature = (temperature + 273.15);
        convertedUnit = 'Kelvin';
    } else if (unitInput === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        convertedUnit = 'Kelvin';
    } else if (unitInput === 'Kelvin') {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        convertedUnit = 'Fahrenheit';
    }

    resultDiv.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
