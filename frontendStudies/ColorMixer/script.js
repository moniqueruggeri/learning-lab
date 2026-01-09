const span = document.querySelector(".cor");

var coratual = "reset";

function reset() {
  span.style.border = "none";
  span.style.backgroundColor = "transparent";
  coratual = "reset";
}

function mostarBorda() {
  span.style.border = "2px solid black";
}

function branco() {
  if (coratual == "reset") {
    span.style.backgroundColor = "white";
    mostarBorda();
    coratual = "branco";
  }
  if (coratual == "amarelo") {
    span.style.backgroundColor = "#fffb96";
    mostarBorda();
    coratual = "amareloclaro";
  }
  if (coratual == "verde") {
    span.style.backgroundColor = "green";
    mostarBorda();
    coratual = "verdeclaro";
  }
  if (coratual == "vermelho") {
    span.style.backgroundColor = "pink";
    mostarBorda();
    coratual = "rosa";
  }
  if (coratual == "azul") {
    span.style.backgroundColor = "#4dd5ff";
    mostarBorda();
    coratual = "azulclaro";
  }
  if (coratual == "preto") {
    span.style.backgroundColor = "#666";
    mostarBorda();
    coratual = "cinza";
  }
}

function amarelo() {
  if (coratual == "reset") {
    span.style.backgroundColor = "#fbff00";
    mostarBorda();
    coratual = "amarelo";
  }
  if (coratual == "branco") {
    span.style.backgroundColor = "#ffea8b";
    mostarBorda();
    coratual = "amareloclaro";
  }
  if (coratual == "preto") {
    span.style.backgroundColor = "#bea91f";
    mostarBorda();
    coratual = "amarelo";
  }
  if (coratual == "azul") {
    span.style.backgroundColor = "green";
    mostarBorda();
    coratual = "verde";
  }
  if (coratual == "vermelho") {
    span.style.backgroundColor = "#f35a1e";
    mostarBorda();
    coratual = "laranja";
  }
}

function azul() {
  if (coratual == "reset") {
    span.style.backgroundColor = "blue";
    mostarBorda();
    coratual = "azul";
  }
  if (coratual == "branco") {
    span.style.backgroundColor = "#4dd5ff";
    mostarBorda();
    coratual = "azulclaro";
  }
  if (coratual == "amarelo") {
    span.style.backgroundColor = "green";
    mostarBorda();
    coratual = "verde";
  }
  if (coratual == "vermelho") {
    span.style.backgroundColor = "purple";
    mostarBorda();
    coratual = "roxo";
  }
  if (coratual == "preto") {
    span.style.backgroundColor = "#0f2656";
    mostarBorda();
    coratual = "azulescuro";
  }
}

function preto() {
  if (coratual == "reset") {
    span.style.backgroundColor = "#000";
    mostarBorda();
    coratual = "preto";
  }
  if (coratual == "branco") {
    span.style.backgroundColor = "#666";
    mostarBorda();
    coratual = "cinzaclaro";
  }
  if (coratual == "amarelo") {
    span.style.backgroundColor = "#bea91f";
    mostarBorda();
    coratual = "amareloescuro";
  }
  if (coratual == "azul") {
    span.style.backgroundColor = "#0f2656";
    mostarBorda();
    coratual = "azulescuro";
  }
  if (coratual == "vermelho") {
    span.style.backgroundColor = "#670e0e";
    mostarBorda();
    coratual = "vermelhoescuro";
  }
}

function vermelho() {
  if (coratual == "reset") {
    span.style.backgroundColor = "red";
    mostarBorda();
    coratual = "vermelho";
  }
  if (coratual == "branco") {
    span.style.backgroundColor = "pink";
    mostarBorda();
    coratual = "rosa";
  }
  if (coratual == "amarelo") {
    span.style.backgroundColor = "#f35a1e";
    mostarBorda();
    coratual = "laranja";
  }
  if (coratual == "azul") {
    span.style.backgroundColor = "purple";
    mostarBorda();
    coratual = "roxo";
  }
  if (coratual == "preto") {
    span.style.backgroundColor = "#670e0e";
    mostarBorda();
    coratual = "vermelhoescuro";
  }
}

reset()