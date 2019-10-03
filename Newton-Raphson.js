/*
  potencia: Math.pow
  exponencial: Math.exp
  seno: Math.sin
  cosseon: Math.cos
  tangente: Math.tan
*/

//Método 1: quando a diferencia entre dois passo de uma iteração é menos que um erro |xi+1-xi|< e
//Método 2: quando o valor da função em xi é perto de 0 |f(xi)|<e
const metodo = 2;

const erro = Math.pow(10, -6);

const exercicios = [
  {
    e: '1) f(x) =  3x^3 – 2x^2 + 4x –1 e f´(x) = 9x^2-4x+4, adotar x0=0',
    fx0: x => 3 * Math.pow(x, 3) - 2 * Math.pow(x, 2) + 4 * x - 1,
    fx1: x => 9 * Math.pow(x, 2) - 4 * x + 4,
    x0: 0
  },
  {
    e: '2) f(x) = 4x^5 – 3x^3 + 2x^2 – 4 e f´(x) = 20x^4-9x^2+4x, adotar x0=1',
    fx0: x => 4 * Math.pow(x, 5) - 3 * Math.pow(x, 3) + 2 * Math.pow(x, 2) - 4,
    fx1: x => 20 * Math.pow(x, 4) - 9 * Math.pow(x, 2) + 4 * x,
    x0: 1
  },
  {
    e: '3) f(x) = 2x3 – 4x2 + 3x – 1 e f´(x) = 6x2-8x+3, adotar x0=0',
    fx0: x => 2 * Math.pow(x, 3) - 4 * Math.pow(x, 2) + 3 * x - 1,
    fx1: x => 6 * Math.pow(x, 2) - 8 * x + 3,
    x0: 0
  },
  {
    e: '4) f(x) = x^4 – 3x^3 - 2x^2 + 3x + 1 e f´(x) = 4x^3-9x^2-4x+3, adotar x0=0',
    fx0: x => Math.pow(x, 4) - 3 * Math.pow(x, 3) - 2 * Math.pow(x, 2) + 3 * x + 1,
    fx1: x => 4 * Math.pow(x, 3) - 9 * Math.pow(x, 2) - 4 * x + 3,
    x0: 0
  },
  {
    e: '5) f(x) = e^x + x – 2 e f´(x) = ex + 1, adotar x0=0',
    fx0: x => 2 * Math.exp(x) + x - 2,
    fx1: x => 6 * Math.exp(x) + 1,
    x0: 0
  },
  {
    e: '6) f(x) = sen(x) + x – 1 e f´(x) = cos(x) +1, adotar x0=0',
    fx0: x => Math.sin(x) + x - 1,
    fx1: x => Math.cos(x) + 1,
    x0: 0
  },
];

function calcular(e) {
  let x = e.x0;
  let count = 0;
  let y0;
  let y1;
  let aux;

  console.log(e.e);

  while (true) {
    aux = x;

    y0 = e.fx0(x);
    y1 = e.fx1(x);

    x = x - y0 / y1;

    console.log(`Passo: ${count}, Raiz: ${x}, f(x): ${y0}, f'(x): ${y1}`);

    count ++;

    if (metodo === 1) {
      if (Math.abs(x - aux) <= erro) {
        break;
      }
    }

    if (metodo === 2) {
      if (Math.abs(y0) <= erro) {
        break;
      }
    }
  }

  console.log();
}

console.log();
exercicios.forEach(exercicio => calcular(exercicio));
