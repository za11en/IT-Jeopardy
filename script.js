// DOM Elements - Screens
const startScreen = document.getElementById('start-screen');
const playerNameScreen = document.getElementById('player-name-screen');
const gameContainer = document.getElementById('game-container');
const gameOverScreen = document.getElementById('game-over-screen');

// DOM Elements - Game Setup
const soloModeBtn = document.getElementById('solo-mode-btn');
const multiplayerModeBtn = document.getElementById('multiplayer-mode-btn');
const playerNameBox = document.getElementById('player-name-box');
const playerPromptTitle = document.getElementById('player-prompt-title');
const playerNameInput = document.getElementById('player-name-input');
const submitPlayerNameBtn = document.getElementById('submit-player-name-btn');

// DOM Elements - Game Board
const playersFooterContainer = document.getElementById('players-footer-container');
const jeopardyBoard = document.getElementById('jeopardy-board');
const mainMenuButton = document.getElementById('main-menu-button');

// DOM Elements - Modal
const questionModal = document.getElementById('question-modal');
const closeButton = document.querySelector('.close-button');
const questionText = document.getElementById('question-text');
const userAnswerInput = document.getElementById('user-answer-input');
const submitAnswerButton = document.getElementById('submit-answer-button');
const feedbackMessage = document.getElementById('feedback-message');
const revealAnswerButton = document.getElementById('reveal-answer-button');
const correctAnswerText = document.getElementById('correct-answer-text');
const nextQuestionButton = document.getElementById('next-question-button');

// DOM Elements - Game Over
const winnerMessage = document.getElementById('winner-message');
const finalScores = document.getElementById('final-scores');
const playAgainBtn = document.getElementById('play-again-btn');

// Game State Variables
let gameMode = null;
let players = [];
let currentPlayerIndex = 0;
let totalQuestions = 0;
let currentQuestion = null;
let currentCell = null;
let answeredQuestions = new Set();
let activeGameData = [];

// --- 1. GAME SETUP AND INITIALIZATION ---

function showScreen(screenToShow) {
    [startScreen, playerNameScreen, gameContainer, gameOverScreen].forEach(screen => {
        screen.style.display = 'none';
    });
    screenToShow.style.display = 'flex';
}

function selectGameMode(mode) {
    gameMode = mode;
    players = [];
    currentPlayerIndex = 0;
    
    if (gameMode === 'solo') {
        players.push({ name: 'Freestyle', score: 0 });
        playersFooterContainer.style.display = 'none';
        startGame();
    } else {
        playersFooterContainer.style.display = 'flex';
        promptForPlayerNames(true);
    }
}

function promptForPlayerNames(isInitial = false) {
    showScreen(playerNameScreen);
    playerPromptTitle.textContent = `Enter Player ${players.length + 1} Name`;
    playerNameInput.value = '';
    
    playerNameBox.classList.remove('fly-out');
    if (isInitial) {
        playerNameBox.classList.add('fly-in');
    }

    playerNameInput.focus();
}

function handlePlayerNameSubmit() {
    const name = playerNameInput.value.trim() || `Player ${players.length + 1}`;
    
    playerNameBox.classList.remove('fly-in');
    playerNameBox.classList.add('fly-out');

    setTimeout(() => {
        players.push({ name, score: 0 });
        playerNameBox.classList.remove('fly-out');
        if (players.length < 3) {
            promptForPlayerNames(true);
        } else {
            startGame();
        }
    }, 500); 
}

function startGame() {
    setupPlayerUI();
    showScreen(gameContainer);
    if (jeopardyBoard.hasChildNodes()) {
        jeopardyBoard.classList.add('clearing');
        setTimeout(() => {
            jeopardyBoard.classList.remove('clearing');
            initializeBoard();
        }, 300);
    } else {
        initializeBoard();
    }
}

