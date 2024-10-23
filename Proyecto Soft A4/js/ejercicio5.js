function invertirNumero() {
    let num = parseInt(document.getElementById("num").value);
    let invertido = 0;

    while (num > 0) {
        invertido = invertido * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    document.getElementById("resultado").innerText = `Número invertido: ${invertido}`;
}
