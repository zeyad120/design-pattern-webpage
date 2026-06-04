// Quiz Database for Design Patterns
const quizDatabase = {
    "reasoning-agents": {
        title: "Reasoning and Agents Quiz",
        questions: [
            {
                question: "What is the primary goal of a design pattern?",
                options: ["Improve CPU performance", "Provide a reusable solution to a recurring design problem", "Replace programming languages", "Eliminate debugging"],
                correctAnswer: 1,
                explanation: "The primary goal of a design pattern is to provide a reusable solution to a recurring design problem in software development."
            },
            {
                question: "Design patterns mainly address problems at the:",
                options: ["Hardware level", "Syntax level", "Design level", "Compiler level"],
                correctAnswer: 2,
                explanation: "Design patterns address problems at the design level of software development, focusing on structure and relationships between components."
            },
            {
                question: "Which of the following is NOT a course objective?",
                options: ["Understand why patterns exist", "Apply patterns in software", "Build operating systems", "Compare pattern trade-offs"],
                correctAnswer: 2,
                explanation: "Building operating systems is not a typical course objective for design patterns; the focus is on understanding and applying patterns."
            },
            {
                question: "Large software systems become difficult to maintain mainly because of:",
                options: ["Programming languages", "Poor design decisions", "Computer hardware", "Operating systems"],
                correctAnswer: 1,
                explanation: "Large software systems become difficult to maintain primarily due to poor design decisions that lead to tight coupling and other issues."
            },
            {
                question: "Which problem occurs when classes depend directly on concrete implementations?",
                options: ["Scalability", "Cohesion", "Tight Coupling", "Encapsulation"],
                correctAnswer: 2,
                explanation: "When classes depend directly on concrete implementations, it creates tight coupling, making the system harder to modify and maintain."
            },
            {
                question: "Tight coupling often causes:",
                options: ["Easier maintenance", "Cascade of changes", "Better testing", "Better reuse"],
                correctAnswer: 1,
                explanation: "Tight coupling often causes a cascade of changes, where modifying one component requires changes in many interconnected components."
            },
            {
                question: "Low reusability often results from:",
                options: ["Code duplication", "Encapsulation", "Abstraction", "Inheritance"],
                correctAnswer: 0,
                explanation: "Low reusability often results from code duplication, where similar code is repeated instead of being abstracted into reusable components."
            },
            {
                question: "Rigidity means:",
                options: ["Easy modification", "Small changes require major modifications", "High cohesion", "Strong abstraction"],
                correctAnswer: 1,
                explanation: "Rigidity means that small changes in the software require major modifications across many parts of the system."
            },
            {
                question: "Fragility means:",
                options: ["One fix introduces new bugs", "System runs faster", "System is reusable", "System is scalable"],
                correctAnswer: 0,
                explanation: "Fragility means that when you try to fix one issue, it often introduces new bugs in other parts of the system."
            },
            {
                question: "A God Object is a class that:",
                options: ["Contains only data", "Knows and does everything", "Has no methods", "Is abstract"],
                correctAnswer: 1,
                explanation: "A God Object is a class that knows and does everything, violating the Single Responsibility Principle and making the system hard to maintain."
            },
            {
                question: "Which principle is violated by a God Object?",
                options: ["Open/Closed Principle", "Dependency Inversion", "Single Responsibility Principle", "Liskov Substitution"],
                correctAnswer: 2,
                explanation: "A God Object violates the Single Responsibility Principle because it has too many responsibilities and reasons to change."
            },
            {
                question: "A software design pattern is:",
                options: ["A programming language", "A reusable solution to a common design problem", "A framework", "A compiler"],
                correctAnswer: 1,
                explanation: "A software design pattern is a reusable solution to a common design problem in software development."
            },
            {
                question: "'Reusable' means:",
                options: ["Used only once", "Applied multiple times", "Cannot be modified", "Must be copied"],
                correctAnswer: 1,
                explanation: "Reusable means that the solution can be applied multiple times in different contexts and situations."
            },
            {
                question: "Design patterns are:",
                options: ["Universal solutions for every problem", "Context-dependent solutions", "Hardware-dependent solutions", "Algorithms"],
                correctAnswer: 1,
                explanation: "Design patterns are context-dependent solutions that are applicable in specific situations, not universal solutions for every problem."
            },
            {
                question: "Which is NOT a design pattern?",
                options: ["Strategy", "Observer", "Binary Search", "Singleton"],
                correctAnswer: 2,
                explanation: "Binary Search is an algorithm, not a design pattern. Design patterns address structural and behavioral design issues, not computational algorithms."
            },
            {
                question: "Algorithms primarily solve:",
                options: ["Design problems", "Computation problems", "Architecture problems", "Documentation problems"],
                correctAnswer: 1,
                explanation: "Algorithms primarily solve computation problems, while design patterns solve design and architectural problems."
            },
            {
                question: "A design pattern is NOT:",
                options: ["Conceptual", "Reusable", "A code snippet", "Context-dependent"],
                correctAnswer: 2,
                explanation: "A design pattern is not a specific code snippet; it's a conceptual solution that can be implemented in various ways depending on the context."
            },
            {
                question: "Frameworks provide:",
                options: ["Conceptual solutions only", "Concrete structure", "Hardware abstraction", "Algorithms"],
                correctAnswer: 1,
                explanation: "Frameworks provide concrete structure and implementation, unlike design patterns which are conceptual solutions."
            },
            {
                question: "Libraries are:",
                options: ["Conceptual patterns", "Collections of reusable code", "Design principles", "Architectures"],
                correctAnswer: 1,
                explanation: "Libraries are collections of reusable code that provide specific functionality, unlike design patterns which provide design solutions."
            },
            {
                question: "In the lecture analogy, an algorithm is like:",
                options: ["A restaurant", "A language", "A cooking recipe", "A kitchen design"],
                correctAnswer: 2,
                explanation: "In the analogy, an algorithm is like a cooking recipe - it provides step-by-step instructions to achieve a specific result."
            },
            {
                question: "In the analogy, a design pattern is like:",
                options: ["A cooking recipe", "A kitchen design", "A restaurant menu", "A language"],
                correctAnswer: 1,
                explanation: "In the analogy, a design pattern is like a kitchen design - it provides a structural approach that can be used in various cooking scenarios."
            },
            {
                question: "In the analogy, a framework is like:",
                options: ["A fully equipped restaurant", "A recipe", "A chef", "A language"],
                correctAnswer: 0,
                explanation: "In the analogy, a framework is like a fully equipped restaurant - it provides a complete structure and infrastructure for building applications."
            },
            {
                question: "Christopher Alexander was originally a:",
                options: ["Software engineer", "Database designer", "Architect", "Physicist"],
                correctAnswer: 2,
                explanation: "Christopher Alexander was originally an architect who introduced the concept of patterns in building architecture."
            },
            {
                question: "Christopher Alexander introduced patterns in:",
                options: ["Network engineering", "Architecture", "Artificial intelligence", "Databases"],
                correctAnswer: 1,
                explanation: "Christopher Alexander introduced patterns in the field of architecture, which later inspired software design patterns."
            },
            {
                question: "The book 'A Pattern Language' was written by:",
                options: ["Erich Gamma", "Ralph Johnson", "Christopher Alexander", "Richard Helm"],
                correctAnswer: 2,
                explanation: "The book 'A Pattern Language' was written by Christopher Alexander, focusing on patterns in architecture and urban design."
            },
            {
                question: "GoF stands for:",
                options: ["Group of Frameworks", "Gang of Four", "Global Object Factory", "General Object Format"],
                correctAnswer: 1,
                explanation: "GoF stands for Gang of Four, referring to the four authors of the seminal design patterns book."
            },
            {
                question: "Which person is NOT a member of the Gang of Four?",
                options: ["Erich Gamma", "Richard Helm", "Christopher Alexander", "Ralph Johnson"],
                correctAnswer: 2,
                explanation: "Christopher Alexander is not a member of the Gang of Four; he inspired the concept but the GoF authors are Gamma, Helm, Johnson, and Vlissides."
            },
            {
                question: "The GoF book was published in:",
                options: ["1977", "1988", "1994", "2001"],
                correctAnswer: 2,
                explanation: "The GoF book 'Design Patterns: Elements of Reusable Object-Oriented Software' was published in 1994."
            },
            {
                question: "The GoF book defined:",
                options: ["10 patterns", "15 patterns", "23 patterns", "50 patterns"],
                correctAnswer: 2,
                explanation: "The GoF book defined 23 classic design patterns categorized into creational, structural, and behavioral patterns."
            },
            {
                question: "The core philosophy of design patterns is:",
                options: ["Design for speed", "Design for hardware", "Design for change", "Design for syntax"],
                correctAnswer: 2,
                explanation: "The core philosophy of design patterns is to design for change, making software more flexible and maintainable."
            },
            {
                question: "Patterns help isolate:",
                options: ["Bugs", "Variables", "Change", "Memory"],
                correctAnswer: 2,
                explanation: "Patterns help isolate change so that modifications in one part of the system don't require changes throughout the entire system."
            },
            {
                question: "Patterns represent:",
                options: ["Captured experience", "Programming languages", "Hardware knowledge", "Databases"],
                correctAnswer: 0,
                explanation: "Patterns represent captured experience from expert developers, providing proven solutions to common design problems."
            },
            {
                question: "Which is NOT a component of a design pattern?",
                options: ["Problem", "Solution", "Compiler", "Consequences"],
                correctAnswer: 2,
                explanation: "Compiler is not a component of a design pattern. The typical components are: Problem, Solution, Consequences, and Context."
            },
            {
                question: "The 'Problem' section of a pattern describes:",
                options: ["When to apply the pattern", "Programming language syntax", "CPU requirements", "Database structure"],
                correctAnswer: 0,
                explanation: "The 'Problem' section of a pattern describes when to apply the pattern and what problem it solves."
            },
            {
                question: "Observer Pattern is useful when:",
                options: ["Objects need notification of changes", "Databases need indexing", "Memory must be optimized", "Files must be compressed"],
                correctAnswer: 0,
                explanation: "The Observer Pattern is useful when objects need to be notified of changes in other objects without tight coupling."
            },
            {
                question: "A major technical benefit of patterns is:",
                options: ["Loose coupling", "More bugs", "Hardware acceleration", "Reduced memory"],
                correctAnswer: 0,
                explanation: "A major technical benefit of patterns is loose coupling, which makes systems more flexible and easier to maintain."
            },
            {
                question: "Which is a team benefit of patterns?",
                options: ["Faster CPUs", "Shared vocabulary", "More RAM", "Less storage"],
                correctAnswer: 1,
                explanation: "A team benefit of patterns is shared vocabulary, which improves communication among developers using common pattern names."
            },
            {
                question: "Over-engineering occurs when:",
                options: ["Patterns are used unnecessarily", "No patterns are used", "Code is tested", "Classes are reused"],
                correctAnswer: 0,
                explanation: "Over-engineering occurs when patterns are used unnecessarily, adding complexity without solving a real problem."
            },
            {
                question: "Which question reflects correct thinking?",
                options: ["Which pattern should I use?", "Do I even need a pattern?", "Which framework is fastest?", "Which language is best?"],
                correctAnswer: 1,
                explanation: "The correct thinking is to first ask 'Do I even need a pattern?' rather than immediately looking for a pattern to use."
            },
            {
                question: "You should NOT use a design pattern when:",
                options: ["The system will evolve", "Flexibility is required", "The problem is simple", "The problem recurs"],
                correctAnswer: 2,
                explanation: "You should NOT use a design pattern when the problem is simple and doesn't require the complexity that patterns introduce."
            }
        ]
    }
};

