function mostrarDivisores() {
    const num = parseInt(document.getElementById("num").value);
    let resultado = "";

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            resultado += i + " ";
        }
    }
    document.getElementById("resultado").innerText = resultado.trim();
}
