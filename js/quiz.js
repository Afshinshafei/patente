// Italian Patente B Learning App - Quiz Module

// =====================================================
// Quiz State
// =====================================================

const QuizState = {
    currentQuestions: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    selectedCategory: 'all',
    isAnswered: false,
    mistakes: []
};

// =====================================================
// Quiz Setup
// =====================================================

function showQuizSetup() {
    document.getElementById('quiz-setup').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    // Reset state
    QuizState.currentIndex = 0;
    QuizState.score = 0;
    QuizState.answers = [];
    QuizState.isAnswered = false;
    QuizState.mistakes = [];
}

function getSelectedCategory() {
    const selected = document.querySelector('.category-card.selected');
    return selected ? selected.dataset.category : 'all';
}

function getQuizLength() {
    return parseInt(document.getElementById('quiz-length').value) || 30;
}

// =====================================================
// Quiz Logic
// =====================================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    const category = getSelectedCategory();
    const length = getQuizLength();
    
    // Filter questions by category
    let questions = category === 'all' 
        ? [...PatenteData.questions]
        : PatenteData.questions.filter(q => q.category === category);
    
    // Shuffle and limit
    questions = shuffleArray(questions).slice(0, length);
    
    if (questions.length === 0) {
        alert('No questions available for this category.');
        return;
    }
    
    // Initialize quiz state
    QuizState.currentQuestions = questions;
    QuizState.currentIndex = 0;
    QuizState.score = 0;
    QuizState.answers = [];
    QuizState.selectedCategory = category;
    QuizState.isAnswered = false;
    QuizState.mistakes = [];
    
    // Show quiz container
    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    // Display first question
    displayQuestion();
}

function displayQuestion() {
    const question = QuizState.currentQuestions[QuizState.currentIndex];
    const total = QuizState.currentQuestions.length;
    
    // Update progress
    const progressPercent = ((QuizState.currentIndex) / total) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('quiz-progress-text').textContent = `${QuizState.currentIndex + 1}/${total}`;
    
    // Get category info
    const categoryInfo = PatenteData.categories.find(c => c.id === question.category);
    const categoryName = categoryInfo ? `${categoryInfo.icon} ${categoryInfo.name}` : question.category;
    
    // Display question
    document.getElementById('question-category').textContent = categoryName;
    document.getElementById('question-text').innerHTML = formatQuestionText(question.question);
    
    // Reset buttons
    const btnTrue = document.getElementById('btn-true');
    const btnFalse = document.getElementById('btn-false');
    
    btnTrue.classList.remove('correct', 'incorrect');
    btnFalse.classList.remove('correct', 'incorrect');
    btnTrue.disabled = false;
    btnFalse.disabled = false;
    
    // Hide feedback and next button
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('btn-next').classList.add('hidden');
    
    QuizState.isAnswered = false;
}

function formatQuestionText(text) {
    // Highlight Italian terms in the question
    const italianTerms = [
        'autostrada', 'autostrade', 'centri abitati', 'centro abitato',
        'rotatoria', 'rotatorie', 'precedenza', 'neopatentati', 'neopatentato',
        'divieto', 'obbligo', 'pericolo', 'segnale', 'segnali',
        'sorpasso', 'sosta', 'fermata', 'velocità', 'limite',
        'cintura', 'cinture', 'patente', 'libretto', 'assicurazione',
        'revisione', 'bollo', 'multa', 'vigile', 'vigili',
        'tram', 'autovelox', 'tutor', 'ZTL', 'strisce',
        'triangolo', 'giubbotto', 'giubbotti', 'clacson', 'freccia',
        'fendinebbia', 'anabbaglianti', 'abbaglianti', 'tergicristalli',
        'freno', 'frizione', 'cambio', 'volante', 'specchietto',
        'pneumatico', 'pneumatici', 'ABS', 'ESP', 'airbag',
        'seggiolino', 'seggiolini', 'CID', 'RCA', 'ACI',
        'Vero', 'Falso', 'dare precedenza', 'senso unico',
        'doppia fila', 'disco orario', 'strisce blu', 'strisce bianche',
        'passaggio a livello', 'attraversamento pedonale', 'Carabinieri',
        'Polizia', 'Vigili del Fuoco', 'emergenza sanitaria'
    ];
    
    let formattedText = text;
    italianTerms.forEach(term => {
        const regex = new RegExp(`\\b(${term})\\b`, 'gi');
        formattedText = formattedText.replace(regex, '<span class="italian-term">$1</span>');
    });
    
    return formattedText;
}

