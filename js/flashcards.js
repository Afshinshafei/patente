// Italian Patente B Learning App - Flashcards Module

// =====================================================
// Flashcard State
// =====================================================

const FlashcardState = {
    currentDeck: [],
    currentDeckType: null,
    currentIndex: 0,
    isFlipped: false,
    progress: null
};

// =====================================================
// Flashcard Setup
// =====================================================

function showFlashcardSetup() {
    document.getElementById('flashcard-setup').classList.remove('hidden');
    document.getElementById('flashcard-container').classList.add('hidden');
    
    // Update progress display
    updateFlashcardProgressDisplay();
}

function updateFlashcardProgressDisplay() {
    const progress = Storage.getFlashcardProgress();
    
    const decks = {
        signs: FlashcardData.trafficSigns.length,
        vocabulary: FlashcardData.vocabulary.length,
        rules: FlashcardData.rules.length
    };
    
    Object.keys(decks).forEach(deckType => {
        const progressEl = document.getElementById(`progress-${deckType}`);
        if (progressEl && progress[deckType]) {
            const learned = progress[deckType].learned.length;
            const total = decks[deckType];
            const percent = Math.round((learned / total) * 100);
            progressEl.style.width = `${percent}%`;
        }
    });
}

function exitFlashcards() {
    showFlashcardSetup();
    updateStatsDisplay();
}

// =====================================================
// Deck Loading
// =====================================================

function getDeckData(deckType) {
    switch (deckType) {
        case 'signs':
            return FlashcardData.trafficSigns.map(sign => ({
                id: `sign_${sign.id}`,
                type: 'sign',
                category: sign.category,
                front: {
                    symbol: sign.symbol,
                    term: sign.italian,
                    pronunciation: sign.pronunciation
                },
                back: sign.english
            }));
        
        case 'vocabulary':
            return FlashcardData.vocabulary.map(vocab => ({
                id: `vocab_${vocab.id}`,
                type: 'vocabulary',
                category: vocab.category,
                front: {
                    symbol: getCategoryEmoji(vocab.category),
                    term: vocab.italian,
                    pronunciation: vocab.pronunciation
                },
                back: `${vocab.english}${vocab.example ? `<br><br><em style="color: var(--text-muted)">Example: ${vocab.example}</em>` : ''}`
            }));
        
        case 'rules':
            return FlashcardData.rules.map(rule => ({
                id: `rule_${rule.id}`,
                type: 'rule',
                category: rule.category,
                front: {
                    symbol: '📋',
                    term: rule.rule,
                    pronunciation: ''
                },
                back: rule.answer
            }));
        
        default:
            return [];
    }
}

function getCategoryEmoji(category) {
    const emojis = {
        roads: '🛣️',
        vehicle: '🚗',
        actions: '🎯',
        documents: '📄',
        safety: '🛡️',
        phrases: '💬',
        warning: '⚠️',
        prohibition: '🚫',
        mandatory: '🔵',
        priority: '⚡',
        information: 'ℹ️',
        speed: '🚀',
        alcohol: '🍷',
        parking: '🅿️',
        emergency: '🚨'
    };
    return emojis[category] || '📖';
}

// =====================================================
// Flashcard Display
// =====================================================

function startFlashcards(deckType) {
    // Load deck
    FlashcardState.currentDeck = getDeckData(deckType);
    FlashcardState.currentDeckType = deckType;
    FlashcardState.currentIndex = 0;
    FlashcardState.isFlipped = false;
    FlashcardState.progress = Storage.getFlashcardProgress();
    
    if (FlashcardState.currentDeck.length === 0) {
        alert('No cards in this deck.');
        return;
    }
    
    // Shuffle deck initially
    shuffleDeck();
    
    // Show container
    document.getElementById('flashcard-setup').classList.add('hidden');
    document.getElementById('flashcard-container').classList.remove('hidden');
    
    // Display first card
    displayCard();
}

