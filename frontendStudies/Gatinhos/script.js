const spanImg = document.querySelector(".img")
const textPhase = document.querySelector(".phase") 

function kittenPhase(img, phase) {
    spanImg.style.backgroundImage = `url('/images/${img}.png')`
    textPhase.textContent = phase
}

      var posicao = "0";

      function mais() {
        if (posicao == "3") {
          alert("The kitten died! :(");
          return;
        }

        if (posicao == "2") {
          kittenPhase("gatinho4", "elder")
          posicao = "3";
          return;
        }

        if (posicao == "1") {
          kittenPhase("gatinho3", "adult")
          posicao = "2";
          return;
        }

        if (posicao == "0") {
          kittenPhase("gatinho2", "baby")
          posicao = "1";
          return;
        }
      }

      function menos() {
        if (posicao == "0") {
          alert("The kitten hasn't been born yet");
          return;
        }
        if (posicao == "1") {
          kittenPhase("gatinho1", "new born")
          posicao = "0";
          return;
        }
        if (posicao == "2") {
          kittenPhase("gatinho2", "baby")
          posicao = "1";
          return;
        }
        if (posicao == "3") {
          kittenPhase("gatinho3", "adult")
          posicao = "2";
          return;
        }
        if (posicao == "4") {
          kittenPhase("gatinho4", "elder")
          posicao = "3";
          return;
        }
      }