function setupPlayerUI() {
    playersFooterContainer.innerHTML = '';
    if (gameMode === 'solo') return;

    players.forEach((player, index) => {
        const playerInfo = document.createElement('div');
        playerInfo.classList.add('player-info');
        playerInfo.dataset.playerIndex = index;

        const playerName = document.createElement('div');
        playerName.classList.add('player-name');
        playerName.textContent = player.name;

        const playerScore = document.createElement('div');
        playerScore.classList.add('player-score');
        playerScore.textContent = player.score;

        playerInfo.appendChild(playerName);
        playerInfo.appendChild(playerScore);
        playersFooterContainer.appendChild(playerInfo);
    });
    updateActivePlayerUI();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function initializeBoard() {
    closeQuestionModal();
    jeopardyBoard.innerHTML = '';
    answeredQuestions.clear();

    jeopardyBoard.classList.add('loading');
    
    const allCategories = [...gameData.categories];
    shuffleArray(allCategories);
    activeGameData = allCategories.slice(0, 6);
    
    totalQuestions = activeGameData.reduce((acc, category) => acc + category.questions.length, 0);

    jeopardyBoard.style.setProperty('--num-categories', activeGameData.length);

    activeGameData.forEach((category, categoryIndex) => {
        category.questions.forEach((questionSlot, questionIndex) => {
            const questionCell = document.createElement('div');
            questionCell.classList.add('question-cell');
            questionCell.dataset.categoryIndex = categoryIndex;
            questionCell.dataset.questionIndex = questionIndex;
            questionCell.dataset.id = `${categoryIndex}-${questionIndex}`;
            questionCell.textContent = `$${questionSlot.value}`;
            questionCell.tabIndex = -1; 
            questionCell.style.animationDelay = `${(questionIndex * 0.05) + (categoryIndex * 0.2)}s`;
            questionCell.style.gridColumn = `${categoryIndex + 1}`;
            questionCell.style.gridRow = `${questionIndex + 2}`;
            questionCell.addEventListener('click', openQuestion);
            questionCell.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && openQuestion(e));
            jeopardyBoard.appendChild(questionCell);
        });
    });


    const categoryLoadDelay = 350;
    activeGameData.forEach((category, categoryIndex) => {
        setTimeout(() => {
            const categoryTitle = document.createElement('div');
            categoryTitle.classList.add('category-title');
            categoryTitle.textContent = category.name;
            categoryTitle.style.gridColumn = `${categoryIndex + 1}`;
            categoryTitle.style.gridRow = `1`;
            jeopardyBoard.appendChild(categoryTitle);

            if (categoryIndex === activeGameData.length - 1) {
                setTimeout(() => {
                    jeopardyBoard.classList.remove('loading');

                    jeopardyBoard.querySelectorAll('.question-cell').forEach(cell => cell.tabIndex = 0);
                }, 500); 
            }
        }, 500 + (categoryLoadDelay * categoryIndex)); 
    });
}


// --- 2. CORE GAMEPLAY LOGIC ---

function updatePlayersUI() {
    if (gameMode === 'solo') return;
    players.forEach((player, index) => {
        const playerScoreEl = playersFooterContainer.querySelector(`[data-player-index="${index}"] .player-score`);
        if (playerScoreEl) {
            playerScoreEl.textContent = player.score;
        }
    });
}

function updateActivePlayerUI() {
    if (gameMode === 'solo') return;
    document.querySelectorAll('.player-info').forEach(el => {
        el.classList.remove('active');
    });
    const activePlayerEl = playersFooterContainer.querySelector(`[data-player-index="${currentPlayerIndex}"]`);
    if (activePlayerEl) {
        activePlayerEl.classList.add('active');
    }
}

function openQuestion(event) {
    currentCell = event.target;
    if (answeredQuestions.has(currentCell.dataset.id) || currentCell.classList.contains('opening')) return;

    currentCell.classList.add('opening');

    const categoryIndex = parseInt(currentCell.dataset.categoryIndex);
    const questionIndex = parseInt(currentCell.dataset.questionIndex);
    const questionSlot = activeGameData[categoryIndex].questions[questionIndex];

    if (questionSlot.alternates?.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionSlot.alternates.length);
        currentQuestion = { ...questionSlot.alternates[randomIndex], value: questionSlot.value };
    } else {
        console.error("This question cell has no alternate questions defined.");
        return;
    }

    setTimeout(() => {
        questionText.textContent = currentQuestion.clue;
        userAnswerInput.value = '';
        feedbackMessage.textContent = '';
        feedbackMessage.className = '';
        correctAnswerText.style.display = 'none';
        userAnswerInput.disabled = false;
        submitAnswerButton.style.display = 'inline-block';
        revealAnswerButton.style.display = (gameMode === 'solo') ? 'inline-block' : 'none';
        nextQuestionButton.style.display = 'none';
        questionModal.classList.add('show');
        userAnswerInput.focus();
    }, 400);
}

function closeQuestionModal() {
    questionModal.classList.remove('show');
}

function checkAnswer() {
    const userAnswer = normalizeString(userAnswerInput.value);
    const correctAnswer = normalizeString(currentQuestion.answer);
    const isCorrect = userAnswer === correctAnswer;
    const activePlayer = players[currentPlayerIndex];

    if (isCorrect) {
        feedbackMessage.textContent = 'Correct!';
        feedbackMessage.className = 'correct';
        activePlayer.score += currentQuestion.value;
    } else {
        feedbackMessage.textContent = 'Incorrect.';
        feedbackMessage.className = 'incorrect';
        activePlayer.score -= currentQuestion.value;
    }

    updatePlayersUI();
    animateScoreUpdate(currentPlayerIndex, isCorrect);

    correctAnswerText.textContent = `Correct Answer: ${currentQuestion.answer}`;
    correctAnswerText.style.display = 'block';

    markQuestionAsAnswered(isCorrect);
    showNextStep();
}