// State Management
let currentState = {
    currentCategory: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    quizCompleted: false,
    score: 0
};

// Global Statistics
let globalStats = {
    totalQuizzes: 0,
    totalScore: 0
};

// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.querySelector('.theme-icon'),
    totalQuizzes: document.getElementById('total-quizzes'),
    averageScore: document.getElementById('average-score'),
    categoryCards: document.querySelectorAll('.category-card'),
    quizTitle: document.getElementById('quiz-title'),
    quitBtn: document.getElementById('quit-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    finalScore: document.getElementById('final-score'),
    performanceMessage: document.getElementById('performance-message'),
    performanceDescription: document.getElementById('performance-description'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    accuracy: document.getElementById('accuracy'),
    reviewBtn: document.getElementById('review-btn'),
    homeBtn: document.getElementById('home-btn'),
    reviewContainer: document.getElementById('review-container'),
    backToResults: document.getElementById('back-to-results')
};

// Initialize
function init() {
    loadGlobalStats();
    updateGlobalStatsDisplay();
    setupEventListeners();
    loadTheme();
}

// Load Global Statistics from Local Storage
function loadGlobalStats() {
    const saved = localStorage.getItem('quizGlobalStats');
    if (saved) {
        globalStats = JSON.parse(saved);
    }
}

// Save Global Statistics to Local Storage
function saveGlobalStats() {
    localStorage.setItem('quizGlobalStats', JSON.stringify(globalStats));
}

// Update Global Statistics Display
function updateGlobalStatsDisplay() {
    elements.totalQuizzes.textContent = `Total Quizzes: ${globalStats.totalQuizzes}`;
    const avgScore = globalStats.totalQuizzes > 0 
        ? Math.round((globalStats.totalScore / globalStats.totalQuizzes) * 10) / 10 
        : 0;
    elements.averageScore.textContent = `Avg Score: ${avgScore}%`;
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Category Cards
    elements.categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            startQuiz(category);
        });
    });

    // Quiz Navigation
    elements.quitBtn.addEventListener('click', quitQuiz);
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.submitBtn.addEventListener('click', submitQuiz);

    // Results Screen
    elements.reviewBtn.addEventListener('click', showReview);
    elements.homeBtn.addEventListener('click', goHome);

    // Review Screen
    elements.backToResults.addEventListener('click', () => {
        showScreen('results');
    });
}

