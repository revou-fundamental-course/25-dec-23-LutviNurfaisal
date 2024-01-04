function reset() {
    document.getElementById("segitigaForm").reset();
    document.getElementById("result").innerHTML = "";
}

document.getElementById("resetBtn").addEventListener("click", reset);

document.getElementById("segitigaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const alas = parseFloat(document.getElementById("alas").value);

    if (tinggi > 0 && alas > 0) {
        const luas = 0.5 * alas * tinggi;
        const keliling = alas + tinggi + Math.sqrt(alas * alas + tinggi * tinggi);

        document.getElementById("result").innerHTML = `
            <h2>Hasil:</h2>
            <p>Luas: ${luas}</p>
            <p>Keliling: ${keliling}</p>
        `;
    } else {
        alert("Masukkan nilai yang lebih besar dari 0");
    }
});