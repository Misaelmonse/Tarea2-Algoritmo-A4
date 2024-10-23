function verificarPrimo() {
    const num = parseInt(document.getElementById("num").value);
    let esPrimo = true;

    if (num <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    document.getElementById("resultado").innerText = esPrimo ? `${num} es un número primo.` : `${num} no es un número primo.`;
}
