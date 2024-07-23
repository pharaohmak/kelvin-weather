function convertTemperature() {
    const kelvin = document.getElementById('kelvin').value;
    const celsius = kelvin - 273;
    let fahrenheit = celsius * (9 / 5) + 32;
    fahrenheit = Math.floor(fahrenheit);

    document.getElementById('results').innerHTML = `
        <p>The temperature is ${celsius} degrees Celsius.</p>
        <p>The temperature is ${fahrenheit} degrees Fahrenheit.</p>
    `;
}