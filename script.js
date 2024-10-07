// Navbar shrink and expand
const menuIcon = document.getElementById('menuIcon');
const sideNavbar = document.getElementById('sideNavbar');
const mainContent = document.getElementById('mainContent');

menuIcon.addEventListener('click', () => {
    sideNavbar.classList.toggle('shrink');
    mainContent.classList.toggle('shrink');
});

const courses = {
    'DBMS': [
        { name: 'ER Diagrams', description: 'Visual representation of data models. Used to structure and organize data effectively.' },
        { name: 'Joins', description: 'Combines rows from two or more tables based on related columns. Essential for querying relational databases.' },
        { name: 'Normalization', description: 'Process of organizing data to reduce redundancy. Ensures data integrity in databases.' },
        { name: 'ACID Properties', description: 'Set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee reliable transactions.' },
        { name: 'Transactions', description: 'A sequence of operations performed as a single logical unit. Ensures data is always consistent.' },
        { name: 'Indexes', description: 'Data structures that improve the speed of data retrieval operations on a database. Enhances performance.' },
        { name: 'Query Optimization', description: 'Improving the efficiency of SQL queries to reduce execution time. Crucial for large datasets.' },
        { name: 'Stored Procedures', description: 'Precompiled SQL statements stored in the database. Allow for reuse and can enhance security.' },
        { name: 'Triggers', description: 'Automatic actions triggered by specific events on a table or view. Used for maintaining data integrity.' },
        { name: 'Concurrency Control', description: 'Techniques to ensure that database transactions are executed concurrently without leading to inconsistencies.' }
    ],
    'FLAT': [
{ name: 'Finite Automata', description: 'Abstract machines used to recognize patterns within input. Essential for understanding computation. <a>https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf</a> ' },
{ name: 'Regular Languages', description: 'Class of languages recognized by finite automata. Fundamental for automata theory and formal languages. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Context-Free Grammars', description: 'Type of formal grammar that generates context-free languages. Important in programming language design. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Turing Machines', description: 'Mathematical model of computation. Provides a framework for understanding algorithmic processes. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'PDA', description: 'Pushdown Automata, a type of automaton that uses a stack. Useful for parsing context-free languages. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Decidability', description: 'Concerns whether a problem can be solved by an algorithm. Fundamental in computational theory. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Automata', description: 'Mathematical models of computation that perform calculations automatically. Basis for computer science. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Complexity Theory', description: 'Study of the inherent difficulty of computational problems. Classifies problems based on their resource needs. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Recursive Languages', description: 'Languages that can be decided by a Turing machine. Important in the study of formal languages. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' },
{ name: 'Pushdown Automata', description: 'A type of automaton that can use a stack to store information. Helps in understanding context-free languages. https://www.iitg.ac.in/dgoswami/Flat-Notes.pdf' }
],
'DLC': [
{ name: 'Logic Gates', description: 'Basic building blocks of digital circuits. Used to create complex operations from simple functions.' },
{ name: 'Boolean Algebra', description: 'Mathematical structure for manipulating logical statements. Foundation of digital circuit design.' },
{ name: 'Flip-Flops', description: 'Bistable devices used to store binary data. Essential in memory design and sequential logic.' },
{ name: 'Counters', description: 'Devices that store and count pulses. Widely used in digital systems for counting applications.' },
{ name: 'Multiplexers', description: 'Devices that select one of several input signals and forward it to a single output line. Used for data routing.' },
{ name: 'Decoders', description: 'Circuits that convert binary data into unique output lines. Important for memory addressing.' },
{ name: 'Encoders', description: 'Devices that convert information from one format to another. Often used to reduce data complexity.' },
{ name: 'Karnaugh Maps', description: 'Visual method for simplifying Boolean expressions. Helps in minimizing logic circuits.' },
{ name: 'Combinational Circuits', description: 'Circuits whose output depends only on current inputs. Fundamental in digital design.' },
{ name: 'Sequential Circuits', description: 'Circuits that have memory and whose output depends on current inputs and past states. Crucial in designing complex systems.' }
],
'Software Engineering': [
{ name: 'SDLC', description: 'Software Development Life Cycle outlines the process of software development. Essential for project management.' },
{ name: 'Requirements Engineering', description: 'Process of gathering and defining what a software system should do. Crucial for project success.' },
{ name: 'Software Design Patterns', description: 'Best practices for solving common design problems. Enhances software maintainability and flexibility.' },
{ name: 'Agile Methodology', description: 'Iterative approach to software development. Promotes adaptive planning and evolutionary development.' },
{ name: 'Risk Management', description: 'Process of identifying and mitigating risks throughout the project lifecycle. Critical for project success.' },
{ name: 'Testing', description: 'Process of evaluating a system or its components. Ensures software meets specified requirements.' },
{ name: 'Version Control', description: 'Systems that manage changes to documents and source code. Essential for collaborative development.' },
{ name: 'UML Diagrams', description: 'Standardized modeling language used to visualize the design of a system. Useful for documentation and design.' },
{ name: 'Software Metrics', description: 'Quantitative measures of software properties. Helps assess software quality and performance.' },
{ name: 'Quality Assurance', description: 'Ensures that software meets defined quality standards. Involves systematic monitoring and evaluation.' }
],
'Data Structures': [
{ name: 'Arrays', description: 'Collection of items stored at contiguous memory locations. Simple and efficient for data access.' },
{ name: 'Linked Lists', description: 'Data structure consisting of nodes, where each node points to the next. Useful for dynamic memory allocation.' },
{ name: 'Stacks', description: 'LIFO data structure that allows adding/removing elements from one end. Used for backtracking algorithms.' },
{ name: 'Queues', description: 'FIFO data structure that allows adding/removing elements from opposite ends. Useful for scheduling tasks.' },
{ name: 'Trees', description: 'Hierarchical data structure consisting of nodes connected by edges. Used for representing structured data.' },
{ name: 'Graphs', description: 'Collection of nodes connected by edges. Useful for representing networks like social connections.' },
{ name: 'Hashing', description: 'Technique to uniquely identify a data item for fast retrieval. Essential for database indexing.' },
{ name: 'Sorting Algorithms', description: 'Methods for arranging elements in a specific order. Important for efficient data processing.' },
{ name: 'Searching Algorithms', description: 'Techniques to find specific data within a structure. Crucial for data retrieval efficiency.' },
{ name: 'Heaps', description: 'Special tree-based data structure that satisfies the heap property. Used in priority queues and sorting algorithms.' }
],
'BEEE': [
{ name: 'Ohm\'s Law', description: 'Fundamental principle relating voltage, current, and resistance in electrical circuits. Essential for circuit design.' },
{ name: 'AC Circuits', description: 'Circuits powered by alternating current. Important for understanding power systems.' },
{ name: 'DC Circuits', description: 'Circuits powered by direct current. Used in various applications from batteries to electronics.' },
{ name: 'Transformers', description: 'Devices that transfer electrical energy between circuits through electromagnetic induction. Crucial in power distribution.' },
{ name: 'Electromagnetic Induction', description: 'Production of voltage across a conductor when it is exposed to a varying magnetic field. Fundamental for generators.' },
{ name: 'Power Systems', description: 'Systems that generate, transmit, and distribute electricity. Essential for electrical engineering.' },
{ name: 'Electric Machines', description: 'Devices that convert electrical energy to mechanical energy and vice versa. Used in various applications.' },
{ name: 'Diodes', description: 'Semiconductors that allow current to flow in one direction. Crucial for rectification in circuits.' },
{ name: 'Transistors', description: 'Semiconductor devices used to amplify or switch electronic signals. Key component in modern electronics.' },
{ name: 'Operational Amplifiers', description: 'High-gain voltage amplifiers with differential inputs. Widely used in signal processing and filtering.' }
],
'Web Development': [
{ name: 'HTML5', description: 'Standard markup language for creating web pages. Provides the structure of a webpage.' },
{ name: 'CSS3', description: 'Style sheet language used for describing the presentation of a document written in HTML. Controls layout and appearance.' },
{ name: 'JavaScript', description: 'Programming language that enables interactive web content. Essential for client-side scripting.' },
{ name: 'React', description: 'JavaScript library for building user interfaces. Allows for the creation of single-page applications.' },
{ name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 engine. Enables server-side scripting with JavaScript.' },
{ name: 'PHP', description: 'Server-side scripting language designed for web development. Widely used for dynamic content creation.' },
{ name: 'SQL', description: 'Structured Query Language used for managing relational databases. Essential for data manipulation and retrieval.' },
{ name: 'REST APIs', description: 'Architectural style for designing networked applications. Uses HTTP requests to access and manipulate data.' },
{ name: 'GraphQL', description: 'Query language for APIs that allows clients to request specific data. Provides a more efficient alternative to REST.' },
{ name: 'Web Security', description: 'Protection of web applications from threats and vulnerabilities. Critical for safeguarding user data and privacy.' }
],
'Cybersecurity': [
{ name: 'Cryptography', description: 'Practice of secure communication in the presence of third parties. Essential for protecting sensitive information.' },
{ name: 'Network Security', description: 'Protection of computer networks from intruders and attacks. Involves measures to safeguard network integrity.' },
{ name: 'Firewalls', description: 'Network security devices that monitor and control incoming and outgoing network traffic. Essential for defense against attacks.' },
{ name: 'Vulnerability Scanning', description: 'Automated process of identifying security weaknesses in a system. Helps in maintaining a secure environment.' },
{ name: 'Penetration Testing', description: 'Simulated cyber attack on a system to check for vulnerabilities. Helps organizations identify security gaps.' },
{ name: 'Threat Modeling', description: 'Process of identifying and prioritizing potential threats to a system. Helps in designing secure applications.' },
{ name: 'Incident Response', description: 'Structured approach to handling security breaches. Ensures quick recovery and damage mitigation.' },
{ name: 'Malware Analysis', description: 'Study of malicious software to understand its behavior and impact. Crucial for threat detection and prevention.' },
{ name: 'Password Security', description: 'Practices for protecting passwords and ensuring user authentication. Essential for maintaining account integrity.' },
{ name: 'Encryption Algorithms', description: 'Mathematical methods for encoding data to prevent unauthorized access. Key for data security in transmission and storage.' }
],'AIML': [
{ name: 'Supervised Learning', description: 'A type of machine learning where models are trained on labeled data. Used for classification and regression tasks.' },
{ name: 'Unsupervised Learning', description: 'A type of machine learning that deals with unlabeled data. Useful for discovering patterns and groupings.' },
{ name: 'Neural Networks', description: 'Computational models inspired by the human brain. Essential for deep learning applications.' },
{ name: 'Deep Learning', description: 'A subset of machine learning focused on neural networks with many layers. Effective for complex tasks like image and speech recognition.' },
{ name: 'Natural Language Processing', description: 'Field of AI that focuses on the interaction between computers and humans through natural language. Enables applications like chatbots and translation.' },
{ name: 'Machine Learning Algorithms', description: 'Techniques that allow computers to learn from and make predictions based on data. Fundamental for AI applications.' },
{ name: 'Reinforcement Learning', description: 'A type of machine learning where agents learn by interacting with their environment. Used for decision-making and control problems.' },
{ name: 'Decision Trees', description: 'A model used for both classification and regression tasks that splits data into branches to make decisions. Simple and interpretable.' },
{ name: 'Regression Analysis', description: 'Statistical method for modeling the relationship between a dependent variable and one or more independent variables. Important for prediction.' },
{ name: 'Classification', description: 'The process of identifying which category an object belongs to based on input features. Widely used in data mining and machine learning.' }
],
'Cloud Computing': [
{ name: 'Virtual Machines', description: 'Emulates physical computers on a host system, allowing multiple OS instances. Provides isolation and flexibility in resource management.' },
{ name: 'Containers', description: 'Lightweight, portable units that package applications and their dependencies. Ensure consistency across environments and simplify deployment.' },
{ name: 'Kubernetes', description: 'Open-source platform for automating deployment, scaling, and management of containerized applications. Enhances efficiency in container orchestration.' },
{ name: 'Serverless Computing', description: 'Execution model where cloud providers manage server infrastructure. Allows developers to focus on code without worrying about server management.' },
{ name: 'AWS', description: 'Amazon Web Services, a comprehensive cloud platform offering computing power, storage, and various services. Widely used for building and hosting applications.' },
{ name: 'Azure', description: 'Microsoft Azure, a cloud computing platform providing a wide range of services including analytics, storage, and networking. Ideal for enterprise solutions.' },
{ name: 'Google Cloud', description: 'Google Cloud Platform, offering a suite of cloud computing services that runs on the same infrastructure that Google uses internally. Known for its data analytics capabilities.' },
{ name: 'Cloud Security', description: 'Measures and protocols implemented to protect data, applications, and infrastructures in the cloud. Essential for maintaining compliance and preventing breaches.' },
{ name: 'Cloud Networking', description: 'Design and management of networks that enable connectivity and communication in cloud environments. Crucial for performance and security.' },
{ name: 'DevOps', description: 'Cultural and technical movement that aims to improve collaboration between development and operations teams. Enhances software delivery speed and quality.' }
],
'Data Science': [
{ name: 'Data Cleaning', description: 'Process of identifying and correcting errors in data to improve quality. Essential for accurate data analysis and modeling.' },
{ name: 'Data Wrangling', description: 'The process of transforming and mapping raw data into a usable format. Involves cleaning, structuring, and enriching raw data.' },
{ name: 'Data Visualization', description: 'Technique for creating visual representations of data to communicate information clearly. Helps in understanding trends and patterns.' },
{ name: 'Statistical Analysis', description: 'Methods for collecting, reviewing, and interpreting data to uncover insights. Important for making data-driven decisions.' },
{ name: 'Pandas', description: 'Python library providing data structures and data analysis tools. Widely used for data manipulation and analysis.' },
{ name: 'NumPy', description: 'Fundamental package for numerical computing in Python. Supports large, multi-dimensional arrays and matrices, along with a collection of mathematical functions.' },
{ name: 'Machine Learning', description: 'Branch of AI that focuses on developing algorithms that allow computers to learn from data. Used for predictive modeling and pattern recognition.' },
{ name: 'Big Data', description: 'Large and complex datasets that traditional data processing software cannot handle. Requires specialized tools and techniques for analysis.' },
{ name: 'Data Mining', description: 'Process of discovering patterns and knowledge from large amounts of data. Involves methods at the intersection of machine learning and statistics.' },
{ name: 'Scikit-learn', description: 'Python library for machine learning that provides simple and efficient tools for data mining and analysis. Essential for implementing various machine learning algorithms.' }
]

 };
// Subtopic navigation
function navigateToSubtopics(course) {
    const subtopicList = document.getElementById('subtopic-list');
    subtopicList.innerHTML = ''; // Clear previous subtopics

    // Add subtopics dynamically
    courses[course].forEach(subtopic => {
        const subTopicBtn = document.createElement('button');
        subTopicBtn.className = 'sub-topic-btn';
        subTopicBtn.textContent = subtopic.name;

        const subTopicContent = document.createElement('div');
        subTopicContent.className = 'sub-topic-content';
        subTopicContent.innerHTML = `<p>Description for ${subtopic.description}</p>`;

        subTopicContent.style.display = 'none';

        subTopicBtn.addEventListener('click', function(event) {
            subTopicContent.style.display = subTopicContent.style.display === 'block' ? 'none' : 'block';
            subTopicContent.style.top = event.target.offsetTop + 'px'; 

            // Adjust the left position to account for longer subtopic names
            subTopicContent.style.left = (event.target.offsetLeft + event.target.offsetWidth + 20) + 'px';

        });

        subtopicList.appendChild(subTopicBtn);
        subtopicList.appendChild(subTopicContent);
    });

    // Show subtopics section
    document.getElementById('home').style.display = 'none';
    document.getElementById('subtopics').style.display = 'block';

    // Add course to history
    addToHistory(course);
}

// History Section
let history = [];

function addToHistory(course) {
    history.unshift(course); // Add course to the beginning of the list
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear previous history
    
    history.forEach(item => {
        const courseItem = document.createElement('li');
        courseItem.textContent = item;
        courseItem.style.fontWeight = 'bold'; // Increase font weight for better representation
        historyList.appendChild(courseItem);
    });
}

// Login/Logout toggle (for demo purposes)
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');

loginBtn.addEventListener('click', function() {
    userInfo.style.display = 'block';
    loginBtn.style.display = 'none';
    document.getElementById('username').textContent = 'Divakar'; // Example username
});

logoutBtn.addEventListener('click', function() {
    userInfo.style.display = 'none';
    loginBtn.style.display = 'block';
});

// Back Button to navigate to home
function goBack() {
    document.getElementById('subtopics').style.display = 'none';
    const homeSection = document.getElementById('home');
    homeSection.style.display = 'flex'; // Ensure proper flex display
    homeSection.style.justifyContent = 'center'; // Center the content horizontally
    homeSection.style.alignItems = 'center';
}

// Feedback Form Submit Handler
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    document.getElementById('feedbackInput').value = ''; // Clear the feedback input
});
