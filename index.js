const txtOp1 = document.getElementById('op1');
const txtOperacion = document.getElementById('operacion');
const txtOp2 = document.getElementById('op2');
const txtCalcular = document.getElementById('calcular');
const pResultado = document.getElementById('resultado');

function calcular() {
  const operacion = txtOperacion.value;
  const op1 = txtOp1.value;
  const op2 = txtOp2.value;

  if (
    (operacion === "+" ||
    operacion === "-" ||
    operacion === "/" ||
    operacion === "*") &&
    !isNaN(op1) &&
    !isNaN(op2)
  ) {
    let resultado;
    switch (operacion){
        case '+':
            resultado = parseFloat(op1) + parseFloat(op2);
            break;
        case '-':
            resultado = parseFloat(op1) - parseFloat(op2);
            break;
        case '*':
            resultado = parseFloat(op1) * parseFloat(op2);
            break;
        case '/':
            resultado = parseFloat(op1) / parseFloat(op2);
            break;
    }

    pResultado.style = 'color:black';
    pResultado.innerText = "= "  + resultado;
  } else {
    pResultado.style = 'color:red';
    pResultado.innerText = "Cálculo imposible";
    
  }

  console.log('Se presionó el botón Calcular');
}
