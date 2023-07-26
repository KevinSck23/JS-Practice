function calcularCoeficienteBinomial(a, b) {
    let coeficiente = 1;
    for (let i = 1; i <= b; i++) {
      coeficiente = coeficiente * (a - i + 1) / i;
    }
    return coeficiente;

  }
  
  function imprimirTrianguloPascal(filas) {
    for (let a = 0; a < filas; a++) {
      let fila = "";
      for (let b = 0; b <= a; b++) {
        fila += calcularCoeficienteBinomial(a, b) + " ";
      }
      console.log(fila);
    }
  }

  imprimirTrianguloPascal(13);
  