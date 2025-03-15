const questions = [
    { question: "A 48-year-old man became unresponsive shortly after presenting to you with nausea and generalized chest discomfort. You observe gasping breathing and are unsure if you feel a pulse. You should know", choices: ["Call for help and begin chest compressions.", "Wait until breathing stops and then check again for a pulse.", "Begin chest compressions only if you are certain a pulse is absent.", "Observe the patient for 2 minutes, then reassess his breathing and pulse"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is the most likely complication of inferior wall myocardial infarction (MI)?", choices: ["Cardiogenic shock", "Ventricular rupture", "Bradydysrhythmias", "Tachydysrhythmias"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A 52-year-old man is complaining of palpitations that came on suddenly after walking up a short flight of stairs. His symptoms have been present for about 20 minutes. He denies chest pain and is not short of breath. His skin is warm and dry; breath sounds are clear. His blood pressure (BP) is 144/88 millimeters of mercury (mm Hg), his heart rate is 186 beats per minute (beats/min), and his ventilatory rate is 18 breaths/min. The cardiac monitor reveals the rhythm here. Vascular access has been established. Which of the following medications is most appropriate in this situation?", choices: ["Dopamine or sotalol", "Furosemide or atropine", "Nitroglycerin (NTG) or morphine", "Procainamide or amiodarone"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Amiodarone.png" },
    { question: "Our general impression of a 78-year-old woman reveals that her eyes are closed, she is not moving, you can see no rise and fall of her chest or abdomen, and her skin color is pale. When you arrive at the patient’s side, you confirm that she is unresponsive. Your best action in this situation will be to:", choices: ["Open her airway and give two breaths", "Apply an automated external defibrillator (AED)", "Assess breathing and determine whether she has a pulse", "Prepare the necessary equipment to insert an advanced airway"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 60-year-old woman has suffered a cardiac arrest. A health care professional trained in endotracheal intubation has intubated the patient. Which of the following findings would indicate inadvertent esophageal intubation?", choices: ["Jugular vein distention", "Subcutaneous emphysema", "Gurgling sounds heard over the epigastrium", "Breath sounds heard on only one side of the chest"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Hypotension (ie, a systolic BP of less than 90 mm Hg) after the return of spontaneous circulation (ROSC) may necessitate the use of:", choices: ["Fluid boluses and isoproterenol", "Procainamide, epinephrine, or dopamine", "Epinephrine, dopamine, or norepinephrine", "Fluid boluses, procainamide, and isoproterenol"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is incorrect with regard to a postevent debriefing?", choices: ["The facilitator should use open-ended questions to encourage discussion", "Team members are encouraged to identify lessons learned in a nonpunitive environment", "The gather phase of the debriefing includes a comparison of the team’s actions with current resuscitation algorithms", "Team members are given an opportunity to reflect on their performance and how their performance can be improved"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Assuming there are no contraindications, which of the following can be performed as an initial intervention for a stable but symptomatic patient with the rhythm shown?", choices: ["Defibrillation", "Vagal maneuvers", "Administration of intravenous (IV) diltiazem", "Administration of IV epinephrine"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/VagalManeuver.png" }, 
    { question: "A 62-year-old man received IV tissue plasminogen activator (tPA) 2 hours ago after a diagnosis of acute ischemic stroke. While assessing the patient’s vital signs, you observe swelling of the patient’s lips and tongue. Your best course of action will be to:", choices: ["Administer aspirin and IV heparin", "Administer IV antihistamines and steroids", "Observe and reassess the patient every 15 minutes", "Request an emergent brain computed tomography scan"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "During a cardiac arrest, multiple attempts to establish a peripheral IV have proved unsuccessful. Your best course of action at this time will be to:", choices: ["Insert a central line", "Attempt intraosseous access", "Discontinue resuscitation efforts", "Continue peripheral IV attempts until successful"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Synchronized cardioversion:", choices: ["Is used only for atrial dysrhythmias", "Delivers a shock during ventricular depolarization", "Delivers a shock between the peak and end of the T wave", "Is used only for rhythms with a ventricular rate of less than 60 beats/min"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An 84-year-old man presents with an acute onset of altered mental status. The cardiac monitor shows the rhythm here. The patient’s BP is 58/30 mm Hg andhis ventilatory rate is 14 breaths/min. His skin is cool, moist, and pale. His blood oxygen saturation level (SpO2) on room air is 95%. An IV has been established.<br><br>On the basis of the information provided, your best course of action will be to", choices: ["Prepare for transcutaneous pacing", "Give amiodarone 300 mg IV push", "Give epinephrine 1 mg IV bolus and reassess", "Observe the patient and monitor for signs of deterioration"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Preparefortranscutaneouspacing.png" }, 
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>Which of the following actions performed at the scene is most likely to reduce subsequent treatment delays at the hospital?", choices: ["Giving aspirin", "Obtaining a 12-lead electrocardiogram (ECG)", "Assessing vital signs and oxygen saturation", "Assessing the patient’s degree of discomfort"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>The patient rates his discomfort 9/10. His BP is 126/72 mm Hg and ventilations 14 breaths/min. His SpO2 on room air is 95%. The cardiac monitor shows a sinus rhythm at 60 beats/min. Immediate management of this patient should include", choices: ["Giving Aspirin and Nitroglycerin", "Establishing IV access and giving aspirin", "Administering oxygen and establishing IV access", "Administering oxygen and obtaining a targeted history"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>Current guidelines recommend obtaining an initial 12-lead ECG within ____ of patient contact when an acute coronary syndrome (ACS) is suspected.", choices: ["10 minutes", "30 minutes", "45 minutes", "60 minutes"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>When the patient’s 12-lead ECG is reviewed, the results should be used to classify the patient into one of three groups. Which of the following correctly reflects these categories?", choices: ["ST elevation (STE), normal ECG, Q waves", "Q waves, ST depression (STD), inconclusive ECG", "STD, normal ECG, inconclusive ECG", "STE, STD, normal or nondiagnostic ECG"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>12-lead ECG has been obtained", choices: ["STE in leads II, III, and aVF", "STD in leads I, II, III, and aVL", "STE in leads I, aVL, and V2 to V6", "STD in leads V1, V4, V5, and V6"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/STEinleads.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>12-lead ECG has been obtained<br><br>To be considered significant, ECG findings, such as STE or STD, need to be viewed in two or more contiguous leads. Which of the following are contiguous leads?", choices: ["V1, V4, and V5", "V2, V3, and V4", "III, aVF, and V1", "I, II, III, and aVL"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/STEinleads.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>12-lead ECG has been obtained<br><br>The patient’s 12-lead ECG findings suggest a(n) _____ MI", choices: ["Posterior", "Inferolateral", "Anterolateral", "Non–ST elevation"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/STEinleads.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>12-lead ECG has been obtained<br><br>On the basis of the patient’s 12-lead ECG findings", choices: ["The patient should be classified as having a nondiagnostic ECG and discharged with follow-up instructions", "The patient should be classified as having an ST elevation MI (STEMI) and should be evaluated for immediate reperfusion therapy", "The patient should be classified as having a normal ECG; serial ECGs should be obtained at 30-minute intervals to detect the development of ST elevation", "The patient should be classified as having a non–ST elevation ACS (NSTE-ACS) and should be admitted to a monitored bed for further evaluation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/STEinleads.png" }, 
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>Vascular access has been established. The patient’s BP is 130/70 mm Hg, his pulse is 60 beats/min, and his ventilatory rate is 14 breaths/min. Assuming there are no contraindications for any of the following medications, which of the following would be appropriate for this patient at this time?", choices: ["Aspirin and NTG", "Aspirin and a nonsteroidal antiinflammatory drug (NSAID)", "An oral beta-blocker and an NSAID", "Aspirin and a calcium channel blocker (CCB)"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>NTG has been ordered for administration to this patient. NTG", choices: ["Is contraindicated in hypotensive patients", "Should be administered via the IV route for maximum benefit", "Should be used with caution in patients with anterior infarction", "Should be given every 15 to 20 minutes until chest discomfort is relieved"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Paramedics are on the scene with a 55-year-old man who is complaining of severe chest discomfort. He describes his discomfort as a “heavy pressure” in the middle of his chest that has been present for about 1 hour.<br><br>The patient’s chest discomfort was unrelieved after the maximum recommended dosage of NTG tablets. Morphine sulfate was ordered and a 4 mg dose was given IV. The patient’s BP is now 80/60 mm Hg and his skin is cool, moist, and pale. His breath sounds are clear. You should", choices: ["Prepare a lidocaine infusion at 1 to 4 mg/min", "Prepare an epinephrine infusion at 2 mcg/min", "Give a 250 mL IV fluid bolus of normal saline", "Prepare a dopamine infusion at 2 to 10 mcg/kg/min"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is not recommended when performing defibrillation?", choices: ["Check for a pulse immediately after defibrillation to determine next steps", "Visually check and ensure that everyone is clear of the patient before shock delivery", "Remove transdermal medication patches or ointment from the patient’s chest before the procedure", "All team members with the exception of the chest compressor should clear the patient as the machine charges"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Atypical symptoms of ACSs are more common in", choices: ["Older adults, women, and diabetic individuals", "Men, older adults, and individuals who have liver disease", "Women, diabetic individuals, and individuals who have liver disease", "Men, patients who have a history of coronary artery disease, and patients who have a history of hypertension"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 53-year-old woman is unresponsive. The cardiac monitor initially showed a narrow-QRS tachycardia at 220 beats/min. Her BP was 50 mm Hg by palpation and her ventilatory rate was 10 breaths/min. Supplemental oxygen therapy was initiated and an IV established before the patient’s collapse. You promptly delivered a synchronized shock. Reassessment reveals the patient is not breathing and has no pulse. The cardiac monitor now reveals the rhythm shown. What course of action should you take at this time?", choices: ["Defibrillate immediately", "Perform cardiopulmonary resuscitation (CPR) for 2 minutes and then prepare to defibrillate", "Place an advanced airway and then begin transcutaneous pacing", "Press the “Sync” control and deliver another synchronized shock"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Defibrillateimmediately.png" },
    { question: "An unstable patient with a narrow-QRS tachycardia requires electrical therapy. You have a biphasic defibrillator available to you. Which of the following correctly reflects the recommended energy dose that should be delivered in this situation?", choices: ["Defibrillate with 120 Joules ", "Defibrillate with 360 Joules ", "Perform synchronized cardioversion with 50 to 100 Joules  for the initial shock", "Perform synchronized cardioversion with 100 to 200 Joules  for the initial shock"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "The preferred method used to verify the proper placement of an endotracheal tube is", choices: ["Obtaining a chest radiograph", "Using continuous waveform capnography", "Auscultating the presence of bilateral breath sounds", "Observing adequate chest rise with positive pressure ventilation"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is incorrect with regard to the events of a typical resuscitation effort?", choices: ["The team leader should state his or her instructions one at a time", "The team leader should encourage a respectful exchange of ideas", "Team members must be knowledgeable about current resuscitation algorithms", "Team members should be encouraged to confer among themselves throughout the resuscitation effort"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which of the following statements is correct about the use of medications during cardiac arrest?", choices: ["Amiodarone is the drug of choice for cardiac arrest resulting from asystole", "Lidocaine is contraindicated in cardiac arrest associated with a shockable rhythm", "Epinephrine should be given as soon as feasible after the onset of cardiac arrest associated with a nonshockable rhythm", "Vasopressin can be substituted for either the first or second dose of epinephrine in the treatment of cardiac arrest"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "This 12-lead ECG is from a 50-year-old man complaining of chest discomfort<br><br>Which of the following is true regarding this 12-lead ECG?", choices: ["This 12-lead reveals no significant findings", "STE is present in leads V1 to V4. An anterior STEMI is suspected", "STE is present in leads I, aVR, and V6. A lateral STEMI is suspected", "STD is present in leads III and aVF. An inferior STEMI is suspected"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/RHYDM-13.png" },
    { question: "A 65-year-old man is complaining of a sudden onset of dizziness. He is awake, alert, and diaphoretic. The patient states that his symptoms began 45 minutes ago while cleaning his garage. He denies chest pain, shortness of breath, and nausea. The patient’s breath sounds are clear bilaterally. His BP is 78/50 mm Hg, ventilations 18 breaths/min. His SpO2 on room air is 96%.<br><br>This rhythm is", choices: ["Junctional rhythm", "Sinus bradycardia", "Third-degree atrioventricular (AV) block", "Second-degree AV block (2:1 AV block)"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/SeconddegreeAVblock.png" }, // 3 lines
    { question: "A 65-year-old man is complaining of a sudden onset of dizziness. He is awake, alert, and diaphoretic. The patient states that his symptoms began 45 minutes ago while cleaning his garage. He denies chest pain, shortness of breath, and nausea. The patient’s breath sounds are clear bilaterally. His BP is 78/50 mm Hg, ventilations 18 breaths/min. His SpO2 on room air is 96%.<br><br>An IV is in place. Your best course of action will be to", choices: ["Defibrillate immediately", "Administer atropine 0.5 mg IV", "Administer amiodarone 300 mg IV", "Administer vasopressin 40 units IV"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "An 89-year-old man is complaining of a “racing heart.” He states his symptoms began while playing a card game with friends. He had an MI 15 years ago and a coronary artery bypass graft 5 years ago. His BP is 140/90 mm Hg and his ventilatory rate is 16 breaths/min. Breath sounds are clear and his tidal volume is adequate. His SpO2 on room air is 88%<br><br>On the basis of the information provided, supplemental oxygen", choices: ["Is unnecessary at this time", "Is indicated and should be delivered using a nasal cannula", "Is indicated for all patients who are experiencing a tachycardia", "Should ideally be administered only after placement of an advanced airway"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "An 89-year-old man is complaining of a “racing heart.” He states his symptoms began while playing a card game with friends. He had an MI 15 years ago and a coronary artery bypass graft 5 years ago. His BP is 140/90 mm Hg and his ventilatory rate is 16 breaths/min. Breath sounds are clear and his tidal volume is adequate. His SpO2 on room air is 88%<br><br>You have started an IV and placed the patient on the cardiac monitor, which reveals the following rhythm<br><br>This rhythm can best be described as a", choices: ["Regular, polymorphic, wide-QRS tachycardia", "Regular, monomorphic, wide-QRS tachycardia", "Irregular, polymorphic, wide-QRS tachycardia", "Irregular, monomorphic, wide-QRS tachycardia"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "An 89-year-old man is complaining of a “racing heart.” He states his symptoms began while playing a card game with friends. He had an MI 15 years ago and a coronary artery bypass graft 5 years ago. His BP is 140/90 mm Hg and his ventilatory rate is 16 breaths/min. Breath sounds are clear and his tidal volume is adequate. His SpO2 on room air is 88%<br><br>Which of the following statements is true with regard to the management of this patient?", choices: ["The patient is unstable. Sedate the patient and defibrillate as quickly as possible", "The patient is stable. Administration of IV verapamil is recommended for termination of the rhythm", "The patient is stable. Administration of IV adenosine can be used as a therapeutic and diagnostic maneuver", "The patient is unstable. Because there are recognizable QRS complexes on the monitor, synchronized cardioversion should be performed"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 72-year-old woman presented with a sudden onset of shortness of breath and collapsed. After confirming the patient was unresponsive, apneic, and pulseless, CPR was begun.<br><br>The cardiac monitor shows the following rhythm<br><br>Which of the following ACLS treatment guidelines should be used in the initial treatment of this patient?", choices: ["Symptomatic bradycardia", "Narrow-QRS tachycardia", "Pulseless electrical activity (PEA)", "Acute Coronary Syndrome"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/PEA.png" }, 
    { question: "A 72-year-old woman presented with a sudden onset of shortness of breath and collapsed. After confirming the patient was unresponsive, apneic, and pulseless, CPR was begun.<br><br>An IV has been established and the patient is being ventilated with a bag-mask device (BMD). You observe gentle bilateral chest rise with ventilations. Your next action should be to", choices: ["Defibrillate immediately", "Give 0.5 mg of atropine IV", "Give 1 mg of epinephrine IV", "Begin transcutaneous pacing"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 73-year-old woman presents with symptoms of acute stroke 3.5 hours after symptom onset. She has a history of an acute MI 6 years ago, chronic atrial fibrillation, and diabetes mellitus. The patient’sBPis 168/100 mmHg, her heart rateis 88 to 100 beats/min, and her ventilations are 12 breaths/min. Her National Institutes of Health Stroke Scale (NIHSS) score is 22. Daily medications include lisinopril, metformin, and warfarin. Which of the following statements with regard to fibrinolytic therapy for this patient is true?", choices: ["This patient is not a candidate for fibrinolytic therapy because of her age", "This patient is not a candidate for fibrinolytic therapy because she is hypertensive", "RThis patient is not a candidate for fibrinolytic therapy because she is taking an oral anticoagulant", "This patient is not a candidate for fibrinolytic therapy because too much time has lapsed between symptom onset and hospital arrival"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following is true with regard to procainamide?", choices: ["Procainamide is a potent vasoconstrictor", "Procainamide may cause widening of the QRS complex", "Procainamide is indicated in the treatment of asystole and slow PEA", "Procainamide is a first-line drug in the management of torsades de pointes (TdP)"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A BMD that is used with supplemental oxygen set at a flow rate of 10 to 15 L/min delivers about _____oxygen to the patient when a reservoir is not used", choices: ["21%", "40% to 60%", "60% to 90%", "90% to 100%"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 35-year-old woman presents with a narrow-QRS tachycardia. She is stable but symptomatic. Vagal maneuvers and an initial dose of adenosine were ineffective. You should now", choices: ["Perform synchronized cardioversion", "Administer 6 mg of adenosine rapid IV push", "Administer 12 mg of adenosine rapid IV push", "Administer diltiazem 0.25 mg/kg IV over 2 minutes"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient is unresponsive with spontaneous ventilations at a rate of 4 per minute. Chest movement is barely visible with each breath. A pulse is present. Which of the following oxygen delivery devices would be most appropriate to use in this situation?", choices: ["A nasal cannula at 4 L/min", "A simple face mask at 6 L/min", "A nonrebreather mask at 12 L/min", "A BMD with a reservoir at 15 L/min"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "If a patient wakes from sleep or is found with symptoms of a stroke, the time of onset of symptoms is defined as the time", choices: ["Of awakening", "NThe patient retired for sleep", "The patient was last known to be symptom-free", "The patient was last seen by a health care professional"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "The most common adverse effects of giving amiodarone are", choices: ["Nausea and asystole", "Bradycardia and hypotension", "Tachycardia and hypertension", "Blurred vision and abdominal pain"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 49-year-old man is found unresponsive, not breathing, and pulseless. The cardiac monitor reveals monomorphic ventricular tachycardia. The most important actions in the management of this patient are", choices: ["CPR and defibrillationn", "Defibrillation and resuscitation medications", "CPR and prompt insertion of an advanced airway", "Synchronized cardioversion and resuscitation medications"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Diltiazem may be used", choices: ["Concurrently with IV beta-blockers", "In the management of symptomatic bradycardia", "In the management of a stable patient with a wide-QRS tachycardia", "To control the ventricular rate with atrial flutter or atrial fibrillation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "CPR is ongoing for a 66-year-old man in cardiac arrest. The cardiac monitor reveals asystole. Vascular access has been achieved and an advanced airway has been inserted. Which of the following statements is correct with regard to this situation?", choices: ["The depth of chest compressions should be 1.5 to 2 inches", "Chest compressions should be delivered at a rate of 100 per minute", "The ratio of chest compressions to ventilations delivered should be 30:2", "Ventilations should be delivered at a rate of one breath every 6 seconds"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What precautions should be taken before giving Nitroglycerin?", choices: ["Make sure the patient’s heart rate is at least 70 beats/min", "Make sure there is no evidence of a right ventricular infarction", "Make sure the patient’s systolic BP is more than 140 mm Hg", "Make sure the patient has not used a diuretic or an antihypertensive medication in the past 24 hours"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A simple face mask", choices: ["Requires a minimum oxygen flow rate of 2 L/min", "Can only be used in a spontaneously breathing patient", "Does not permit the mixing of the patient’s exhaled air with 100% oxygen", "Delivers an oxygen concentration of 70% to 85% at recommended flow rates"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }
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