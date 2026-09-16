(function(root){const QUESTIONS=[
  "says that someone repeatedly encouraged them before they finally agreed to join?",
  "says that a past difficulty helps them recognise when other people need support?",
  "expects another important commitment to reduce the time they can spend volunteering?",
  "uses a leisure-time skill to support the organisation?",
  "discovered that a role they had expected to dislike was actually important to the organisation?",
  "prepared carefully before taking responsibility for other people?",
  "describes becoming less dependent on others when making decisions?",
  "changed a personal plan after the organisation offered them a new opportunity?"
],KEYS=[
  "someone keeps asking → joins",
  "past problem → understands others",
  "other responsibility → less volunteering",
  "free-time skill + helps organisation",
  "thought job was boring → finds it useful",
  "preparation + responsibility for others",
  "decisions + more independent",
  "new opportunity → changes own plan"
],GROUP_KEY_IDS=[
  3,
  0,
  5,
  2,
  4,
  1
],TASK_LABELS='bcdefghi',GROUP_LABELS='bcdefg',EXIT_LABELS='hi';if(typeof module!=='undefined')module.exports={QUESTIONS,KEYS,GROUP_KEY_IDS,TASK_LABELS,GROUP_LABELS,EXIT_LABELS};else Object.assign(root,{QUESTIONS,KEYS,GROUP_KEY_IDS,TASK_LABELS,GROUP_LABELS,EXIT_LABELS});})(typeof window!=='undefined'?window:globalThis);