function shuffleDeck() {
    const deck = FlashcardState.currentDeck;
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function shuffleCurrentDeck() {
    shuffleDeck();
    FlashcardState.currentIndex = 0;
    FlashcardState.isFlipped = false;
    displayCard();
}

function displayCard() {
    const card = FlashcardState.currentDeck[FlashcardState.currentIndex];
    const total = FlashcardState.currentDeck.length;
    
    // Update counter
    document.getElementById('flashcard-counter').textContent = 
        `${FlashcardState.currentIndex + 1} / ${total}`;
    
    // Update front
    document.getElementById('card-symbol').textContent = card.front.symbol;
    document.getElementById('card-term').textContent = card.front.term;
    document.getElementById('card-pronunciation').textContent = 
        card.front.pronunciation ? `(${card.front.pronunciation})` : '';
    
    // Update category
    const categoryText = formatCategoryName(card.category);
    document.getElementById('card-category').textContent = categoryText;
    document.getElementById('card-category-back').textContent = categoryText;
    
    // Update back
    document.getElementById('card-answer').innerHTML = card.back;
    
    // Reset flip state
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
    FlashcardState.isFlipped = false;
}

function formatCategoryName(category) {
    const names = {
        warning: 'Warning Sign',
        prohibition: 'Prohibition Sign',
        mandatory: 'Mandatory Sign',
        priority: 'Priority Sign',
        information: 'Information Sign',
        roads: 'Road Types',
        vehicle: 'Vehicle Parts',
        actions: 'Actions',
        documents: 'Documents',
        safety: 'Safety',
        phrases: 'Phrases',
        speed: 'Speed',
        alcohol: 'Alcohol',
        parking: 'Parking',
        emergency: 'Emergency'
    };
    return names[category] || category;
}

// =====================================================
// Card Navigation
// =====================================================

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    FlashcardState.isFlipped = !FlashcardState.isFlipped;
}

function nextCard() {
    if (FlashcardState.currentIndex < FlashcardState.currentDeck.length - 1) {
        FlashcardState.currentIndex++;
        displayCard();
    } else {
        // End of deck
        showDeckComplete();
    }
}

function previousCard() {
    if (FlashcardState.currentIndex > 0) {
        FlashcardState.currentIndex--;
        displayCard();
    }
}

function showDeckComplete() {
    const progress = FlashcardState.progress[FlashcardState.currentDeckType];
    const learned = progress.learned.length;
    const total = FlashcardState.currentDeck.length;
    
    alert(`Deck complete!\n\n${learned} of ${total} cards marked as learned.\n\nKeep practicing to master them all!`);
    
    // Return to first card
    FlashcardState.currentIndex = 0;
    displayCard();
}

// =====================================================
// Progress Tracking
// =====================================================

function markCard(learned) {
    const card = FlashcardState.currentDeck[FlashcardState.currentIndex];
    const deckType = FlashcardState.currentDeckType;
    const progress = FlashcardState.progress;
    
    // Remove from both arrays first
    progress[deckType].learned = progress[deckType].learned.filter(id => id !== card.id);
    progress[deckType].reviewing = progress[deckType].reviewing.filter(id => id !== card.id);
    
    // Add to appropriate array
    if (learned) {
        progress[deckType].learned.push(card.id);
        
        // Update stats
        const stats = Storage.getStats();
        stats.cardsLearned = Object.keys(progress).reduce((total, deck) => {
            return total + progress[deck].learned.length;
        }, 0);
        Storage.updateStats(stats);
    } else {
        progress[deckType].reviewing.push(card.id);
    }
    
    // Save progress
    Storage.saveFlashcardProgress(progress);
    FlashcardState.progress = progress;
    
    // Move to next card
    nextCard();
}

// =====================================================
// Keyboard Navigation
// =====================================================

document.addEventListener('keydown', function(e) {
    // Only handle if flashcard section is visible
    const container = document.getElementById('flashcard-container');
    if (!container || container.classList.contains('hidden')) return;
    
    switch (e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            flipCard();
            break;
        case 'ArrowRight':
        case 'n':
            nextCard();
            break;
        case 'ArrowLeft':
        case 'p':
            previousCard();
            break;
        case '1':
        case 'g':
            // Mark as learned (got it)
            markCard(true);
            break;
        case '2':
        case 'r':
            // Mark for review
            markCard(false);
            break;
    }
});

// =====================================================
// Export functions
// =====================================================

window.showFlashcardSetup = showFlashcardSetup;
window.startFlashcards = startFlashcards;
window.exitFlashcards = exitFlashcards;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.previousCard = previousCard;
window.markCard = markCard;
window.shuffleCurrentDeck = shuffleCurrentDeck;