function revealAnswer() {
    correctAnswerText.textContent = `Correct Answer: ${currentQuestion.answer}`;
    correctAnswerText.style.display = 'block';
    feedbackMessage.textContent = 'Answer revealed.';
    feedbackMessage.className = '';
    markQuestionAsAnswered(null);
    showNextStep();
}

function markQuestionAsAnswered(isCorrect) {
    if (currentCell && !answeredQuestions.has(currentCell.dataset.id)) {
        answeredQuestions.add(currentCell.dataset.id);
        currentCell.classList.add('answered');
        currentCell.tabIndex = -1;
        currentCell.classList.remove('opening');
        if (isCorrect === true) currentCell.innerHTML = '<span class="feedback-icon correct">✓</span>';
        else if (isCorrect === false) currentCell.innerHTML = '<span class="feedback-icon incorrect">✗</span>';
        else currentCell.textContent = '';
    }
}

function animateScoreUpdate(playerIndex, isCorrect) {
    if(gameMode === 'solo') return;
    const scoreEl = playersFooterContainer.querySelector(`[data-player-index="${playerIndex}"] .player-score`);
    if (!scoreEl) return;

    const animationClass = isCorrect ? 'update-increase' : 'update-decrease';
    scoreEl.classList.add(animationClass);
    scoreEl.addEventListener('animationend', () => scoreEl.classList.remove(animationClass), { once: true });
}

function showNextStep() {
    userAnswerInput.disabled = true;
    submitAnswerButton.style.display = 'none';
    revealAnswerButton.style.display = 'none';
    nextQuestionButton.style.display = 'inline-block';
}

function goToNextQuestion() {
    if (currentCell && !answeredQuestions.has(currentCell.dataset.id)) {
        markQuestionAsAnswered(null);
    }

    closeQuestionModal();
    currentQuestion = null;
    currentCell = null;

    if (answeredQuestions.size === totalQuestions) {
        endGame();
        return;
    }

    if (gameMode === 'multiplayer') {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateActivePlayerUI();
    }
}

function normalizeString(str) {
    if (typeof str !== 'string') return '';
    return str.toLowerCase()
        .replace(/^(what is|who is|where is|what are|who are|where are|when are)\s/g, '')
        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// --- 3. GAME END AND RESET ---

function endGame() {
    finalScores.innerHTML = '';
    
    if (gameMode === 'multiplayer') {
        players.sort((a, b) => b.score - a.score);
        players.forEach(player => {
            const scoreItem = document.createElement('div');
            scoreItem.classList.add('final-score-item');
            scoreItem.textContent = `${player.name}: ${player.score}`;
            finalScores.appendChild(scoreItem);
        });

        if (players.length > 1 && players[0].score === players[1].score) {
             winnerMessage.textContent = "It's a Tie!";
        } else {
            winnerMessage.textContent = `${players[0].name} Wins!`;
        }
    } else { 
        winnerMessage.textContent = `Final Score: ${players[0].score}`;
        finalScores.innerHTML = '';
    }

    showScreen(gameOverScreen);
}

function resetToMainMenu() {
    gameMode = null;
    players = [];
    currentPlayerIndex = 0;
    totalQuestions = 0;
    answeredQuestions.clear();
    playerNameBox.classList.remove('fly-in', 'fly-out');
    showScreen(startScreen);
}

// --- 4. EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => showScreen(startScreen));

soloModeBtn.addEventListener('click', () => selectGameMode('solo'));
multiplayerModeBtn.addEventListener('click', () => selectGameMode('multiplayer'));
submitPlayerNameBtn.addEventListener('click', handlePlayerNameSubmit);
playerNameInput.addEventListener('keypress', (e) => e.key === 'Enter' && handlePlayerNameSubmit());

mainMenuButton.addEventListener('click', resetToMainMenu);
playAgainBtn.addEventListener('click', resetToMainMenu);

closeButton.addEventListener('click', goToNextQuestion);
submitAnswerButton.addEventListener('click', checkAnswer);
revealAnswerButton.addEventListener('click', revealAnswer);
nextQuestionButton.addEventListener('click', goToNextQuestion);

userAnswerInput.addEventListener('keypress', (e) => (e.key === 'Enter' && !userAnswerInput.disabled) && checkAnswer());
