const questions = [
    { question: "You are caring for a patient with a suspected stroke whose symptoms started 2 hours ago. The CT was normal with no sign of hemorrhage. The patient does not have any contraindications to fibrinolytic therapy. Which treatment is best?", choices: ["Give fibrinolytic therapy as soon as possible and consider endovascular therapy", "Hold fibrinolytic therapy for 24 hours", "Order an echocardiogram before fibrinolytic administration", "Wail for the results of the MRI"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient is respiratory distress, 70 /50, presents with lead 2 ECG shown.appropriate treatment?<br>", choices: ["Perfoming defibrillation", "Perform synchronized cardioversion", "Administering adenosine 6 mg IV push", "Performing vagal maneuvers"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Performingsynchronizedcardioversion.png" },
    { question: "For STEMI patients, which best describes the recommended maximum goal tine for first medical contact-to-balloon inflation time for percutaneous coronary intervention?", choices: ["150 mins", "180 mins", "120 mins", "90 mins"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the recommended oral dose of ASA for a pt w / suspected ACS?", choices: ["81 mg", "325-650 mg", "160-325 mg", "40 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>The patient has return of spontaneous circulation and is not able to follow commands. Which postcardiac arrest care intervention do you choose for this patient?", choices: ["Extubate", "Check the glucose level", "Administer epinephrine", "Initiate targeted temperature management"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Which would you have done first if the patient had not gone into ventricular fibrillation?", choices: ["Given atropine 1 mg", "Established IV access", "Obtained a 12-lead ECG", "Performed synchronized cardioversion"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>In addition to defibrillation, whioh intervention should be performed immediately?", choices: ["Chest compression", "Vasoactive medication administration", "Vascular access", "Advanced airway"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Despite 2 defibrillalion attempts, the patient remains in ventricular fibrillation. Which drug and dose should you administer first to this patient?", choices: ["Lidocaine 1 mg/kg", "Amiodarone 300 mg", "Epinephrine 1 mg", "atropine 1 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Despite the drug provided above and continued CPR, the patient remains in ventricular fibriflation. Which other drug should be administered next?", choices: ["Atropine 1 mg", "Magnesium sulfate 1 g", "Lidocaine 1 to 1.5 mg/kg", "Epinephrine 1 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "During post-cardiac arrest care, which is the recommended duration of targeted temperature management after reaching the correct temperature range?", choices: ["At least 24 hours", "At least 8 hours", "At least 36 hours", "At least 48 hours"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended compression rate for performing CPR?", choices: ["40-60 /min", "60-80 /min", "80-100 /min", "100-120 /min"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is an effect of excessive ventilation?", choices: ["Decreased cardiac output", "Decreased intrathoracic pressure", "Increased perfusion pressures", "Increased venous return"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the recommended range from which a temperature should be selected and maintained constantly to achieve targeted temperature management after cardiac arrest?", choices: ["32°C to 36°C", "25°C to 28°C", "35°C to 37°C", "29°C to 31°C"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Three minutes into a cardiac arrest resuscitation attempt, one member of your team inserts an endotracheal tube while another performs chest compressions. Capnography shows a persistent waveform and a PETC02 of 8 mm Hg. What is the significance of this finding? ", choices: ["Chest compressions may not be effective", "The endotracheal tube is in the esophagus", "The team is ventilating the patient too often (hyperventilation)", "lhe patient meets the criteria for termination of efforts"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Your patient is in cardiac arrest and has been intubated. To assess CPR quality, which should you do?", choices: ["Check the patient's pulse", "Obtain a 12-lead ECG", "Obtain a chest x-ray", "Monrtor the patient's PETCO2"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "In addition to clinical assessment, which is the most reliable method to confim, and monitor correct placement of an endotracheal tube?", choices: ["Continuous waveform capnogrephy", "Arterial blood gases", "Hemoglobin levels", "Chest radiography"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>On the basis of this patient's initial presentation, which condition do you suspect led to the cardiac arrest?", choices: ["Acute heart failure", "Acute coronary syndrome", "Supraventricular tachycardia with ischemic chest pain", "Acute ischemic stroke"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the primary purpose of a medical emergency team or rapid response team?", choices: ["Providing diagnostic consultation to emergency department patients", "Providing online consultation to EMS personnel in the field", "Improving patient outcomes by identifying and treating early clinical deterioration", "Improving care for patients admitted to critical care units"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of these tests should be performed for a patient with suspected stroke as soon as possible but no more than 20 minutes after hospital arrival?", choices: ["Coagulation studies", "Cardiac enzymes", "Noncontrast CT scan of the head", "12-Lead ECG"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following signs is a likely indicator of cardiac arrest in an unresponsive patient?", choices: ["Slow, weak pulse rate", "Cyanosis", "Irregular, weak pulse rate", "Agonal gasps"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A responder is caring for a patient with a history of congestive heart failure. The patient is experiencing shortness of breath, a blood pressure of 68/50 mm Hg, and a heart rate of 190/min. The patient's lead II ECG is displayed here. Which best characterizes this patient's rhythm?", choices: ["Sinus tachycardia", "Perfusing ventrfcular tachycardia", "Unstable supraventricular tachycardia", "Stable supraventricular tachycardia"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Unstablesupraventriculartachycardia.png" }, 
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but appearing ill, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>On the basis of this patient's initial assessment, which ACLS algorithm should you follow?", choices: ["Adult Tachycardia With a Pulse", "Adult Cardiac Arrest", "Acute Coronary Syndromes", "Adult Suspected Stroke"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but appearing ill, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>After your initial assessment of this patient, which intervention should be performed next?", choices: ["Endoiracheal intubation", "Immediate defibrmation", "Synchronized cardloversion", "Administration of amiodarone 150 mg IM"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "Which best describes an action taken by the Team Leader to avoid inefficiencies during a resuscitation attempt?", choices: ["Assign most tasks to the more experienced team members", "Perform the most complicated tasks", "Clearly delegate tasks", "Assign the same tasks to more than one team member"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is an acceptable method of seleciing an appropriately sized oropharyngeal aiiway?", choices: ["Measure from the corner of the mouth to the angle of the mandible", "Measure from the thyroid cartilage to the bottom of the earlobe", "Estimate by using the formula weight (kg)/8 + 2", "Estimaie by using the size of the paiient's finger"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "You are evaluating a 58-year-old man with chest discomfort. His blood pressure is 92/50 mm Hg, his heart rate is 92/min, his nonlabored respiratory rate is 14 breaths per minute, and his pulse oximetry reading is 97%. Which assessment step is most important now?", choices: ["Evaluating the PETC02 reading", "Requesting a chest x-ray", "Obtaining a 12-lead ECG", "Requesting laboratory testing"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient in respiratory distress and with BP of 70 /50 mmHg presents with the lead II ECG rhythm in Ventricular tachycardia. Which is the appropriate treatment?", choices: ["Administering adenosine 6 mg IV push", "Perfoming synchronized cardloversion", "Performing vagal maneuvers", "Perfoming defibrillation"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Performingsynchronizedcardioversion.png" },
    { question: "During post-cardiac arrest care, which is the recommended duration of targeted temperature management after reaching the correct temperature range?", choices: ["At least 8 hours", "At least 24 hours", "At least 36 hours", "At least 48 hours"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Three minutes into a cardiac arrest resuscitation attempt, one member of your team inserts an endotracheal tube while another performs chest compressions. Capnography shows a persistent waveform and a PETC02 of 8 mm Hg. What is the significance of this finding?", choices: ["Chest compressions may not be effective", "The endotracheal tube is in the esophagus", "lhe patient meets the criteria for termination of efforts", "The team is ventilating the patient too often (hyperventilation)"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the recommended oral dose of aspirin for a patient with a suspected acute coronary syndrome?", choices: ["40 mg", "81 mg", "162 to 325 mg", "350 to 650 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A team member is unable to perform an assigned task because it is beyond the team member's scope of practice. Which action should the team member take?", choices: ["Ask for a new task or role", "Assign it to another team member", "Do it anyway", "Seek expert advice"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "As the team leader, when do you tell the chest compressions to switch?", choices: ["Only when they tell you that they are fatigued", "About every 2 minutes", "About every 5 minutes", "About every 7 minutes"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are performing chest compressions during an adult resuscitation attempt. Which rate should you use to perform the compressions?", choices: ["Less than 80/min", "80 to 90/min", "100 to 120/min", "More than 120/min"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient is being resuscitated in a very noisy environment. A team member thinks he heard an order for 500 mg of amiodarone IV. Which is the best response from the team member?", choices: ["OK", "Are you sure?", "Amiodarone 500 mg IV has been given", "I have an order to give 500 mg of amiodarone IV. Is this correct?"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A patient in stable narrow-complex tachycardia with a peripheral IV in place is refractory to the first dose of adenosine. Which dose would you administer next?", choices: ["3 mg", "12 mg", "20 mg", "40 mg"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of these tests should be performed for a patient with suspected stroke as soon as possible but no more than 20 minutes after hospital arrival?", choices: ["12-lead ECG", "Cardiac Enzymes", "Coagulation studies", "Noncontrast CT scan of the head"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the minimum systolic blood pressure one should attempt to achieve with fluid administration or vasoactive agents in a hypotensive post-cardiac arrest patient who achieves return of spontaneous circulation?", choices: ["75 mmHg", "80 mmHg", "85 mmHg", "90 mmHg"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>On the basis of this patient's initial presentation, which condition do you suspect led to the cardiac arrest?", choices: ["Acute coronary syndrome", "Acute heart failure", "Acute ischemic stroke", "Supraventricular tachycardia with ischemic chest pain"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>In addition to defibrillation, which intervention should be performed immediately?", choices: ["Advanced airway insertion", "Vasoactive medication administration", "Chest compressions", "Vascular access"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Despite 2 defibrillalion attempts, the patient remains in ventricular fibrillation. Which drug and dose should you administer first to this patient?", choices: ["Epinephrine 1 mg", "Amiodarone 300 mg", "Lidocaine 1 mg/kg", "Atropine 1 mg"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Despite the drug provided above and continued CPR, the patient remains in ventricular fibrillation. Which other drug should be administered next?", choices: ["Epinephrine 1 mg", "Atropine 1 mg", "Magnesium Sulfate 1 g", "Lidocaine 1 to 1.5 mg/kg ; Amiodarone 300 mg"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>The patient has return of spontaneous circulation and is not able to follow commands. Which postcardiac arrest care intervention do you choose for this patient?", choices: ["Initiate targeted temperature management", "Check the glucose level", "Administer epinephrine", "Extubate"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths per minute, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Which would you have done first if the patient had not gone into ventricular fibrillation?", choices: ["Established IV access", "Obtained a 12-lead ECG", "Given atropine 1 mg", "Performed synchronized cardioversion"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but appearing ill, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>The patient's pulse oximeter shows a reading of 84% on room air. Which initial action do you take?", choices: ["Perform bag-mask ventilation", "Intubate the patient", "Apply oxygen", "Check the pulse oximeter probe"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but appearing ill, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>After your initial assessment of this patient, which intervention should be performed next?", choices: ["Synchronized cardioversion", "Administration of amiodarone 150 mg IM", "Immediate defibrillation", "Endotracheal intubation"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" }, 
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but appearing ill, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>If the patient became apneic and pulseless but the rhythm remained the same, which would take the highest priority?", choices: ["Administer amiodarone 300 mg", "Administer atropine 0.5 mg", "Insert an advanced airway", "Perform defibrillation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but appearing ill, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>On the basis of this patient's initial assessment, which ACLS algorithm should you follow?", choices: ["Adult Tachycardia With a Pulse", "Adult Cardiac Arrest", "Acute Coronary Syndromes", "Adult Suspected Stroke"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "Which best describes this rhythm?", choices: ["Ventricular fibrillation", "Monomorphic ventricular tachycardia", "Polymorphic ventricular tachycardia", "Supraventriculartachycardia"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A patient in stable narrow-complex tachycardia with a peripheral IV in place is refractory to the first dose of adenosine. Which dose would you administer next?", choices: ["40 mg", "20 mg", "12 mg", "3 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "You instruct a team member to give 1 mg atropine IV. Which response is an example of closed-loop communication?", choices: ["I'll draw up 1 mg of atropine", "I'll give it in a few minutes.", "Are you sure that is what you want given?", "OK"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
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