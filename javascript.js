const operaciones = [];

while (true) {
    const operacion = prompt("Ingresa la operación que deseas realizar (suma, resta, multiplicacion, division) o escribe 'esc' para salir:");

    if (operacion.toLowerCase() === "esc") {
        break;
    }

    const operacionesValidas = ["suma", "resta", "multiplicacion", "division"];
    if (!operacionesValidas.includes(operacion.toLowerCase())) {
        alert("Error en la Operación. Por favor, Ingresar texto nuevamente.");
        continue;
    }

    const numero1 = parseFloat(prompt("Ingresar el 1er Monto:"));
    const numero2 = parseFloat(prompt("Ingresar el 2do Monto:"));

    function suma(a, b) {
        return a + b;
    }

    function resta(a, b) {
        return a - b;
    }

    function multiplicacion(a, b) {
        return a * b;
    }

    function division(a, b) {
        return a / b;
    }

    let resultado;
    switch (operacion.toLowerCase()) {
        case "suma":
            resultado = suma(numero1, numero2);
            break;
        case "resta":
            resultado = resta(numero1, numero2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(numero1, numero2);
            break;
        case "division":
            resultado = division(numero1, numero2);
            break;
    }

    const operacionObjeto = {
        operacion: operacion,
        numero1: numero1,
        numero2: numero2,
        resultado: resultado
    };

    operaciones.push(operacionObjeto);
}

const operacionesPositivas = operaciones.filter(op => op.resultado >= 0);

const operacionesNegativas = operaciones.filter(op => op.resultado < 0);

const operacionBuscada = prompt("Ingresa la operación que deseas buscar:");

const operacionEncontrada = operaciones.find(op => op.operacion.toLowerCase() === operacionBuscada.toLowerCase());

alert("Operaciones positivas:\n" +
    operacionesPositivas.map(op => `Operación: ${op.operacion} - Número 1: ${op.numero1} - Número 2: ${op.numero2} - Resultado: ${op.resultado}`).join('\n') +
    "\n\nOperación encontrada:\n" +
    (operacionEncontrada ? `Operación: ${operacionEncontrada.operacion} - Número 1: ${operacionEncontrada.numero1} - Número 2: ${operacionEncontrada.numero2} - Resultado: ${operacionEncontrada.resultado}` : "Operación no encontrada.")
);


alert("Operaciones negativas:\n" +
    operacionesNegativas.map(op => `Operación: ${op.operacion} - Número 1: ${op.numero1} - Número 2: ${op.numero2} - Resultado: ${op.resultado}`).join('\n') +
    "\n\nOperación encontrada:\n" +
    (operacionEncontrada ? `Operación: ${operacionEncontrada.operacion} - Número 1: ${operacionEncontrada.numero1} - Número 2: ${operacionEncontrada.numero2} - Resultado: ${operacionEncontrada.resultado}` : "Operación no encontrada.")
);