// Toggle Theme
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.dataset.theme = newTheme;
    elements.themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('quizTheme', newTheme);
}

// Load Theme from Local Storage
function loadTheme() {
    const savedTheme = localStorage.getItem('quizTheme') || 'light';
    document.body.dataset.theme = savedTheme;
    elements.themeIcon.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}

// Show Screen
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// Start Quiz
function startQuiz(category) {
    if (!quizDatabase[category]) {
        console.error('Category not found:', category);
        return;
    }

    currentState = {
        currentCategory: category,
        currentQuestionIndex: 0,
        userAnswers: new Array(quizDatabase[category].questions.length).fill(null),
        quizCompleted: false,
        score: 0
    };

    elements.quizTitle.textContent = quizDatabase[category].title;
    showScreen('quiz');
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const category = currentState.currentCategory;
    const questionIndex = currentState.currentQuestionIndex;
    const question = quizDatabase[category].questions[questionIndex];

    // Update progress
    const totalQuestions = quizDatabase[category].questions.length;
    const progress = ((questionIndex + 1) / totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Question ${questionIndex + 1} of ${totalQuestions}`;

    // Update question text
    elements.questionText.textContent = question.question;

    // Update options
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        
        if (currentState.userAnswers[questionIndex] === index) {
            optionElement.classList.add('selected');
        }

        optionElement.addEventListener('click', () => selectOption(index));
        elements.optionsContainer.appendChild(optionElement);
    });

    // Update navigation buttons
    elements.prevBtn.disabled = questionIndex === 0;
    
    if (questionIndex === totalQuestions - 1) {
        elements.nextBtn.classList.add('hidden');
        elements.submitBtn.classList.remove('hidden');
    } else {
        elements.nextBtn.classList.remove('hidden');
        elements.submitBtn.classList.add('hidden');
    }
}

// Select Option
function selectOption(index) {
    currentState.userAnswers[currentState.currentQuestionIndex] = index;
    
    // Update visual selection
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
}

// Next Question
function nextQuestion() {
    if (currentState.currentQuestionIndex < quizDatabase[currentState.currentCategory].questions.length - 1) {
        currentState.currentQuestionIndex++;
        loadQuestion();
    }
}

// Previous Question
function previousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        currentState.currentQuestionIndex--;
        loadQuestion();
    }
}

// Submit Quiz
function submitQuiz() {
    const category = currentState.currentCategory;
    const questions = quizDatabase[category].questions;
    
    let correctAnswers = 0;
    questions.forEach((question, index) => {
        if (currentState.userAnswers[index] === question.correctAnswer) {
            correctAnswers++;
        }
    });

    currentState.score = correctAnswers;
    currentState.quizCompleted = true;

    // Update global statistics
    globalStats.totalQuizzes++;
    globalStats.totalScore += (correctAnswers / questions.length) * 100;
    saveGlobalStats();
    updateGlobalStatsDisplay();

    showResults();
}

// Show Results
function showResults() {
    const category = currentState.currentCategory;
    const questions = quizDatabase[category].questions;
    const score = currentState.score;
    const total = questions.length;
    const percentage = (score / total) * 100;

    elements.finalScore.textContent = score;
    
    // Performance message
    if (percentage >= 90) {
        elements.performanceMessage.textContent = 'Excellent! 🎉';
        elements.performanceDescription.textContent = 'You have mastered this topic!';
    } else if (percentage >= 70) {
        elements.performanceMessage.textContent = 'Great Job! 👍';
        elements.performanceDescription.textContent = 'You have a good understanding of this topic.';
    } else if (percentage >= 50) {
        elements.performanceMessage.textContent = 'Good Effort! 💪';
        elements.performanceDescription.textContent = 'Keep practicing to improve your knowledge.';
    } else {
        elements.performanceMessage.textContent = 'Keep Learning! 📚';
        elements.performanceDescription.textContent = 'Review the material and try again.';
    }

    // Stats
    elements.correctCount.textContent = score;
    elements.wrongCount.textContent = total - score;
    elements.accuracy.textContent = `${Math.round(percentage)}%`;

    showScreen('results');
}

// Show Review
function showReview() {
    const category = currentState.currentCategory;
    const questions = quizDatabase[category].questions;
    
    elements.reviewContainer.innerHTML = '';

    questions.forEach((question, index) => {
        const userAnswer = currentState.userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <div class="review-question">Q${index + 1}: ${question.question}</div>
            <div class="review-answer user-answer">
                Your Answer: ${userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
            </div>
            ${!isCorrect ? `
                <div class="review-answer correct-answer">
                    Correct Answer: ${question.options[question.correctAnswer]}
                </div>
            ` : ''}
            <div class="review-explanation">
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        `;
        
        elements.reviewContainer.appendChild(reviewItem);
    });

    showScreen('review');
}

// Quit Quiz
function quitQuiz() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        goHome();
    }
}

// Go Home
function goHome() {
    currentState = {
        currentCategory: null,
        currentQuestionIndex: 0,
        userAnswers: [],
        quizCompleted: false,
        score: 0
    };
    showScreen('home');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
