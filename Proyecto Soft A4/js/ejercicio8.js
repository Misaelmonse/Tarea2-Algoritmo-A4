function mostrarFibonacci() {
    const n = parseInt(document.getElementById("n").value);
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    document.getElementById("resultado").innerText = fibonacci.slice(0, n).join(", ");
}
