// Italian Patente B Learning App - Main Application Logic

// =====================================================
// Storage & Stats Management
// =====================================================

const Storage = {
    keys: {
        stats: 'patente_stats',
        quizHistory: 'patente_quiz_history',
        lastVisit: 'patente_last_visit',
        streak: 'patente_streak'
    },
    
    get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Storage get error:', e);
            return null;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage set error:', e);
        }
    },
    
    getStats() {
        return this.get(this.keys.stats) || {
            quizzesTaken: 0,
            totalCorrect: 0,
            totalQuestions: 0
        };
    },
    
    updateStats(newData) {
        const stats = this.getStats();
        Object.assign(stats, newData);
        this.set(this.keys.stats, stats);
        return stats;
    },
    
    updateStreak() {
        const today = new Date().toDateString();
        const lastVisit = this.get(this.keys.lastVisit);
        let streak = this.get(this.keys.streak) || 0;
        
        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (lastVisit === today) {
                // Same day, no change
            } else if (lastDate.toDateString() === yesterday.toDateString()) {
                // Consecutive day
                streak++;
            } else {
                // Streak broken
                streak = 1;
            }
        } else {
            streak = 1;
        }
        
        this.set(this.keys.lastVisit, today);
        this.set(this.keys.streak, streak);
        return streak;
    }
};

// =====================================================
// Navigation
// =====================================================

function switchToTab(tabName) {
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`${tabName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Special handling for quiz section
    if (tabName === 'quiz') {
        showQuizSetup();
    }
}

// =====================================================
// Stats Display
// =====================================================

function updateStatsDisplay() {
    const stats = Storage.getStats();
    const streak = Storage.updateStreak();
    
    // Update dashboard stats
    document.getElementById('stat-quizzes').textContent = stats.quizzesTaken;
    
    const avgScore = stats.totalQuestions > 0 
        ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) 
        : 0;
    document.getElementById('stat-score').textContent = `${avgScore}%`;
    
    document.getElementById('stat-streak').textContent = streak;
}


// =====================================================
// Quick Tips
// =====================================================

const quickTips = [
    "The STOP sign is the same everywhere - you must stop completely! In Italian: <strong>fermarsi completamente</strong>.",
    "Remember: <strong>Precedenza a destra</strong> - Give way to vehicles from the right at unmarked intersections.",
    "Speed limit in cities (<strong>centri abitati</strong>) is 50 km/h unless signs say otherwise.",
    "Trams (<strong>tram</strong>) ALWAYS have priority. Always give way to them!",
    "<strong>Neopatentati</strong> (new drivers) must follow lower speed limits for 3 years.",
    "Blue round signs = you MUST do something (<strong>obbligo</strong>).",
    "Red circle signs = you CANNOT do something (<strong>divieto</strong>).",
    "Triangle signs pointing up = danger ahead (<strong>pericolo</strong>).",
    "Emergency number in Italy: <strong>112</strong> - works for all emergencies.",
    "Blood alcohol limit: <strong>0.5 g/l</strong> for normal drivers, <strong>0.0</strong> for new drivers.",
    "Seat belts (<strong>cinture di sicurezza</strong>) are mandatory for everyone in the car.",
    "Keep 2 seconds distance from the car ahead - this is <strong>distanza di sicurezza</strong>.",
    "Blue parking lines = pay to park. White lines = free parking. Yellow = reserved.",
    "Warning triangle must be placed at least <strong>100 meters</strong> behind your car.",
    "On highways (<strong>autostrade</strong>), maximum speed is 130 km/h (110 in rain)."
];

function showRandomTip() {
    const tipElement = document.getElementById('tip-text');
    if (tipElement) {
        const randomTip = quickTips[Math.floor(Math.random() * quickTips.length)];
        tipElement.innerHTML = randomTip;
    }
}

// =====================================================
// Quiz Category Counts
// =====================================================

function updateCategoryCounts() {
    if (!PatenteData || !PatenteData.questions) return;
    
    const counts = {};
    PatenteData.questions.forEach(q => {
        counts[q.category] = (counts[q.category] || 0) + 1;
    });
    
    Object.keys(counts).forEach(category => {
        const countEl = document.getElementById(`count-${category}`);
        if (countEl) {
            countEl.textContent = `${counts[category]} questions`;
        }
    });
}

// =====================================================
// Category Selection
// =====================================================

function setupCategorySelection() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            categoryCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// =====================================================
// Initialization
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchToTab(this.dataset.tab);
        });
    });
    
    // Initialize stats
    updateStatsDisplay();
    
    // Show random tip
    showRandomTip();
    
    // Update category counts
    updateCategoryCounts();
    
    // Setup category selection
    setupCategorySelection();
    
    console.log('Italian Patente B App initialized!');
});

// Make functions globally available
window.switchToTab = switchToTab;
window.Storage = Storage;

