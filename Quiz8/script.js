const questions = [
    { question: "When should the rescuer initially ensure that the scene is safe?", choices: ["When the rescuer first sees a potential victim", "After the rescuer activates the emergency response system", " As emergency medical services arrive on the scene", "After an AED that is attached to the victim delivers a shock"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "As soon as an AED becomes available, which of the following is the first step the rescuer should perform to operate the AED?", choices: ["Place the AED pads on the chest", "Deliver 2 rescue breaths before using the AED", "Turn on the AED", "SComplete 5 cycles of chest compressions"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "After the AED delivers a shock, the rescuer should", choices: ["Wait for the AED to reanalyze the rhythm", "Immediately restart CPR, beginning with chest compressions", "Provide 2 ventilations to the victim", "Immediately check the carotid pulse for no more than 10 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The 2010 AHA Guidelines for CPR and ECC recommend that to identify cardiac arrest in an unresponsive victim with no breathing (or no normal breathing), a healthcare provider should check a pulse for no more than", choices: ["25 seconds", "10 seconds", "15 seconds", "20 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "After you identify an unresponsive victim with no breathing (or no normal breathing) and no pulse, chest compressions should be initiated within", choices: ["25 seconds", "10 seconds", "30 seconds", "60 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Which of the following victims need CPR?", choices: [" A victim with a pulse and who is having trouble breathing", "A victim with chest pain and indigestion", "A victim who is unresponsive, no normal breathing and absent/ inadequate pulse", "A victim who is unresponsive but is breathing adequately"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Where should the hands be placed to perform chest compressions on an adult?", choices: ["On the lower half of the breastbone", "In the center of the breastbone", "On the upper portion of the abdomen", "On the upper half of the breastbone"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The depth of compressions for an adult victim should be at least", choices: ["1 inch", "2 inches", "3 inches", "4 inches"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Why is it important to compress to the appropriate depth during CPR?", choices: ["Adequate depth of compression is needed to create blood flow during compressions", "Adequate depth of compression is needed to create air flow into the lungs and adequate oxygenation", "Adequate depth of compression is needed to prolong asystole", "Adequate depth of compression is needed to stimulate spontaneous respirations"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The recommended rate for performing chest compressions for victims of all ages is", choices: ["At least 40 compressions per minute", "At least 60 compressions per minute", "At least 80 compressions per minute", "At least 100 compressions per minute"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The compression-to-ventilation ratio for 1-rescuer adult CPR is", choices: ["30:2", "5:1", "20:2", "15:2"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "After the airway is opened, which of the following correctly states the proper technique for delivering mouth-to-mouth ventilation?", choices: ["The rescuer opens the airway, seals their mouth over the victim's mouth, pinches the victim's nose closed, and gives 2 breaths while watching for the chest to rise", "The rescuer opens the airway, seals their mouth over the victim's mouth, and gives several small puffs while trying to avoid making the chest rise", " The rescuer opens the airway, seals their mouth over the victim's mouth, and gives 1 slow breath for a duration of 5 seconds", "The rescuer opens the airway, seals their mouth over the victim's mouth, and gives 5 slow breaths, each with a duration of 2 seconds, while watching for the chest to rise"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "The rescuer knows the rescue breath for in infant victim is effective when", choices: ["The stomach visibly rises", "The chest rises visibly", "The child ventilation bag is completely compressed", "The rescuer can hear an air leak around the mask"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following ventilation devices/techniques is not recommended for a single rescuer to provide breaths during CPR?", choices: ["Bag-mask device", "Mouth-to-barrier device technique", "Mouth-to-mouth technique", "Mouth-to-mask technique"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "During bag-mask ventilation, which of the following is recommended to minimize the risk of gastric inflation?", choices: ["Give breaths as quickly as you can", "Give each breath over as long a time as you can (several seconds)", "Give the largest breaths that you can", "Give a breath just until you see the chest rise"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "When a child has a pulse rate greater than 60 per minute, but is not breathing effectively, the rescuer should", choices: ["Give breaths and compressions", "Give breaths without compressions", "Give chest compressions without breaths", "Connect the AED to the child and analyze"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "When administering breaths by using a bag-mask device for a child who is not breathing but does have a pulse, the rescuer should", choices: ["Squeeze the bag as often as possible", "Give breaths at the rate of 1 breath every 3 to 5 seconds", "Position the child on their stomach", "Avoid performing a head tilt"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "In 2-rescuer CPR, while the first rescuer begins chest compressions, the second rescuer should", choices: ["Count compressions out loud", "Check for a pulse during compressions", "Do nothing until the first rescuer needs relief", " Maintain an open airway and give ventilations"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following options lists the correct compression and ventilation rates for 2- rescuer CPR in the presence of an advanced airway?", choices: ["Compress at a rate of at least 100 per minute, 1 breath every 6 - 8 seconds", "Compress at a rate of at least 60 per minute, 1 breath every 6 - 8 seconds", "Compress at a rate of at least 100 per minute, 2 breaths every 5-10 seconds", "Compress at a rate of at least 60 per minute, 1 breath every 5-10 seconds"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The compression-to-breaths ratio for 2-rescuer child CPR is", choices: ["30:2", "5:1", "20:2", "15:2"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "If a victim of foreign body airway obstruction becomes unresponsive, the rescuer should send someone to activate the emergency response system and immediately", choices: ["Perform abdominal thrusts", "Perform blind finger sweeps", "Start CPR beginning with compressions", "Call the victim's doctor"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "If an unresponsive infant is not breathing and has a heart rate of 53 beats per minute and signs of poor perfusion despite oxygenation and ventilation with a bag and mask, which of the following should you perform?", choices: ["One rescue breath every 10 seconds", "Cycles of back blows and chest thrusts", "Chest compressions without breaths", "Both chest compressions and breaths"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The recommended depth of compressions for an infant is", choices: ["At least one fourth the depth of the chest, approximately 1 inch", "At least one third the depth of the chest, approximately 1.5 inches", "At least one half the depth of the chest, approximately 2 inches", "At least two thirds the depth of the chest, approximately 3 inches"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The 2 thumb-encircling hands technique for the infant", choices: ["Produces less blood flow than the 2-finger technique", "Is the preferred chest compression technique for 2-rescuer CPR", "Is the preferred chest compression technique for 1-rescuer CPR", "Generates less blood pressure than the 2-finger technique"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "In which locations do most out-of-hospital cardiac arrests occur?", choices: ["healthcare clinics", "homes", "recreational facilities", "shopping centers"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the most common cause of cardiac arrest in children?", choices: ["cardiac problem", "congenital or acquired heart disease", "respiratory failure or shock", "infection and sepsis"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the third link in the adult out-of-hospital chain of survival?", choices: ["advanced life support", "high-quality CPR", "prevention", "rapid defibrillation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which statement best describes sudden cardiac arrest?", choices: ["when respiratory distress in adults occurs and the heart rate does not change", "when the heart rate is 40-60/min and respirations increase", "when blood flow to the heart is blocked and the heart rate increases", "when an abnormal rhythm develops and the heart stops beating unexpectedly"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Scenario: 53-year old man suddenly collapses and becomes unresponsive. You witness him collapse and are the first rescuer to arrive at the scene. You find him lying motionless on the floor.<br><br>What is the first action you should take in this situation?", choices: ["activate the emergency response system", "start high-quality CPR beginning with chest compressions", "start providing rescue breaths", "verify that the scene is safe for you and the victim"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Scenario: 53-year old man suddenly collapses and becomes unresponsive. You witness him collapse and are the first rescuer to arrive at the scene. You find him lying motionless on the floor.<br><br>The man doesnt respond when you touch his shoulders and shout, ''are you okay'' What is your best next action?", choices: ["check his pulse", "start high-quality CPR", "start providing rescue breaths", "shout for nearby help"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 2400; // 60 minutes in seconds
let timerInterval;
let answered = new Array(questions.length).fill(false);
let isExpanded = false;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
    startTimer();
    document.getElementById('collapseBtn').addEventListener('click', toggleCollapse);
});

function loadQuestions() {
    const container = document.getElementById('questionsContainer');
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        if (index !== 0) questionDiv.style.display = 'none';
        else questionDiv.classList.add('active');

        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <img src="${q.image}" class="question-image" alt="Post-question image">
            <div class="choices">
                ${q.choices.map((choice, i) => `
                    <div class="choice" onclick="checkAnswer(${index}, ${i})">${choice}</div>
                `).join('')}
            </div>
            <div class="nav-buttons">
                <button class="back-btn" onclick="prevQuestion(${index})" ${index === 0 ? 'disabled' : ''}>Back</button>
                <button class="next-btn" onclick="nextQuestion(${index})" ${index === questions.length - 1 ? 'disabled' : ''}>Next</button>
            </div>
        `;
        container.appendChild(questionDiv);
    });

    updateScore();
}

function checkAnswer(qIndex, choiceIndex) {
    if (answered[qIndex]) return;
    
    const questionDiv = document.getElementsByClassName('question')[qIndex];
    const choices = questionDiv.getElementsByClassName('choice');
    const correctIndex = questions[qIndex].correct;
    
    if (choiceIndex === correctIndex) {
        choices[choiceIndex].classList.add('correct');
        score++;
    } else {
        choices[choiceIndex].classList.add('wrong');
        choices[correctIndex].classList.add('correct');
    }
    
    answered[qIndex] = true;
    updateScore();
}

function nextQuestion(index) {
    if (index < questions.length - 1) {
        const questions = document.getElementsByClassName('question');
        questions[index].style.display = 'none';
        questions[index].classList.remove('active');
        questions[index + 1].style.display = 'block';
        questions[index + 1].classList.add('active');
        currentQuestion = index + 1;
    }
}

function prevQuestion(index) {
    if (index > 0) {
        const questions = document.getElementsByClassName('question');
        questions[index].style.display = 'none';
        questions[index].classList.remove('active');
        questions[index - 1].style.display = 'block';
        questions[index - 1].classList.add('active');
        currentQuestion = index - 1;
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = 
            `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            disableAllChoices();
        }
    }, 1000);
}

function updateScore() {
    document.getElementById('score').textContent = `Correct Answer: ${score}/${questions.length}`;
}

function toggleCollapse() {
    const container = document.getElementById('questionsContainer');
    const btn = document.getElementById('collapseBtn');
    
    if (isExpanded) {
        container.classList.remove('expanded');
        container.classList.add('collapsed');
        btn.textContent = 'Expand All';
        isExpanded = false;
        const questions = document.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            if (i === currentQuestion) {
                questions[i].style.display = 'block';
                questions[i].classList.add('active');
            } else {
                questions[i].style.display = 'none';
                questions[i].classList.remove('active');
            }
        }
    } else {
        container.classList.remove('collapsed');
        container.classList.add('expanded');
        btn.textContent = 'Collapse All';
        isExpanded = true;
        const questions = document.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.display = 'block';
            if (i === currentQuestion) {
                questions[i].classList.add('active');
            } else {
                questions[i].classList.remove('active');
            }
        }
    }
}

function disableAllChoices() {
    const choices = document.getElementsByClassName('choice');
    for (let choice of choices) {
        choice.onclick = null;
        choice.style.cursor = 'default';
    }
}