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
let timeLeft = 4200; // 60 minutes in seconds
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