function dividir() {
    const dividendo = parseInt(document.getElementById("num1").value);
    const divisor = parseInt(document.getElementById("num2").value);
    let cociente = 0;
    let resta = dividendo;

    while (resta >= divisor) {
        resta -= divisor;
        cociente++;
    }

    document.getElementById("resultado").innerText = `Cociente: ${cociente}, Resto: ${resta}`;
}
