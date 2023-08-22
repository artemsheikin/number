//создаем рандомное число от 0 до 20
let randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);//проверка числа

//dom
const reset = document.querySelector(".header__reaset")
const numberForm = document.querySelector(".number")
const checkingResult = document.querySelector(".game__btn")
const scoreNumber = document.querySelector(".score")
const record = document.querySelector(".highscore")
const main = document.querySelector(".main")
const hintText = document.querySelector(".game__play__title");
let recordTest = document.querySelector(".highscore");

//аудио функции
function audioClick() {
    const audio = new Audio('../audio/click.mp3');
    audio.play();
}
function resetClick() {
    const audio = new Audio('../audio/reset.mp3');
    audio.play();
}
function vinClick() {
    const audio = new Audio('../audio/vin.mp3');
    audio.play();
}

//звук при клике
checkingResult.addEventListener('click', audioClick)

//хранения рекорда
let recordStorage = 0;

// основная логика
checkingResult.addEventListener('click', () => {
    let numberInput = numberForm.value;

    if (numberInput.trim() === '') {
        hintText.innerHTML = 'Не оставляйте поле пустым';
    } else if (numberInput.trim() < 0) {
        hintText.innerHTML = 'Значение меньше 0!';
    } else if (numberInput.trim() > 20) {
        hintText.innerHTML = 'Значение больше 20!';
    } else if (numberInput == randomNumber) {
        hintText.innerHTML = 'Ура победа!!!';
        main.classList.add('victory');
        checkingResult.disabled = true;
        checkingResult.classList.add('resultVin');
        reset.classList.add('resetVin');
        document.querySelector('.numberVin').textContent = randomNumber;
        document.querySelector('.img').style.display = 'none';
        vinClick();

        // сравниваем результат с текущим рекордом, если он лучше, сохраняем его
        if (score > recordStorage) {
            recordStorage = score;
            recordTest.textContent = recordStorage;
        }
    }
    else if (numberInput > randomNumber) {
        hintText.innerHTML = "Нееее чучуть меньше";
    } else if (numberInput < randomNumber) {
        hintText.innerHTML = "Нееее чучуть больше";
    } else {
        alert("ошибочка блэт");
    }
});


//кнопка обновления
reset.addEventListener('click', resetGame);
reset.addEventListener('click', resetClick);


//функция для кнопки обновления резульата 
function resetGame() {
    randomNumber = Math.floor(Math.random() * 21);
    hintText.innerHTML = "Новая игра:";
    score = 20;
    scoreNumber.innerHTML = score;
    main.classList.remove("victory");
    checkingResult.disabled = false;
    numberForm.value = "";
}

//точка хранения очков
let score = scoreNumber.innerHTML;

//обработчик событий
checkingResult.addEventListener('click', () => {
    score--;
    scoreNumber.innerHTML = score;
    if (score == 0) {
        hintText.innerHTML = "GAME OVER";
        checkingResult.disabled = true;
    }
});