function answerQuestion(answer) {
    if (QuizState.isAnswered) return;
    
    QuizState.isAnswered = true;
    
    const question = QuizState.currentQuestions[QuizState.currentIndex];
    const isCorrect = answer === question.answer;
    
    // Store answer
    QuizState.answers.push({
        questionId: question.id,
        userAnswer: answer,
        correct: isCorrect
    });
    
    if (isCorrect) {
        QuizState.score++;
    } else {
        QuizState.mistakes.push(question);
    }
    
    // Update buttons
    const btnTrue = document.getElementById('btn-true');
    const btnFalse = document.getElementById('btn-false');
    
    btnTrue.disabled = true;
    btnFalse.disabled = true;
    
    // Show correct answer
    if (question.answer === true) {
        btnTrue.classList.add('correct');
        if (!isCorrect) btnFalse.classList.add('incorrect');
    } else {
        btnFalse.classList.add('correct');
        if (!isCorrect) btnTrue.classList.add('incorrect');
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    
    document.getElementById('feedback-icon').textContent = isCorrect ? '✓' : '✗';
    document.getElementById('feedback-title').textContent = isCorrect ? 'Correct! Bravo!' : 'Incorrect';
    document.getElementById('feedback-text').innerHTML = question.explanation;
    
    // Show next button
    document.getElementById('btn-next').classList.remove('hidden');
}

function nextQuestion() {
    QuizState.currentIndex++;
    
    if (QuizState.currentIndex >= QuizState.currentQuestions.length) {
        showResults();
    } else {
        displayQuestion();
    }
}

// =====================================================
// Results
// =====================================================

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    const total = QuizState.currentQuestions.length;
    const correct = QuizState.score;
    const incorrect = total - correct;
    const percentage = Math.round((correct / total) * 100);
    
    // Update display
    const scoreElement = document.getElementById('results-score');
    scoreElement.textContent = `${percentage}%`;
    scoreElement.classList.remove('pass', 'fail');
    scoreElement.classList.add(percentage >= 70 ? 'pass' : 'fail');
    
    document.getElementById('results-correct').textContent = correct;
    document.getElementById('results-incorrect').textContent = incorrect;
    document.getElementById('results-total').textContent = total;
    
    // Set message
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! You\'re ready for the exam! 🎉';
    } else if (percentage >= 70) {
        message = 'Good job! Keep practicing! 👍';
    } else if (percentage >= 50) {
        message = 'Not bad, but more study needed. 📚';
    } else {
        message = 'Keep studying - you can do it! 💪';
    }
    document.getElementById('results-message').textContent = message;
    
    // Show/hide review button
    document.getElementById('btn-review').style.display = QuizState.mistakes.length > 0 ? 'inline-block' : 'none';
    
    // Save stats
    const stats = Storage.getStats();
    stats.quizzesTaken++;
    stats.totalCorrect += correct;
    stats.totalQuestions += total;
    Storage.updateStats(stats);
    
    // Update display
    updateStatsDisplay();
}

function reviewMistakes() {
    if (QuizState.mistakes.length === 0) {
        alert('No mistakes to review!');
        return;
    }
    
    // Create a new quiz with just the mistakes
    QuizState.currentQuestions = [...QuizState.mistakes];
    QuizState.currentIndex = 0;
    QuizState.score = 0;
    QuizState.answers = [];
    QuizState.isAnswered = false;
    QuizState.mistakes = [];
    
    // Show quiz
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    
    displayQuestion();
}

// =====================================================
// Export functions
// =====================================================

window.showQuizSetup = showQuizSetup;
window.startQuiz = startQuiz;
window.answerQuestion = answerQuestion;
window.nextQuestion = nextQuestion;
window.reviewMistakes = reviewMistakes;

