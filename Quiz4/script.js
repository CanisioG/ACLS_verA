const questions = [
    { question: "You find an unresponsive patient who is not breathing. After activating the emergency response system, you determine that there is no pulse. What is your next action?", choices: ["Open the airway with a head tilt-chin lift.", "Administer epinephrine at a dose of 1 mg/kg", "Deliver 2 rescue breaths each over 1 second.", "Start chest compressions at a rate of at least 100/min."], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are evaluating a 58-year-old man with chest pain. The blood pressure is 92/50 mm Hg, the heart rate is 92/min, the nonlabored respiratory rate is 14 breaths/min, and the pulse oximetry reading is 97%. What assessment step is most important now?", choices: ["PETCO2", "Chest x-ray", "Laboratory testing", "Obtaining a 12-lead ECG"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the preferred method of access for epinephrine administration during cardiac arrest in most patients?", choices: ["lntraosseous", "Endotracheal", "Central intravenous", "Peripheral intravenous"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An activated AED does not promptly analyze the rhythm. What is your next action?", choices: ["Begin chest compressions", "Discontinue the resuscitation attempt", "Check all AED connections and reanalyze", "Rotate AED electrodes to an alternate position"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You have completed 2 minutes of CPR. The ECG monitor displays the lead II rhythm below, and the patient has no pulse. Another member of your team resumes chest compressions, and an IV is in place. What management step is your next priority?", choices: ["Give 0.5 mg of atropine", "Insert an advanced airway", "Administer 1 mg of epinephrine", "Administer a dopamine infusion"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_003.jpg" }, 
    { question: "During a pause in CPR, you see this lead II ECG rhythm on the monitor. The patient has no pulse. What is the next action?", choices: ["Establish vascular access", " Obtain the patient's history", "Resume chest compressions", "Terminate the resuscitative effort"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_004.jpg" },
    { question: "What is a common but sometimes fatal mistake in cardiac arrest management?", choices: ["Failure to obtain vascular access", "Prolonged periods of no ventilations", "Failure to perform endotracheal intubation", "Prolonged interruptions in chest compressions"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which action is a component of high-quality chest compressions?", choices: ["Allowing complete chest recoil", "Chest compressions without ventilation", "60 to 100 compressions per minute with a 15:2 ratio", "Uninterrupted compressions at a depth of 1½ inches"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which action increases the chance of successful conversion of ventricular fibrillation?", choices: ["Pausing chest compressions immediately after a defibrillation attempt", "Administering 4 quick ventilations immediately before a defibrillation attempt", "Using manual defibrillator paddles with light pressure against the chest", "Providing quality compressions immediately before a defibrillation attempt"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which situation BEST describes pulseless electrical activity", choices: ["Asystole without a pulse", "Sinus rhythm without a pulse", "Torsades de pointes with a pulse", "Ventricular tachycardia with a pulse"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the BEST strategy for performing high-quality CPR on a patient with an advanced airway in place?", choices: ["Provide compressions and ventilations with a 15:2 ratio", "Provide compressions and ventilations with a 30:2 ratio", "Provide a single ventilation every 6 seconds during the compression pause", "Provide continuous chest compressions without pauses and 10 ventilations per minute"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Three minutes after witnessing a cardiac arrest, one member of your team inserts an endotracheal tube while another performs continuous chest compressions. During subsequent ventilation, you notice the presence of a waveform on the capnography screen and a PETC02 level of 8 mm Hg. What is the significance of this finding?", choices: ["Chest compressions may not be effective", "The endotracheal tube is no longer in the trachea", "The patient meets the criteria for termination of efforts", "The team is ventilating the patient too often (hyperventilation)"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "The use of quantitative capnography in intubated patients", choices: ["allows for monitoring of CPR quality.", "measures oxygen levels at the alveoli level", "determines inspired carbon dioxide relating to cardiac output", "detects electrolyte abnormalities early in code management"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "For the past 25 minutes, an EMS crew has attempted resuscitation of a patient who originally presented in ventricular fibrillation. After the first shock, the ECG screen displayed asystole, which has persisted despite 2 doses of epinephrine, a fluid bolus, and high-quality CPR. What is your next treatment?", choices: ["Apply a transcutaneous pacemaker.", "Administer 1 mg of intravenous atropine", "Administer 40 units of intravenous vasopressin", "Consider terminating resuscitative efforts after consulting medical control"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is a safe and effective practice within the defibrillation sequence?", choices: ["Stop chest compressions as you charge the defibrillator", "Be sure oxygen is not blowing over the patient's chest during the shock", "Assess for the presence of a pulse immediately after the shock", "Commandingly announce ''clear'' after you deliver the defibrillation shock"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "During your assessment, your patient suddenly loses consciousness. After calling for help and determining that the patient is not breathing, you are unsure whether the patient has a pulse. What is your next action?", choices: ["Leave and get an AED", "Begin chest compressions", "Deliver 2 quick ventilations", "Check the patient's mouth for the presence of a foreign body"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "What is an advantage of using hands-free defibrillation pads instead of defibrillation paddles?", choices: ["Hands-free pads deliver more energy than paddles", "Hands-free pads increase electrical arc", "Hands-free pads allow for a more rapid defibrillation", "Hands-free pads have universal adaptors that can work with any machine"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What action is recommended to help minimize interruptions in chest compressions during CPR?", choices: ["Continue CPR while charging the defibrillator", "Perform pulse checks immediately after defibrillation", "Administer IV medications only when delivering breaths", "Continue to use an AED even after the arrival of a manual defibrillator"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which action is included in the BLS Survey?", choices: ["Early defibrillation", "Advanced airway management", "Rapid medication administration", "Preparation for therapeutic hypothermia"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which drug and dose are recommended for the management of a patient in refractory ventricular fibrillation?", choices: ["Atropine 2 mg", " Amiodarone 300 mg", "Vasopressin 1 mg/kg", "Dopamine 2 mg/kg per minute"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "What is the appropriate interval for an interruption in chest compressions?", choices: ["10 seconds or less", "10 to 15 seconds", "15 to 20 seconds", "Interruptions are never acceptable"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is a sign of effective CPR?", choices: ["PETC02 ≥ 10 mm Hg", "Measured urine output of 1 ml/kg per hour", "Patient temperature >32°C (89.6°F)", "Diastolic intra-arterial pressure <20 mm Hg"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the primary purpose of a medical emergency team (MET) or rapid response team (RRT)?", choices: ["Identifying and treating early clinical deterioration", "Rapidly intervening with patients admitted through emergency department triage", "Responding to patients during a disaster or multiple-patient situation", "Responding to patients after activation of the emergency response system"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which action improves the quality of chest compressions delivered during a resuscitation attempt?", choices: ["Observe ECG rhythm to determine depth of compressions", "Do not allow the chest to fully recoil with each compression", "Compress the upper half of the sternum at a rate of 150 compressions per minute", "Switch providers about every 2 minutes or every 5 compression cycles."], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the appropriate ventilation strategy for an adult in respiratory arrest with a pulse rate of 80/min?", choices: ["1 breath every 3 to 4 seconds", " 1 breath every 5 to 6 seconds", "2 breaths every 5 to 6 seconds", "2 breaths every 6 to 8 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient presents to the emergency department with new onset of dizziness and fatigue. On examination, the patient's heart rate is 35/min, the blood pressure is 70/50 mm Hg, the respiratory rate is 22 breaths/min, and the oxygen saturation is 95%. What is the appropriate first medication?", choices: ["Atropine 0.5 mg", "Oxygen 12 to 15 L/min", "Epinephrine 0.5 mg", "Aspirin 160 mg chewed"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient presents to the emergency department with dizziness and shortness of breath with a sinus bradycardia of 40/min. The initial atropine dose was ineffective, and your monitor/defibrillator is not equipped with a transcutaneous pacemaker. What is the appropriate dose of dopamine for this patient?", choices: ["2 to 10 mg/min", "2 to 10 mcg/kg per minute", "10 to 15 mg/min", "10 to 15 mcg/kg per minute"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient has sudden onset of dizziness. The patient's heart rate is 180/min, blood pressure is 110/70 mm Hg, respiratory rate is 18 breaths/min, and pulse oximetry reading is 98% on room air. The lead II ECG is shown below:<br><br>What is the next appropriate intervention?", choices: ["Vagal maneuvers", "Metoprolol 5 mg IV", "Adenosine 6 mg IV", "Normal saline 1 L bolus"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_009.jpg" },
    { question: "A monitored patient in the ICU developed a sudden onset of narrow-complex tachycardia at a rate of 220/min. The patient's blood pressure is 128/58 mm Hg, the PETC02 is 38 mm Hg, and the pulse oximetry reading is 98%. There is vascular access at the left internal jugular vein, and the patient has not been given any vasoactive drugs. A 12-lead ECG confirms a supraventricular tachycardia with no evidence of ischemia or infarction. The heart rate has not responded to vagal maneuvers. What is the next recommended intervention?", choices: ["Adenosine 6 mg IV push", "Amiodarone 300 mg IV push", "Synchronized cardioversion at 50 J", "Synchronized cardioversion at 200 J"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "You are receiving a radio report from an EMS team en route with a patient who may be having an acute stroke. The hospital CT scanner is not working at this time. What should you do in this situation?", choices: ["Contact the patient's family to see what they would prefer", "Have the EMS crew choose an appropriate patient disposition", "Accept the report and provide care within your present capability", "Divert the patient to a hospital 15 minutes away with CT capabilities"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Choose an appropriate indication to stop or withhold resuscitative efforts.", choices: ["Arrest not witnessed", "Evidence of rigor mortis", "Patient age greater than 85 years", "No return of spontaneous circulation after 10 minutes of CPR"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 49-year-old woman arrives in the emergency department with persistent epigastric pain. She had been taking oral antacids for the past 6 hours because she thought she had heartburn. The initial blood pressure is 118/72 mm Hg, the heart rate is 92/min and regular, the nonlabored respiratory rate is 14 breaths/min, and the pulse oximetry reading is 96%. Which is the most appropriate intervention to perform next?", choices: ["Administer oxygen", "Obtain a 12-lead ECG", "Evaluate for fibrinolytic eligibility", "Administer sublingual nitroglycerin"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient in respiratory failure becomes apneic but continues to have a strong pulse. The heart rate is dropping rapidly and now shows a sinus bradycardia at a rate of 30/min. What intervention has the highest priority?", choices: ["Atropine IV push", "Epinephrine IV infusion", "Application of a transcutaneous pacemaker", "Simple airway maneuvers and assisted ventilation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the appropriate procedure for endotracheal tube suctioning after the appropriate catheter is selected?", choices: ["Suction during insertion but for no longer than 30 seconds", "Suction the mouth and nose for no longer than 30 seconds", "Suction during withdrawal but for no longer than 10 seconds", "Hyperventilate before catheter insertion, and then suction during withdrawal"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "While treating a patient with dizziness, a blood pressure of 68/30 mm Hg, and cool, clammy skin, you see this lead II ECG rhythm:<br><br>What is the most appropriate first intervention?", choices: ["Aspirin", "Atropine", "Lidocaine", "Nitroglycerin"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Image_012.jpg" },
    { question: "A 68-year-old woman experienced a sudden onset of right arm weakness. EMS personnel measure a blood pressure of 140/90 mm Hg, a heart rate of 78/min, a nonlabored respiratory rate of 14 breaths/min, and a pulse oximetry reading of 97%. The lead II ECG displays sinus rhythm. What is the most appropriate action for the EMS team to perform next?", choices: ["12-lead ECG assessment", "Administration of 100% supplementary oxygen", "Cincinnati Prehospital Stroke Scale assessment", "Administration of a low-dose aspirin"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the proper ventilation rate for a patient in cardiac arrest who has an advanced airway in place?EMS is transporting a patient with a positive prehospital stroke assessment. Upon arrival in the emergency department, the initial blood pressure is 138/78 mm Hg, the pulse rate is 80/min, the respiratory rate is 12 breaths/min, and the pulse oximetry reading is 95% on room air. The lead II ECG displays sinus rhythm. The blood glucose level is within normal limits. What intervention should you perform next?", choices: ["Head CT scan", "Transfer to the stroke unit", "Immediate rtPA administration", "Administration of 100% oxygen"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the proper ventilation rate for a patient in cardiac arrest who has an advanced airway in place?", choices: ["4 to 6 breaths per minute", "8 to 10 breaths per minute", "12 to 14 breaths per minute", "16 to 18 breaths per minute"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 62-year-old man in the emergency department says that his heart is beating fast. He says he has no chest pain or shortness of breath. The blood pressure is 142/98 mm Hg, the pulse is 200/min, the respiratory rate is 14 breaths/min, and pulse oximetry is 95% on room air. What intervention should you perform next?", choices: ["Obtain a 12-lead ECG", "Give 150 mg of amiodarone", "Administer 160 mg of aspirin", "Administer 6 mg of adenosine"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are evaluating a 48-year-old man with crushing substernal chest pain. The patient is pale, diaphoretic, cool to the touch, and slow to respond to your questions. The blood pressure is 58/32 mm Hg, the heart rate is 190/min, the respiratory rate is 18 breaths/min, and the pulse oximeter is unable to obtain a reading because there is no radial pulse. The lead II ECG displays a regular wide-complex tachycardia. What intervention should you perform next?", choices: ["Procedural sedation", "12-lead ECG", "Amiodarone administration", "Synchronized cardioversion"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the initial priority for an unconscious patient with any tachycardia on the monitor?", choices: ["Review the patient's home medications", "Evaluate the breath sounds", "Determine whether pulses are present", "Administer sedative drugs"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which rhythm requires synchronized cardioversion?", choices: ["Unstable supraventricular tachycardia", "Atrial fibrillation", "Sinus tachycardia", "NSR on monitor but no pulse"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended second dose of adenosine for patients in refractory but stable narrow-complex tachycardia?", choices: ["3 mg", "6 mg", "9 mg", "12 mg"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the usual post-cardiac arrest target range for PETCO2 when ventilating a patient who achieves return of spontaneous circulation (ROSC)?", choices: ["30 to 35 mm Hg", "35 to 40 mm Hg", "40 to 45 mm Hg", "45 to 50 mm Hg"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "Which condition is a contraindication to therapeutic hypothermia during the post-cardiac arrest period for patients who achieve return of spontaneous circulation ROSC?", choices: [" Initial rhythm of asystole", "Responding to verbal commands", "Patient age greater than 60 years", "Desire to provide coronary reperfusion (eg, PCI)"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the potential danger of using ties that pass circumferentially around the patient's neck when securing an advanced airway?", choices: ["May interfere with effective ventilation", "Places the patient's cervical spine at risk", "Obstruction of venous return from the brain", "Does not adequately secure the airway device"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the most reliable method of confirming and monitoring correct placement of an endotracheal tube?", choices: ["5-point auscultation", "Colorimetric capnography", "Continuous waveform capnography", "Use of esophageal detection devices"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended IV fluid (normal saline or Ringer's lactate) bolus dose for a patient who achieves ROSC but is hypotensive during the post-cardiac arrest period?", choices: ["250 to 500 ml", "500 to 1000 ml", "1 to 2 L", "2 to 3 L"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, // 3 lines
    { question: "What is the minimum systolic blood pressure one should attempt to achieve with fluid, inotropic, or vasopressor administration in a hypotensive post-cardiac arrest patient who achieves ROSC?", choices: ["90 mm Hg", "85 mm Hg", "80 mm Hg", "75 mm Hg"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the first treatment priority for a patient who achieves ROSC?", choices: ["Coronary reperfusion", "Therapeutic hypothermia", "Maintaining blood glucose <185 mg/dl", "Optimizing ventilation and oxygenation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }
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
