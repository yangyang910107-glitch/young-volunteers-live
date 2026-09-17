(function(root){const STAGES=[{"id":"lead","title":"WHAT CAN YOU CONTRIBUTE?"},{"id":"vocabMatch","title":"WORDS & MEANINGS"},{"id":"vocabUse","title":"USE THE WORDS"},{"id":"gist","title":"GET THE BIG PICTURE"},{"id":"demo","title":"EXAMPLE 0"},{"id":"keys","title":"FIND THE KEYS"},{"id":"bridgeDemo","title":"EXAMPLE 0 · TEXT BRIDGE"},{"id":"combined","title":"TEXT BRIDGE + WHO"},{"id":"peer","title":"CHECK & REVISE"},{"id":"response","title":"CHOOSE A VOLUNTEER ROLE"},{"id":"exit","title":"EXIT TICKET · TEAM CHALLENGE"},{"id":"homework","title":"TAKE THE STRATEGY WITH YOU"}],PROFILES=[
  {
    "id": "A",
    "name": "Maya",
    "instrument": "community food project",
    "sentences": [
      "I first heard about the Riverside Food Project when one of its coordinators came to speak at our school.",
      "Until then, I had assumed that volunteering there mainly meant carrying boxes or handing out food, neither of which particularly appealed to me.",
      "What interested me was hearing that volunteers also plan deliveries and decide how donated food should be shared between different families, so I decided to give it a try.",
      "At first, I was so worried about making a mistake that I asked an experienced volunteer to check almost every decision I made.",
      "The staff gradually gave me more responsibility, though, and I now feel comfortable making those choices without asking someone else first.",
      "I still volunteer most Saturdays, but my final exams are approaching, and schoolwork has to be my priority for a while.",
      "For the next two months, I’ll go only twice a month.",
      "My parents suggested stopping completely until the exams are over, but I’d rather continue doing a little."
    ]
  },
  {
    "id": "B",
    "name": "Leo",
    "instrument": "environmental organisation",
    "sentences": [
      "My parents have always cared about environmental issues, so people sometimes assume they persuaded me to volunteer.",
      "In fact, it was a friend who got me involved.",
      "He had already joined Green Streets and, for several weeks, kept sending me photographs from weekend clean-ups and asking when I was going to come with him.",
      "Eventually I agreed, mainly because I thought spending a morning outdoors would be better than staying at home.",
      "At first, I collected litter and planted trees, but the manager later found out that I make and edit short videos for fun.",
      "She asked whether I could use those skills for the organisation, and I now produce social-media posts encouraging other teenagers to join.",
      "More recently, I have started explaining jobs to new volunteers before they begin work.",
      "I used to choose activities where I could work quietly and avoid speaking in front of others, so although I still get nervous, talking to a group no longer feels nearly as difficult as it once did."
    ]
  },
  {
    "id": "C",
    "name": "Sofia",
    "instrument": "animal rescue centre",
    "sentences": [
      "I had wanted to help at an animal rescue centre for years, and when I finally applied, I imagined myself feeding dogs and taking them for walks.",
      "However, I was only fifteen, and the centre did not allow volunteers under sixteen to work directly with the animals.",
      "Since there was nothing I could do about my age, one of the staff suggested helping in the charity shop until I was old enough.",
      "I accepted because I wanted to volunteer somewhere, but I expected sorting donated clothes and serving customers to be rather dull.",
      "After a few weeks, I discovered that money from the shop paid for food, medicine and emergency treatment for the animals.",
      "That completely changed my opinion of the job.",
      "I am sixteen now and can work with the dogs, which I occasionally do, but I still spend most of my volunteering time in the shop.",
      "I once thought that only people working directly with animals were really helping them; I no longer believe that."
    ]
  },
  {
    "id": "D",
    "name": "Oliver",
    "instrument": "youth support charity",
    "sentences": [
      "The youth centre where I volunteer was already familiar to me because, when I was younger, I attended its after-school homework club.",
      "I often found the work difficult but was too embarrassed to admit that I needed help.",
      "Remembering that has turned out to be useful: when a child suddenly becomes quiet or claims that everything is fine, I can sometimes recognise what is really happening because I behaved in exactly the same way.",
      "When I first became a volunteer, I was keen to lead activities immediately, although I had never worked with younger children before.",
      "The centre did not let me take charge of a group straight away.",
      "Instead, I spent several weeks watching experienced volunteers and completed an extra training course before I was given that responsibility.",
      "I had also planned to travel with my cousin this summer, but the charity later offered me a place on a youth-leadership programme running at the same time.",
      "I decided the opportunity was too valuable to miss, so the trip will have to wait until next year."
    ]
  }
],DEMO_SOURCE={
  "question": "could not initially do the work they wanted because of their age?",
  "key": "wanted work + too young",
  "who": "C",
  "evidence": [
    "C1",
    "C2"
  ],
  "parts": [
    "work they wanted",
    "because of their age"
  ],
  "keyParts": [
    "wanted work",
    "too young"
  ],
  "rows": [
    {
      "who": "D",
      "ids": [
        "D4",
        "D5",
        "D6"
      ],
      "correct": false,
      "hits": [
        [
          "keen to lead activities immediately",
          "take charge of a group"
        ],
        []
      ],
      "proof": [
        "keen to lead activities / take charge of a group ↔ wanted work",
        "No proof that age prevented the work"
      ],
      "note": "Oliver wanted to lead but had never worked with younger children. Observation and training were required; this was not an age limit."
    },
    {
      "who": "C",
      "ids": [
        "C1",
        "C2"
      ],
      "correct": true,
      "hits": [
        [
          "feeding dogs",
          "taking them for walks",
          "work directly with the animals"
        ],
        [
          "only fifteen",
          "under sixteen"
        ]
      ],
      "proof": [
        "feeding dogs / taking them for walks / work directly with the animals ↔ wanted work",
        "only fifteen / under sixteen ↔ too young"
      ]
    }
  ]
},MODEL_OPTIONS=[
  "free-time skill + helps organisation",
  "decisions + more independent",
  "wanted work + too young",
  "someone keeps asking → joins",
  "thought job was boring → finds it useful",
  "other responsibility → less volunteering",
  "preparation + responsibility for others",
  "past problem → understands others",
  "new opportunity → changes own plan"
];const SENTENCES=PROFILES.flatMap(p=>p.sentences.map((text,i)=>({id:p.id+(i+1),who:p.id,text})));if(typeof module!=='undefined')module.exports={STAGES,PROFILES,SENTENCES,DEMO_SOURCE,MODEL_OPTIONS};else Object.assign(root,{STAGES,PROFILES,SENTENCES,DEMO_SOURCE,MODEL_OPTIONS});})(typeof window!=='undefined'?window:globalThis);
