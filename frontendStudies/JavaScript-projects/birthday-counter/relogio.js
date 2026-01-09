    const clock = document.querySelector(".clock")
    const birthdayForm = document.querySelector("#birthday-form");
    const modal = document.querySelector(".modal");
    const text = document.querySelector(".text");
    
    birthdayForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const birthdayInput = document.getElementById("birthday").value;
        console.log(`Data de Aniversário: ${birthdayInput}`);
        if (birthdayInput) {
            const birthday = new Date(birthdayInput);
            modal.style.display = "none";
            clock.style.display = "flex";
            text.style.display = "flex";
            startCountDown(birthday);
        }


    });
    
    function startCountDown(birthday) {
        function updateCountDown() {
            // Pega a data e hora atuais
            const now = new Date();
            
            // Cria uma data para o próximo aniversário no ano atual
            let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
            
            //Se a data atual já passou do aniversário desse ano, ajusta para o próximo ano
            if (now > nextBirthday) {
                nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
            }
            
            //calcula a diferença de tempos
            const totalMiliseconds = nextBirthday - now;
            const totalSeconds = Math.floor(totalMiliseconds / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours /24);
            const months = Math.floor(totalDays / 30);
            const days = totalDays % 30;
            const hours = totalHours % 24;

            
            document.querySelector(".months").textContent = `${formatNumber(months)}`;
            document.querySelector(".days").textContent = `${formatNumber(days)}`;
            document.querySelector(".hours").textContent = `${formatNumber(hours)}`;

        }

        function formatNumber(number) {
            if (number < 10) {
                return `0${number}`;
            } else {
                return number;
            }
        }
        
        updateCountDown();

        setInterval(updateCountDown, 1000);
    }
