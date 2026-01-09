//selecionar todas as teclas
const listaDeTeclas = document.querySelectorAll('input[type=button]');

//selecionar o input onde vão aparecer os numeros digitados
const inputTel = document.querySelector('input[type=tel]');

//indice = 0; enquanto indice for menor que o numero de item da listaDeTeclas; 
//indice receberá um incremento de +1 a cada repetição
for (indice = 0; indice < listaDeTeclas.length; indice++) {

//tecla recebe o valor de um item da listaDeTeclas definido pelo [indice] 
//que recebe incremento a cada repetição
  const tecla = listaDeTeclas[indice];

//a constante tecla, ao ser clicada recebe a função que define que
//o valor do inputTel será igual ao valor do inputTel + o valor de tecla
//fazendo assim com que cada vez que o numero for pressionado no teclado
//ele apareça também no input
  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }

// quando a tecla estiver pressionada, e se essas teclas forem enter ou space
// será adicionada a classe ativa no elemento tecla
  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add('ativa');
    }   
  }

//quando a tecla for solta, imediatamente é removida a classe ativa do elemento tecla 
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}