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
    },
    "ood-principles": {
        title: "Object-Oriented Design Principles Quiz",
        questions: [
            {
                question: "What is the main goal of design principles?",
                options: ["Increase code size", "Reduce future maintenance cost", "Eliminate testing", "Increase complexity"],
                correctAnswer: 1,
                explanation: "The main goal of design principles is to reduce future maintenance cost by creating flexible, maintainable code."
            },
            {
                question: "Good design:",
                options: ["Amplifies change", "Avoids change completely", "Absorbs change", "Prevents requirements"],
                correctAnswer: 2,
                explanation: "Good design absorbs change gracefully, allowing the system to adapt to new requirements without major rewrites."
            },
            {
                question: "SOLID principles are:",
                options: ["Programming languages", "Frameworks", "Design guidelines", "Databases"],
                correctAnswer: 2,
                explanation: "SOLID principles are design guidelines that help create more maintainable and scalable object-oriented software."
            },
            {
                question: "Which principle corresponds to the letter S?",
                options: ["Segregation", "Substitution", "Single Responsibility", "Security"],
                correctAnswer: 2,
                explanation: "The 'S' in SOLID stands for Single Responsibility Principle."
            },
            {
                question: "SRP states that a class should have:",
                options: ["One method", "One reason to change", "One variable", "One object"],
                correctAnswer: 1,
                explanation: "SRP states that a class should have one reason to change, meaning it should have only one responsibility."
            },
            {
                question: "SRP is about:",
                options: ["Class size", "Performance", "Responsibility", "Inheritance"],
                correctAnswer: 2,
                explanation: "SRP is about responsibility - ensuring each class has a single, well-defined responsibility."
            },
            {
                question: "Which class violates SRP?",
                options: ["InvoiceCalculator", "EmailService", "InvoiceService with calculation, email, DB, printing", "PrintService"],
                correctAnswer: 2,
                explanation: "InvoiceService with calculation, email, DB, and printing violates SRP because it has multiple reasons to change."
            },
            {
                question: "Which is NOT a reason to change InvoiceService?",
                options: ["Database changes", "Email format changes", "Business rule changes", "CPU speed changes"],
                correctAnswer: 3,
                explanation: "CPU speed changes are not a valid reason to change InvoiceService - this indicates poor separation of concerns."
            },
            {
                question: "Applying SRP improves:",
                options: ["Coupling", "Testing and reuse", "Complexity", "Bugs"],
                correctAnswer: 1,
                explanation: "Applying SRP improves testing and reuse by creating smaller, focused classes that are easier to test and reuse."
            },
            {
                question: "SRP means:",
                options: ["One method per class", "Tiny classes only", "One axis of change", "One variable per class"],
                correctAnswer: 2,
                explanation: "SRP means one axis of change - a class should change for only one reason."
            },
            {
                question: "OCP stands for:",
                options: ["Open-Closed Principle", "Object Creation Principle", "Object Control Principle", "Open Composition Principle"],
                correctAnswer: 0,
                explanation: "OCP stands for Open-Closed Principle."
            },
            {
                question: "OCP states software should be:",
                options: ["Open for modification only", "Closed for extension only", "Open for extension, closed for modification", "Closed for both"],
                correctAnswer: 2,
                explanation: "OCP states that software should be open for extension but closed for modification."
            },
            {
                question: "A PaymentService using many if-else statements violates:",
                options: ["SRP", "OCP", "ISP", "DIP"],
                correctAnswer: 1,
                explanation: "A PaymentService using many if-else statements violates OCP because you need to modify the class to add new payment methods."
            },
            {
                question: "Adding PayPal support by modifying existing code violates:",
                options: ["OCP", "LSP", "ISP", "SRP"],
                correctAnswer: 0,
                explanation: "Adding PayPal support by modifying existing code violates OCP - you should extend, not modify."
            },
            {
                question: "Which technique helps apply OCP?",
                options: ["Polymorphism", "Loops", "Recursion", "Arrays"],
                correctAnswer: 0,
                explanation: "Polymorphism helps apply OCP by allowing new behaviors to be added through new classes without modifying existing code."
            },
            {
                question: "In OCP, new behavior should be added by:",
                options: ["Editing old classes", "Deleting classes", "Creating new classes", "Rewriting everything"],
                correctAnswer: 2,
                explanation: "In OCP, new behavior should be added by creating new classes that extend the existing functionality."
            },
            {
                question: "OCP misuse includes:",
                options: ["Known variations", "Excessive early abstractions", "Interfaces", "Polymorphism"],
                correctAnswer: 1,
                explanation: "OCP misuse includes excessive early abstractions for variations that may never occur."
            },
            {
                question: "LSP stands for:",
                options: ["Low Separation Principle", "Liskov Substitution Principle", "Logical Structure Principle", "Layered System Principle"],
                correctAnswer: 1,
                explanation: "LSP stands for Liskov Substitution Principle."
            },
            {
                question: "LSP requires:",
                options: ["Subclasses replace parent classes safely", "Multiple inheritance", "Smaller classes", "Faster code"],
                correctAnswer: 0,
                explanation: "LSP requires that subclasses must be substitutable for their base classes without altering the correctness of the program."
            },
            {
                question: "Which is the classic LSP violation?",
                options: ["Observer Pattern", "Singleton Pattern", "Rectangle-Square Problem", "Factory Pattern"],
                correctAnswer: 2,
                explanation: "The Rectangle-Square Problem is the classic LSP violation - a Square cannot always substitute for a Rectangle."
            },
            {
                question: "LSP violations may cause:",
                options: ["Better reuse", "Hidden bugs", "Faster execution", "Better testing"],
                correctAnswer: 1,
                explanation: "LSP violations may cause hidden bugs when substituting subclasses breaks expected behavior."
            },
            {
                question: "Inheritance should represent:",
                options: ["Similar-to", "Has-a", "IS-A", "Uses-a"],
                correctAnswer: 2,
                explanation: "Inheritance should represent IS-A relationship - a subclass should truly be a type of its parent class."
            },
            {
                question: "ISP stands for:",
                options: ["Interface Segregation Principle", "Internal Structure Principle", "Inheritance Separation Principle", "Interface Security Principle"],
                correctAnswer: 0,
                explanation: "ISP stands for Interface Segregation Principle."
            },
            {
                question: "ISP says clients should not:",
                options: ["Use interfaces", "Depend on methods they don't use", "Create classes", "Use polymorphism"],
                correctAnswer: 1,
                explanation: "ISP states that clients should not depend on interfaces they don't use - they should have focused, role-specific interfaces."
            },
            {
                question: "A printer forced to implement scan() violates:",
                options: ["SRP", "OCP", "ISP", "DIP"],
                correctAnswer: 2,
                explanation: "A printer forced to implement scan() violates ISP because it depends on methods it doesn't use."
            },
            {
                question: "Which is better according to ISP?",
                options: ["One huge interface", "Several small interfaces", "No interfaces", "Static methods only"],
                correctAnswer: 1,
                explanation: "According to ISP, several small, focused interfaces are better than one large, bloated interface."
            },
            {
                question: "Printable, Scannable, and Faxable demonstrate:",
                options: ["SRP", "ISP", "LSP", "OCP"],
                correctAnswer: 1,
                explanation: "Printable, Scannable, and Faxable demonstrate ISP by segregating interfaces based on specific capabilities."
            },
            {
                question: "ISP improves:",
                options: ["Coupling", "Reuse and clean contracts", "Complexity", "Code duplication"],
                correctAnswer: 1,
                explanation: "ISP improves reuse and provides clean contracts by creating focused, purpose-specific interfaces."
            },
            {
                question: "DIP stands for:",
                options: ["Dependency Inversion Principle", "Data Integration Principle", "Design Improvement Principle", "Dependency Isolation Principle"],
                correctAnswer: 0,
                explanation: "DIP stands for Dependency Inversion Principle."
            },
            {
                question: "DIP states high-level modules should depend on:",
                options: ["Low-level modules", "Databases", "Abstractions", "Frameworks"],
                correctAnswer: 2,
                explanation: "DIP states that high-level modules should depend on abstractions, not on low-level modules."
            },
            {
                question: "Which violates DIP?",
                options: ["OrderService → Database Interface", "OrderService → MySQLDatabase directly", "Strategy Pattern", "Dependency Injection"],
                correctAnswer: 1,
                explanation: "OrderService → MySQLDatabase directly violates DIP because it depends on a concrete implementation."
            },
            {
                question: "DIP promotes:",
                options: ["Tight coupling", "Loose coupling", "Large classes", "Deep inheritance"],
                correctAnswer: 1,
                explanation: "DIP promotes loose coupling by depending on abstractions rather than concrete implementations."
            },
            {
                question: "Which database can replace another easily under DIP?",
                options: ["MySQL ↔ MongoDB through interface", "MySQL only", "MongoDB only", "None"],
                correctAnswer: 0,
                explanation: "Under DIP, MySQL and MongoDB can replace each other easily through a common interface."
            },
            {
                question: "Which pattern relies on DIP?",
                options: ["Strategy", "Factory", "Observer", "All of the above"],
                correctAnswer: 3,
                explanation: "Strategy, Factory, and Observer patterns all rely on DIP by depending on abstractions."
            },
            {
                question: "High Cohesion means:",
                options: ["Unrelated things together", "Related things belong together", "No classes", "More dependencies"],
                correctAnswer: 1,
                explanation: "High Cohesion means related things belong together - elements within a module should be strongly related."
            },
            {
                question: "Low Coupling means:",
                options: ["Maximum dependencies", "Minimal dependencies", "No objects", "No interfaces"],
                correctAnswer: 1,
                explanation: "Low Coupling means minimal dependencies - modules should be as independent as possible."
            },
            {
                question: "Which is generally preferred?",
                options: ["Inheritance over Composition", "Composition over Inheritance", "Neither", "Global Variables"],
                correctAnswer: 1,
                explanation: "Composition over Inheritance is generally preferred as it provides more flexibility and reduces coupling."
            },
            {
                question: "A design smell is:",
                options: ["Long methods", "Clean interfaces", "Low coupling", "High cohesion"],
                correctAnswer: 0,
                explanation: "Long methods are a design smell indicating potential issues with code organization and maintainability."
            },
            {
                question: "Which is NOT a design smell?",
                options: ["Large classes", "Deep inheritance trees", "High cohesion", "Large if-else blocks"],
                correctAnswer: 2,
                explanation: "High cohesion is NOT a design smell - it's actually a desirable characteristic of good design."
            },
            {
                question: "Violating SOLID principles usually leads to:",
                options: ["Flexible systems", "Fragile systems", "Better reuse", "Better maintainability"],
                correctAnswer: 1,
                explanation: "Violating SOLID principles usually leads to fragile systems that are difficult to maintain and extend."
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
    toggleNavBtn: document.getElementById('toggle-nav-btn'),
    toggleText: document.querySelector('.toggle-text'),
    questionGrid: document.getElementById('question-grid'),
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
    backToResults: document.getElementById('back-to-results'),
    incorrectPopup: document.getElementById('incorrect-popup')
};

// Initialize
function init() {
    loadGlobalStats();
    updateGlobalStatsDisplay();
    setupEventListeners();
    loadTheme();
    loadQuizState();
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

    // Toggle Navigation Button
    elements.toggleNavBtn.addEventListener('click', toggleQuestionNavigation);
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

// Save Quiz State to Local Storage
function saveQuizState() {
    localStorage.setItem('quizState', JSON.stringify(currentState));
}

// Load Quiz State from Local Storage
function loadQuizState() {
    const saved = localStorage.getItem('quizState');
    if (saved) {
        currentState = JSON.parse(saved);
        // Restore quiz if it was in progress
        if (currentState.currentCategory && !currentState.quizCompleted) {
            elements.quizTitle.textContent = quizDatabase[currentState.currentCategory].title;
            showScreen('quiz');
            loadQuestion();
        }
    }
}

// Clear Quiz State from Local Storage
function clearQuizState() {
    localStorage.removeItem('quizState');
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

    saveQuizState();
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

    // Update question navigation grid
    generateQuestionNavigation();

    // Update question text
    elements.questionText.textContent = question.question;

    // Update options
    elements.optionsContainer.innerHTML = '';
    const isAnswered = currentState.userAnswers[questionIndex] !== null;
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        
        if (isAnswered) {
            // Question already answered - show result without allowing re-selection
            if (index === question.correctAnswer) {
                optionElement.classList.add('correct');
            }
            if (currentState.userAnswers[questionIndex] === index && index !== question.correctAnswer) {
                optionElement.classList.add('incorrect');
            }
            optionElement.classList.add('answered');
        } else {
            // Question not answered yet - allow selection
            if (currentState.userAnswers[questionIndex] === index) {
                optionElement.classList.add('selected');
            }
            optionElement.addEventListener('click', () => selectOption(index));
        }
        
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

// Generate Question Navigation
function generateQuestionNavigation() {
    const category = currentState.currentCategory;
    const totalQuestions = quizDatabase[category].questions.length;
    const currentQuestionIndex = currentState.currentQuestionIndex;

    elements.questionGrid.innerHTML = '';

    for (let i = 0; i < totalQuestions; i++) {
        const button = document.createElement('button');
        button.className = 'question-nav-btn';
        button.textContent = i + 1;
        button.dataset.questionIndex = i;

        // Mark current question
        if (i === currentQuestionIndex) {
            button.classList.add('current');
        }

        // Mark answered questions
        if (currentState.userAnswers[i] !== null) {
            button.classList.add('answered');
            const question = quizDatabase[category].questions[i];
            if (currentState.userAnswers[i] === question.correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
        }

        button.addEventListener('click', () => jumpToQuestion(i));
        elements.questionGrid.appendChild(button);
    }
}

// Jump to Question
function jumpToQuestion(index) {
    currentState.currentQuestionIndex = index;
    saveQuizState();
    loadQuestion();
}

// Toggle Question Navigation
function toggleQuestionNavigation() {
    elements.questionGrid.classList.toggle('hidden');
    elements.toggleNavBtn.classList.toggle('expanded');

    if (elements.questionGrid.classList.contains('hidden')) {
        elements.toggleText.textContent = 'Show Question Navigator';
    } else {
        elements.toggleText.textContent = 'Hide Question Navigator';
    }
}

// Select Option
function selectOption(index) {
    const category = currentState.currentCategory;
    const questionIndex = currentState.currentQuestionIndex;
    const question = quizDatabase[category].questions[questionIndex];

    currentState.userAnswers[questionIndex] = index;
    saveQuizState();

    // Show popup if answer is incorrect
    if (index !== question.correctAnswer) {
        showIncorrectPopup();
    }

    // Update visual selection and show immediate feedback
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach((option, i) => {
        // Remove all feedback classes first
        option.classList.remove('selected', 'correct', 'incorrect', 'answered');

        if (i === index) {
            // Show if selected answer is correct or incorrect
            if (i === question.correctAnswer) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        }

        // Always show the correct answer
        if (i === question.correctAnswer) {
            option.classList.add('correct');
        }

        // Mark all options as answered to prevent re-selection
        option.classList.add('answered');
    });

    // Update question navigation to show answer status
    generateQuestionNavigation();
}

// Show Incorrect Popup
function showIncorrectPopup() {
    elements.incorrectPopup.classList.add('show');
    setTimeout(() => {
        elements.incorrectPopup.classList.remove('show');
    }, 2000);
}

// Next Question
function nextQuestion() {
    if (currentState.currentQuestionIndex < quizDatabase[currentState.currentCategory].questions.length - 1) {
        currentState.currentQuestionIndex++;
        saveQuizState();
        loadQuestion();
    }
}

// Previous Question
function previousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        currentState.currentQuestionIndex--;
        saveQuizState();
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
    saveQuizState();

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
        clearQuizState();
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
    clearQuizState();
    showScreen('home');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
