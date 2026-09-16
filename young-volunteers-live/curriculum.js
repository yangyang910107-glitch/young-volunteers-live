const KEY_ANSWERS=[0,1,2,3,4,5,6,7],WHO_ANSWERS=[
  "B",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "D"
],EVIDENCE=[
  [
    "B3",
    "B4"
  ],
  [
    "D2",
    "D3"
  ],
  [
    "A6",
    "A7"
  ],
  [
    "B5",
    "B6"
  ],
  [
    "C4",
    "C5"
  ],
  [
    "D6"
  ],
  [
    "A4",
    "A5"
  ],
  [
    "D7",
    "D8"
  ]
],EVIDENCE_RULES=[
  {
    "required": [
      "B3",
      "B4"
    ],
    "allowed": [
      "B3",
      "B4"
    ]
  },
  {
    "required": [
      "D2",
      "D3"
    ],
    "allowed": [
      "D2",
      "D3"
    ]
  },
  {
    "required": [
      "A6",
      "A7"
    ],
    "allowed": [
      "A6",
      "A7"
    ]
  },
  {
    "required": [
      "B5",
      "B6"
    ],
    "allowed": [
      "B5",
      "B6"
    ]
  },
  {
    "required": [
      "C4",
      "C5"
    ],
    "allowed": [
      "C4",
      "C5"
    ]
  },
  {
    "required": [
      "D6"
    ],
    "allowed": [
      "D6"
    ]
  },
  {
    "required": [
      "A4",
      "A5"
    ],
    "allowed": [
      "A4",
      "A5"
    ]
  },
  {
    "required": [
      "D7",
      "D8"
    ],
    "allowed": [
      "D7",
      "D8"
    ]
  }
],EXPLANATIONS=[
  "kept sending me photographs + asking when I was going to come → eventually agreed",
  "too embarrassed to admit I needed help → recognise what is really happening",
  "final exams are approaching → go only twice a month",
  "make and edit short videos for fun + use those skills for the organisation",
  "expected ... to be rather dull → money from the shop paid for food, medicine and emergency treatment",
  "watching experienced volunteers + completed extra training before I was given that responsibility",
  "check almost every decision + now make those choices without asking someone else first",
  "offered me a place on a youth-leadership programme → trip will have to wait until next year"
];function bridgeCorrect(q,ids){const r=EVIDENCE_RULES[q];return r.required.every(id=>ids.includes(id))&&ids.every(id=>r.allowed.includes(id));}module.exports={KEY_ANSWERS,WHO_ANSWERS,EVIDENCE,EVIDENCE_RULES,EXPLANATIONS,bridgeCorrect};