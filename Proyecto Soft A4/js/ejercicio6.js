function multiplicar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    let resultado = 0;

    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
