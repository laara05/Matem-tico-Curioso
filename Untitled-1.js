<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Secuencia Matemática</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .container {
        text-align: center;
    }
    button {
        padding: 10px 20px;
        font-size: 16px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>
</head>
<body>
<div class="container">
    <h2>Secuencia Matemática</h2>
    <label for="semilla">Ingresa la semilla:</label>
    <input type="number" id="semilla" min="1" max="9999">
    <button onclick="calcularSecuencia()">Calcular</button>
    <div id="resultado"></div>
</div>

<script>
    function calcularSecuencia() {
        var semilla = parseInt(document.getElementById('semilla').value);
        var secuencia = [];
        var maximo = semilla;
        
        while (semilla !== 1 && secuencia.length < 5000) {
            if (semilla % 2 === 0) {
                semilla = semilla / 2;
            } else {
                semilla = semilla * 3 + 1;
            }
            secuencia.push(semilla);
            maximo = Math.max(maximo, semilla);
        
        
        document.getElementById('resultado').innerHTML = `
            <p>El largo de la secuencia es: ${secuencia.length}</p>
            <p>El número más grande en la secuencia es: ${maximo}</p>
        `;
    }
</script>
</body>
</html>