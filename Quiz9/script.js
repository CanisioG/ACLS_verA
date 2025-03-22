const questions = [
    { question: "Several rescuers respond and you ask them to activate the emergency response and retrieve the AED and emergency equipment. As you check for a pulse and breathing, you notice that the man is gasping for air and making snorting sounds. You do not feel a pulse. What is the next best action?", choices: ["Start high-quality CPR, beginning with chest compressions", "monitor the victim until additional, more experienced help arrives", "provide rescue breathing by delivering 1 breath every 5-6 seconds", "find someone to help by retrieving the nearest AED"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the ratio of chest compressions to breaths when providing CPR to an adult?", choices: ["10 compressions to 2 breaths", "15 compressions to 2 breaths", "30 compressions to 2 breaths", "100 compressions to 2 breaths"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What are the rate and depth of chest compressions on an adult?", choices: ["rate of 60-80 compressions per minute and depth of about 1 inch", "rate of 80-100 compressions per minute and depth of about 1.5 inches", "rate of 120-140 compressions per minute and depth of about 2.5 inches", "Bate of 100-120 compressions per minute and depth of at least 2 inches"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What action should you take when more rescuers arrive?", choices: ["Assign tasks to other rescuers and rotate compressions every 2 minutes or more frequently if needed to avoid fatigued", "Continue CPR while the AED is attached even if you are fatigued", "wait for the most experienced rescuer to provide direction to the team", "direct the team to assign a team leader and roles while you continue CPR"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "If you suspect that and unresponsive has head or neck trauma what is preffered method to opening the airway?", choices: ["head-tilt, chin-lift", "jaw thrust", "head tilt-neck lift", "avoid opening the airway"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the most appropriate first step to take as soon as the AED arrives at the victim's side?", choices: ["power on the AED", "apply the pads", "press the analyze button", "press the shock button"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which step is one of universal steps for operating an AED?", choices: ["placing pads on victims bare chest", "shaving victims hairy chest", "removing victim from water", "finding victims implanted pacemaker"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "If a victim of cardiac arrest has an implanted pacemaker or defib, what special steps should be taken?", choices: ["avoid placing the AED pad directly over the implanted device", "avoid using the AED to prevent damage to the implanted device", "turn off the implanted device before applying the AED pads", "consider using pediatric pads to decrease the shock dose delivered"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What action should you take when the AED is analyzing the heart rhythm?", choices: ["check the pulse", "continue the chest compressions", "give rescue breaths only", "stand clear of the victim"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "After performing high-quality CPR for 5 minutes, team leader frequently interrupts chest compressions to check for a pulse even though the victim has no organized rhythm when AED analyzes the rhythm/ Which action demonstrates constructive intervention?", choices: ["ask another rescuer what he thinks should be done", "say nothing that contradicts the team leader", "suggest to resume chest compressions without delay", "wait until the debriefing session afterward to discuss is"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "The team leader asks you to perform bag-mask ventilation during resuscitation attempt, but you have not perfected that skill. What would be an appropriate action to acknowledge your limitations?", choices: ["pick up the bag-mask device and give it to another team member", "pretend you did not hear the request and hope the team leader chooses someone else to do it", "tell the team leader that you are not comfortable performing that task", "try to do it as best as you can and hope another team member will see you struggling and take over"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "what is the appropriate action to demonstrate closed-loop communication when the team leader assigns you a task?", choices: ["repeat back to the team leader the task you were assigned", "nod your head as an acknowledgment of the assigned task", "start performing the assigned tasks, but do not speak, to minimize noise", "wait for the team leader to address you by name before acknowledging the task"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the correct compression-to-ventilation ratio for a single rescuer of a 3-year old child?", choices: ["15:1", "15:2", "20:2", "30:2"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the correct compression to ventilation ratio for a 7 year old child when 2 or more rescuers are present?", choices: ["15:1", "15:2", "20:2", "30:2"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "For what age victims is the thumb-encircling technique recommended when 2 or more rescuers present?", choices: ["a child younger than 3 years", "a child older than 3 years", "an infant older than 1 year", "an infant younger than 1 year"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is correct chest compression depth for a child?", choices: ["at least 1/4 of depth, about 1 inch", "at least 1/3 of depth, about 1.5 inches", "at least 1/3 of depth, about 2 inches", "at least 1/2 of depth, about 3 inches"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is correct chest compression depth for an infant?", choices: ["at least 1/4 of depth or 1 inch", "at least 1/3 of depth or 1.5 inches", "at least 1/3 of depth or about 2 inches", "at least 1/2 or at least 2.5 inches"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What should you do when using an AED on an infant or a child less than 8 years of age", choices: ["never use adult AED pads", "use adult AED pads", "use adult AED pads if AED does not have child pads", "use adult AED pads but cut in half"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "If manual defib is not available for infant victim what action should you take?", choices: ["perform high-quality CPR", "use a AED equipped with pediatric dose attenuator", "use an AED without a pediatric dose attenuator", "wait for advanced care to arrive"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is important to remember about placing AED pad on infants?", choices: ["ensure pads overlap", "place 1 adult pad on the chest", "place 1 pad on chest and one on back", "if child pads not available do not use AED"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which victim would need only rescue breathing?", choices: ["agonal gasping with no pulse", "breathing with weak pulse", "no breathing and a pulse", "no breathing and no pulse"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "How often should rescue breaths be given in infants and children when pulse is present?", choices: ["1 breath 2-3 seconds", "1 breath 3-5 seconds", "1 breath 5-6 seconds", "1 breath 8-10 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which action can rescuers perform to potentially reduce risk of gastric inflation?", choices: ["delivering each breath over 1 second", "giving rapid, shallow breaths", "using bvm to deliver ventilation", "using mouth to mouth breathing"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is preferred method for giving rescue breaths to infant?", choices: ["mouth to mouth", "mouth to mouth and nose", "mouth to nose", "any method"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is not an example of an opioid?", choices: ["heroin", "hydrocodone", "morphine", "naloxone"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Your 27-year old roommate uses opiods. You find him unresponsive with no breathing, but a strong pulse. You suspect an opioid associated life threatening emergency. a friend is phoning 9-1-1 and is looking for naloxone autoinjector. what action should you take?", choices: ["remain with your roommate until naloxone arrives and administer it", "begin CPR, starting with chest compressions", "provide rescue breathing, 1 breath 5-6 seconds", "provide rapid defib with an AED"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You encounter an unresponsive 56 year old man who has been taking hydrocodone after a surgical procedure. He is not breathing and has no pulse. You notice that his medication bottle is empty and suspect an opiod-associated life threat emergency. A colleague activates the emergency response system and is retriving aed and naloxone. What is most appropriate action?", choices: ["wait for naloxone to arrive", "begin CPR", "provide 1 rescue breathe every 5-6 seconds until naloxone arrives", "provide rapid defib with aed"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is an example of a mild foreign body airway obstruction?", choices: ["cyanosis", "high-pitched noise while inhaling", "inability to speak or cry", "wheezing between coughs"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Which victim of a severe airway obstruction should receive abdominal thrusts?", choices: ["average size 27 year old man", "woman who is pregnant", "obese 50 year old", "average size 9 month old infant"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are performing abdominal thrusts on a 9 year old when he suddenly becomes unresponsive. You shout for help, what is most appropriate action?", choices: ["begin CPR with chest compressions", "check for pulse", "continue performing abdominal thrusts", "provide 5 back slaps followed by 5 chest thrusts"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }
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