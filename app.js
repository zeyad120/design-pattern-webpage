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
    },
    "classification-patterns": {
        title: "Lecture 3: Classification of Design Patterns",
        questions: [
            {
                question: "Why do we classify design patterns?",
                options: ["To increase complexity", "To organize knowledge and simplify selection", "To replace OOP", "To improve hardware"],
                correctAnswer: 1,
                explanation: "We classify design patterns to organize knowledge, simplify selection, understand the purpose of each pattern, and avoid incorrect usage."
            },
            {
                question: "Without classification, developers may:",
                options: ["Choose patterns correctly", "Memorize patterns easily", "Apply patterns randomly", "Write less code"],
                correctAnswer: 2,
                explanation: "Without classification, developers may apply patterns randomly without understanding their purpose or when to use them."
            },
            {
                question: "Classification helps developers:",
                options: ["Avoid learning patterns", "Quickly narrow choices", "Remove abstractions", "Reduce inheritance"],
                correctAnswer: 1,
                explanation: "Classification helps developers quickly narrow down choices by organizing patterns by their purpose and intent."
            },
            {
                question: "Design patterns should be chosen by:",
                options: ["Name", "Popularity", "Intent", "Complexity"],
                correctAnswer: 2,
                explanation: "Design patterns should be chosen by intent (the problem they solve), not by name, popularity, or complexity."
            },
            {
                question: "The GoF classifies patterns into:",
                options: ["2 categories", "3 categories", "4 categories", "5 categories"],
                correctAnswer: 1,
                explanation: "The Gang of Four classifies patterns into 3 categories: Creational, Structural, and Behavioral."
            },
            {
                question: "Which category focuses on object creation?",
                options: ["Structural", "Behavioral", "Creational", "Architectural"],
                correctAnswer: 2,
                explanation: "Creational patterns focus on object creation and answer the question: How are objects created?"
            },
            {
                question: "Which category focuses on object composition?",
                options: ["Behavioral", "Structural", "Creational", "Functional"],
                correctAnswer: 1,
                explanation: "Structural patterns focus on object composition and answer the question: How are objects combined?"
            },
            {
                question: "Which category focuses on object interaction?",
                options: ["Behavioral", "Structural", "Creational", "Logical"],
                correctAnswer: 0,
                explanation: "Behavioral patterns focus on object interaction and answer the question: How do objects communicate?"
            },
            {
                question: "The main question for Creational patterns is:",
                options: ["How do objects communicate?", "How are objects combined?", "How are objects created?", "How are objects tested?"],
                correctAnswer: 2,
                explanation: "The main question for Creational patterns is: How are objects created?"
            },
            {
                question: "The main question for Structural patterns is:",
                options: ["How are classes/objects combined?", "How are objects created?", "How are objects deleted?", "How are objects stored?"],
                correctAnswer: 0,
                explanation: "The main question for Structural patterns is: How are classes/objects combined?"
            },
            {
                question: "The main question for Behavioral patterns is:",
                options: ["How are objects inherited?", "How do objects communicate?", "How are objects created?", "How are objects deployed?"],
                correctAnswer: 1,
                explanation: "The main question for Behavioral patterns is: How do objects communicate?"
            },
            {
                question: "Creational patterns aim to:",
                options: ["Reduce coupling to concrete classes", "Increase inheritance", "Increase complexity", "Eliminate objects"],
                correctAnswer: 0,
                explanation: "Creational patterns aim to reduce coupling to concrete classes by abstracting object creation logic."
            },
            {
                question: "Which is a common problem solved by Creational patterns?",
                options: ["Incompatible interfaces", "Complex object creation logic", "State transitions", "Communication issues"],
                correctAnswer: 1,
                explanation: "Creational patterns solve problems like complex object creation logic, excessive use of new, and the need to create families of objects."
            },
            {
                question: "Which is NOT a Creational pattern?",
                options: ["Builder", "Prototype", "Decorator", "Singleton"],
                correctAnswer: 2,
                explanation: "Decorator is a Structural pattern, not a Creational pattern. Creational patterns include Singleton, Factory Method, Abstract Factory, Builder, and Prototype."
            },
            {
                question: "Which is a Creational pattern?",
                options: ["Factory Method", "Observer", "Proxy", "Strategy"],
                correctAnswer: 0,
                explanation: "Factory Method is a Creational pattern. Observer, Proxy, and Strategy are not Creational patterns."
            },
            {
                question: "Which is a Creational pattern?",
                options: ["Adapter", "Abstract Factory", "State", "Facade"],
                correctAnswer: 1,
                explanation: "Abstract Factory is a Creational pattern. Adapter, State, and Facade are not Creational patterns."
            },
            {
                question: "Creational patterns are useful when:",
                options: ["Object creation logic is complex", "Inheritance is enough", "No flexibility is needed", "Classes never change"],
                correctAnswer: 0,
                explanation: "Creational patterns are useful when object creation logic is complex, you want to hide concrete classes, or you expect changes in creation methods."
            },
            {
                question: "Structural patterns help:",
                options: ["Compose classes and objects", "Create objects", "Delete objects", "Manage databases"],
                correctAnswer: 0,
                explanation: "Structural patterns help compose classes and objects into larger structures while keeping flexibility."
            },
            {
                question: "Which is a common Structural problem?",
                options: ["Complex object creation", "Incompatible interfaces", "State-driven behavior", "Communication protocols"],
                correctAnswer: 1,
                explanation: "Common Structural problems include incompatible interfaces, large monolithic classes, rigid inheritance, and dynamic addition of responsibilities."
            },
            {
                question: "Which is NOT a Structural pattern?",
                options: ["Adapter", "Bridge", "Observer", "Proxy"],
                correctAnswer: 2,
                explanation: "Observer is a Behavioral pattern, not a Structural pattern. Structural patterns include Adapter, Bridge, Composite, Decorator, Facade, Flyweight, and Proxy."
            },
            {
                question: "Which Structural pattern changes an interface?",
                options: ["Decorator", "Adapter", "Observer", "Builder"],
                correctAnswer: 1,
                explanation: "Adapter changes an interface to make incompatible classes work together."
            },
            {
                question: "Which Structural pattern adds behavior?",
                options: ["Adapter", "Facade", "Decorator", "Proxy"],
                correctAnswer: 2,
                explanation: "Decorator adds behavior dynamically to objects without changing their class."
            },
            {
                question: "Which Structural pattern simplifies a subsystem?",
                options: ["Facade", "State", "Builder", "Strategy"],
                correctAnswer: 0,
                explanation: "Facade provides a simplified interface to a complex subsystem."
            },
            {
                question: "Structural patterns are useful when:",
                options: ["Integrating third-party code", "Creating families of objects", "Managing states", "Replacing algorithms"],
                correctAnswer: 0,
                explanation: "Structural patterns are useful when integrating third-party code, merging behaviors, or creating flexible relationships between classes."
            },
            {
                question: "Behavioral patterns focus on:",
                options: ["Object communication", "Object creation", "Database access", "Hardware interaction"],
                correctAnswer: 0,
                explanation: "Behavioral patterns focus on object communication and how objects interact with each other."
            },
            {
                question: "Behavioral patterns help reduce:",
                options: ["Memory usage", "Communication coupling", "CPU load", "Storage requirements"],
                correctAnswer: 1,
                explanation: "Behavioral patterns help reduce communication coupling between objects."
            },
            {
                question: "Which is NOT a Behavioral pattern?",
                options: ["Strategy", "Observer", "Command", "Builder"],
                correctAnswer: 3,
                explanation: "Builder is a Creational pattern, not a Behavioral pattern. Behavioral patterns include Strategy, Observer, Command, State, Template Method, Iterator, Mediator, Memento, Chain of Responsibility, Visitor, and Interpreter."
            },
            {
                question: "Which pattern belongs to Behavioral category?",
                options: ["State", "Proxy", "Builder", "Adapter"],
                correctAnswer: 0,
                explanation: "State is a Behavioral pattern. Proxy is Structural, Builder is Creational, and Adapter is Structural."
            },
            {
                question: "Which pattern belongs to Behavioral category?",
                options: ["Abstract Factory", "Observer", "Decorator", "Facade"],
                correctAnswer: 1,
                explanation: "Observer is a Behavioral pattern. Abstract Factory is Creational, Decorator is Structural, and Facade is Structural."
            },
            {
                question: "Behavioral patterns help replace:",
                options: ["Classes", "Constructors", "Complex if-else logic", "Interfaces"],
                correctAnswer: 2,
                explanation: "Behavioral patterns help replace complex if-else logic with more flexible and maintainable structures."
            },
            {
                question: "In the comparison table, Creational patterns focus on:",
                options: ["Interaction", "Composition", "Creation", "Inheritance"],
                correctAnswer: 2,
                explanation: "In the comparison table, Creational patterns focus on Creation."
            },
            {
                question: "In the comparison table, Structural patterns focus on:",
                options: ["Creation", "Composition", "Interaction", "Communication"],
                correctAnswer: 1,
                explanation: "In the comparison table, Structural patterns focus on Composition."
            },
            {
                question: "In the comparison table, Behavioral patterns focus on:",
                options: ["Interaction", "Creation", "Composition", "Construction"],
                correctAnswer: 0,
                explanation: "In the comparison table, Behavioral patterns focus on Interaction."
            },
            {
                question: "Factory Method creates:",
                options: ["Families of products", "One product", "Object communication", "Dynamic behavior"],
                correctAnswer: 1,
                explanation: "Factory Method creates one product at a time."
            },
            {
                question: "Abstract Factory creates:",
                options: ["One product", "One method", "Families of products", "One interface"],
                correctAnswer: 2,
                explanation: "Abstract Factory creates families of related products."
            },
            {
                question: "Factory Method mainly uses:",
                options: ["Composition", "Delegation", "Inheritance", "Aggregation"],
                correctAnswer: 2,
                explanation: "Factory Method mainly uses inheritance to create objects."
            },
            {
                question: "Abstract Factory mainly uses:",
                options: ["Composition", "Inheritance", "Recursion", "Delegation"],
                correctAnswer: 0,
                explanation: "Abstract Factory mainly uses composition to create families of products."
            },
            {
                question: "In Strategy pattern:",
                options: ["Object decides behavior", "Client decides algorithm", "Interface changes", "Behavior is added dynamically"],
                correctAnswer: 1,
                explanation: "In Strategy pattern, the client decides which algorithm to use."
            },
            {
                question: "In State pattern:",
                options: ["Client decides behavior", "Object decides behavior based on state", "Interface changes", "Families are created"],
                correctAnswer: 1,
                explanation: "In State pattern, the object decides its behavior based on its internal state."
            },
            {
                question: "Design patterns are:",
                options: ["Replacements for SOLID principles", "Applications of design principles", "Programming languages", "Testing frameworks"],
                correctAnswer: 1,
                explanation: "Design patterns are applications of design principles, providing concrete solutions that implement principles like SOLID."
            }
        ]
    },
    "singleton-pattern": {
        title: "Lecture 4: Singleton Pattern",
        questions: [
            {
                question: "What is the primary goal of Singleton Pattern?",
                options: ["Create many objects", "Ensure only one instance exists", "Improve inheritance", "Eliminate classes"],
                correctAnswer: 1,
                explanation: "The primary goal of Singleton Pattern is to ensure only one instance exists."
            },
            {
                question: "Singleton belongs to which category?",
                options: ["Structural", "Behavioral", "Creational", "Architectural"],
                correctAnswer: 2,
                explanation: "Singleton belongs to the Creational category of design patterns."
            },
            {
                question: "Singleton controls:",
                options: ["Object behavior", "Object communication", "Instance creation", "Database access"],
                correctAnswer: 2,
                explanation: "Singleton controls instance creation to ensure only one instance exists."
            },
            {
                question: "Lazy Initialization means:",
                options: ["Instance created at startup", "Instance created only when needed", "Instance never created", "Multiple instances created"],
                correctAnswer: 1,
                explanation: "Lazy Initialization means the instance is created only when needed."
            },
            {
                question: "An advantage of Lazy Initialization is:",
                options: ["Better testing", "Saves resources", "Faster compilation", "Less memory management"],
                correctAnswer: 1,
                explanation: "An advantage of Lazy Initialization is that it saves resources by creating the instance only when needed."
            },
            {
                question: "A disadvantage of basic Lazy Initialization is:",
                options: ["High memory usage", "Not thread-safe", "Slow database access", "Difficult syntax"],
                correctAnswer: 1,
                explanation: "A disadvantage of basic Lazy Initialization is that it's not thread-safe."
            },
            {
                question: "What happens if two threads access a non-thread-safe Singleton simultaneously?",
                options: ["Nothing happens", "Program stops", "Multiple instances may be created", "Object is deleted"],
                correctAnswer: 2,
                explanation: "If two threads access a non-thread-safe Singleton simultaneously, multiple instances may be created."
            },
            {
                question: "Thread safety becomes important when:",
                options: ["One thread exists", "Multiple threads access Singleton", "No objects exist", "Using arrays"],
                correctAnswer: 1,
                explanation: "Thread safety becomes important when multiple threads access the Singleton."
            },
            {
                question: "Which thread-safe solution is the simplest?",
                options: ["Static Holder", "Double-Checked Locking", "Synchronized Method", "Factory Method"],
                correctAnswer: 2,
                explanation: "Synchronized Method is the simplest thread-safe solution."
            },
            {
                question: "The drawback of Synchronized Method is:",
                options: ["Hidden dependencies", "Performance overhead", "Memory leak", "No lazy loading"],
                correctAnswer: 1,
                explanation: "The drawback of Synchronized Method is performance overhead due to synchronization."
            },
            {
                question: "Double-Checked Locking synchronizes:",
                options: ["Always", "Never", "Only when needed", "After creation"],
                correctAnswer: 2,
                explanation: "Double-Checked Locking synchronizes only when needed."
            },
            {
                question: "Double-Checked Locking is:",
                options: ["Simple but slow", "Complex but efficient", "Easy and inefficient", "Deprecated"],
                correctAnswer: 1,
                explanation: "Double-Checked Locking is complex but efficient."
            },
            {
                question: "Which variation is lazy and thread-safe?",
                options: ["Eager Singleton", "Static Inner Class", "Prototype", "Builder"],
                correctAnswer: 1,
                explanation: "Static Inner Class is lazy and thread-safe."
            },
            {
                question: "Which Singleton variation is recommended in many languages?",
                options: ["Eager", "Lazy", "Static Holder", "Prototype"],
                correctAnswer: 2,
                explanation: "Static Holder is recommended in many languages as it's simple and thread-safe."
            },
            {
                question: "Which variation has the highest complexity?",
                options: ["Eager", "Lazy", "Double-Checked Locking", "Static Holder"],
                correctAnswer: 2,
                explanation: "Double-Checked Locking has the highest complexity."
            },
            {
                question: "Which variation is NOT thread-safe by default?",
                options: ["Synchronized", "Double-Checked", "Lazy", "Static Holder"],
                correctAnswer: 2,
                explanation: "Lazy is NOT thread-safe by default."
            },
            {
                question: "Using Singleton as a global variable may cause:",
                options: ["Loose coupling", "Hidden dependencies", "Better testing", "Better abstraction"],
                correctAnswer: 1,
                explanation: "Using Singleton as a global variable may cause hidden dependencies."
            },
            {
                question: "A Singleton with too many responsibilities becomes:",
                options: ["Strategy Object", "God Object", "Adapter Object", "Proxy Object"],
                correctAnswer: 1,
                explanation: "A Singleton with too many responsibilities becomes a God Object."
            },
            {
                question: "Excessive responsibility in Singleton violates:",
                options: ["OCP only", "ISP only", "SRP and DIP", "LSP only"],
                correctAnswer: 2,
                explanation: "Excessive responsibility in Singleton violates SRP and DIP."
            },
            {
                question: "Singleton is controversial because of:",
                options: ["Hidden dependencies", "Global state", "Difficult testing", "All of the above"],
                correctAnswer: 3,
                explanation: "Singleton is controversial because of hidden dependencies, global state, and difficult testing."
            },
            {
                question: "\"Singleton is global state in disguise\" means:",
                options: ["Singleton hides global access behind a class", "Singleton improves testing", "Singleton removes coupling", "Singleton creates many objects"],
                correctAnswer: 0,
                explanation: "\"Singleton is global state in disguise\" means Singleton hides global access behind a class."
            },
            {
                question: "One testing problem with Singleton is:",
                options: ["Easy reset", "Easy mocking", "Hard to reset instance", "No dependencies"],
                correctAnswer: 2,
                explanation: "One testing problem with Singleton is that it's hard to reset the instance between tests."
            },
            {
                question: "Singleton often makes unit testing:",
                options: ["Easier", "Faster", "Fragile", "Automatic"],
                correctAnswer: 2,
                explanation: "Singleton often makes unit testing fragile due to shared state."
            },
            {
                question: "Why is mocking Singleton difficult?",
                options: ["Global shared state", "Too many interfaces", "No constructors", "Multiple instances"],
                correctAnswer: 0,
                explanation: "Mocking Singleton is difficult because of global shared state."
            },
            {
                question: "Modern advice prefers:",
                options: ["Singleton over DI", "Dependency Injection over Singleton", "Static methods only", "Global variables"],
                correctAnswer: 1,
                explanation: "Modern advice prefers Dependency Injection over Singleton."
            },
            {
                question: "Dependency Injection provides:",
                options: ["Hidden dependencies", "Explicit dependencies", "Global state", "Tight coupling"],
                correctAnswer: 1,
                explanation: "Dependency Injection provides explicit dependencies."
            },
            {
                question: "Compared to Singleton, Dependency Injection is:",
                options: ["Harder to test", "Easier to test", "More global", "More hidden"],
                correctAnswer: 1,
                explanation: "Compared to Singleton, Dependency Injection is easier to test."
            },
            {
                question: "Singleton usually introduces:",
                options: ["Loose coupling", "Hidden coupling", "Zero coupling", "Dynamic coupling"],
                correctAnswer: 1,
                explanation: "Singleton usually introduces hidden coupling."
            },
            {
                question: "A valid use case for Singleton is:",
                options: ["System-wide shared resource", "Temporary variables", "Business logic classes", "Data transfer objects"],
                correctAnswer: 0,
                explanation: "A valid use case for Singleton is a system-wide shared resource."
            },
            {
                question: "Singleton should be used when:",
                options: ["Many instances are required", "Exactly one instance is required", "Testing is difficult", "State changes frequently"],
                correctAnswer: 1,
                explanation: "Singleton should be used when exactly one instance is required."
            },
            {
                question: "Singleton is best when state is:",
                options: ["Random", "Shared and carefully managed", "Always changing", "Unknown"],
                correctAnswer: 1,
                explanation: "Singleton is best when state is shared and carefully managed."
            },
            {
                question: "Singleton should NOT be used for:",
                options: ["Shared configuration", "Logger service", "Business logic classes", "Resource manager"],
                correctAnswer: 2,
                explanation: "Singleton should NOT be used for business logic classes."
            },
            {
                question: "Avoid Singleton when:",
                options: ["Multiple instances may be needed later", "One instance is required", "Shared resources exist", "Configuration is global"],
                correctAnswer: 0,
                explanation: "Avoid Singleton when multiple instances may be needed later."
            },
            {
                question: "Which statement is a misconception?",
                options: ["Singleton controls instance creation", "Singleton is always bad", "Singleton can be useful", "Singleton may need thread safety"],
                correctAnswer: 1,
                explanation: "The misconception is that Singleton is always bad - it can be useful in certain cases."
            },
            {
                question: "Which statement is FALSE?",
                options: ["Singleton means only one object forever", "Singleton controls instance creation", "Singleton may be useful", "Singleton can be misused"],
                correctAnswer: 0,
                explanation: "The FALSE statement is that Singleton means only one object forever - it can be replaced or the pattern can be changed."
            },
            {
                question: "Singleton is NOT simply:",
                options: ["Object creation control", "Static methods", "Design Pattern", "Creational Pattern"],
                correctAnswer: 1,
                explanation: "Singleton is NOT simply static methods - it's a design pattern that controls instance creation."
            },
            {
                question: "According to the lecture summary, Singleton is:",
                options: ["Difficult to implement", "Easy to implement, easy to misuse", "Obsolete", "Behavioral"],
                correctAnswer: 1,
                explanation: "According to the lecture summary, Singleton is easy to implement but easy to misuse."
            },
            {
                question: "The lecture states that thread safety is:",
                options: ["Optional", "Rarely important", "Critical", "Unrelated"],
                correctAnswer: 2,
                explanation: "The lecture states that thread safety is critical for Singleton."
            },
            {
                question: "Singleton is often considered:",
                options: ["A framework", "An anti-pattern", "A database", "A compiler"],
                correctAnswer: 1,
                explanation: "Singleton is often considered an anti-pattern due to its global state and testing issues."
            },
            {
                question: "The final recommendation of the lecture is:",
                options: ["Always use Singleton", "Avoid abstractions", "Prefer Dependency Injection in modern systems", "Use global variables"],
                correctAnswer: 2,
                explanation: "The final recommendation of the lecture is to prefer Dependency Injection in modern systems."
            }
        ]
    },
    "factory-method-pattern": {
        title: "Lecture 5: Factory Method Pattern",
        questions: [
            {
                question: "Factory Method Pattern belongs to which category?",
                options: ["Structural", "Behavioral", "Creational", "Architectural"],
                correctAnswer: 2,
                explanation: "Factory Method Pattern belongs to the Creational category as it deals with object creation."
            },
            {
                question: "Factory Method mainly deals with:",
                options: ["Object communication", "Object creation", "Object deletion", "Object testing"],
                correctAnswer: 1,
                explanation: "Factory Method mainly deals with object creation, delegating the instantiation process to subclasses."
            },
            {
                question: "What problem does Factory Method solve?",
                options: ["Memory leaks", "Tight coupling caused by direct object creation", "Slow execution", "Database errors"],
                correctAnswer: 1,
                explanation: "Factory Method solves the problem of tight coupling caused by direct object creation with the 'new' keyword."
            },
            {
                question: "Which statement creates tight coupling?",
                options: ["createProduct()", "getInstance()", "new CreditCardPayment()", "pay()"],
                correctAnswer: 2,
                explanation: "Using 'new CreditCardPayment()' creates tight coupling because the client depends directly on a concrete class."
            },
            {
                question: "Factory Method delegates:",
                options: ["Inheritance", "Object creation", "Compilation", "Testing"],
                correctAnswer: 1,
                explanation: "Factory Method delegates object creation to factory classes, allowing the client to remain decoupled from concrete implementations."
            },
            {
                question: "According to the pattern, who decides which object to create?",
                options: ["Client", "User", "Factory", "Database"],
                correctAnswer: 2,
                explanation: "According to the Factory Method pattern, the Factory decides which object to create, not the client."
            },
            {
                question: "The Product component is usually:",
                options: ["Interface or Abstract Class", "Database", "Factory", "Singleton"],
                correctAnswer: 0,
                explanation: "The Product component is usually an Interface or Abstract Class that defines the common interface for all concrete products."
            },
            {
                question: "CreditCardPayment is an example of:",
                options: ["Creator", "Product", "Concrete Product", "Client"],
                correctAnswer: 2,
                explanation: "CreditCardPayment is an example of a Concrete Product that implements the Product interface."
            },
            {
                question: "PayPalPayment is an example of:",
                options: ["Concrete Product", "Creator", "Singleton", "Adapter"],
                correctAnswer: 0,
                explanation: "PayPalPayment is an example of a Concrete Product that implements the Product interface."
            },
            {
                question: "PaymentFactory is an example of:",
                options: ["Concrete Product", "Creator", "Client", "Observer"],
                correctAnswer: 1,
                explanation: "PaymentFactory is an example of a Creator (abstract factory) that defines the factory method."
            },
            {
                question: "CreditCardFactory is an example of:",
                options: ["Product", "Creator", "Concrete Creator", "Interface"],
                correctAnswer: 2,
                explanation: "CreditCardFactory is an example of a Concrete Creator that implements the factory method to create specific products."
            },
            {
                question: "Which method is the Factory Method?",
                options: ["run()", "pay()", "createPayment()", "execute()"],
                correctAnswer: 2,
                explanation: "createPayment() is the Factory Method that delegates object creation to subclasses."
            },
            {
                question: "Factory Method promotes:",
                options: ["Tight Coupling", "Loose Coupling", "Global State", "Multiple Inheritance"],
                correctAnswer: 1,
                explanation: "Factory Method promotes loose coupling by allowing the client to depend on abstractions rather than concrete classes."
            },
            {
                question: "Factory Method supports which SOLID principle?",
                options: ["SRP only", "OCP", "ISP only", "LSP only"],
                correctAnswer: 1,
                explanation: "Factory Method supports the Open/Closed Principle (OCP) by allowing new products to be added without modifying existing code."
            },
            {
                question: "The main idea is replacing:",
                options: ["Interfaces", "Abstract Classes", "Direct use of new", "Constructors"],
                correctAnswer: 2,
                explanation: "The main idea of Factory Method is replacing the direct use of 'new' with a factory method that delegates object creation."
            },
            {
                question: "Which is a real-world example mentioned in the lecture?",
                options: ["Payment Systems", "UI Frameworks", "Game Development", "All of the above"],
                correctAnswer: 3,
                explanation: "All of the mentioned examples (Payment Systems, UI Frameworks, Game Development) are real-world applications of Factory Method."
            },
            {
                question: "WindowsButton and MacButton represent:",
                options: ["Concrete Products", "Factories", "Creators", "Clients"],
                correctAnswer: 0,
                explanation: "WindowsButton and MacButton represent Concrete Products that implement a common Button interface."
            },
            {
                question: "Zombie, Robot, and Alien are examples from:",
                options: ["Banking Systems", "Game Development", "Databases", "Networking"],
                correctAnswer: 1,
                explanation: "Zombie, Robot, and Alien are examples from Game Development where different enemy types can be created using Factory Method."
            },
            {
                question: "Factory Method centralizes:",
                options: ["Object Creation", "Testing", "Memory Management", "Deployment"],
                correctAnswer: 0,
                explanation: "Factory Method centralizes object creation logic in one place, making it easier to manage and modify."
            },
            {
                question: "Factory Method improves:",
                options: ["Maintainability", "Complexity", "Coupling", "Duplication"],
                correctAnswer: 0,
                explanation: "Factory Method improves maintainability by centralizing object creation and reducing coupling."
            },
            {
                question: "Before Factory Method:",
                options: ["Factory creates objects", "Client directly creates objects", "Objects don't exist", "Products are abstract"],
                correctAnswer: 1,
                explanation: "Before Factory Method, the client directly creates objects using the 'new' keyword, leading to tight coupling."
            },
            {
                question: "After Factory Method:",
                options: ["Factory handles creation", "Client creates everything", "No objects are created", "No interfaces are used"],
                correctAnswer: 0,
                explanation: "After Factory Method, the Factory handles object creation, and the client depends on abstractions."
            },
            {
                question: "Which statement is true?",
                options: ["Client should know every concrete class", "Client depends on abstractions", "Factory depends on client", "Products create factories"],
                correctAnswer: 1,
                explanation: "The client should depend on abstractions (interfaces) rather than concrete implementations."
            },
            {
                question: "One advantage of Factory Method is:",
                options: ["Reduced Flexibility", "Better Scalability", "More Coupling", "Less Reusability"],
                correctAnswer: 1,
                explanation: "Better Scalability is an advantage of Factory Method as new products can be added without modifying existing code."
            },
            {
                question: "Which is NOT an advantage?",
                options: ["Loose Coupling", "Better Maintainability", "Centralized Creation", "Fewer Classes"],
                correctAnswer: 3,
                explanation: "Fewer Classes is NOT an advantage of Factory Method - it actually introduces more classes (factories)."
            },
            {
                question: "One disadvantage is:",
                options: ["Less Flexibility", "More Classes", "No Reusability", "Tight Coupling"],
                correctAnswer: 1,
                explanation: "More Classes is a disadvantage of Factory Method as it increases the number of classes in the system."
            },
            {
                question: "Another disadvantage is:",
                options: ["Increased Complexity", "Reduced Extensibility", "No Abstraction", "Global Variables"],
                correctAnswer: 0,
                explanation: "Increased Complexity is a disadvantage as the pattern introduces additional layers and abstractions."
            },
            {
                question: "Factory Method may be overkill when:",
                options: ["Creation is complex", "Future extensions are expected", "Only one simple class exists", "Many products exist"],
                correctAnswer: 2,
                explanation: "Factory Method may be overkill when only one simple class exists and no future extensions are expected."
            },
            {
                question: "Which is a common mistake?",
                options: ["Using abstraction", "Using interfaces", "Using Factory for everything", "Using inheritance"],
                correctAnswer: 2,
                explanation: "Using Factory for everything is a common mistake that leads to unnecessary complexity."
            },
            {
                question: "Which mistake defeats the purpose of Factory Method?",
                options: ["Using createProduct()", "Using Product interface", "Still using new in the client", "Using abstraction"],
                correctAnswer: 2,
                explanation: "Still using 'new' in the client defeats the purpose of Factory Method as it maintains tight coupling."
            },
            {
                question: "Factory Method creates:",
                options: ["One Product", "Product Families", "One Instance", "One Interface"],
                correctAnswer: 0,
                explanation: "Factory Method creates one product at a time, unlike Abstract Factory which creates product families."
            },
            {
                question: "Abstract Factory creates:",
                options: ["One Product", "Product Families", "One Instance", "One Factory"],
                correctAnswer: 1,
                explanation: "Abstract Factory creates product families (related products) unlike Factory Method which creates one product."
            },
            {
                question: "Singleton ensures:",
                options: ["One Product", "Product Families", "One Instance", "One Interface"],
                correctAnswer: 2,
                explanation: "Singleton ensures only one instance of a class exists throughout the application."
            },
            {
                question: "When should Factory Method be used?",
                options: ["When object creation is complex", "When extension is expected", "When exact type isn't known at compile time", "All of the above"],
                correctAnswer: 3,
                explanation: "Factory Method should be used when object creation is complex, extension is expected, or the exact type isn't known at compile time."
            },
            {
                question: "When should Factory Method be avoided?",
                options: ["Many products exist", "Future extensions exist", "Only one simple class exists", "Creation is complex"],
                correctAnswer: 2,
                explanation: "Factory Method should be avoided when only one simple class exists and no future extensions are expected."
            },
            {
                question: "In the restaurant analogy, the customer represents:",
                options: ["Factory", "Product", "Client", "Creator"],
                correctAnswer: 2,
                explanation: "In the restaurant analogy, the customer represents the Client who orders a product without knowing how it's made."
            },
            {
                question: "In the restaurant analogy, the kitchen represents:",
                options: ["Product", "Factory", "Client", "Interface"],
                correctAnswer: 1,
                explanation: "In the restaurant analogy, the kitchen represents the Factory that decides how to create the product."
            },
            {
                question: "Factory Method is mainly about:",
                options: ["Creating objects directly", "Controlling how and where objects are created", "Eliminating objects", "Managing memory"],
                correctAnswer: 1,
                explanation: "Factory Method is mainly about controlling how and where objects are created through delegation."
            },
            {
                question: "The lecture summary states Factory Method promotes:",
                options: ["Flexibility and Scalability", "Tight Coupling", "Global State", "Deep Inheritance"],
                correctAnswer: 0,
                explanation: "The lecture summary states that Factory Method promotes Flexibility and Scalability."
            },
            {
                question: "The most important goal of Factory Method is:",
                options: ["Faster execution", "Better graphics", "Control object creation and reduce coupling", "Reduce memory usage"],
                correctAnswer: 2,
                explanation: "The most important goal of Factory Method is to control object creation and reduce coupling between components."
            }
        ]
    },
    "abstract-factory-pattern": {
        title: "Lecture 6: Abstract Factory Pattern",
        questions: [
            {
                question: "Abstract Factory belongs to:",
                options: ["Structural", "Behavioral", "Creational", "Architectural"],
                correctAnswer: 2,
                explanation: "Abstract Factory belongs to the Creational category as it deals with object creation."
            },
            {
                question: "Abstract Factory creates:",
                options: ["One object", "Families of related objects", "Algorithms", "States"],
                correctAnswer: 1,
                explanation: "Abstract Factory creates families of related objects, not just single objects."
            },
            {
                question: "The main goal is:",
                options: ["Object deletion", "Object communication", "Creating related object families", "Testing"],
                correctAnswer: 2,
                explanation: "The main goal of Abstract Factory is creating families of related objects together."
            },
            {
                question: "Without Abstract Factory, UI systems often suffer from:",
                options: ["Recursion", "Too many if-else statements", "Deadlocks", "Memory leaks"],
                correctAnswer: 1,
                explanation: "Without Abstract Factory, UI systems often suffer from too many if-else statements to handle different platforms."
            },
            {
                question: "Abstract Factory promotes:",
                options: ["Tight Coupling", "Loose Coupling", "Global State", "Duplication"],
                correctAnswer: 1,
                explanation: "Abstract Factory promotes loose coupling by allowing the client to depend on abstractions."
            },
            {
                question: "WindowsFactory creates:",
                options: ["Mac Products", "Linux Products", "Windows Products", "Database Drivers"],
                correctAnswer: 2,
                explanation: "WindowsFactory creates Windows Products (WindowsButton, WindowsCheckbox, etc.)."
            },
            {
                question: "MacFactory creates:",
                options: ["Related Mac Products", "Windows Products", "Random Products", "One Product Only"],
                correctAnswer: 0,
                explanation: "MacFactory creates related Mac Products (MacButton, MacCheckbox, etc.)."
            },
            {
                question: "Button and Checkbox are examples of:",
                options: ["Abstract Products", "Factories", "Clients", "Singletons"],
                correctAnswer: 0,
                explanation: "Button and Checkbox are examples of Abstract Products - interfaces that define the product types."
            },
            {
                question: "WindowsButton is:",
                options: ["Abstract Product", "Concrete Product", "Factory", "Client"],
                correctAnswer: 1,
                explanation: "WindowsButton is a Concrete Product that implements the Button interface."
            },
            {
                question: "GUIFactory is:",
                options: ["Concrete Product", "Client", "Abstract Factory", "Concrete Factory"],
                correctAnswer: 2,
                explanation: "GUIFactory is an Abstract Factory that defines the interface for creating product families."
            },
            {
                question: "WindowsFactory is:",
                options: ["Abstract Factory", "Concrete Factory", "Product", "Interface"],
                correctAnswer: 1,
                explanation: "WindowsFactory is a Concrete Factory that implements the GUIFactory interface."
            },
            {
                question: "The client depends mainly on:",
                options: ["Concrete Classes", "Abstract Interfaces", "Databases", "Global Variables"],
                correctAnswer: 1,
                explanation: "The client depends mainly on Abstract Interfaces (GUIFactory, Button, Checkbox) rather than concrete implementations."
            },
            {
                question: "Which is a real-world analogy?",
                options: ["Furniture Store", "Printer Driver", "Browser Cache", "CPU Scheduler"],
                correctAnswer: 0,
                explanation: "A Furniture Store is a real-world analogy where you can get matching furniture (chair + table) from the same style."
            },
            {
                question: "Modern Furniture Factory creates:",
                options: ["Modern Chair + Modern Table", "Modern Chair + Classic Table", "Any Random Furniture", "Only Chairs"],
                correctAnswer: 0,
                explanation: "Modern Furniture Factory creates matching Modern Chair + Modern Table to ensure consistency."
            },
            {
                question: "Abstract Factory ensures:",
                options: ["Incompatibility", "Consistency", "Duplication", "Complexity"],
                correctAnswer: 1,
                explanation: "Abstract Factory ensures consistency by creating products that work together from the same family."
            },
            {
                question: "A major benefit is:",
                options: ["Easy switching between families", "More if-else", "Less abstraction", "Tighter coupling"],
                correctAnswer: 0,
                explanation: "A major benefit is easy switching between families - just change the factory and the whole product family changes."
            },
            {
                question: "Adding LinuxFactory demonstrates:",
                options: ["Scalability", "Inheritance Only", "Tight Coupling", "Singleton"],
                correctAnswer: 0,
                explanation: "Adding LinuxFactory demonstrates scalability - you can add new product families without modifying existing code."
            },
            {
                question: "Which is NOT an advantage?",
                options: ["Consistency", "Loose Coupling", "Scalability", "Simplicity"],
                correctAnswer: 3,
                explanation: "Simplicity is NOT an advantage - Abstract Factory adds complexity with more classes and abstractions."
            },
            {
                question: "One disadvantage is:",
                options: ["Hard to extend products", "Tight coupling", "No abstraction", "No reuse"],
                correctAnswer: 0,
                explanation: "One disadvantage is that it's hard to extend products - adding a new product requires updating all factories."
            },
            {
                question: "Adding Slider requires:",
                options: ["No changes", "Updating all factories", "Deleting products", "Rewriting client only"],
                correctAnswer: 1,
                explanation: "Adding Slider requires updating all factories (GUIFactory interface and all concrete factories)."
            },
            {
                question: "Abstract Factory is more complex than:",
                options: ["Strategy", "Singleton", "Factory Method", "Observer"],
                correctAnswer: 2,
                explanation: "Abstract Factory is more complex than Factory Method as it deals with product families instead of single products."
            },
            {
                question: "Factory Method creates:",
                options: ["Families", "Multiple Products", "One Product", "Environments"],
                correctAnswer: 2,
                explanation: "Factory Method creates one product at a time."
            },
            {
                question: "Abstract Factory creates:",
                options: ["Multiple Related Products", "One Product Only", "One Instance", "One Method"],
                correctAnswer: 0,
                explanation: "Abstract Factory creates multiple related products (a family of products)."
            },
            {
                question: "The phrase 'Factory of Factories' refers to:",
                options: ["Singleton", "Builder", "Abstract Factory", "Adapter"],
                correctAnswer: 2,
                explanation: "The phrase 'Factory of Factories' refers to Abstract Factory as it creates factories that create products."
            },
            {
                question: "Which use case fits Abstract Factory?",
                options: ["UI Themes", "Cross-platform Apps", "Database Drivers", "All of the Above"],
                correctAnswer: 3,
                explanation: "All of the mentioned use cases (UI Themes, Cross-platform Apps, Database Drivers) fit Abstract Factory."
            },
            {
                question: "Which principle is improved?",
                options: ["Loose Coupling", "Tight Coupling", "Global State", "Recursion"],
                correctAnswer: 0,
                explanation: "Loose Coupling is improved as the client depends on abstractions rather than concrete classes."
            },
            {
                question: "The client should know:",
                options: ["Concrete Products", "Concrete Factories", "Abstract Interfaces", "Internal Implementation"],
                correctAnswer: 2,
                explanation: "The client should know Abstract Interfaces (GUIFactory, Button, Checkbox) but not concrete implementations."
            },
            {
                question: "Abstract Factory helps hide:",
                options: ["Object Creation Logic", "Inheritance", "Memory Allocation", "Testing"],
                correctAnswer: 0,
                explanation: "Abstract Factory helps hide object creation logic from the client."
            },
            {
                question: "If there is only one product, Abstract Factory is usually:",
                options: ["Recommended", "Necessary", "Overkill", "Mandatory"],
                correctAnswer: 2,
                explanation: "If there is only one product, Abstract Factory is usually overkill - Factory Method would be simpler."
            },
            {
                question: "Overusing Abstract Factory is:",
                options: ["Good Practice", "Common Mistake", "Required", "Recommended"],
                correctAnswer: 1,
                explanation: "Overusing Abstract Factory is a common mistake that leads to unnecessary complexity."
            },
            {
                question: "WindowsButton and WindowsCheckbox belong to:",
                options: ["Same Family", "Different Families", "Different Factories", "Different Systems"],
                correctAnswer: 0,
                explanation: "WindowsButton and WindowsCheckbox belong to the same Family (Windows family)."
            },
            {
                question: "MacButton belongs to:",
                options: ["Windows Family", "Linux Family", "Mac Family", "Database Family"],
                correctAnswer: 2,
                explanation: "MacButton belongs to the Mac Family."
            },
            {
                question: "Abstract Factory is best when:",
                options: ["Products are related", "Products are random", "Only one class exists", "No abstraction is needed"],
                correctAnswer: 0,
                explanation: "Abstract Factory is best when products are related and belong to families."
            },
            {
                question: "A key benefit is:",
                options: ["Compatibility between products", "Increased if-else usage", "Global Variables", "Reduced Reusability"],
                correctAnswer: 0,
                explanation: "A key benefit is compatibility between products - products from the same family work together."
            },
            {
                question: "The lecture visualization shows:",
                options: ["GUIFactory at the top", "Singleton hierarchy", "Observer hierarchy", "MVC architecture"],
                correctAnswer: 0,
                explanation: "The lecture visualization shows GUIFactory at the top of the hierarchy."
            },
            {
                question: "WindowsButton implements:",
                options: ["GUIFactory", "Button", "Checkbox", "Client"],
                correctAnswer: 1,
                explanation: "WindowsButton implements the Button interface."
            },
            {
                question: "The pattern belongs to:",
                options: ["Behavioral Patterns", "Structural Patterns", "Creational Patterns", "Architectural Patterns"],
                correctAnswer: 2,
                explanation: "Abstract Factory belongs to Creational Patterns."
            },
            {
                question: "Changing factory can change:",
                options: ["Entire Product Family", "Database Schema", "Programming Language", "CPU Architecture"],
                correctAnswer: 0,
                explanation: "Changing factory can change the entire Product Family - all products switch to the new family."
            },
            {
                question: "The pattern avoids:",
                options: ["Loose Coupling", "Consistency", "Tight Coupling", "Scalability"],
                correctAnswer: 2,
                explanation: "The pattern avoids tight coupling by using abstractions."
            },
            {
                question: "The most important idea in Abstract Factory is:",
                options: ["Create one object efficiently", "Create families of related objects together", "Manage application state", "Decorate objects dynamically"],
                correctAnswer: 1,
                explanation: "The most important idea in Abstract Factory is to create families of related objects together."
            }
        ]
    },
    "adapter-pattern": {
        title: "Adapter Pattern Quiz",
        questions: [
            {
                question: "The Adapter Pattern belongs to which category of design patterns?",
                options: ["Creational", "Behavioral", "Structural", "Architectural"],
                correctAnswer: 2,
                explanation: "The Adapter Pattern belongs to the Structural category of design patterns."
            },
            {
                question: "What is the main purpose of the Adapter Pattern?",
                options: ["Create objects", "Convert one interface into another", "Add new functionality", "Control object creation"],
                correctAnswer: 1,
                explanation: "The main purpose of the Adapter Pattern is to convert one interface into another."
            },
            {
                question: "The Adapter Pattern is used when:",
                options: ["Classes are already compatible", "Interfaces are incompatible", "Objects are immutable", "Multiple databases are used"],
                correctAnswer: 1,
                explanation: "The Adapter Pattern is used when interfaces are incompatible."
            },
            {
                question: "The Adapter acts as:",
                options: ["A factory", "A bridge between incompatible interfaces", "A singleton", "A controller"],
                correctAnswer: 1,
                explanation: "The Adapter acts as a bridge between incompatible interfaces."
            },
            {
                question: "Which statement best describes the Adapter Pattern?",
                options: ["It creates new objects", "It changes database structures", "It allows incompatible classes to work together", "It improves security"],
                correctAnswer: 2,
                explanation: "The Adapter Pattern allows incompatible classes to work together."
            },
            {
                question: "In the Media Player example, the Target interface is:",
                options: ["AudioPlayer", "MediaPlayer", "MediaAdapter", "AdvancedMediaPlayer"],
                correctAnswer: 1,
                explanation: "In the Media Player example, the Target interface is MediaPlayer."
            },
            {
                question: "In the Media Player example, the Adaptee is:",
                options: ["MediaPlayer", "MediaAdapter", "AdvancedMediaPlayer", "AudioPlayer"],
                correctAnswer: 2,
                explanation: "In the Media Player example, the Adaptee is AdvancedMediaPlayer."
            },
            {
                question: "In the Media Player example, the Client is:",
                options: ["AudioPlayer", "MediaAdapter", "MediaPlayer", "MP4Player"],
                correctAnswer: 0,
                explanation: "In the Media Player example, the Client is AudioPlayer."
            },
            {
                question: "The Adapter's responsibility is to:",
                options: ["Store data", "Translate requests between interfaces", "Encrypt files", "Create objects"],
                correctAnswer: 1,
                explanation: "The Adapter's responsibility is to translate requests between interfaces."
            },
            {
                question: "Which type of Adapter uses inheritance?",
                options: ["Object Adapter", "Class Adapter", "Composite Adapter", "Dynamic Adapter"],
                correctAnswer: 1,
                explanation: "Class Adapter uses inheritance."
            },
            {
                question: "Which type of Adapter uses composition?",
                options: ["Class Adapter", "Object Adapter", "Static Adapter", "Proxy Adapter"],
                correctAnswer: 1,
                explanation: "Object Adapter uses composition."
            },
            {
                question: "The most commonly used Adapter type is:",
                options: ["Class Adapter", "Object Adapter", "Proxy Adapter", "Facade Adapter"],
                correctAnswer: 1,
                explanation: "Object Adapter is the most commonly used Adapter type."
            },
            {
                question: "A limitation of Class Adapter is:",
                options: ["Multiple inheritance issues", "Poor readability", "Memory leaks", "No reusability"],
                correctAnswer: 0,
                explanation: "A limitation of Class Adapter is multiple inheritance issues."
            },
            {
                question: "Object Adapter is preferred because it is:",
                options: ["Less flexible", "More flexible", "Faster only", "Simpler to code always"],
                correctAnswer: 1,
                explanation: "Object Adapter is preferred because it is more flexible."
            },
            {
                question: "Adapter Pattern supports:",
                options: ["Code reuse", "Code deletion", "Code duplication", "Code encryption"],
                correctAnswer: 0,
                explanation: "Adapter Pattern supports code reuse."
            },
            {
                question: "When integrating legacy code, which pattern is often useful?",
                options: ["Builder", "Observer", "Adapter", "Strategy"],
                correctAnswer: 2,
                explanation: "When integrating legacy code, the Adapter Pattern is often useful."
            },
            {
                question: "Adapter Pattern is useful when an existing class:",
                options: ["Can easily be modified", "Cannot be modified", "Is abstract", "Has no methods"],
                correctAnswer: 1,
                explanation: "Adapter Pattern is useful when an existing class cannot be modified."
            },
            {
                question: "A power plug adapter is a real-world example of:",
                options: ["Factory Pattern", "Adapter Pattern", "Proxy Pattern", "Singleton Pattern"],
                correctAnswer: 1,
                explanation: "A power plug adapter is a real-world example of the Adapter Pattern."
            },
            {
                question: "The core idea of Adapter Pattern is:",
                options: ["Object creation", "Interface conversion", "State management", "Event handling"],
                correctAnswer: 1,
                explanation: "The core idea of Adapter Pattern is interface conversion."
            },
            {
                question: "Which principle is supported by Adapter Pattern?",
                options: ["Open/Closed Principle", "YAGNI", "KISS only", "DRY only"],
                correctAnswer: 0,
                explanation: "Adapter Pattern supports the Open/Closed Principle."
            },
            {
                question: "Open/Closed Principle means:",
                options: ["Existing code must be modified", "New adapters can be added without changing existing code", "Classes must remain closed permanently", "No inheritance is allowed"],
                correctAnswer: 1,
                explanation: "Open/Closed Principle means new adapters can be added without changing existing code."
            },
            {
                question: "Which design principle states that Adapter should handle conversion only?",
                options: ["Dependency Inversion", "Single Responsibility Principle", "Interface Segregation", "Liskov Substitution"],
                correctAnswer: 1,
                explanation: "Single Responsibility Principle states that Adapter should handle conversion only."
            },
            {
                question: "Loose Coupling means:",
                options: ["Client depends on implementation", "Client depends on interfaces", "Classes are tightly connected", "No interfaces are used"],
                correctAnswer: 1,
                explanation: "Loose Coupling means client depends on interfaces."
            },
            {
                question: "One advantage of Adapter Pattern is:",
                options: ["Reduced flexibility", "Increased reusability", "Elimination of interfaces", "Better database performance"],
                correctAnswer: 1,
                explanation: "One advantage of Adapter Pattern is increased reusability."
            },
            {
                question: "Another advantage of Adapter Pattern is:",
                options: ["Flexibility", "Increased complexity only", "Lower maintainability", "Reduced extensibility"],
                correctAnswer: 0,
                explanation: "Another advantage of Adapter Pattern is flexibility."
            },
            {
                question: "A disadvantage of Adapter Pattern is:",
                options: ["Less code reuse", "Increased complexity", "No flexibility", "No abstraction"],
                correctAnswer: 1,
                explanation: "A disadvantage of Adapter Pattern is increased complexity."
            },
            {
                question: "Another disadvantage is:",
                options: ["Extra abstraction layer may affect performance", "No compatibility", "No extensibility", "No maintainability"],
                correctAnswer: 0,
                explanation: "Another disadvantage is that the extra abstraction layer may affect performance."
            },
            {
                question: "Overusing Adapter Pattern may lead to:",
                options: ["Better architecture", "Bad design", "Better performance", "Fewer classes"],
                correctAnswer: 1,
                explanation: "Overusing Adapter Pattern may lead to bad design."
            },
            {
                question: "Adapter Pattern should NOT be used when:",
                options: ["Interfaces are incompatible", "Legacy code exists", "Interfaces are already compatible", "Third-party libraries are used"],
                correctAnswer: 2,
                explanation: "Adapter Pattern should NOT be used when interfaces are already compatible."
            },
            {
                question: "Adapter Pattern is commonly used with:",
                options: ["Third-party libraries", "Gaming engines only", "Operating systems only", "Databases only"],
                correctAnswer: 0,
                explanation: "Adapter Pattern is commonly used with third-party libraries."
            },
            {
                question: "Which is a real-world software use case for Adapter?",
                options: ["Payment gateways", "Word processors only", "Antivirus software only", "Operating systems only"],
                correctAnswer: 0,
                explanation: "Payment gateways are a real-world software use case for Adapter."
            },
            {
                question: "Database drivers are an example of:",
                options: ["Adapter usage", "Builder usage", "Singleton usage", "Observer usage"],
                correctAnswer: 0,
                explanation: "Database drivers are an example of Adapter usage."
            },
            {
                question: "JSON/XML converters commonly use:",
                options: ["Factory Pattern", "Adapter Pattern", "State Pattern", "Template Method"],
                correctAnswer: 1,
                explanation: "JSON/XML converters commonly use Adapter Pattern."
            },
            {
                question: "In the lecture example, SalaryCalculator accepts:",
                options: ["MachineOperator", "Employee", "String", "Object"],
                correctAnswer: 1,
                explanation: "In the lecture example, SalaryCalculator accepts Employee."
            },
            {
                question: "The compatibility problem occurs because SalaryCalculator expects:",
                options: ["MachineOperator", "Employee", "ShiftCode", "XML"],
                correctAnswer: 1,
                explanation: "The compatibility problem occurs because SalaryCalculator expects Employee."
            },
            {
                question: "SalaryAdapter converts:",
                options: ["Employee → MachineOperator", "MachineOperator → Employee", "JSON → XML", "MP3 → MP4"],
                correctAnswer: 1,
                explanation: "SalaryAdapter converts MachineOperator to Employee."
            },
            {
                question: "MachineOperator contains an additional field called:",
                options: ["Address", "Email", "ShiftCode", "Department"],
                correctAnswer: 2,
                explanation: "MachineOperator contains an additional field called ShiftCode."
            },
            {
                question: "The relationship used in Object Adapter is:",
                options: ["Is-A", "Has-A", "Depends-On", "Uses-A"],
                correctAnswer: 1,
                explanation: "The relationship used in Object Adapter is Has-A (composition)."
            },
            {
                question: "The relationship used in Class Adapter is:",
                options: ["Has-A", "Is-A", "Aggregates-A", "Composes-A"],
                correctAnswer: 1,
                explanation: "The relationship used in Class Adapter is Is-A (inheritance)."
            },
            {
                question: "Which sequence correctly represents Adapter Pattern structure?",
                options: ["Client → Adapter → Adaptee", "Adapter → Client → Adaptee", "Adaptee → Client → Adapter", "Client → Adaptee → Adapter"],
                correctAnswer: 0,
                explanation: "The correct sequence representing Adapter Pattern structure is Client → Adapter → Adaptee."
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
    lectures: document.getElementById('lectures-screen'),
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
    lecturesBtn: document.getElementById('lectures-btn'),
    backToHome: document.getElementById('back-to-home'),
    backToResults: document.getElementById('back-to-results'),
    incorrectPopup: document.getElementById('incorrect-popup'),
    lectureItemCards: document.querySelectorAll('.lecture-item-card'),
    backToLectureList: document.getElementById('back-to-lecture-list'),
    lectureListView: document.getElementById('lecture-list-view'),
    lectureDetailView: document.getElementById('lecture-detail-view'),
    lectureDetailContent: document.getElementById('lecture-detail-content'),
    lastScoreElements: document.querySelectorAll('.last-score')
};

// Initialize
function init() {
    loadGlobalStats();
    updateGlobalStatsDisplay();
    loadLastScores();
    setupEventListeners();
    loadTheme();
    loadQuizState();
    
    // Set initial history state only for lectures section
    const hash = window.location.hash.replace('#', '') || 'home';
    if (hash === 'lectures' || hash === 'home') {
        history.replaceState({ screen: hash }, '', `#${hash}`);
    } else {
        history.replaceState({ screen: 'home' }, '', '#home');
    }
    
    // Show the screen based on hash (only for lectures)
    if (hash === 'lectures') {
        showScreen('lectures', false);
        showLectureListView();
    }
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

// Save Last Score for a Category
function saveLastScore(category, score, total) {
    const lastScores = JSON.parse(localStorage.getItem('quizLastScores') || '{}');
    lastScores[category] = {
        score: score,
        total: total,
        percentage: ((score / total) * 100).toFixed(1)
    };
    localStorage.setItem('quizLastScores', JSON.stringify(lastScores));
}

// Load Last Scores and Display on Home Screen
function loadLastScores() {
    const lastScores = JSON.parse(localStorage.getItem('quizLastScores') || '{}');
    elements.lastScoreElements.forEach(element => {
        const category = element.dataset.category;
        if (lastScores[category]) {
            const data = lastScores[category];
            element.textContent = `Last Score: ${data.score}/${data.total} (${data.percentage}%)`;
        } else {
            element.textContent = 'Last Score: --';
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Lectures Button
    elements.lecturesBtn.addEventListener('click', showLectures);

    // Back to Home from Lectures
    elements.backToHome.addEventListener('click', () => {
        showScreen('home', true);
    });

    // Lecture Item Cards
    elements.lectureItemCards.forEach(card => {
        card.addEventListener('click', () => {
            const lectureId = card.dataset.lecture;
            showLectureDetailView(lectureId);
        });
    });

    // Back to Lecture List
    elements.backToLectureList.addEventListener('click', showLectureListView);

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
function showScreen(screenName, pushToHistory = false) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
    
    // Replace state in history only for lectures section navigation (disables forward button)
    if (pushToHistory) {
        history.replaceState({ screen: screenName }, '', `#${screenName}`);
    }
}

// Show Lectures Screen
function showLectures() {
    showScreen('lectures', true);
    showLectureListView();
}

// Lecture Content Data
const lectureContent = {
    1: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 1</span>
                <h3>Introduction to Design Patterns</h3>
            </div>
            <div class="lecture-content">
                <h4>أولًا: يعني إيه Design Pattern؟</h4>
                <p>الـ Design Pattern هو حل مُجرَّب ومتكرر لمشكلة تصميم شائعة في البرمجيات.</p>
                <p>ركز على كلمة:</p>
                <ul>
                    <li><strong>Design</strong> → تصميم البرنامج</li>
                    <li><strong>Pattern</strong> → نمط أو طريقة متكررة</li>
                </ul>
                <p>يعني مش كود جاهز تنسخه، لكنه فكرة أو أسلوب تصميم تستخدمه لحل مشكلة معينة.</p>

                <h4>مثال</h4>
                <p>تخيل إنك كل مرة تعمل لعبة أو تطبيق وتحتاج تنشئ كائنات (Objects).</p>
                <p>بدل ما كل مبرمج يخترع طريقة من الصفر، فيه Pattern اسمه Factory Method بيحل المشكلة دي بطريقة معروفة.</p>

                <h4>لماذا نحتاج Design Patterns؟</h4>
                <p>السؤال المهم:</p>
                <p>ليه البرامج الكبيرة بتبقى صعبة التعديل بعد فترة؟</p>
                <p>الإجابة:</p>
                <ul>
                    <li>الكود بيكبر جدًا</li>
                    <li>أي تعديل يكسر حاجات تانية</li>
                    <li>إضافة Feature جديدة تبقى صعبة</li>
                    <li>المطور الجديد يفهم الكود بالعافية</li>
                </ul>
                <p>المشكلة مش في لغة البرمجة.</p>
                <p>المشكلة في التصميم السيئ (Poor Design).</p>

                <h4>مشاكل التصميم بدون Patterns</h4>
                <h5>1) Tight Coupling</h5>
                <p>يعني الكلاسات مرتبطة ببعض بشكل قوي جدًا.</p>
                <p>مثال:</p>
                <pre>class Car {
    Engine engine;
};</pre>
                <p>لو غيرت Engine قد تحتاج تعدل Car أيضًا.</p>
                <p>النتيجة:</p>
                <p>تغيير صغير = مشاكل كثيرة.</p>

                <h5>2) Low Reusability</h5>
                <p>إعادة استخدام ضعيفة.</p>
                <p>مثال:</p>
                <p>نسخت نفس الكود في 5 ملفات مختلفة.</p>
                <p>لو اكتشفت Bug لازم تصلحه في الخمسة.</p>

                <h5>3) Rigidity</h5>
                <p>النظام جامد وصعب التعديل.</p>
                <p>إضافة خاصية بسيطة تحتاج تعديلات ضخمة.</p>

                <h5>4) Fragility</h5>
                <p>كل مرة تصلح مشكلة تظهر مشكلة جديدة.</p>
                <p>زي لعبة تضغط Fix Bug فتطلع 3 Bugs جداد.</p>

                <h5>5) God Object</h5>
                <p>دي من أشهر المشاكل.</p>
                <p>كلاس واحد مسؤول عن كل حاجة.</p>
                <p>مثال:</p>
                <pre>OrderProcessor
├── PaymentProcessor
├── InvoiceGenerator
├── EmailSender
├── DatabaseManager</pre>
                <p>الكلاس ده:</p>
                <ul>
                    <li>بيحسب الفواتير</li>
                    <li>بيبعت إيميل</li>
                    <li>بيتعامل مع قاعدة البيانات</li>
                    <li>بيستقبل الدفع</li>
                </ul>
                <p>وده مخالف لمبدأ:</p>
                <p><strong>Single Responsibility Principle (SRP)</strong></p>
                <p>لأن كل كلاس المفروض يكون له مسؤولية واحدة فقط.</p>

                <h4>التعريف الرسمي للـ Design Pattern</h4>
                <p>التعريف:</p>
                <p>Reusable solution to a commonly occurring problem in software design.</p>
                <p>يعني:</p>
                <ul>
                    <li><strong>Reusable</strong> - قابل لإعادة الاستخدام</li>
                    <li><strong>Common Problem</strong> - مشكلة متكررة</li>
                    <li><strong>Design Level</strong> - بيحل مشكلة تصميم (مش مشكلة Syntax)</li>
                    <li><strong>Context Dependent</strong> - مش حل سحري لكل الحالات</li>
                </ul>

                <h4>Design Pattern ليست ماذا؟</h4>
                <p>المحاضرة ركزت على نقطة مهمة جدًا.</p>
                <h5>ليست Algorithm</h5>
                <p>Algorithm = خطوات حل مشكلة حسابية.</p>
                <p>مثال:</p>
                <ul>
                    <li>Binary Search</li>
                    <li>Dijkstra</li>
                </ul>
                <p>أما Pattern فهو تصميم للنظام.</p>
                <h5>ليست Code Snippet</h5>
                <p>مش كود جاهز Copy/Paste.</p>
                <h5>ليست Framework</h5>
                <p>Framework مثل:</p>
                <ul>
                    <li>Spring</li>
                    <li>Django</li>
                    <li>Laravel</li>
                </ul>
                <p>Framework يعطيك هيكل جاهز.</p>
                <p>Pattern مجرد فكرة.</p>
                <h5>ليست Library</h5>
                <p>Library مثل:</p>
                <ul>
                    <li>NumPy</li>
                    <li>React</li>
                </ul>
                <p>Pattern مش مكتبة.</p>

                <h4>التشبيه المهم في الامتحان</h4>
                <p>المحاضرة جابت تشبيه ممتاز.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Concept</th>
                            <th>Analogy</th>
                        </tr>
                        <tr>
                            <td>Algorithm</td>
                            <td>وصفة طبخ</td>
                        </tr>
                        <tr>
                            <td>Design Pattern</td>
                            <td>تصميم المطبخ</td>
                        </tr>
                        <tr>
                            <td>Framework</td>
                            <td>مطعم جاهز بالكامل</td>
                        </tr>
                        <tr>
                            <td>Programming Language</td>
                            <td>اللغة المستخدمة</td>
                        </tr>
                    </tbody>
                </table>
                <p>احفظ الجدول ده كويس.</p>

                <h4>تاريخ الـ Design Patterns</h4>
                <p>البداية لم تكن في البرمجة</p>
                <p>شخص اسمه:</p>
                <p><strong>Christopher Alexander</strong></p>
                <p>كان مهندس معماري سنة 1977.</p>
                <p>فكرته:</p>
                <p>المشاكل تتكرر، وبالتالي الحلول تتكرر أيضًا.</p>

                <h4>Gang of Four (GoF)</h4>
                <p>أشهر أربعة أشخاص في تاريخ الـ Design Patterns:</p>
                <ul>
                    <li>Erich Gamma</li>
                    <li>Richard Helm</li>
                    <li>Ralph Johnson</li>
                    <li>John Vlissides</li>
                </ul>
                <p>أصدروا كتاب:</p>
                <p><strong>Design Patterns: Elements of Reusable Object-Oriented Software</strong></p>
                <p>عام 1994.</p>
                <p>الكتاب عرف 23 Pattern مشهورة جدًا.</p>

                <h4>الفلسفة الأساسية للـ Patterns</h4>
                <h5>Design for Change</h5>
                <p>أهم جملة في المحاضرة:</p>
                <p><strong>The only constant in software is change.</strong></p>
                <p>يعني:</p>
                <ul>
                    <li>البرامج دائمًا تتغير</li>
                    <li>العميل يطلب تعديلات</li>
                    <li>يظهر Features جديدة</li>
                </ul>
                <p>لذلك لازم نصمم النظام بحيث يتحمل التغيير.</p>

                <h5>Experience Capture</h5>
                <p>الـ Patterns عبارة عن خبرات مبرمجين كبار تم تجميعها.</p>
                <p>بدل ما تقع في نفس الأخطاء، تستفيد من خبراتهم.</p>

                <h4>مكونات أي Design Pattern</h4>
                <p>أي Pattern تحتوي على:</p>
                <ol>
                    <li><strong>Name</strong> - اسم النمط (مثال: Observer, Strategy, Singleton)</li>
                    <li><strong>Problem</strong> - المشكلة التي يحلها</li>
                    <li><strong>Context</strong> - متى يُستخدم؟</li>
                    <li><strong>Solution</strong> - الفكرة العامة للحل</li>
                    <li><strong>Consequences</strong> - المميزات والعيوب</li>
                </ol>

                <h4>مثال Observer Pattern</h4>
                <p>المشكلة:</p>
                <p>عند تغير كائن معين نريد إبلاغ عدة كائنات أخرى.</p>
                <p>مثال:</p>
                <p>يوتيوب.</p>
                <p>عندما يرفع اليوتيوبر فيديو:</p>
                <ul>
                    <li>أحمد يتلقى إشعار</li>
                    <li>محمد يتلقى إشعار</li>
                    <li>علي يتلقى إشعار</li>
                </ul>
                <p>هذا هو مفهوم Observer.</p>

                <h4>فوائد استخدام Design Patterns</h4>
                <h5>فوائد تقنية</h5>
                <ul>
                    <li>Loose Coupling</li>
                    <li>High Cohesion</li>
                    <li>Better Testability</li>
                    <li>Scalability</li>
                    <li>Clean Architecture</li>
                </ul>
                <p><strong>Loose Coupling</strong> - تقليل الاعتماد بين الكلاسات</p>
                <p><strong>High Cohesion</strong> - كل كلاس مسؤول عن مهمة واضحة</p>
                <p><strong>Better Testability</strong> - اختبار النظام أسهل</p>
                <p><strong>Scalability</strong> - سهولة التوسع</p>

                <h5>فوائد للفريق</h5>
                <ul>
                    <li>لغة مشتركة بين المطورين</li>
                    <li>مناقشات أسرع</li>
                    <li>فهم أسرع للكود</li>
                    <li>تصميم موحد للمشاريع</li>
                </ul>

                <h4>أخطاء المبتدئين</h4>
                <h5>Over Engineering</h5>
                <p>غلط تفكر:</p>
                <p>أي Pattern أستخدم؟</p>
                <p>الصحيح:</p>
                <p>هل أحتاج Pattern أصلًا؟</p>

                <h5>Pattern Obsession</h5>
                <p>إدمان استخدام Patterns.</p>
                <p>مثال:</p>
                <p>برنامج 200 سطر.</p>
                <p>تستخدم فيه:</p>
                <ul>
                    <li>Factory</li>
                    <li>Singleton</li>
                    <li>Strategy</li>
                    <li>Observer</li>
                </ul>
                <p>مع أن البرنامج بسيط جدًا.</p>
                <p>النتيجة:</p>
                <p>الكود يصبح أعقد من المشكلة نفسها.</p>

                <h4>متى أستخدم Design Pattern؟</h4>
                <p>استخدمها عندما:</p>
                <ul>
                    <li>✅ المشكلة تتكرر</li>
                    <li>✅ النظام سيتطور مستقبلاً</li>
                    <li>✅ تحتاج مرونة</li>
                </ul>
                <p>لا تستخدمها عندما:</p>
                <ul>
                    <li>❌ المشكلة بسيطة</li>
                    <li>❌ المتطلبات ثابتة</li>
                    <li>❌ تكلفة التعقيد أكبر من الفائدة</li>
                </ul>

                <h4>أهم نقاط الامتحان</h4>
                <ul>
                    <li>تعريف Design Pattern</li>
                    <li>الفرق بين Pattern و Algorithm</li>
                    <li>الفرق بين Pattern و Framework</li>
                    <li>Tight Coupling</li>
                    <li>God Object</li>
                    <li>Gang of Four (GoF)</li>
                    <li>Design for Change</li>
                    <li>مكونات أي Pattern (Name, Problem, Context, Solution, Consequences)</li>
                    <li>Benefits of Design Patterns</li>
                    <li>Over Engineering و Pattern Obsession</li>
                </ul>
                <p>دي تقريبًا أهم الأفكار اللي غالبًا ييجي منها MCQ في الفصل الأول كله.</p>
            </div>
        </div>
    `,
    2: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 2</span>
                <h3>Object-Oriented Design Principles</h3>
            </div>
            <div class="lecture-content">
                <h4>شرح المحاضرة</h4>

                <h4>1. لماذا نحتاج Design Principles؟</h4>
                <p>المشكلة إن البرنامج ممكن:</p>
                <ul>
                    <li>يشتغل صح اليوم</li>
                    <li>لكنه يكون سيئ التصميم</li>
                </ul>
                <p>فتلاقيه:</p>
                <ul>
                    <li>صعب التعديل</li>
                    <li>صعب الاختبار</li>
                    <li>بيتكسر بسهولة عند أي تغيير</li>
                </ul>

                <p>الفكرة الأساسية:</p>
                <p><strong>Good design absorbs change. Bad design amplifies change.</strong></p>
                <p>يعني:</p>
                <ul>
                    <li>التصميم الجيد يستوعب التغييرات</li>
                    <li>التصميم السيئ يجعل كل تعديل أصعب من السابق</li>
                </ul>

                <h4>2. SOLID Principles</h4>
                <p>SOLID عبارة عن 5 مبادئ أساسية للتصميم الجيد.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Letter</th>
                            <th>Principle</th>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>Single Responsibility</td>
                        </tr>
                        <tr>
                            <td>O</td>
                            <td>Open Closed</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>Liskov Substitution</td>
                        </tr>
                        <tr>
                            <td>I</td>
                            <td>Interface Segregation</td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td>Dependency Inversion</td>
                        </tr>
                    </tbody>
                </table>

                <h5>S — Single Responsibility Principle (SRP)</h5>
                <h6>التعريف</h6>
                <p>A class should have only one reason to change.</p>
                <p>يعني:</p>
                <p>كل Class يكون له مسؤولية واحدة فقط.</p>

                <h6>مثال خطأ</h6>
                <pre>InvoiceService
├── calculateTotal()
├── saveToDatabase()
├── sendEmail()
└── printInvoice()</pre>
                <p>هنا الكلاس مسؤول عن:</p>
                <ul>
                    <li>الحساب</li>
                    <li>قاعدة البيانات</li>
                    <li>الإيميل</li>
                    <li>الطباعة</li>
                </ul>
                <p>لو أي جزء تغير سنعدل نفس الكلاس.</p>

                <h6>الحل</h6>
                <p>نفصل المسؤوليات:</p>
                <ul>
                    <li>InvoiceCalculator</li>
                    <li>InvoiceRepository</li>
                    <li>EmailService</li>
                    <li>PrintService</li>
                </ul>

                <h6>الفوائد</h6>
                <ul>
                    <li>أسهل اختبار</li>
                    <li>إعادة استخدام</li>
                    <li>تعديل مستقل لكل جزء</li>
                </ul>

                <h6>خطأ شائع</h6>
                <p>SRP لا تعني:</p>
                <ul>
                    <li>Class صغير</li>
                    <li>Method واحدة</li>
                </ul>
                <p>بل:</p>
                <p><strong>One Axis of Change</strong></p>
                <p>سبب واحد فقط للتغيير.</p>

                <h5>O — Open Closed Principle (OCP)</h5>
                <h6>التعريف</h6>
                <p>Open for Extension, Closed for Modification</p>
                <p>يعني:</p>
                <ul>
                    <li>نضيف سلوك جديد</li>
                    <li>بدون تعديل الكود القديم</li>
                </ul>

                <h6>مثال سيئ</h6>
                <pre>if(type==CREDIT)
...
else if(type==PAYPAL)
...
else if(type==BITCOIN)
...</pre>
                <p>كل Payment جديد يتطلب تعديل الكود.</p>

                <h6>الحل</h6>
                <pre>PaymentMethod
├── CreditCardPayment
├── PayPalPayment
└── BitcoinPayment</pre>
                <p>كل Payment Class منفصل.</p>

                <h6>تحذير</h6>
                <p>لا تعمل Abstractions كثيرة من البداية.</p>
                <p>صمم للتغييرات المتوقعة وليس الخيالية.</p>

                <h5>L — Liskov Substitution Principle (LSP)</h5>
                <h6>التعريف</h6>
                <p>أي Object من Subclass يجب أن يعمل مكان Parent Class بدون مشاكل.</p>

                <h6>مثال مشهور</h6>
                <pre>Rectangle
    ↑
Square</pre>
                <p>المشكلة:</p>
                <p>المستطيل يسمح:</p>
                <p>Width != Height</p>
                <p>أما المربع:</p>
                <p>Width = Height</p>
                <p>لذلك Square قد يكسر توقعات Rectangle.</p>

                <h6>لماذا مهم؟</h6>
                <p>مخالفته تسبب:</p>
                <ul>
                    <li>Hidden Bugs</li>
                    <li>Broken Polymorphism</li>
                    <li>Unexpected Behavior</li>
                </ul>

                <h6>قاعدة مهمة</h6>
                <p>Inheritance means IS-A</p>
                <p>وليس:</p>
                <p>Similar To</p>

                <h5>I — Interface Segregation Principle (ISP)</h5>
                <h6>التعريف</h6>
                <p>Clients should not depend on methods they don't use.</p>
                <p>العميل لا يجب أن يُجبر على تنفيذ دوال لا يحتاجها.</p>

                <h6>مثال سيئ</h6>
                <pre>Machine
├── print()
├── scan()
├── fax()</pre>
                <p>طابعة قديمة تدعم Print فقط.</p>
                <p>ستُجبر على تنفيذ Scan و Fax رغم عدم الحاجة لهما.</p>

                <h6>الحل</h6>
                <ul>
                    <li>Printable</li>
                    <li>Scannable</li>
                    <li>Faxable</li>
                </ul>
                <p>Interfaces صغيرة ومتخصصة.</p>

                <h6>الفوائد</h6>
                <ul>
                    <li>Coupling أقل</li>
                    <li>Reuse أفضل</li>
                    <li>عقود أوضح</li>
                </ul>

                <h5>D — Dependency Inversion Principle (DIP)</h5>
                <h6>التعريف</h6>
                <p>High-level modules should not depend on low-level modules. Both depend on abstractions.</p>

                <h6>مثال سيئ</h6>
                <pre>OrderService
      ↓
MySQLDatabase</pre>
                <p>المشكلة:</p>
                <ul>
                    <li>صعب الاختبار</li>
                    <li>صعب تغيير قاعدة البيانات</li>
                </ul>

                <h6>الحل</h6>
                <pre>OrderService
      ↓
Database Interface
     / \
 MySQL Mongo</pre>

                <h6>الفوائد</h6>
                <ul>
                    <li>Loose Coupling</li>
                    <li>Easy Testing</li>
                    <li>Dependency Injection</li>
                </ul>

                <h6>علاقة DIP بالـ Design Patterns</h6>
                <p>أنماط تعتمد عليه:</p>
                <ul>
                    <li>Strategy</li>
                    <li>Factory</li>
                    <li>Observer</li>
                    <li>Command</li>
                </ul>

                <h4>Beyond SOLID</h4>
                <h5>High Cohesion</h5>
                <p>الأشياء المرتبطة توضع معاً.</p>

                <h5>Low Coupling</h5>
                <p>تقليل الاعتماد بين المكونات.</p>

                <h5>Composition Over Inheritance</h5>
                <p>يفضل التركيب على الوراثة.</p>
                <p>لأنه:</p>
                <ul>
                    <li>أكثر مرونة</li>
                    <li>يدعم Runtime Changes</li>
                </ul>

                <h4>Design Smells</h4>
                <p>علامات تدل على تصميم سيئ:</p>
                <ul>
                    <li>Long Methods</li>
                    <li>Large Classes</li>
                    <li>Deep Inheritance Trees</li>
                    <li>Large If-Else Blocks</li>
                    <li>Frequent Changes in Many Files</li>
                </ul>
            </div>
        </div>
    `,
    3: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 3</span>
                <h3>Classification of Design Patterns</h3>
            </div>
            <div class="lecture-content">
                <h4>لماذا نصنف Design Patterns؟</h4>
                <p>تخيل تحفظ 23 Pattern بدون أي تنظيم.</p>
                <p>المشاكل:</p>
                <ul>
                    <li>صعب تتذكرها.</li>
                    <li>صعب تختار المناسب.</li>
                    <li>هتستخدم Patterns بشكل عشوائي.</li>
                </ul>
                <p>لذلك التصنيف يساعد على:</p>
                <ul>
                    <li>تنظيم المعرفة.</li>
                    <li>تضييق الاختيارات بسرعة.</li>
                    <li>فهم الهدف من النمط.</li>
                    <li>تجنب الاستخدام الخاطئ.</li>
                </ul>

                <h4>Choose patterns by intent, not by name.</h4>
                <p>اختار الـ Pattern بناءً على المشكلة التي يحلها وليس اسمه.</p>

                <h4>تصنيف GoF</h4>
                <p>كتاب Gang of Four قسم الـ Patterns إلى 3 فئات رئيسية:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Category</th>
                            <th>Focus</th>
                            <th>Main Question</th>
                        </tr>
                        <tr>
                            <td>Creational</td>
                            <td>Object Creation</td>
                            <td>How are objects created?</td>
                        </tr>
                        <tr>
                            <td>Structural</td>
                            <td>Object Composition</td>
                            <td>How are objects combined?</td>
                        </tr>
                        <tr>
                            <td>Behavioral</td>
                            <td>Object Interaction</td>
                            <td>How do objects communicate?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>1. Creational Patterns</h4>
                <h5>الفكرة</h5>
                <p>تهتم بإنشاء الـ Objects.</p>
                <p>وتجيب على سؤال:</p>
                <p><strong>How are objects created?</strong></p>

                <h5>أهدافها</h5>
                <ul>
                    <li>تقليل Coupling.</li>
                    <li>التحكم في إنشاء Objects.</li>
                    <li>زيادة المرونة.</li>
                </ul>

                <h5>مشاكل تحلها</h5>
                <ul>
                    <li>منطق إنشاء الكائنات معقد.</li>
                    <li>استخدام new بكثرة.</li>
                    <li>كثرة Constructor Parameters.</li>
                    <li>الحاجة لإنشاء Families من Objects.</li>
                </ul>

                <h5>الأنماط الموجودة</h5>
                <ul>
                    <li>Singleton</li>
                    <li>Factory Method</li>
                    <li>Abstract Factory</li>
                    <li>Builder</li>
                    <li>Prototype</li>
                </ul>

                <h5>متى تستخدمها؟</h5>
                <p>استخدمها عندما:</p>
                <ul>
                    <li>Object creation logic معقد.</li>
                    <li>تريد إخفاء Concrete Classes.</li>
                    <li>تتوقع تغيير طريقة الإنشاء مستقبلاً.</li>
                </ul>

                <h5>متى لا تستخدمها؟</h5>
                <p>عندما يكون:</p>
                <ul>
                    <li>إنشاء الكائن بسيط.</li>
                    <li>الـ Overhead غير مبرر.</li>
                </ul>

                <h4>2. Structural Patterns</h4>
                <h5>الفكرة</h5>
                <p>تركز على:</p>
                <p>كيف نركب Classes و Objects مع بعض؟</p>

                <h5>تساعد في</h5>
                <ul>
                    <li>دمج Objects.</li>
                    <li>توسيع السلوك.</li>
                    <li>التكيف مع Interfaces مختلفة.</li>
                </ul>

                <h5>مشاكل تحلها</h5>
                <ul>
                    <li>Incompatible Interfaces.</li>
                    <li>Large Monolithic Classes.</li>
                    <li>Rigid Inheritance.</li>
                    <li>إضافة Responsibilities ديناميكيًا.</li>
                </ul>

                <h5>الأنماط الموجودة</h5>
                <ul>
                    <li>Adapter</li>
                    <li>Bridge</li>
                    <li>Composite</li>
                    <li>Decorator</li>
                    <li>Facade</li>
                    <li>Flyweight</li>
                    <li>Proxy</li>
                </ul>

                <h5>متى تستخدمها؟</h5>
                <ul>
                    <li>دمج Behaviors.</li>
                    <li>علاقات مرنة بين Classes.</li>
                    <li>دمج Legacy أو Third-Party Code.</li>
                </ul>

                <h5>متى لا تستخدمها؟</h5>
                <p>عندما يكون:</p>
                <ul>
                    <li>Inheritance العادي كافي.</li>
                    <li>لا توجد Structural Complexity.</li>
                </ul>

                <h4>3. Behavioral Patterns</h4>
                <h5>الفكرة</h5>
                <p>تركز على:</p>
                <p>كيف تتواصل Objects مع بعضها؟</p>

                <h5>تساعد في</h5>
                <ul>
                    <li>تقليل Coupling.</li>
                    <li>تبسيط التفاعلات.</li>
                    <li>استبدال if-else المعقدة.</li>
                </ul>

                <h5>مشاكل تحلها</h5>
                <ul>
                    <li>Complex if-else.</li>
                    <li>Tight Coupling.</li>
                    <li>Hard-to-change behavior.</li>
                    <li>State-dependent behavior.</li>
                </ul>

                <h5>الأنماط الموجودة</h5>
                <ul>
                    <li>Strategy</li>
                    <li>Observer</li>
                    <li>Command</li>
                    <li>State</li>
                    <li>Template Method</li>
                    <li>Iterator</li>
                    <li>Mediator</li>
                    <li>Memento</li>
                    <li>Chain of Responsibility</li>
                    <li>Visitor</li>
                    <li>Interpreter</li>
                </ul>

                <h4>مقارنة بين الفئات الثلاث</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>Aspect</th>
                            <th>Creational</th>
                            <th>Structural</th>
                            <th>Behavioral</th>
                        </tr>
                        <tr>
                            <td>Focus</td>
                            <td>Object Creation</td>
                            <td>Composition</td>
                            <td>Interaction</td>
                        </tr>
                        <tr>
                            <td>Mechanism</td>
                            <td>Abstraction</td>
                            <td>Composition</td>
                            <td>Delegation</td>
                        </tr>
                        <tr>
                            <td>Benefit</td>
                            <td>Flexibility</td>
                            <td>Reusability</td>
                            <td>Maintainability</td>
                        </tr>
                    </tbody>
                </table>

                <h4>أسئلة الدكتور يحبها</h4>
                <h5>Factory Method vs Abstract Factory</h5>
                <table>
                    <tbody>
                        <tr>
                            <th>Factory Method</th>
                            <th>Abstract Factory</th>
                        </tr>
                        <tr>
                            <td>Creates One Product</td>
                            <td>Creates Families</td>
                        </tr>
                        <tr>
                            <td>Uses Inheritance</td>
                            <td>Uses Composition</td>
                        </tr>
                        <tr>
                            <td>Simpler</td>
                            <td>More Complex</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Adapter vs Decorator</h5>
                <table>
                    <tbody>
                        <tr>
                            <th>Adapter</th>
                            <th>Decorator</th>
                        </tr>
                        <tr>
                            <td>Changes Interface</td>
                            <td>Adds Behavior</td>
                        </tr>
                        <tr>
                            <td>Integration</td>
                            <td>Enhancement</td>
                        </tr>
                        <tr>
                            <td>One-time</td>
                            <td>Stackable</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Strategy vs State</h5>
                <table>
                    <tbody>
                        <tr>
                            <th>Strategy</th>
                            <th>State</th>
                        </tr>
                        <tr>
                            <td>Algorithm Selection</td>
                            <td>State-driven Behavior</td>
                        </tr>
                        <tr>
                            <td>Client Decides</td>
                            <td>Object Decides</td>
                        </tr>
                        <tr>
                            <td>External Variation</td>
                            <td>Internal Variation</td>
                        </tr>
                    </tbody>
                </table>

                <h4>علاقة التصنيف بـ SOLID</h4>
                <h5>Creational</h5>
                <p>يرتبط بـ:</p>
                <ul>
                    <li>DIP</li>
                    <li>OCP</li>
                </ul>

                <h5>Structural</h5>
                <p>يرتبط بـ:</p>
                <ul>
                    <li>OCP</li>
                    <li>SRP</li>
                </ul>

                <h5>Behavioral</h5>
                <p>يرتبط بـ:</p>
                <ul>
                    <li>SRP</li>
                    <li>OCP</li>
                    <li>LSP</li>
                </ul>

                <h4>أهم نقاط الفاينال</h4>
                <ul>
                    <li>لماذا نصنف Design Patterns؟</li>
                    <li>الفئات الثلاث لـ GoF.</li>
                    <li>Purpose of Creational Patterns.</li>
                    <li>Purpose of Structural Patterns.</li>
                    <li>Purpose of Behavioral Patterns.</li>
                    <li>قائمة Patterns لكل فئة.</li>
                    <li>Factory Method vs Abstract Factory.</li>
                    <li>Adapter vs Decorator.</li>
                    <li>Strategy vs State.</li>
                    <li>Relationship between SOLID and Pattern Categories.</li>
                </ul>
            </div>
        </div>
    `,
    4: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 4</span>
                <h3>Singleton Pattern</h3>
            </div>
            <div class="lecture-content">
                <h4>أولًا: ما هو Singleton Pattern؟</h4>
                <p>الـ Singleton هو Design Pattern من نوع Creational Pattern لأن وظيفته الأساسية التحكم في إنشاء الـ Objects.</p>
                <p>فكرته بسيطة جدًا:</p>
                <p>يضمن وجود نسخة (Instance) واحدة فقط من الكلاس طوال عمر البرنامج، ويوفر نقطة وصول عامة لها.</p>

                <h4>لماذا نحتاج Singleton؟</h4>
                <p>تخيل عندك:</p>
                <p><strong>Database Connection</strong></p>
                <p>لو كل جزء من البرنامج عمل:</p>
                <pre>new DatabaseConnection();</pre>
                <p>هيتعمل Connections كتير بدون داعي.</p>
                <p>الأفضل:</p>
                <pre>DatabaseConnection.getInstance();</pre>
                <p>وكل البرنامج يستخدم نفس الـ Connection.</p>

                <h4>أمثلة حقيقية</h4>
                <p><strong>Logger</strong></p>
                <p>كل البرنامج يكتب في نفس ملف الـ Log.</p>
                <p><strong>Configuration Manager</strong></p>
                <p>كل البرنامج يقرأ نفس الإعدادات.</p>
                <p><strong>Printer Spooler</strong></p>
                <p>إدارة الطباعة من خلال كائن واحد.</p>
                <p><strong>Cache Manager</strong></p>
                <p>تخزين البيانات المشتركة.</p>

                <h4>Structure of Singleton</h4>
                <p>أي Singleton يحتوي على 3 أشياء:</p>
                <h5>1. Constructor Private</h5>
                <pre>private Singleton() {}</pre>
                <p>حتى لا يستطيع أحد عمل:</p>
                <pre>new Singleton();</pre>
                <h5>2. Static Instance</h5>
                <pre>private static Singleton instance;</pre>
                <p>النسخة الوحيدة من الكلاس.</p>
                <h5>3. Public Access Method</h5>
                <pre>public static Singleton getInstance()</pre>
                <p>الطريقة الوحيدة للحصول على الكائن.</p>

                <h4>Basic Singleton</h4>
                <pre>class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if(instance == null)
            instance = new Singleton();
        return instance;
    }
}</pre>

                <h4>المشكلة الأولى: Thread Safety</h4>
                <p>لو عندك Thread 1 و Thread 2</p>
                <p>الاثنان نفذا:</p>
                <pre>if(instance == null)</pre>
                <p>في نفس اللحظة.</p>
                <p>كلاهما سيرى أن:</p>
                <pre>instance == null</pre>
                <p>ثم كلاهما ينشئ:</p>
                <pre>new Singleton();</pre>
                <p>فتصبح عندك نسختان.</p>
                <p>وهذا يكسر فكرة Singleton بالكامل.</p>

                <h4>الحل الأول: Synchronized Method</h4>
                <pre>public static synchronized Singleton getInstance()</pre>
                <p><strong>الميزة:</strong></p>
                <p>سهل جدًا.</p>
                <p><strong>العيب:</strong></p>
                <p>أبطأ.</p>
                <p>يوجد Performance Overhead.</p>
                <p>لأن كل Thread ينتظر الآخر.</p>

                <h4>الحل الثاني: Double Checked Locking</h4>
                <p><strong>الفكرة:</strong></p>
                <p>بدل ما نعمل Lock كل مرة.</p>
                <p>نعمل Lock فقط إذا كانت الـ Instance غير موجودة.</p>
                <pre>if(instance == null) {
   synchronized(...) {
      if(instance == null)
          instance = new Singleton();
   }
}</pre>
                <p><strong>الميزة:</strong></p>
                <p>سريع.</p>
                <p><strong>العيب:</strong></p>
                <p>معقد.</p>

                <h4>الحل الثالث: Static Holder</h4>
                <p>أفضل حل غالبًا.</p>
                <p>يعتمد على:</p>
                <pre>private static class Holder {
   static final Singleton INSTANCE = new Singleton();
}</pre>
                <p>ثم:</p>
                <pre>return Holder.INSTANCE;</pre>
                <p><strong>المميزات:</strong></p>
                <ul>
                    <li>Lazy</li>
                    <li>Thread Safe</li>
                    <li>سريع</li>
                </ul>
                <p>لذلك المحاضرة قالت إنه Recommended.</p>

                <h4>أنواع Singleton</h4>
                <h5>1. Eager Singleton</h5>
                <p>ينشئ الـ Object فور تشغيل البرنامج.</p>
                <pre>private static Singleton instance = new Singleton();</pre>
                <p><strong>الميزة:</strong></p>
                <p>Thread Safe</p>
                <p><strong>العيب:</strong></p>
                <p>يستهلك موارد حتى لو لم نستخدمه.</p>

                <h5>2. Lazy Singleton</h5>
                <p>ينشئ الكائن عند أول استخدام.</p>
                <p><strong>الميزة:</strong></p>
                <p>يوفر الموارد.</p>
                <p><strong>العيب:</strong></p>
                <p>غير Thread Safe.</p>

                <h5>3. Synchronized Singleton</h5>
                <p><strong>الميزة:</strong></p>
                <p>Thread Safe</p>
                <p><strong>العيب:</strong></p>
                <p>أبطأ.</p>

                <h5>4. Double Checked Locking</h5>
                <p><strong>الميزة:</strong></p>
                <p>سريع وآمن.</p>
                <p><strong>العيب:</strong></p>
                <p>أكثر تعقيدًا.</p>

                <h5>5. Static Holder</h5>
                <p>أفضل توازن بين:</p>
                <ul>
                    <li>الأداء</li>
                    <li>البساطة</li>
                    <li>الأمان</li>
                </ul>

                <h4>أخطاء شائعة</h4>
                <h5>استخدام Singleton كـ Global Variable</h5>
                <p>مثال:</p>
                <pre>Singleton.getInstance()</pre>
                <p>في كل مكان.</p>
                <p>يبدو الأمر مريحًا.</p>
                <p>لكن المشكلة:</p>
                <p><strong>Hidden Dependencies</strong></p>
                <p>أي لا تعرف من يعتمد على من بسهولة.</p>

                <h5>God Object Problem</h5>
                <p>مع الوقت يضيف المبرمج:</p>
                <ul>
                    <li>Logging</li>
                    <li>Configuration</li>
                    <li>Database</li>
                    <li>Authentication</li>
                </ul>
                <p>داخل نفس Singleton.</p>
                <p>فيصبح:</p>
                <p>MegaSingleton</p>
                <p>يعرف كل شيء ويفعل كل شيء.</p>
                <p>وهذا يسمى:</p>
                <p>God Object</p>

                <h4>ما المبادئ التي يكسرها؟</h4>
                <p><strong>SRP</strong></p>
                <p>لأن الكلاس أصبح مسؤولًا عن أشياء كثيرة.</p>
                <p><strong>DIP</strong></p>
                <p>لأن الجميع يعتمد مباشرة على Singleton.</p>

                <h4>لماذا يعتبره البعض Anti-Pattern؟</h4>
                <p>المحاضرة ذكرت الأسباب التالية:</p>
                <ul>
                    <li>Hidden Dependencies</li>
                    <li>لا ترى الاعتماد بوضوح.</li>
                    <li>Global State</li>
                    <li>كل النظام يشارك نفس الحالة.</li>
                    <li>Difficult Unit Testing</li>
                    <li>الاختبار يصبح أصعب.</li>
                    <li>Hard Mocking</li>
                    <li>صعب استبداله بكائن وهمي.</li>
                    <li>Reduced Flexibility</li>
                    <li>مرونة أقل.</li>
                </ul>

                <h4>مشاكل الاختبار (Testing)</h4>
                <h5>المشكلة الأولى</h5>
                <p>لا يمكن بسهولة عمل Reset للـ Instance.</p>
                <h5>المشكلة الثانية</h5>
                <p>Test يؤثر على Test آخر.</p>
                <p>مثال:</p>
                <pre>test1()</pre>
                <p>غير بيانات Singleton.</p>
                <p>ثم:</p>
                <pre>test2()</pre>
                <p>يجد البيانات قد تغيرت.</p>
                <h5>المشكلة الثالثة</h5>
                <p>صعوبة Mocking.</p>
                <p>ولهذا تصبح الاختبارات:</p>
                <p>Fragile Tests</p>

                <h4>Singleton vs Dependency Injection</h4>
                <p>المحاضرة ركزت جدًا على هذا الجدول.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Singleton</th>
                            <th>Dependency Injection</th>
                        </tr>
                        <tr>
                            <td>Global Access</td>
                            <td>Explicit Dependencies</td>
                        </tr>
                        <tr>
                            <td>Hard Testing</td>
                            <td>Easy Testing</td>
                        </tr>
                        <tr>
                            <td>Hidden Coupling</td>
                            <td>Loose Coupling</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>ماذا يفضل اليوم؟</strong></p>
                <p>في الأنظمة الحديثة:</p>
                <p>Prefer Dependency Injection over Singleton</p>
                <p>يعني استخدم DI قدر الإمكان بدل Singleton.</p>

                <h4>متى نستخدم Singleton؟</h4>
                <p>استخدمه عندما:</p>
                <ul>
                    <li>يوجد Shared Resource</li>
                    <li>مثل:</li>
                    <ul>
                        <li>Logger</li>
                        <li>Configuration Manager</li>
                        <li>Cache</li>
                    </ul>
                    <li>نحتاج Instance واحدة فقط</li>
                    <li>مثل مدير الطباعة.</li>
                    <li>الحالة ثابتة أو مدارة بعناية</li>
                </ul>

                <h4>متى لا نستخدمه؟</h4>
                <p>لا تستخدمه في:</p>
                <ul>
                    <li>Business Logic Classes</li>
                    <li>مثل:</li>
                    <ul>
                        <li>OrderService</li>
                        <li>CustomerService</li>
                    </ul>
                    <li>Classes تحتاج Testing كثير</li>
                    <li>إذا كان قد نحتاج عدة Instances مستقبلاً</li>
                </ul>

                <h4>مفاهيم خاطئة مشهورة في الامتحان</h4>
                <p><strong>خطأ</strong></p>
                <p>Singleton means only one object forever.</p>
                <p><strong>الصحيح:</strong></p>
                <p>Singleton يتحكم في إنشاء النسخة وليس في سلوك الكلاس.</p>
                <p><strong>خطأ</strong></p>
                <p>Singleton is always bad.</p>
                <p><strong>الصحيح:</strong></p>
                <p>له استخدامات مناسبة وأخرى غير مناسبة.</p>
                <p><strong>خطأ</strong></p>
                <p>Singleton is just static methods.</p>
                <p><strong>الصحيح:</strong></p>
                <p>Singleton Pattern ≠ Static Class</p>
                <p>لأن Singleton ما زال Object حقيقي له State ويمكن تمريره واختباره (بشكل محدود).</p>

                <h4>ملخص الفاينال</h4>
                <p>احفظ جيدًا:</p>
                <ul>
                    <li>تعريف Singleton.</li>
                    <li>لماذا هو Creational Pattern.</li>
                    <li>الفرق بين Eager و Lazy.</li>
                    <li>مشكلة Thread Safety.</li>
                    <li>Synchronized Method.</li>
                    <li>Double Checked Locking.</li>
                    <li>Static Holder.</li>
                    <li>Hidden Dependencies.</li>
                    <li>God Object.</li>
                    <li>لماذا يعتبر Anti-Pattern.</li>
                    <li>مشاكل Testing.</li>
                    <li>Singleton vs Dependency Injection.</li>
                    <li>متى يستخدم ومتى لا يستخدم.</li>
                    <li>أشهر Misconceptions.</li>
                </ul>
                <p>دي تقريبًا كل النقاط المهمة في المحاضرة والتي غالبًا تأتي منها أسئلة الامتحان.</p>
            </div>
        </div>
    `,
    5: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 5</span>
                <h3>Factory Method Pattern</h3>
            </div>
            <div class="lecture-content">
                <h4>أولًا: ما هي المشكلة التي تحلها Factory Method؟</h4>
                <p>تخيل أنك تكتب:</p>
                <pre>Payment payment = new CreditCardPayment();</pre>
                <p>في كل مكان في المشروع.</p>
                <p>بعد فترة قال العميل:</p>
                <p>نريد دعم PayPal.</p>
                <p>ستضطر لتعديل أماكن كثيرة:</p>
                <pre>Payment payment = new PayPalPayment();</pre>
                <p>ثم يأتي Apple Pay ثم Google Pay...</p>
                <p><strong>المشكلة:</strong></p>
                <ul>
                    <li>Tight Coupling</li>
                    <li>صعوبة التعديل</li>
                    <li>كسر OCP</li>
                    <li>تكرار الكود</li>
                </ul>

                <h4>الفكرة الأساسية</h4>
                <p>بدل:</p>
                <pre>new Product()</pre>
                <p>نستخدم:</p>
                <pre>createProduct()</pre>
                <p>يعني العميل لا ينشئ الكائن بنفسه.</p>
                <p>المصنع (Factory) هو الذي يقرر أي Object سيتم إنشاؤه.</p>

                <h4>تعريف Factory Method</h4>
                <p><strong>Factory Method defines an interface for creating objects, but lets subclasses decide which class to instantiate.</strong></p>
                <p>يعني:</p>
                <ul>
                    <li>نحدد طريقة إنشاء الكائن.</li>
                    <li>لكن القرار النهائي لأي Class سيتم إنشاؤه يكون داخل الـ Factory.</li>
                </ul>

                <h4>الفكرة المهمة جدًا</h4>
                <p><strong>Delegation</strong></p>
                <p>Factory Method تقوم بعمل:</p>
                <p><strong>Delegation of object creation</strong></p>
                <p>أي أن العميل:</p>
                <p><strong>Client</strong></p>
                <p>لا يقرر إنشاء:</p>
                <pre>CreditCardPayment</pre>
                <p>أو</p>
                <pre>PayPalPayment</pre>
                <p>بل الـ Factory هي التي تقرر.</p>

                <h4>Structure</h4>
                <p>يتكون النمط من 4 أجزاء:</p>
                <h5>1. Product</h5>
                <p>واجهة أو Abstract Class</p>
                <pre>interface Payment</pre>

                <h5>2. Concrete Products</h5>
                <pre>CreditCardPayment
PayPalPayment</pre>

                <h5>3. Creator</h5>
                <p>المصنع المجرد</p>
                <pre>abstract class PaymentFactory</pre>
                <p>ويحتوي:</p>
                <pre>createPayment()</pre>

                <h5>4. Concrete Factories</h5>
                <pre>CreditCardFactory
PayPalFactory</pre>
                <p>كل Factory تنشئ Product معينًا.</p>

                <h4>مثال المحاضرة</h4>
                <h5>Product</h5>
                <pre>interface Payment {
   void pay();
}</pre>

                <h5>Concrete Products</h5>
                <pre>class CreditCardPayment
class PayPalPayment</pre>

                <h5>Factory</h5>
                <pre>abstract class PaymentFactory {
    abstract Payment createPayment();
}</pre>

                <h5>Concrete Factories</h5>
                <p>class CreditCardFactory</p>
                <p>تنشئ:</p>
                <pre>CreditCardPayment</pre>
                <p>class PayPalFactory</p>
                <p>تنشئ:</p>
                <pre>PayPalPayment</pre>

                <h5>Client Code</h5>
                <pre>PaymentFactory factory =
      new PayPalFactory();

Payment payment =
      factory.createPayment();

payment.pay();</pre>

                <h4>Before vs After</h4>
                <h5>Before</h5>
                <pre>Payment p =
   new CreditCardPayment();</pre>
                <p>العميل مرتبط مباشرة بالكلاس.</p>

                <h5>After</h5>
                <pre>PaymentFactory factory =
      new CreditCardFactory();

Payment p =
      factory.createPayment();</pre>
                <p>الإنشاء أصبح مركزيًا ومرنًا.</p>

                <h4>مثال البنك الموجود بالمحاضرة</h4>
                <p>المستخدم يدخل رقم البطاقة.</p>
                <p>أول 6 أرقام تحدد البنك:</p>
                <pre>123456 → BankA
111111 → BankB</pre>
                <p>ثم:</p>
                <pre>BankFactory.GetBank()</pre>
                <p>هي التي تقرر أي Bank Object سيتم إنشاؤه.</p>

                <h4>أمثلة حقيقية</h4>
                <h5>UI Framework</h5>
                <pre>Button
 ├── WindowsButton
 └── MacButton</pre>

                <h5>Document Editor</h5>
                <pre>Document
 ├── TextDocument
 └── PDFDocument</pre>

                <h5>Games</h5>
                <pre>Enemy
 ├── Zombie
 ├── Robot
 └── Alien</pre>

                <h5>Payment Systems</h5>
                <pre>CreditCard
PayPal
ApplePay</pre>

                <h4>المميزات</h4>
                <h5>1. Loose Coupling</h5>
                <p>العميل يعتمد على:</p>
                <pre>Payment</pre>
                <p>وليس:</p>
                <pre>CreditCardPayment</pre>

                <h5>2. Open/Closed Principle</h5>
                <p>يمكن إضافة:</p>
                <pre>ApplePayPayment</pre>
                <p>بدون تعديل الكود القديم.</p>

                <h5>3. Centralized Object Creation</h5>
                <p>مكان واحد فقط لإنشاء Objects.</p>

                <h5>4. Better Maintainability</h5>
                <p>الصيانة أسهل.</p>

                <h4>العيوب</h4>
                <h5>More Classes</h5>
                <p>لكل Product غالبًا Factory خاصة به.</p>

                <h5>Increased Complexity</h5>
                <p>عدد ملفات أكثر.</p>

                <h5>Overkill</h5>
                <p>لو عندك Class بسيطة واحدة فقط فلا داعي لاستخدام Factory Method.</p>

                <h4>أخطاء شائعة</h4>
                <h5>1. استخدام Factory لكل شيء</h5>
                <p>يسبب:</p>
                <p>Unnecessary Abstraction</p>

                <h5>2. ما زلت تستخدم new داخل Client</h5>
                <p>مثل:</p>
                <pre>Payment p =
    new CreditCardPayment();</pre>
                <p>وهذا يهدم فكرة الـ Pattern كلها.</p>

                <h5>3. الخلط بين Factory Method و Abstract Factory</h5>
                <p><strong>Factory Method</strong></p>
                <p>ينشئ:</p>
                <pre>ONE Product</pre>
                <p><strong>Abstract Factory</strong></p>
                <p>ينشئ:</p>
                <pre>FAMILY of Products</pre>

                <h4>متى نستخدم Factory Method؟</h4>
                <p>استخدمها عندما:</p>
                <ul>
                    <li>Object Creation Complex</li>
                    <li>عملية الإنشاء معقدة.</li>
                    <li>Extensible System</li>
                    <li>تتوقع إضافة أنواع جديدة.</li>
                    <li>Unknown Type</li>
                    <li>لا تعرف نوع الـ Object وقت الـ Compile.</li>
                </ul>

                <h4>متى لا نستخدمها؟</h4>
                <p>إذا:</p>
                <ul>
                    <li>Only One Simple Class</li>
                    <li>أو</li>
                    <li>No Future Extension</li>
                </ul>

                <h4>التشبيه الشهير</h4>
                <p><strong>Restaurant Kitchen</strong></p>
                <p>العميل يقول:</p>
                <pre>Pizza</pre>
                <p>ولا يدخل المطبخ.</p>
                <p>المطبخ هو الذي يقرر:</p>
                <ul>
                    <li>المكونات</li>
                    <li>طريقة التحضير</li>
                </ul>
                <p>العميل فقط يطلب المنتج.</p>
                <p>وهذا بالضبط ما تفعله Factory Method.</p>
            </div>
        </div>
    `,
    6: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 6</span>
                <h3>Abstract Factory Pattern</h3>
            </div>
            <div class="lecture-content">
                <h4>ما هو Abstract Factory؟</h4>
                <p>الـ Abstract Factory هو Creational Design Pattern يوفر Interface لإنشاء عائلات (Families) من Objects المرتبطة ببعضها دون معرفة الـ Concrete Classes المستخدمة.</p>
                <p>بمعنى أبسط:</p>
                <p>بدل ما تنشئ Objects مباشرة باستخدام:</p>
                <pre>new WindowsButton();
new WindowsCheckbox();</pre>
                <p>تستخدم Factory واحدة تنشئ مجموعة Objects متوافقة مع بعضها.</p>

                <h4>لماذا نحتاجه؟</h4>
                <p>تخيل أنك تبني UI يعمل على:</p>
                <ul>
                    <li>Windows</li>
                    <li>Mac</li>
                </ul>
                <p>وكل نظام له:</p>
                <ul>
                    <li>Button</li>
                    <li>Checkbox</li>
                </ul>
                <p>بدون Abstract Factory ستكتب:</p>
                <pre>if(os == "Windows")
   button = new WindowsButton();
else
   button = new MacButton();</pre>
                <p>ومع زيادة المنتجات:</p>
                <pre>if(os == "Windows")</pre>
                <p>يتكرر في كل مكان.</p>
                <p><strong>المشاكل:</strong></p>
                <ul>
                    <li>Too many if-else</li>
                    <li>Tight Coupling</li>
                    <li>Hard to extend</li>
                    <li>صعب إضافة Linux لاحقًا</li>
                </ul>

                <h4>الحل</h4>
                <p>نعمل Factory لكل Family.</p>
                <p><strong>WindowsFactory</strong></p>
                <p>تنشئ:</p>
                <pre>WindowsButton
WindowsCheckbox</pre>
                <p><strong>MacFactory</strong></p>
                <p>تنشئ:</p>
                <pre>MacButton
MacCheckbox</pre>
                <p>وهكذا نحافظ على التوافق بين العناصر.</p>

                <h4>الفكرة الأساسية</h4>
                <p><strong>Create families of related objects.</strong></p>
                <p>يعني المصنع لا ينشئ Object واحد.</p>
                <p>بل ينشئ مجموعة مرتبطة ببعضها.</p>
                <p>مثال:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Factory</th>
                            <th>Products</th>
                        </tr>
                        <tr>
                            <td>WindowsFactory</td>
                            <td>WindowsButton + WindowsCheckbox</td>
                        </tr>
                        <tr>
                            <td>MacFactory</td>
                            <td>MacButton + MacCheckbox</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Structure</h4>
                <h5>1. Abstract Factory</h5>
                <p>واجهة تحدد المنتجات الممكن إنشاؤها.</p>
                <pre>interface GUIFactory {
   Button createButton();
   Checkbox createCheckbox();
}</pre>

                <h5>2. Concrete Factories</h5>
                <p><strong>WindowsFactory</strong></p>
                <pre>createButton()
createCheckbox()</pre>
                <p>تنشئ منتجات ويندوز.</p>
                <p><strong>MacFactory</strong></p>
                <p>تنشئ منتجات ماك.</p>

                <h5>3. Abstract Products</h5>
                <pre>Button
Checkbox</pre>
                <p>واجهات عامة.</p>

                <h5>4. Concrete Products</h5>
                <pre>WindowsButton
MacButton
WindowsCheckbox
MacCheckbox</pre>
                <p>التنفيذ الفعلي.</p>

                <h5>5. Client</h5>
                <p>يتعامل مع:</p>
                <pre>GUIFactory
Button
Checkbox</pre>
                <p>فقط.</p>
                <p>ولا يعرف الكلاسات الحقيقية.</p>

                <h4>مثال الأثاث (مهم جدًا)</h4>
                <p>المحاضرة ذكرت مثال:</p>
                <p><strong>Modern Factory</strong></p>
                <p>تنشئ:</p>
                <pre>Modern Chair
Modern Table</pre>
                <p><strong>Classic Factory</strong></p>
                <p>تنشئ:</p>
                <pre>Classic Chair
Classic Table</pre>
                <p>لا يصح:</p>
                <pre>Modern Chair + Classic Table</pre>
                <p>لأن التصميم سيصبح غير متناسق.</p>

                <h4>متى نستخدمه؟</h4>
                <p>استخدمه عندما:</p>
                <h5>1. لديك Families من المنتجات</h5>
                <p>مثال:</p>
                <pre>Windows Family
Mac Family
Linux Family</pre>
                <h5>2. تريد ضمان التوافق</h5>
                <p>كل منتجات نفس العائلة تعمل معًا.</p>
                <h5>3. تريد إخفاء منطق الإنشاء</h5>
                <h5>4. تريد نظامًا قابلًا للتوسع</h5>

                <h4>المميزات</h4>
                <h5>1. Consistency</h5>
                <p>منتجات نفس المصنع متوافقة دائمًا.</p>

                <h5>2. Loose Coupling</h5>
                <p>العميل لا يعرف Concrete Classes.</p>

                <h5>3. Easy Switching</h5>
                <p>بدل:</p>
                <pre>WindowsFactory</pre>
                <p>ضع:</p>
                <pre>MacFactory</pre>
                <p>فيتغير النظام كله.</p>

                <h5>4. Scalable</h5>
                <p>يمكن إضافة:</p>
                <pre>LinuxFactory
DarkThemeFactory</pre>
                <p>بسهولة.</p>

                <h4>العيوب</h4>
                <h5>1. Hard to Extend Products</h5>
                <p>إذا أضفت:</p>
                <pre>Slider</pre>
                <p>يجب تعديل:</p>
                <pre>GUIFactory
WindowsFactory
MacFactory</pre>
                <p>وكل المصانع الأخرى.</p>

                <h5>2. More Complexity</h5>
                <p>Classes أكثر</p>
                <p>Abstractions أكثر</p>

                <h4>Factory Method vs Abstract Factory</h4>
                <p>من أهم أجزاء المحاضرة.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Feature</th>
                            <th>Factory Method</th>
                            <th>Abstract Factory</th>
                        </tr>
                        <tr>
                            <td>Scope</td>
                            <td>One Product</td>
                            <td>Multiple Products</td>
                        </tr>
                        <tr>
                            <td>Complexity</td>
                            <td>Simpler</td>
                            <td>More Complex</td>
                        </tr>
                        <tr>
                            <td>Example</td>
                            <td>Create Button</td>
                            <td>Create Button + Checkbox</td>
                        </tr>
                    </tbody>
                </table>

                <h4>استخدامات حقيقية</h4>
                <h5>UI Frameworks</h5>
                <pre>Windows / Mac</pre>

                <h5>Games</h5>
                <pre>Desert Environment / Ice Environment</pre>

                <h5>Databases</h5>
                <pre>MySQL / Oracle</pre>

                <h5>Cross-platform Applications</h5>

                <h4>أخطاء شائعة</h4>
                <h5>1. Overusing It</h5>
                <p>لا تستخدمه إذا:</p>
                <ul>
                    <li>يوجد Product واحد فقط.</li>
                    <li>لا توجد Families.</li>
                </ul>

                <h5>2. الخلط مع Factory Method</h5>
                <p><strong>Factory Method:</strong></p>
                <p>Single Product</p>
                <p><strong>Abstract Factory:</strong></p>
                <p>Group of Related Products</p>

                <h4>ملخص الفاينال</h4>
                <p>احفظ:</p>
                <ul>
                    <li>تعريف Abstract Factory.</li>
                    <li>لماذا نستخدمه.</li>
                    <li>Structure بالكامل.</li>
                    <li>Abstract Factory / Concrete Factory.</li>
                    <li>Abstract Product / Concrete Product.</li>
                    <li>Furniture Example.</li>
                    <li>Advantages.</li>
                    <li>Disadvantages.</li>
                    <li>Factory Method vs Abstract Factory.</li>
                    <li>Common Mistakes.</li>
                </ul>
            </div>
        </div>
    `,
    7: `
        <div class="lecture-card">
            <div class="lecture-header">
                <span class="lecture-number">Lecture 7</span>
                <h3>Adapter Pattern</h3>
            </div>
            <div class="lecture-content">
                <h4>شرح محاضرة Adapter Pattern</h4>
                <p>الـ Adapter Pattern هو Structural Design Pattern وظيفته الأساسية أنه يجعل كلاسّين أو نظامين بواجهات (Interfaces) مختلفة يشتغلوا مع بعض بدون تعديل الكود الأصلي.</p>

                <h4>الفكرة ببساطة</h4>
                <p>تخيل عندك شاحن لابتوب ومقبس الحائط مختلف عنه، فتستخدم Adapter يحول بينهم.</p>

                <p>في البرمجة:</p>
                <ul>
                    <li>Client متوقع Interface معين.</li>
                    <li>يوجد Class قديم أو مكتبة خارجية Interface بتاعتها مختلف.</li>
                    <li>Adapter يقوم بالترجمة بين الاثنين.</li>
                </ul>

                <h4>المشكلة التي يحلها Adapter</h4>
                <p>أحيانًا يكون لدينا:</p>
                <ul>
                    <li>أسماء دوال مختلفة.</li>
                    <li>مدخلات ومخرجات مختلفة.</li>
                    <li>Interfaces غير متوافقة.</li>
                </ul>
                <p>وبالتالي لا يستطيع الـ Client استخدام الكلاس الموجود مباشرة.</p>

                <h4>مثال المحاضرة</h4>
                <p>لدينا:</p>
                <p><strong>Employee</strong></p>
                <pre>public class Employee
{
   public string Name { get; set; }
   public double BasicSalary { get; set; }
}</pre>

                <p><strong>SalaryCalculator</strong></p>
                <p>يحسب المرتب من Employee.</p>
                <pre>public double CalcSalary(Employee emp)
{
   return emp.BasicSalary * 1.5;
}</pre>

                <h4>المشكلة</h4>
                <p>ظهر كلاس جديد:</p>
                <pre>public class MachineOperator
{
   public string Name { get; set; }
   public double BasicSalary { get; set; }
   public string ShiftCode { get; set; }
}</pre>
                <p>لكن Calculator يقبل Employee فقط وليس MachineOperator.</p>

                <h4>الحل: Adapter</h4>
                <p>ننشئ كلاس وسيط:</p>
                <pre>public class SalaryAdapter : SalaryCalculator
{
   private Employee emp;

   public double CalcSalary(MachineOperator op)
   {
      emp = new Employee();
      emp.BasicSalary = op.BasicSalary;

      return base.CalcSalary(emp);
   }
}</pre>

                <p>الـ Adapter:</p>
                <ul>
                    <li>يستقبل MachineOperator.</li>
                    <li>يحوله إلى Employee.</li>
                    <li>يرسل البيانات إلى SalaryCalculator.</li>
                </ul>

                <h4>مكونات Adapter Pattern</h4>
                <p><strong>1. Target</strong></p>
                <p>الواجهة المطلوبة من العميل.</p>
                <pre>interface MediaPlayer
{
   void play(String audioType,String fileName);
}</pre>

                <p><strong>2. Adaptee</strong></p>
                <p>الكلاس الموجود مسبقًا.</p>
                <pre>class AdvancedMediaPlayer
{
   void playMp4(String fileName);
}</pre>

                <p><strong>3. Adapter</strong></p>
                <p>يقوم بالتحويل بين Target و Adaptee.</p>
                <pre>class MediaAdapter implements MediaPlayer</pre>

                <p><strong>4. Client</strong></p>
                <p>يستخدم Target فقط.</p>
                <pre>AudioPlayer</pre>

                <h4>أنواع Adapter Pattern</h4>
                <p><strong>1. Class Adapter</strong></p>
                <p>يعتمد على Inheritance.</p>
                <pre>class Adapter extends Adaptee implements Target</pre>
                <p>المميزات:</p>
                <ul>
                    <li>أسرع.</li>
                </ul>
                <p>العيوب:</p>
                <ul>
                    <li>أقل مرونة بسبب Single Inheritance.</li>
                </ul>

                <p><strong>2. Object Adapter (الأكثر استخدامًا)</strong></p>
                <p>يعتمد على Composition.</p>
                <pre>private Adaptee adaptee;</pre>
                <p>المميزات:</p>
                <ul>
                    <li>أكثر مرونة.</li>
                    <li>المفضل في الأنظمة الحديثة.</li>
                </ul>

                <h4>متى نستخدم Adapter؟</h4>
                <ul>
                    <li>عند وجود Interfaces غير متوافقة.</li>
                    <li>عند إعادة استخدام Legacy Code.</li>
                    <li>عند دمج مكتبات خارجية.</li>
                    <li>عندما لا نستطيع تعديل الكلاس الأصلي.</li>
                </ul>

                <h4>المميزات</h4>
                <ul>
                    <li>إعادة استخدام الكود.</li>
                    <li>المرونة.</li>
                    <li>فصل منطق التحويل.</li>
                    <li>تطبيق Open/Closed Principle.</li>
                </ul>

                <h4>العيوب</h4>
                <ul>
                    <li>زيادة عدد الكلاسات.</li>
                    <li>طبقة إضافية قد تؤثر قليلًا على الأداء.</li>
                    <li>الاستخدام الزائد قد يؤدي لتصميم سيئ.</li>
                </ul>

                <h4>مقارنة مهمة</h4>
                <p><strong>Adapter vs Decorator</strong></p>
                <ul>
                    <li>Adapter: تحويل Interface</li>
                    <li>Decorator: إضافة سلوك جديد</li>
                </ul>

                <p><strong>Adapter vs Facade</strong></p>
                <ul>
                    <li>Adapter: حل عدم التوافق</li>
                    <li>Facade: تبسيط نظام كامل</li>
                </ul>

                <h4>استخدامات واقعية</h4>
                <ul>
                    <li>Legacy Systems</li>
                    <li>Payment Gateways</li>
                    <li>Database Drivers</li>
                    <li>JSON/XML Converters</li>
                    <li>Hardware Interfaces</li>
                </ul>

                <h4>أخطاء شائعة</h4>
                <ul>
                    <li>استخدام Adapter رغم توافق الـ Interfaces.</li>
                    <li>وضع Business Logic داخل Adapter.</li>
                    <li>تجاهل حلول أبسط مثل Refactoring.</li>
                </ul>

                <h4>مبادئ التصميم المستخدمة</h4>
                <ul>
                    <li>SRP</li>
                    <li>OCP</li>
                    <li>Loose Coupling</li>
                </ul>

                <h4>ملخص للحفظ</h4>
                <p>Adapter Pattern = تحويل Interface إلى Interface آخر متوقع بواسطة Client بحيث تتمكن الأنظمة غير المتوافقة من العمل معًا دون تعديل الكود الأصلي.</p>
            </div>
        </div>
    `
};

// Show Lecture List View
function showLectureListView() {
    elements.lectureListView.classList.remove('hidden');
    elements.lectureDetailView.classList.add('hidden');
}

// Show Lecture Detail View
function showLectureDetailView(lectureId) {
    elements.lectureListView.classList.add('hidden');
    elements.lectureDetailView.classList.remove('hidden');
    elements.lectureDetailContent.innerHTML = lectureContent[lectureId];
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

    // Save last score for this category
    saveLastScore(category, correctAnswers, questions.length);

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
    loadLastScores();
    showScreen('home');
}

// Handle browser back/forward button (only for lectures section)
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.screen) {
        const screen = event.state.screen;
        // Only handle lectures and home screens
        if (screen === 'lectures' || screen === 'home') {
            showScreen(screen, false);
            if (screen === 'lectures') {
                showLectureListView();
            }
        }
    } else {
        // If no state, go to home screen
        showScreen('home', false);
    }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
