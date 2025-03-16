const questions = [
    { question: "What should be done to minimize interruptions in chest compressions during CPR?", choices: ["Perform pulse checks only after defibrillation", "Continue CPR while the defibrillator is charging", "Administer IV medications only when breaths are given", "Continue to use AED even after the arrival of a manual defibrillator"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which condition is an indication to stop or withhold resuscitative efforts?", choices: ["Unwitnessed arrest", "Safety threat to providers", "Patient age greater than 85 years", "No return of spontaneous circulation after 10 minutes of CPR"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "After verifying the absence of a pulse, you initiate CPR with adequate bag-mask ventilation. The patient's lead II ECG appears below. What is your next action?", choices: ["IV or I0 access", "Endotracheal tube placement", "Consultation with cardiology for possible PCI", "Application of a transcutaneous pacemaker"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_001.jpg" },
    { question: "After verifying unresponsiveness and abnormal breathing, you activate the emergency response team. What is your next action?", choices: ["Retrieve an AED", "Check for a pulse", "Deliver 2 rescue breaths", "Administer a precordial thump"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommendation on the use of cricoid pressure to prevent aspiration during cardiac arrest?", choices: ["Not recommended for routine use", "Recommended during every resuscitation attempt", "Recommended when the patient is vomiting", "Recommended only for supraglottic airway insertion"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What survival advantages does CPR provide to a patient in ventricular fibrillation?", choices: ["Increases the defibrillation threshold", "Directly restores an organized rhythm", "Opposes the harmful effects of epinephrine", "Produces a small amount of blood flow to the heart"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended compression rate for performing CPR?", choices: ["60 to 80 per minute", "80 to 100 per minute", "About 100 per minute", "At least 100 per minute"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "EMS personnel arrive to find a patient in cardiac arrest. Bystanders are performing CPR. After attaching a cardiac monitor, the responder observes the following rhythm strip. What is the most important early intervention?", choices: ["Defibrillation", "Endotracheal intubation", "Epinephrine administration", "Antiarrhythmic administration"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_005.jpg" }, // 3 lines
    { question: "A patient remains in ventricular fibrillation despite 1 shock and 2 minutes of continuous CPR. The next intervention is to", choices: ["administer amiodarone", "administer a second shock", "administer epinephrine", "insert an advanced airway"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended next step after a defibrillation attempt?", choices: ["Open the patient's airway", "Determine if a carotid pulse is present", "Check the ECG for evidence of a rhythm", "Begin CPR, starting with chest compressions"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is the recommended first choice for establishing intravenous access during the attempted resuscitation of a patient in cardiac arrest?", choices: ["Subclavian vein", "Antecubital vein", "Intraosseous line", "Internal jugular vein"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended first intravenous dose of amiodarone for a patient with refractory ventricular fibrillation?", choices: ["1 mg", "1 mg/kg", "1 mEq/kg", "300 mg"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "IV/IO drug administration during CPR should be", choices: ["given rapidly during compressions", "administered slowly during the pause for a pulse check", "given by infusion", "given before any defibrillation attempts"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "How often should the team leader switch chest compressors during a resuscitation attempt?", choices: ["Every minute", "Every 2 minutes", "Every 3 minutes", "Every 4 minutes"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which finding is a sign of ineffective CPR?", choices: ["PETC02 <10 mm Hg", "Patient temperature >32°C (89.6°F)", "Diastolic intra-arterial pressure ≥ 20 mm Hg", "Measured patient urine output of 1 ml/kg per hour"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A team leader orders 1 mg of epinephrine, and a team member verbally acknowledges when the medication is administered. What element of effective resuscitation team dynamics does this represent?", choices: ["Clear messages", "Knowing one's limitations", "Closed-loop communication", "Clear roles and responsibilities"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "How long should it take to perform a pulse check during the BLS Survey?", choices: ["1 to 5 seconds", "5 to 10 seconds", "10 to 15 seconds", "15 to 20 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Your rescue team arrives to find a 59-year-old man lying on the kitchen floor. You determine that he is unresponsive and notice that he is taking agonal breaths. What is the next step in your assessment and management of this patient?", choices: ["Apply the AED", "Check the patient's pulse", "Open the patient's airway", "Check for the presence of breathing"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which treatment or medication is appropriate for the treatment of a patient in asystole?", choices: ["Atropine", "Epinephrine", "Defibrillation", "Transcutaneous pacing"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An AED advises a shock for a pulseless patient lying in snow. What is the next action?", choices: ["Place a backboard beneath the patient and administer the shock", "Move the patient off the snow to bare ground and deliver the shock", "Remove any snow beneath the patient and then administer the shock", "Administer the shock immediately and continue as directed by the AED"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the minimum depth of chest compressions for an adult in cardiac arrest?", choices: ["1 inch", "1½ inches", "2 inches", "2½ inches"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient with pulseless ventricular tachycardia is defibrillated. What is the next action?", choices: ["Check for a pulse", "Administer an IV antiarrhythmic", "Start chest compressions at a rate of at least 100/min", "Repeat the unsynchronized shock, increasing to 200 J"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You have completed your first 2-minute period of CPR. You see an organized, nonshockable rhythm on the ECG monitor. What is the next action?", choices: ["Administer normal saline at 20 ml/kg", "Administer epinephrine at 1 mg/kg IV", "Obtain a blood pressure and oxygen saturation", "Have a team member attempt to palpate a carotid pulse"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Emergency medical responders are unable to obtain a peripheral IV for a patient in cardiac arrest. What is the next most preferred route for drug administration?", choices: ["Intraosseous (I0)", "Endotracheal (ET)", "Intramuscular (IM)", "Central venous access"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the appropriate rate of chest compressions for an adult in cardiac arrest?", choices: ["At least 150/min", "At least 100/min", "Approximately 100/min", "Approximately 120/min"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are receiving a radio report from an EMS team en route with a patient who may be having an acute stroke. The hospital CT scanner is not working at this time. What should you do in this situation?", choices: ["Contact the patient's family to see what they would prefer", "Have the EMS crew choose an appropriate patient disposition", "Accept the report and provide care within your present capability", "Divert the patient to a hospital 15 minutes away with CT capabilities"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 53-year-old man has shortness of breath, chest discomfort, and weakness. The patient's blood pressure is 102/59 mm Hg, the heart rate is 230/min, the respiratory rate is 16 breaths/min, and the pulse oximetry reading is 96%. The lead II ECG is displayed below. A patent peripheral IV is in place. What is the next action?", choices: ["Acquisition of a 12-lead ECG", "Vagal maneuvers", "Procedural sedation", "Immediate defibrillation"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_007.jpg" },
    { question: "A 49-year-old man has retrosternal chest pain radiating into the left arm. The patient is diaphoretic, with associated shortness of breath. The blood pressure is 130/88 mm Hg, the heart rate is 110/min, the respiratory rate is 22 breaths/min, and the pulse oximetry value is 95%. The patient's 12-lead ECG shows ST- segment elevation in the anterior leads. First responders administered 160 mg of aspirin, and there is a patent peripheral IV. The pain is described as an 8 on a scale of 1 to 10 and is unrelieved after 3 doses of nitroglycerin. What is the next action?", choices: ["Administer an additional dose of aspirin", "Administer an additional nitroglycerin tablet", "Administer high-flow oxygen via an oxygen mask", "Administer 2 to 4 mg of morphine by slow IV bolus"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 56-year-old man reports that he has palpitations but not chest pain or difficulty breathing. The blood pressure is 132/68 mm Hg, the pulse is 130/min and regular, the respiratory rate is 12 breaths/min, and the pulse oximetry reading is 95%. The lead II ECG displays a wide-complex tachycardia. What is the next action after establishing an IV and obtaining a 12-lead ECG?", choices: ["Administration of IV epinephrine", "Seeking expert consultation", "Procedural sedation", "Synchronized cardioversion"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "A postoperative patient in the ICU reports new chest pain. What actions have the highest priority?", choices: ["Administer an IV fluid bolus and obtain arterial blood gas", "Start dopamine at 2 mcg/kg per minute and obtain a chest x-ray", "Send blood to the laboratory for chemistry and cardiac enzymes", "Obtain a 12-lead ECG and administer aspirin if not contraindicated"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An 80-year-old woman presents to the emergency department with dizziness. She now states she is asymptomatic after walking around. Her blood pressure is 102/72 mm Hg. She is alert and oriented. Her lead II ECG is below. After you start an IV, what is the next action?", choices: ["Give an IV fluid bolus", "Give atropine and monitor for changes in mental status", "Start an epinephrine infusion and titrate to patient response", "Conduct a problem-focused history and physical examination"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_010.jpg" },
    { question: "What is the recommended oral dose of aspirin for patients suspected of having one of the acute coronary syndromes?", choices: ["2 to 4 mg", "80 to 120 mg", "160 to 325 mg", "400 to 600 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A responder is caring for a patient with a history of congestive heart failure. The patient is experiencing shortness of breath, a blood pressure of 68/50 mm Hg, and a heart rate of 190/min. The patient's lead II ECG is displayed below.", choices: ["Sinus tachycardia", "Perfusing ventricular tachycardia", "Stable supraventricular tachycardia", "Unstable supraventricular tachycardia"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_011.jpg" }, // 3 lines
    { question: "What is the most appropriate intervention for a rapidly deteriorating patient who has this lead II ECG?", choices: ["Valsalva maneuver", "Synchronized cardioversion", "Intravenous administration of adenosine", "Immediate unsynchronized countershock"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_008.jpg" },
    { question: "What is the purpose of a medical emergency team (MET) or rapid response team (RRT)?", choices: ["Providing online consultation to EMS personnel in the field", "Providing diagnostic consultation to emergency department patients", "Improving care for deteriorating patients admitted to critical care units", "Improving patient outcomes by identifying and treating early clinical deterioration"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended assisted ventilation rate for patients in respiratory arrest with a perfusing rhythm?", choices: ["4 to 6 breaths per minute", "10 to 12 breaths per minute", "14 to 16 breaths per minute", "16 to 18 breaths per minute"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are evaluating a 58-year-old man with chest pain. The blood pressure is 92/50 mm Hg, the heart rate is 92/min, the nonlabored respiratory rate is 14 breaths/min, and the pulse oximetry reading is 97%. What assessment step is most important now?", choices: ["PETCO2", "Chest x-ray", "laboratory testing", "Obtaining a 12-lead ECG"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Family members found a 45-year-old woman unresponsive in bed. The patient is unconscious and in respiratory arrest. What is the recommended initial airway management technique?", choices: ["Placing a nasopharyngeal airway", "Using an advanced airway device", "Performig a head tilt-chin lift maneuver", "Performing a jaw thrust without head extension"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient in respiratory distress and with a blood pressure of 70/50 mm Hg presents with the following lead II ECG rhythm:", choices: ["Defibrillation", "Amiodarone 150 mg IV", "Adenosine 6 mg IV push", "Synchronized cardioversion"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_013.jpg" },
    { question: "A patient has a witnessed loss of consciousness. The lead II ECG reveals this rhythm:<br><br>What is the appropriate next intervention?", choices: ["Defibrillation", "Adenosine 6 mg IV push", "Epinephrine 1 mg IV push", "Synchronized cardioversion"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_014.jpg" }, 
    { question: "What is the recommended energy dose for biphasic synchronized cardioversion of atrial fibrillation?", choices: ["50 to 75 J", "75 to 100 J", "120 to 200 J", "200 to 300 J"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is an acceptable method of selecting an appropriately sized oropharyngeal airway (OPA)?", choices: ["Estimate by using the size of the patient's thumb", "Estimate by using the formula Weight (kg)/8 + 2", "Measure from the thyroid cartilage to the angle of the mandible", "Measure from the corner of the mouth to the angle of the mandible"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is a contraindication to nitroglycerin administration in the management of acute coronary syndromes?", choices: ["Heart rate greater than 80/min", "Right ventricular infarction and dysfunction", "Phosphodiesterase inhibitor use more than 72 hours ago", "Systolic blood pressure greater than 100 mm Hg"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended initial intervention for managing hypotension in the immediate period after return of spontaneous circulation (ROSC)?", choices: ["Atropine bolus", "Administration of IV or IO fluid bolus", "Placement of a central line to monitor pulmonary wedge pressure", "Phenylephrine hydrochloride titrated to keep systolic blood pressure >100 mm Hg"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Which is an appropriate and important intervention to perform for a patient who achieves ROSC during an out-of-hospital resuscitation?", choices: ["Initiate an antiarrhythmic infusion", "Transport the patient to a facility capable of performing PCI", "Replace any supraglottic airway with an endotracheal tube", "Place a central venous catheter for hemodynamic monitoring"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the immediate danger of excessive ventilation during the post-cardiac arrest period for patients who achieve ROSC?", choices: ["Oxygen toxicity", "Pulmonary hypertension", "Decreased cerebral blood flow", "Ventilation/perfusion mismatch"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended target temperature range for achieving therapeutic hypothermia after cardiac arrest?", choices: ["26°C to 28°C", "29°C to 31°C", "32°C to 34°C", "35°C to 37°C"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended duration of therapeutic hypothermia after reaching the target temperature?", choices: ["0 to 12 hours", "12 to 24 hours", "24 to 36 hours", "36 to 48 hours"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the danger of routinely administering high concentrations of oxygen during the post- cardiac arrest period for patients who achieve ROSC?", choices: ["Potential oxygen toxicity", "Adverse hemodynamic effects", "Decrease in cerebral blood flow", "Increased intrathoracic pressure"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended dose of epinephrine for the treatment of hypotension in a post- cardiac arrest patient who achieves ROSC?", choices: ["2 to 10 mg/min IV infusion", "0.1 to 0.5 mcg/kg per minute IV infusion", "1 mg IV push every 3 to 5 minutes", "10 mg IV push every 3 to 5 minutes"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 3600; // 60 minutes in seconds
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