function verificarPerfecto() {
    const num = parseInt(document.getElementById("num").value);
    let suma = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }

    document.getElementById("resultado").innerText = suma === num ? `${num} es un número perfecto.` : `${num} no es un número perfecto.`;
}
