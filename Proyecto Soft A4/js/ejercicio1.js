function mostrarPares() {
    const n = parseInt(document.getElementById("n").value);
    let resultado = "";

    for (let i = 2; i <= n; i += 2) {
        resultado += i + " ";
    }
    document.getElementById("resultado").innerText = resultado.trim();
}
