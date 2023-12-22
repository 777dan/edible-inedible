let usedImageIndexes = [];
let imageIndexes = [
    [1, false],
    [2, false],
    [3, true],
    [4, true],
    [5, true],
    [6, false],
    [7, false],
    [8, true],
    [9, false],
    [10, true]
];
for (let i = imageIndexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageIndexes[i], imageIndexes[j]] = [imageIndexes[j], imageIndexes[i]];
}
console.log(imageIndexes);
const edibleInedibleImg = document.querySelector('#edible-inedible-img');
const edibleBtn = document.querySelector('#edibleBtn');
const inedibleBtn = document.querySelector('#inedibleBtn');
const chooseAnswerBtn = document.querySelectorAll('.chooseAnswerBtn');
const result = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
const playAgain = document.querySelector('#playAgain');
const bottomContainer = document.querySelector('#bottom-container');
let isGame = true;
let score = 0;

const checkClick = (edibility) => {
    if (isGame) {
        scoreDisplay.innerHTML = `Score: ${score}`;
        if (score >= 9) {
            edibleInedibleImg.style.display = 'none';
            result.style.display = 'block';
            result.classList.add('text-success');
            result.textContent = 'Victory';
            score++;
            scoreDisplay.innerHTML = `Score: ${score}`;
            chooseAnswerBtn.forEach(button => {
                button.style.display = 'none';
            });
            playAgain.style.display = 'block';
            bottomContainer.style.position = 'static';
            bottomContainer.classList.add('mt-5');
            isGame = false;
        } else {
            if (imageIndexes[score][1] === edibility) {
                edibleInedibleImg.src = `./images/img${imageIndexes[++score][0]}.png`;
                scoreDisplay.innerHTML = `Score: ${score}`;
            } else {
                edibleInedibleImg.style.display = 'none';
                result.style.display = 'block';
                result.classList.add('text-danger');
                result.textContent = 'Defeat';
                chooseAnswerBtn.forEach(button => {
                    button.style.display = 'none';
                });
                playAgain.style.display = 'block';
                bottomContainer.style.position = 'static';
                bottomContainer.classList.add('mt-5');
                isGame = false;
            }
        }
    }
}

edibleInedibleImg.src = `./images/img${imageIndexes[score][0]}.png`;
edibleBtn.addEventListener('click', () => {
    checkClick(true);
});

inedibleBtn.addEventListener('click', () => {
    checkClick(false);
});

playAgain.addEventListener('click', () => {
    location.reload();
});