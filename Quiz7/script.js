const questions = [
    { question: "While performing high-quality CPR on an adult, what action should you ensure is being accomplished?", choices: ["Maintaining a compression rate of 90 to 120/min", "Placing hands on the upper third of the sternum", "Allowing the chest to recoil 1 inch", "Compressing to a depth of at least 2 inches"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 53-year-old woman collapses while gardening. She is unresponsive, is not breathing, and does not have a pulse. A neighbor, who is an emergency medical technician, rushes to her with an AED.<br><br>When the AED arrives, what is the first step for using it?", choices: ["Apply the pads to the patient's chest", "Clear the patient", "Turn on the AED", "Press the shock button"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "A 53-year-old woman collapses while gardening. She is unresponsive, is not breathing, and does not have a pulse. A neighbor, who is an emergency medical technician, rushes to her with an AED.<br><br>After the AED pads are attached to the victim's bare chest, the AED detects ventricular fibrillation. What is the next step when using an AED?", choices: ["Check the victim for a carotid pulse", "Follow the AED prompts", "Clear the patient", "Press the shock button"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What should you do if you need to use an AED on someone who has been submerged in water?", choices: ["Do not move the victim, and do not use the AED", "Pull the victim out of the water, but do not use the AED", "Pull the victim out of the water. and wipe the chest", "Do not pull the victim out of the water, but wipe the chest before placing pads"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "How can rescuers ensure that they are providing effective breaths when using a bag-mask device?", choices: ["Observing the chest rise with breaths", "Delivering breaths quickly and forcefully", "Always having oxygen attached to the bag", "Allowing air to release around the mask"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What ratio for compressions to breaths should be used for 1-rescuer infant CPR?", choices: ["5 compressions to 1 breath", "20 compressions to 2 breaths", "15 compressions to 2 breaths", "30 compressions to 2 breaths"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is a consideration when you are using an AED?", choices: ["You should never remove a transdermal medication patch before applying AED pads", "On a hairy chest, the pads may not stick and may fail to deliver a shock", "AEDs can be used while a victim is submerged in water", "You should not use an AED on someone with an implanted pacemaker"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 9-year-old child has suddenly collapsed. After confirming that the scene is safe, a single rescuer determines that the child is in cardiac arrest, shouts for nearby help, and activates the emergency response system. He immediately begins performing high-quality CPR. Two additional rescuers arrive to assist in the resuscitation attempt.<br><br>What actions should occur next, to support a team-based resuscitation attempt?", choices: ["2 rescuers alternate using the AED and giving breaths", "1 rescuer gives CPR while the other 2 wait for advanced life support to arrive", "2 rescuers alternate giving high-quality chest compressions", "2 rescuers operate the AED while the third rescuer gives breaths"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "A 9-year-old child has suddenly collapsed. After confirming that the scene is safe, a single rescuer determines that the child is in cardiac arrest, shouts for nearby help, and activates the emergency response system. He immediately begins performing high-quality CPR. Two additional rescuers arrive to assist in the resuscitation attempt.<br><br>Two rescuers begin high-quality CPR while the third rescuer leaves to get the AED. What action supports 2-rescuer CPR?", choices: ["Alternating the AED role every 2 minutes", "Alternating the compressor role every 2 minutes", "Alternating giving rescue breaths every 3 cycles", "Alternating qivinq shocks everv 3 cycles"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "''Members of the team know their boundaries and ask for help before the resuscitation attempt worsens.'' Match this statement with the most appropriate element of team dynamics listed.", choices: ["Knowledge sharing", "Summarizing and reevaluation", "Constructive intervention", "Knowing your limitations"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A victim with a foreign-body airway obstruction becomes unresponsive. What is your first course of action?", choices: ["Start CPR, beginning with chest compressions", "Roll the victim over and perform back blows", "Perform abdominal thrusts", "Perform blind finger sweeps"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Why is defibrillation important?", choices: ["It prevents rearrest from occurring", "It is not important for cardiac arrest", "There is a 100% success rate in regaining a normal cardiac rhythm", "It can restore a regular cardiac rhythm"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "You witness someone suddenly collapse. The person is unresponsive, you hear gasping sounds, and there is no pulse. What should you do next?", choices: ["Begin CPR; the gasps are not normal breathing", "Give rescue breaths only; the gasps are not normal breathing", "Monitor the patient; the gasps are considered normal breathing", "Begin CPR, even though gasping is normal breathing"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A middle-aged man collapses. You and a second rescuer go to the victim and find that he is unresponsive, is not breathing, and does not have a pulse.<br><br>Which action is most likely to positively impact this victim's survival?", choices: ["Performing high-quality CPR", "Ensuring scene safety", "Providing rescue breaths", "Checking the pulse frequently"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A middle-aged man collapses. You and a second rescuer go to the victim and find that he is unresponsive, is not breathing, and does not have a pulse.<br><br>You and another rescuer begin CPR. After a few cycles, you notice the chest compression rate is slowing. What should you say to offer constructive feedback?", choices: ["''You need to compress at a rate of 80 to 120 per minute.''", "''You need to compress at a rate of at least 120 per minute.''", "''You need to compress at a rate of 100 to 120 per minute.''", "''You need to comoress at a rate of at least 100 per minute.''"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "How do you perform chest compressions when providing high-quality CPR to a child victim?", choices: ["By compressing the chest at least one third the depth of the chest, about 2 inches (5 cm)", "By compressing the chest at least one fourth the depth of the chest, about 1.5 inches (4 cm)", "By compressing the chest at least two thirds the depth of the chest, about 4 inches (10 cm)", "By compressing the chest at least one half the depth of the chest, about 3 inches (8 cm)"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "When performing CPR on an unresponsive choking victim, what modification should you incorporate?", choices: ["There are no modifications to CPR for an unresponsive choking victim", "You do not give breaths to an unresponsive choking victim", "Each time you open the airway, look for the obstructing object", "Attempt a jaw thrust instead of a head tilt-chin lift"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An 8-month-old infant is eating and suddenly begins to cough. The infant is unable to make any noise shortly after. You pick up the infant and shout for help.<br><br>You have determined that the infant is responsive and choking with a severe airway obstruction. How do you relieve the airway obstruction?", choices: ["Encourage the infant to cough", "Give sets of 5 back slaps and 5 chest thrusts", "Begin 2 thumb-encircling hands chest compressions", "Give abdominal thrusts"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An 8-month-old infant is eating and suddenly begins to cough. The infant is unable to make any noise shortly after. You pick up the infant and shout for help.<br><br>Which action do you perform to relieve choking in an unresponsive infant?", choices: ["Perform CPR, and look in the mouth for the obstructing object", "Give sets of 5 back slaps and 5 chest thrusts", "Give sets of 5 abdominal thrusts and 5 back slaps", "Attempt a blind finaer sweep when giving breaths to remove the obstructina obiect"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which victim requires high-quality CPR?", choices: ["A victim who is unresponsive, has a strong pulse, and is breathing adequately", "A victim who is unresponsive with no normal breathing and no pulse", "A victim who is responsive, has a pulse, and is having trouble breathing", "A victim who is responsive, is having trouble breathing, and has a pulse less than 60/min"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "''The team functions smoothly when all team members know their positions, functions, and tasks during a resuscitation attempt.'' Match this statement with the most appropriate element of team dynamics listed.", choices: ["Clear roles and responsibilities", "Knowing your limitations", "Constructive intervention", "Mutual respect"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which ocean is the largest?", choices: ["There will be a reduction of rescuer fatigue", "It will reduce the risk of rib fractures", "The heart will adequately refill between compressions", "The rate of chest compressions will increase"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 67-year-old man is found unresponsive, not breathing, and without a pulse. You and a second rescuer begin performing high-quality CPR.<br><br>When should rescuers switch positions during CPR?", choices: ["Never switch rescuers, and maintain current roles", "Switch rescuers at 5-minute intervals", "Switch rescuers about every 2 minutes", "Switch rescuers when placing the AED pads"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 67-year-old man is found unresponsive, not breathing, and without a pulse. You and a second rescuer begin performing high-quality CPR.<br><br>You notice the person giving chest compressions is not allowing for complete chest recoil. What is your next course of action?", choices: ["Stand back and await direction from the team leader", "Take over leadership and give direction", "Immediately take over chest compressions", "Tell the comoressor vou notice decreased chest recoil"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Rapid defibrillation is a link in the adult Chain of Survival. Why is this important to survival?", choices: ["It prevents cardiac arrest", "It prevents respiratory arrest", "It provides normal respiration", "It eliminates the abnormal heart rhythm"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 60 minutes in seconds
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
