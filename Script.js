let currentColor = '';
let score = 0;
let level = 1;
let interval;

// Start Button Event
document.getElementById('startButton').addEventListener('click', startGame);

// Bottle and color selection
document.querySelectorAll('.color').forEach(colorButton => {
    colorButton.addEventListener('click', function () {
        currentColor = this.style.backgroundColor;
    });
});

document.querySelectorAll('.bottle').forEach(bottle => {
    bottle.addEventListener('click', function () {
        if (currentColor) {
            fillBottle(this);
        }
    });
});

// Start Game
function startGame() {
    score = 0;
    level = 1;
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
    resetBottles();
    document.getElementById('startButton').disabled = true;

    // Start level progression
    setInterval(() => {
        level++;
        document.getElementById('level').textContent = level;
        resetBottles();
    }, 10000);

    // Set redirection every 15 seconds
    interval = setInterval(() => {
        window.open('https://www.example.com', '_blank');
    }, 15000);
}

// Fill Bottle Function
function fillBottle(bottle) {
    const bottleId = bottle.dataset.bottle;
    if (bottle.style.backgroundColor !== currentColor) {
        bottle.style.backgroundColor = currentColor;
        score += 10;
        document.getElementById('score').textContent = score;

        // Check if the bottle is full and increment level
        if (bottle.style.backgroundColor === currentColor) {
            if (document.querySelectorAll('.bottle').length === 3) {
                level++;
                document.getElementById('level').textContent = level;
            }
        }
    }
}

// Reset Bottles for next round
function resetBottles() {
    document.querySelectorAll('.bottle').forEach(bottle => {
        bottle.style.backgroundColor = 'white';
    });
}

// End Game
function endGame() {
    clearInterval(interval);
    alert(`Game Over! Your final score is ${score}.`);
    document.getElementById('startButton').disabled = false;
}
