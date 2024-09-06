const vocabularyData = [
    {
      id: "1",
      italianWord: "il/lo/la/i/gli/le",
      englishTranslation: "the",
      partOfSpeech: "Article",
      difficulty: 1,
      examples: [
        {
          italian: "Il gatto è nero.",
          english: "The cat is black."
        }
      ]
    },
    {
      id: "2",
      italianWord: "di",
      englishTranslation: "of, from",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Il libro di Marco.",
          english: "Marco's book."
        }
      ]
    },
    {
      id: "3",
      italianWord: "e",
      englishTranslation: "and",
      partOfSpeech: "Conjunction",
      difficulty: 1,
      examples: [
        {
          italian: "Mela e banana.",
          english: "Apple and banana."
        }
      ]
    },
    {
      id: "4",
      italianWord: "essere",
      englishTranslation: "to be",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Io sono felice.",
          english: "I am happy."
        }
      ]
    },
    {
      id: "5",
      italianWord: "che",
      englishTranslation: "that, which",
      partOfSpeech: "Pronoun/Conjunction",
      difficulty: 2,
      examples: [
        {
          italian: "Il libro che leggo.",
          english: "The book that I'm reading."
        }
      ]
    },
    {
      id: "6",
      italianWord: "a",
      englishTranslation: "to, at",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Vado a casa.",
          english: "I'm going home."
        }
      ]
    },
    {
      id: "7",
      italianWord: "in",
      englishTranslation: "in, into",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Sono in cucina.",
          english: "I'm in the kitchen."
        }
      ]
    },
    {
      id: "8",
      italianWord: "un/uno/una",
      englishTranslation: "a, an",
      partOfSpeech: "Article",
      difficulty: 1,
      examples: [
        {
          italian: "Una mela.",
          english: "An apple."
        }
      ]
    },
    {
      id: "9",
      italianWord: "avere",
      englishTranslation: "to have",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Ho una mela.",
          english: "I have an apple."
        }
      ]
    },
    {
      id: "10",
      italianWord: "per",
      englishTranslation: "for, to, in order to",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Un regalo per te.",
          english: "A gift for you."
        }
      ]
    },
    {
      id: "11",
      italianWord: "non",
      englishTranslation: "not, no",
      partOfSpeech: "Adverb",
      difficulty: 1,
      examples: [
        {
          italian: "Non capisco.",
          english: "I don't understand."
        }
      ]
    },
    {
      id: "12",
      italianWord: "con",
      englishTranslation: "with",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Vado con te.",
          english: "I'm going with you."
        }
      ]
    },
    {
      id: "13",
      italianWord: "su",
      englishTranslation: "on, upon",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Il libro è sul tavolo.",
          english: "The book is on the table."
        }
      ]
    },
    {
      id: "14",
      italianWord: "da",
      englishTranslation: "from, by",
      partOfSpeech: "Preposition",
      difficulty: 1,
      examples: [
        {
          italian: "Vengo da Roma.",
          english: "I come from Rome."
        }
      ]
    },
    {
      id: "15",
      italianWord: "come",
      englishTranslation: "as, like",
      partOfSpeech: "Adverb/Conjunction",
      difficulty: 1,
      examples: [
        {
          italian: "Come stai?",
          english: "How are you?"
        }
      ]
    },
    {
      id: "16",
      italianWord: "questo/questa",
      englishTranslation: "this",
      partOfSpeech: "Pronoun/Adjective",
      difficulty: 1,
      examples: [
        {
          italian: "Questo libro è interessante.",
          english: "This book is interesting."
        }
      ]
    },
    {
      id: "17",
      italianWord: "fare",
      englishTranslation: "to do, to make",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Cosa fai?",
          english: "What are you doing?"
        }
      ]
    },
    {
      id: "18",
      italianWord: "più",
      englishTranslation: "more",
      partOfSpeech: "Adverb",
      difficulty: 1,
      examples: [
        {
          italian: "Voglio più tempo.",
          english: "I want more time."
        }
      ]
    },
    {
      id: "19",
      italianWord: "anche",
      englishTranslation: "also, too",
      partOfSpeech: "Adverb",
      difficulty: 1,
      examples: [
        {
          italian: "Anche io sono italiano.",
          english: "I am Italian too."
        }
      ]
    },
    {
      id: "20",
      italianWord: "potere",
      englishTranslation: "can, to be able to",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Posso aiutarti?",
          english: "Can I help you?"
        }
      ]
    },
    {
      id: "21",
      italianWord: "dovere",
      englishTranslation: "must, to have to",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Devo studiare.",
          english: "I must study."
        }
      ]
    },
    {
      id: "22",
      italianWord: "dire",
      englishTranslation: "to say, to tell",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Cosa vuoi dire?",
          english: "What do you want to say?"
        }
      ]
    },
    {
      id: "23",
      italianWord: "mi",
      englishTranslation: "me, to me",
      partOfSpeech: "Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Mi piace il gelato.",
          english: "I like ice cream."
        }
      ]
    },
    {
      id: "24",
      italianWord: "tutto",
      englishTranslation: "all, everything",
      partOfSpeech: "Pronoun/Adjective",
      difficulty: 1,
      examples: [
        {
          italian: "Tutto è possibile.",
          english: "Everything is possible."
        }
      ]
    },
    {
      id: "25",
      italianWord: "molto",
      englishTranslation: "very, much, many",
      partOfSpeech: "Adverb/Adjective",
      difficulty: 1,
      examples: [
        {
          italian: "Sono molto felice.",
          english: "I am very happy."
        }
      ]
    },
    {
      id: "26",
      italianWord: "ma",
      englishTranslation: "but",
      partOfSpeech: "Conjunction",
      difficulty: 1,
      examples: [
        {
          italian: "Voglio andare, ma non posso.",
          english: "I want to go, but I can't."
        }
      ]
    },
    {
      id: "27",
      italianWord: "io",
      englishTranslation: "I",
      partOfSpeech: "Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Io sono italiano.",
          english: "I am Italian."
        }
      ]
    },
    {
      id: "28",
      italianWord: "altro",
      englishTranslation: "other, another",
      partOfSpeech: "Adjective/Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Hai un'altra idea?",
          english: "Do you have another idea?"
        }
      ]
    },
    {
      id: "29",
      italianWord: "bene",
      englishTranslation: "well, good",
      partOfSpeech: "Adverb/Noun",
      difficulty: 1,
      examples: [
        {
          italian: "Sto bene.",
          english: "I am well."
        }
      ]
    },
    {
      id: "30",
      italianWord: "quello/quella",
      englishTranslation: "that",
      partOfSpeech: "Pronoun/Adjective",
      difficulty: 1,
      examples: [
        {
          italian: "Quella casa è grande.",
          english: "That house is big."
        }
      ]
    },
    {
      id: "31",
      italianWord: "se",
      englishTranslation: "if",
      partOfSpeech: "Conjunction",
      difficulty: 1,
      examples: [
        {
          italian: "Se piove, resto a casa.",
          english: "If it rains, I'll stay home."
        }
      ]
    },
    {
      id: "32",
      italianWord: "chi",
      englishTranslation: "who",
      partOfSpeech: "Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Chi è quella persona?",
          english: "Who is that person?"
        }
      ]
    },
    {
      id: "33",
      italianWord: "così",
      englishTranslation: "so, like this",
      partOfSpeech: "Adverb",
      difficulty: 1,
      examples: [
        {
          italian: "Fallo così.",
          english: "Do it like this."
        }
      ]
    },
    {
      id: "34",
      italianWord: "quando",
      englishTranslation: "when",
      partOfSpeech: "Adverb/Conjunction",
      difficulty: 1,
      examples: [
        {
          italian: "Quando arrivi?",
          english: "When do you arrive?"
        }
      ]
    },
    {
      id: "35",
      italianWord: "o",
      englishTranslation: "or",
      partOfSpeech: "Conjunction",
      difficulty: 1,
      examples: [
        {
          italian: "Caffè o tè?",
          english: "Coffee or tea?"
        }
      ]
    },
    {
      id: "36",
      italianWord: "cosa",
      englishTranslation: "thing, what",
      partOfSpeech: "Noun/Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Cosa fai?",
          english: "What are you doing?"
        }
      ]
    },
    {
      id: "37",
      italianWord: "due",
      englishTranslation: "two",
      partOfSpeech: "Number",
      difficulty: 1,
      examples: [
        {
          italian: "Ho due fratelli.",
          english: "I have two brothers."
        }
      ]
    },
    {
      id: "38",
      italianWord: "tu",
      englishTranslation: "you (singular)",
      partOfSpeech: "Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Tu sei bella.",
          english: "You are beautiful."
        }
      ]
    },
    {
      id: "39",
      italianWord: "noi",
      englishTranslation: "we",
      partOfSpeech: "Pronoun",
      difficulty: 1,
      examples: [
        {
          italian: "Noi andiamo al cinema.",
          english: "We are going to the cinema."
        }
      ]
    },
    {
      id: "40",
      italianWord: "mio/mia",
      englishTranslation: "my",
      partOfSpeech: "Possessive Adjective",
      difficulty: 1,
      examples: [
        {
          italian: "Questa è la mia casa.",
          english: "This is my house."
        }
      ]
    },
    {
      id: "41",
      italianWord: "vedere",
      englishTranslation: "to see",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Posso vedere il menu?",
          english: "Can I see the menu?"
        }
      ]
    },
    {
      id: "42",
      italianWord: "sapere",
      englishTranslation: "to know",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Non so la risposta.",
          english: "I don't know the answer."
        }
      ]
    },
    {
      id: "43",
      italianWord: "volere",
      englishTranslation: "to want",
      partOfSpeech: "Verb",
      difficulty: 2,
      examples: [
        {
          italian: "Voglio un gelato.",
          english: "I want an ice cream."
        }
      ]
    },
    {
      id: "44",
      italianWord: "tempo",
      englishTranslation: "time",
      partOfSpeech: "Noun",
      difficulty: 1,
      examples: [
        {
          italian: "Non ho tempo.",
          english: "I don't have time."
        }
      ]
    },
    {
      id: "45",
      italianWord: "dopo",
      englishTranslation: "after",
      partOfSpeech: "Preposition/Adverb",
      difficulty: 1,
      examples: [
        {
        italian: "Ti chiamo dopo.",
        english: "I'll call you later."
        }
    ]
    },
    {
    id: "46",
    italianWord: "prima",
    englishTranslation: "before, first",
    partOfSpeech: "Adverb/Adjective",
    difficulty: 1,
    examples: [
        {
        italian: "Prima mangio, poi esco.",
        english: "First I eat, then I go out."
        }
    ]
    },
    {
    id: "47",
    italianWord: "già",
    englishTranslation: "already",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Sei già arrivato?",
        english: "Have you already arrived?"
        }
    ]
    },
    {
    id: "48",
    italianWord: "qui",
    englishTranslation: "here",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Vieni qui!",
        english: "Come here!"
        }
    ]
    },
    {
    id: "49",
    italianWord: "anno",
    englishTranslation: "year",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "Buon anno nuovo!",
        english: "Happy New Year!"
        }
    ]
    },
    {
    id: "50",
    italianWord: "oggi",
    englishTranslation: "today",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Oggi fa caldo.",
        english: "It's hot today."
        }
    ]
    },
    {
    id: "51",
    italianWord: "solo",
    englishTranslation: "only, alone",
    partOfSpeech: "Adjective/Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Sono solo a casa.",
        english: "I'm alone at home."
        }
    ]
    },
    {
    id: "52",
    italianWord: "ora",
    englishTranslation: "now",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Ora devo andare.",
        english: "I have to go now."
        }
    ]
    },
    {
    id: "53",
    italianWord: "sua",
    englishTranslation: "his, her, its",
    partOfSpeech: "Possessive Adjective",
    difficulty: 1,
    examples: [
        {
        italian: "Questa è la sua macchina.",
        english: "This is his/her car."
        }
    ]
    },
    {
    id: "54",
    italianWord: "mai",
    englishTranslation: "never",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Non l'ho mai visto.",
        english: "I've never seen him."
        }
    ]
    },
    {
    id: "55",
    italianWord: "sempre",
    englishTranslation: "always",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Sei sempre in ritardo.",
        english: "You're always late."
        }
    ]
    },
    {
    id: "56",
    italianWord: "dare",
    englishTranslation: "to give",
    partOfSpeech: "Verb",
    difficulty: 2,
    examples: [
        {
        italian: "Mi dai una mano?",
        english: "Can you give me a hand?"
        }
    ]
    },
    {
    id: "57",
    italianWord: "parlare",
    englishTranslation: "to speak",
    partOfSpeech: "Verb",
    difficulty: 2,
    examples: [
        {
        italian: "Parli italiano?",
        english: "Do you speak Italian?"
        }
    ]
    },
    {
    id: "58",
    italianWord: "persona",
    englishTranslation: "person",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "È una persona gentile.",
        english: "He/She is a kind person."
        }
    ]
    },
    {
    id: "59",
    italianWord: "casa",
    englishTranslation: "house, home",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "Torno a casa.",
        english: "I'm going home."
        }
    ]
    },
    {
    id: "60",
    italianWord: "uno",
    englishTranslation: "one",
    partOfSpeech: "Number",
    difficulty: 1,
    examples: [
        {
        italian: "Ho solo uno fratello.",
        english: "I have only one brother."
        }
    ]
    },
    {
    id: "61",
    italianWord: "dove",
    englishTranslation: "where",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Dove vai?",
        english: "Where are you going?"
        }
    ]
    },
    {
    id: "62",
    italianWord: "stare",
    englishTranslation: "to stay, to be",
    partOfSpeech: "Verb",
    difficulty: 2,
    examples: [
        {
        italian: "Sto bene.",
        english: "I'm fine."
        }
    ]
    },
    {
    id: "63",
    italianWord: "parte",
    englishTranslation: "part",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "Questa è la parte migliore.",
        english: "This is the best part."
        }
    ]
    },
    {
    id: "64",
    italianWord: "vita",
    englishTranslation: "life",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "La vita è bella.",
        english: "Life is beautiful."
        }
    ]
    },
    {
    id: "65",
    italianWord: "giorno",
    englishTranslation: "day",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "Buon giorno!",
        english: "Good day!"
        }
    ]
    },
    {
    id: "66",
    italianWord: "modo",
    englishTranslation: "way, manner",
    partOfSpeech: "Noun",
    difficulty: 2,
    examples: [
        {
        italian: "In che modo?",
        english: "In what way?"
        }
    ]
    },
    {
    id: "67",
    italianWord: "perché",
    englishTranslation: "why, because",
    partOfSpeech: "Adverb/Conjunction",
    difficulty: 1,
    examples: [
        {
        italian: "Perché sei triste?",
        english: "Why are you sad?"
        }
    ]
    },
    {
    id: "68",
    italianWord: "grande",
    englishTranslation: "big, great",
    partOfSpeech: "Adjective",
    difficulty: 1,
    examples: [
        {
        italian: "Una grande casa",
        english: "A big house"
        }
    ]
    },
    {
    id: "69",
    italianWord: "fino",
    englishTranslation: "until, up to",
    partOfSpeech: "Preposition",
    difficulty: 1,
    examples: [
        {
        italian: "Lavoro fino alle 5.",
        english: "I work until 5."
        }
    ]
    },
    {
    id: "70",
    italianWord: "ogni",
    englishTranslation: "every, each",
    partOfSpeech: "Adjective",
    difficulty: 1,
    examples: [
        {
        italian: "Ogni giorno studio italiano.",
        english: "I study Italian every day."
        }
    ]
    },
    {
    id: "71",
    italianWord: "nuovo",
    englishTranslation: "new",
    partOfSpeech: "Adjective",
    difficulty: 1,
    examples: [
        {
        italian: "Ho comprato una nuova macchina.",
        english: "I bought a new car."
        }
    ]
    },
    {
    id: "72",
    italianWord: "tre",
    englishTranslation: "three",
    partOfSpeech: "Number",
    difficulty: 1,
    examples: [
        {
        italian: "Ho tre sorelle.",
        english: "I have three sisters."
        }
    ]
    },
    {
    id: "73",
    italianWord: "stesso",
    englishTranslation: "same",
    partOfSpeech: "Adjective/Pronoun",
    difficulty: 2,
    examples: [
        {
        italian: "Pensiamo la stessa cosa.",
        english: "We think the same thing."
        }
    ]
    },
    {
    id: "74",
    italianWord: "poi",
    englishTranslation: "then, after",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Prima mangio, poi dormo.",
        english: "First I eat, then I sleep."
        }
    ]
    },
    {
    id: "75",
    italianWord: "lei",
    englishTranslation: "she, her (formal you)",
    partOfSpeech: "Pronoun",
    difficulty: 1,
    examples: [
        {
        italian: "Lei è molto gentile.",
        english: "She is very kind."
        }
    ]
    },
    {
    id: "76",
    italianWord: "ancora",
    englishTranslation: "still, yet",
    partOfSpeech: "Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "Sei ancora qui?",
        english: "Are you still here?"
        }
    ]
    },
    {
    id: "77",
    italianWord: "poco",
    englishTranslation: "little, few",
    partOfSpeech: "Adjective/Adverb",
    difficulty: 1,
    examples: [
        {
        italian: "C'è poco tempo.",
        english: "There's little time."
        }
    ]
    },
    {
    id: "78",
    italianWord: "loro",
    englishTranslation: "they, them",
    partOfSpeech: "Pronoun",
    difficulty: 1,
    examples: [
        {
        italian: "Loro sono i miei amici.",
        english: "They are my friends."
        }
    ]
    },
    {
    id: "79",
    italianWord: "posto",
    englishTranslation: "place",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "Questo è un bel posto.",
        english: "This is a nice place."
        }
    ]
    },
    {
    id: "80",
    italianWord: "mentre",
    englishTranslation: "while",
    partOfSpeech: "Conjunction",
    difficulty: 2,
    examples: [
        {
        italian: "Leggo mentre mangio.",
        english: "I read while I eat."
        }
    ]
    },
    {
    id: "81",
    italianWord: "però",
    englishTranslation: "but, however",
    partOfSpeech: "Conjunction",
    difficulty: 1,
    examples: [
        {
        italian: "È difficile, però ci provo.",
        english: "It's difficult, but I'll try."
        }
    ]
    },
    {
    id: "82",
    italianWord: "quindi",
    englishTranslation: "therefore, so",
    partOfSpeech: "Adverb/Conjunction",
    difficulty: 2,
    examples: [
        {
        italian: "Piove, quindi resto a casa.",
        english: "It's raining, so I'm staying home."
        }
    ]
    },
    {
    id: "83",
    italianWord: "trovare",
    englishTranslation: "to find",
    partOfSpeech: "Verb",
    difficulty: 2,
    examples: [
        {
        italian: "Non riesco a trovare le chiavi.",
        english: "I can't find the keys."
        }
    ]
    },
    {
    id: "84",
    italianWord: "mettere",
    englishTranslation: "to put",
    partOfSpeech: "Verb",
    difficulty: 2,
    examples: [
        {
        italian: "Metti il libro sul tavolo.",
        english: "Put the book on the table."
        }
    ]
    },
    {
    id: "85",
    italianWord: "venire",
    englishTranslation: "to come",
    partOfSpeech: "Verb",
    difficulty: 2,
    examples: [
        {
        italian: "Vieni con me?",
        english: "Are you coming with me?"
        }
    ]
    },
    {
    id: "86",
    italianWord: "punto",
    englishTranslation: "point",
    partOfSpeech: "Noun",
    difficulty: 1,
    examples: [
        {
        italian: "Qual è il tuo punto di vista?",
        english: "What's your point of view?"
        }
    ]
    },
    {
    id: "87",
    italianWord: "tuo/tua",
    englishTranslation: "your",
    partOfSpeech: "Possessive Adjective",
    difficulty: 1,
    examples: [
        {
        italian: "Questa è la tua penna?",
        english: "Is this your pen?"
        }
    ]
    },
    {
        id: "88",
        italianWord: "qualche",
        englishTranslation: "some",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Ho qualche idea.",
            english: "I have some ideas."
          }
        ]
      },
      {
        id: "89",
        italianWord: "lui",
        englishTranslation: "he, him",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        examples: [
          {
            italian: "Lui è mio fratello.",
            english: "He is my brother."
          }
        ]
      },
      {
        id: "90",
        italianWord: "sì",
        englishTranslation: "yes",
        partOfSpeech: "Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "Sì, sono d'accordo.",
            english: "Yes, I agree."
          }
        ]
      },
      {
        id: "91",
        italianWord: "proprio",
        englishTranslation: "own, proper",
        partOfSpeech: "Adjective",
        difficulty: 2,
        examples: [
          {
            italian: "È il mio proprio libro.",
            english: "It's my own book."
          }
        ]
      },
      {
        id: "92",
        italianWord: "niente",
        englishTranslation: "nothing",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        examples: [
          {
            italian: "Non c'è niente da fare.",
            english: "There's nothing to do."
          }
        ]
      },
      {
        id: "93",
        italianWord: "grazie",
        englishTranslation: "thank you",
        partOfSpeech: "Interjection",
        difficulty: 1,
        examples: [
          {
            italian: "Grazie mille!",
            english: "Thank you very much!"
          }
        ]
      },
      {
        id: "94",
        italianWord: "nome",
        englishTranslation: "name",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Qual è il tuo nome?",
            english: "What's your name?"
          }
        ]
      },
      {
        id: "95",
        italianWord: "nostro",
        englishTranslation: "our",
        partOfSpeech: "Possessive Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Questa è la nostra casa.",
            english: "This is our house."
          }
        ]
      },
      {
        id: "96",
        italianWord: "qualcosa",
        englishTranslation: "something",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        examples: [
          {
            italian: "C'è qualcosa nel frigo?",
            english: "Is there something in the fridge?"
          }
        ]
      },
      {
        id: "97",
        italianWord: "ora",
        englishTranslation: "hour",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Che ora è?",
            english: "What time is it?"
          }
        ]
      },
      {
        id: "98",
        italianWord: "alcuni",
        englishTranslation: "some (plural)",
        partOfSpeech: "Pronoun/Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Alcuni studenti sono in ritardo.",
            english: "Some students are late."
          }
        ]
      },
      {
        id: "99",
        italianWord: "mondo",
        englishTranslation: "world",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Il mondo è piccolo.",
            english: "The world is small."
          }
        ]
      },
      {
        id: "100",
        italianWord: "momento",
        englishTranslation: "moment",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Aspetta un momento.",
            english: "Wait a moment."
          }
        ]
      },
      {
        id: "101",
        italianWord: "città",
        englishTranslation: "city",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Roma è una bella città.",
            english: "Rome is a beautiful city."
          }
        ]
      },
      {
        id: "102",
        italianWord: "secondo",
        englishTranslation: "second",
        partOfSpeech: "Adjective/Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Sei arrivato secondo.",
            english: "You arrived second."
          }
        ]
      },
      {
        id: "103",
        italianWord: "sentire",
        englishTranslation: "to hear, to feel",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Non ti sento bene.",
            english: "I can't hear you well."
          }
        ]
      },
      {
        id: "104",
        italianWord: "volta",
        englishTranslation: "time (occasion)",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "È la prima volta che vengo qui.",
            english: "It's the first time I've been here."
          }
        ]
      },
      {
        id: "105",
        italianWord: "certo",
        englishTranslation: "certain, sure",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Sei certo di quello che dici?",
            english: "Are you sure of what you're saying?"
          }
        ]
      },
      {
        id: "106",
        italianWord: "vero",
        englishTranslation: "true",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "È vero che vai in Italia?",
            english: "Is it true that you're going to Italy?"
          }
        ]
      },
      {
        id: "107",
        italianWord: "storia",
        englishTranslation: "story, history",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mi piace la storia italiana.",
            english: "I like Italian history."
          }
        ]
      },
      {
        id: "108",
        italianWord: "insieme",
        englishTranslation: "together",
        partOfSpeech: "Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "Andiamo insieme al cinema?",
            english: "Shall we go to the cinema together?"
          }
        ]
      },
      {
        id: "109",
        italianWord: "caso",
        englishTranslation: "case",
        partOfSpeech: "Noun",
        difficulty: 2,
        examples: [
          {
            italian: "In ogni caso, ci vediamo domani.",
            english: "In any case, we'll see each other tomorrow."
          }
        ]
      },
      {
        id: "110",
        italianWord: "gruppo",
        englishTranslation: "group",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Facciamo parte dello stesso gruppo.",
            english: "We're part of the same group."
          }
        ]
      },
      {
        id: "111",
        italianWord: "verso",
        englishTranslation: "towards",
        partOfSpeech: "Preposition",
        difficulty: 1,
        examples: [
          {
            italian: "Cammina verso il parco.",
            english: "Walk towards the park."
          }
        ]
      },
      {
        id: "112",
        italianWord: "presto",
        englishTranslation: "soon",
        partOfSpeech: "Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "Arriverò presto.",
            english: "I'll arrive soon."
          }
        ]
      },
      {
        id: "113",
        italianWord: "mano",
        englishTranslation: "hand",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mi ha dato una mano.",
            english: "He gave me a hand."
          }
        ]
      },
      {
        id: "114",
        italianWord: "famiglia",
        englishTranslation: "family",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "La mia famiglia è grande.",
            english: "My family is big."
          }
        ]
      },
      {
        id: "115",
        italianWord: "lavoro",
        englishTranslation: "work",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Il mio lavoro è interessante.",
            english: "My work is interesting."
          }
        ]
      },
      {
        id: "116",
        italianWord: "troppo",
        englishTranslation: "too much",
        partOfSpeech: "Adverb/Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Mangi troppo zucchero.",
            english: "You eat too much sugar."
          }
        ]
      },
      {
        id: "117",
        italianWord: "ragione",
        englishTranslation: "reason",
        partOfSpeech: "Noun",
        difficulty: 2,
        examples: [
          {
            italian: "Hai ragione.",
            english: "You're right."
          }
        ]
      },
      {
        id: "118",
        italianWord: "uomo",
        englishTranslation: "man",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Quell'uomo è mio zio.",
            english: "That man is my uncle."
          }
        ]
      },
      {
        id: "119",
        italianWord: "pensare",
        englishTranslation: "to think",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Penso che sia una buona idea.",
            english: "I think it's a good idea."
          }
        ]
      },
      {
        id: "120",
        italianWord: "prima",
        englishTranslation: "first (feminine)",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "È la mia prima volta in Italia.",
            english: "It's my first time in Italy."
          }
        ]
      },
      {
        id: "121",
        italianWord: "ultimo",
        englishTranslation: "last",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Questo è l'ultimo giorno di scuola.",
            english: "This is the last day of school."
          }
        ]
      },
      {
        id: "122",
        italianWord: "forse",
        englishTranslation: "maybe",
        partOfSpeech: "Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "Forse verrò alla festa.",
            english: "Maybe I'll come to the party."
          }
        ]
      },
      {
        id: "123",
        italianWord: "guardare",
        englishTranslation: "to look",
        partOfSpeech: "Verb",
        difficulty: 1,
        examples: [
          {
            italian: "Guarda quella bellissima montagna!",
            english: "Look at that beautiful mountain!"
          }
        ]
      },
      {
        id: "124",
        italianWord: "fuori",
        englishTranslation: "outside",
        partOfSpeech: "Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "I bambini giocano fuori.",
            english: "The children are playing outside."
          }
        ]
      },
      {
        id: "125",
        italianWord: "sotto",
        englishTranslation: "under",
        partOfSpeech: "Preposition/Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "Il gatto è sotto il tavolo.",
            english: "The cat is under the table."
          }
        ]
      },
      {
        id: "126",
        italianWord: "fine",
        englishTranslation: "end",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "È la fine del film.",
            english: "It's the end of the movie."
          }
        ]
      },
      {
        id: "127",
        italianWord: "dentro",
        englishTranslation: "inside",
        partOfSpeech: "Adverb/Preposition",
        difficulty: 1,
        examples: [
          {
            italian: "Il libro è dentro lo zaino.",
            english: "The book is inside the backpack."
          }
        ]
      },
      {
        id: "128",
        italianWord: "andare",
        englishTranslation: "to go",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Andiamo al parco?",
            english: "Shall we go to the park?"
          }
        ]
      },
      {
        id: "129",
        italianWord: "voglia",
        englishTranslation: "desire, wish",
        partOfSpeech: "Noun",
        difficulty: 2,
        examples: [
          {
            italian: "Ho voglia di gelato.",
            english: "I feel like having ice cream."
          }
        ]
      },
      {
        id: "130",
        italianWord: "scrivere",
        englishTranslation: "to write",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Mi piace scrivere poesie.",
            english: "I like writing poems."
          }
        ]
      },
      {
        id: "131",
        italianWord: "acqua",
        englishTranslation: "water",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Bevo molta acqua ogni giorno.",
            english: "I drink a lot of water every day."
          }
        ]
      },
      {
        id: "132",
        italianWord: "passare",
        englishTranslation: "to pass",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Il tempo passa velocemente.",
            english: "Time passes quickly."
          }
        ]
      },
      {
        id: "133",
        italianWord: "paese",
        englishTranslation: "country, village",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "L'Italia è un bel paese.",
            english: "Italy is a beautiful country."
          }
        ]
      },
      {
        id: "134",
        italianWord: "vivere",
        englishTranslation: "to live",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Vivo in Italia da cinque anni.",
            english: "I've been living in Italy for five years."
          }
        ]
      },
      {
        id: "135",
        italianWord: "signore",
        englishTranslation: "mister, lord",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Buongiorno, signore.",
            english: "Good morning, sir."
          }
        ]
      },
      {
        id: "136",
        italianWord: "restare",
        englishTranslation: "to stay, to remain",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Resto a casa oggi.",
            english: "I'm staying at home today."
          }
        ]
      },
      {
        id: "137",
        italianWord: "proprio",
        englishTranslation: "really",
        partOfSpeech: "Adverb",
        difficulty: 2,
        examples: [
          {
            italian: "È proprio bello qui.",
            english: "It's really beautiful here."
          }
        ]
      },
      {
        id: "138",
        italianWord: "lasciare",
        englishTranslation: "to leave",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Devo lasciare presto.",
            english: "I have to leave soon."
          }
        ]
      },
      {
        id: "139",
        italianWord: "bambino",
        englishTranslation: "child",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Il bambino gioca nel parco.",
            english: "The child is playing in the park."
          }
        ]
      },
      {
        id: "140",
        italianWord: "problema",
        englishTranslation: "problem",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Abbiamo un problema da risolvere.",
            english: "We have a problem to solve."
          }
        ]
      },
      {
        id: "141",
        italianWord: "capire",
        englishTranslation: "to understand",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Non capisco questa frase.",
            english: "I don't understand this sentence."
          }
        ]
      },
      {
        id: "142",
        italianWord: "donna",
        englishTranslation: "woman",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Quella donna è mia zia.",
            english: "That woman is my aunt."
          }
        ]
      },
      {
        id: "143",
        italianWord: "bisogno",
        englishTranslation: "need",
        partOfSpeech: "Noun",
        difficulty: 2,
        examples: [
          {
            italian: "Ho bisogno di aiuto.",
            english: "I need help."
          }
        ]
      },
      {
        id: "144",
        italianWord: "vicino",
        englishTranslation: "near, close",
        partOfSpeech: "Adjective/Adverb",
        difficulty: 1,
        examples: [
          {
            italian: "Abito vicino alla stazione.",
            english: "I live near the station."
          }
        ]
      },
      {
        id: "145",
        italianWord: "nulla",
        englishTranslation: "nothing",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        examples: [
          {
            italian: "Non ho visto nulla.",
            english: "I didn't see anything."
          }
        ]
      },
      {
        id: "146",
        italianWord: "libro",
        englishTranslation: "book",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mi piace leggere libri.",
            english: "I like reading books."
          }
        ]
      },
      {
        id: "147",
        italianWord: "bello",
        englishTranslation: "beautiful",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Che bella giornata!",
            english: "What a beautiful day!"
          }
        ]
      },
      {
        id: "148",
        italianWord: "lungo",
        englishTranslation: "long",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "È una strada molto lunga.",
            english: "It's a very long road."
          }
        ]
      },
      {
        id: "149",
        italianWord: "prendere",
        englishTranslation: "to take",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Prendo il treno ogni mattina.",
            english: "I take the train every morning."
          }
        ]
      },
      {
        id: "150",
        italianWord: "via",
        englishTranslation: "way, street",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Abito in via Roma.",
            english: "I live on Roma Street."
          }
        ]
      },
      {
        id: "151",
        italianWord: "alto",
        englishTranslation: "tall, high",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Quella montagna è molto alta.",
            english: "That mountain is very high."
          }
        ]
      },
      {
        id: "152",
        italianWord: "amico",
        englishTranslation: "friend",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Marco è il mio migliore amico.",
            english: "Marco is my best friend."
          }
        ]
      },
      {
        id: "153",
        italianWord: "amore",
        englishTranslation: "love",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "L'amore è importante nella vita.",
            english: "Love is important in life."
          }
        ]
      },
      {
        id: "154",
        italianWord: "forza",
        englishTranslation: "strength, force",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Ci vuole forza per sollevare questo peso.",
            english: "It takes strength to lift this weight."
          }
        ]
      },
      {
        id: "155",
        italianWord: "padre",
        englishTranslation: "father",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mio padre lavora in banca.",
            english: "My father works in a bank."
          }
        ]
      },
      {
        id: "156",
        italianWord: "idea",
        englishTranslation: "idea",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Ho un'idea brillante!",
            english: "I have a brilliant idea!"
          }
        ]
      },
      {
        id: "157",
        italianWord: "lavoro",
        englishTranslation: "job",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Cerco un nuovo lavoro.",
            english: "I'm looking for a new job."
          }
        ]
      },
      {
        id: "158",
        italianWord: "credere",
        englishTranslation: "to believe",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Credo che sia vero.",
            english: "I believe it's true."
          }
        ]
      },
      {
        id: "159",
        italianWord: "figlio",
        englishTranslation: "son",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mio figlio ha dieci anni.",
            english: "My son is ten years old."
          }
        ]
      },
      {
        id: "160",
        italianWord: "gente",
        englishTranslation: "people",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "C'è molta gente in piazza.",
            english: "There are many people in the square."
          }
        ]
      },
      {
        id: "161",
        italianWord: "esempio",
        englishTranslation: "example",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Puoi farmi un esempio?",
            english: "Can you give me an example?"
          }
        ]
      },
      {
        id: "162",
        italianWord: "domanda",
        englishTranslation: "question",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Ho una domanda da farti.",
            english: "I have a question for you."
          }
        ]
      },
      {
        id: "163",
        italianWord: "occhio",
        englishTranslation: "eye",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Ha gli occhi azzurri.",
            english: "She has blue eyes."
          }
        ]
      },
      {
        id: "164",
        italianWord: "testa",
        englishTranslation: "head",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mi fa male la testa.",
            english: "My head hurts."
          }
        ]
      },
      {
        id: "165",
        italianWord: "piccolo",
        englishTranslation: "small",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Ho un piccolo cane.",
            english: "I have a small dog."
          }
        ]
      },
      {
        id: "166",
        italianWord: "corso",
        englishTranslation: "course",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Frequento un corso di italiano.",
            english: "I'm taking an Italian course."
          }
        ]
      },
      {
        id: "167",
        italianWord: "porta",
        englishTranslation: "door",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Chiudi la porta, per favore.",
            english: "Close the door, please."
          }
        ]
      },
      {
        id: "168",
        italianWord: "parola",
        englishTranslation: "word",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Non capisco questa parola.",
            english: "I don't understand this word."
          }
        ]
      },
      {
        id: "169",
        italianWord: "madre",
        englishTranslation: "mother",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mia madre cucina molto bene.",
            english: "My mother cooks very well."
          }
        ]
      },
      {
        id: "170",
        italianWord: "ricordare",
        englishTranslation: "to remember",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Non ricordo il suo nome.",
            english: "I don't remember his name."
          }
        ]
      },
      {
        id: "171",
        italianWord: "giovane",
        englishTranslation: "young",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "È una città molto giovane.",
            english: "It's a very young city."
          }
        ]
      },
      {
        id: "172",
        italianWord: "portare",
        englishTranslation: "to bring, to carry",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Puoi portare questo pacco?",
            english: "Can you carry this package?"
          }
        ]
      },
      {
        id: "173",
        italianWord: "importante",
        englishTranslation: "important",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "È un'informazione molto importante.",
            english: "It's a very important piece of information."
          }
        ]
      },
      {
        id: "174",
        italianWord: "possibile",
        englishTranslation: "possible",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "È possibile prenotare online?",
            english: "Is it possible to book online?"
          }
        ]
      },
      {
        id: "175",
        italianWord: "morire",
        englishTranslation: "to die",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Le piante moriranno senza acqua.",
            english: "The plants will die without water."
          }
        ]
      },
      {
        id: "176",
        italianWord: "voce",
        englishTranslation: "voice",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Ha una bella voce.",
            english: "She has a beautiful voice."
          }
        ]
      },
      {
        id: "177",
        italianWord: "aspettare",
        englishTranslation: "to wait",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Aspetto il bus da mezz'ora.",
            english: "I've been waiting for the bus for half an hour."
          }
        ]
      },
      {
        id: "178",
        italianWord: "difficile",
        englishTranslation: "difficult",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Questo esercizio è molto difficile.",
            english: "This exercise is very difficult."
          }
        ]
      },
      {
        id: "179",
        italianWord: "pieno",
        englishTranslation: "full",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Il ristorante è pieno stasera.",
            english: "The restaurant is full tonight."
          }
        ]
      },
      {
        id: "180",
        italianWord: "studiare",
        englishTranslation: "to study",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Devo studiare per l'esame.",
            english: "I need to study for the exam."
          }
        ]
      },
      {
        id: "181",
        italianWord: "verde",
        englishTranslation: "green",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Mi piace il colore verde.",
            english: "I like the color green."
          }
        ]
      },
      {
        id: "182",
        italianWord: "conoscere",
        englishTranslation: "to be acquainted with",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Conosco bene questa città.",
            english: "I know this city well."
          }
        ]
      },
      {
        id: "183",
        italianWord: "americano",
        englishTranslation: "American",
        partOfSpeech: "Adjective/Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Ho un amico americano.",
            english: "I have an American friend."
          }
        ]
      },
      {
        id: "184",
        italianWord: "mangiare",
        englishTranslation: "to eat",
        partOfSpeech: "Verb",
        difficulty: 1,
        examples: [
          {
            italian: "Mi piace mangiare la pizza.",
            english: "I like to eat pizza."
          }
        ]
      },
      {
        id: "185",
        italianWord: "seguito",
        englishTranslation: "following",
        partOfSpeech: "Adjective/Noun",
        difficulty: 2,
        examples: [
          {
            italian: "Il giorno seguente era domenica.",
            english: "The following day was Sunday."
          }
        ]
      },
      {
        id: "186",
        italianWord: "successo",
        englishTranslation: "success",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Il suo libro ha avuto molto successo.",
            english: "His book was very successful."
          }
        ]
      },
      {
        id: "187",
        italianWord: "sicuro",
        englishTranslation: "sure, safe",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Sei sicuro di quello che dici?",
            english: "Are you sure about what you're saying?"
          }
        ]
      },
      {
        id: "188",
        italianWord: "nessuno",
        englishTranslation: "nobody, no one",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        examples: [
          {
            italian: "Non c'è nessuno in casa.",
            english: "There's nobody at home."
          }
        ]
      },
      {
        id: "189",
        italianWord: "numero",
        englishTranslation: "number",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Qual è il tuo numero di telefono?",
            english: "What's your phone number?"
          }
        ]
      },
      {
        id: "190",
        italianWord: "bianco",
        englishTranslation: "white",
        partOfSpeech: "Adjective",
        difficulty: 1,
        examples: [
          {
            italian: "Mi piace il vino bianco.",
            english: "I like white wine."
          }
        ]
      },
      {
        id: "191",
        italianWord: "oro",
        englishTranslation: "gold",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Questo anello è d'oro.",
            english: "This ring is made of gold."
          }
        ]
      },
      {
        id: "192",
        italianWord: "fermare",
        englishTranslation: "to stop",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Devi fermare la macchina al semaforo rosso.",
            english: "You must stop the car at the red light."
          }
        ]
      },
      {
        id: "193",
        italianWord: "chiamare",
        englishTranslation: "to call",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Ti chiamo più tardi.",
            english: "I'll call you later."
          }
        ]
      },
      {
        id: "194",
        italianWord: "aprire",
        englishTranslation: "to open",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "Puoi aprire la finestra?",
            english: "Can you open the window?"
          }
        ]
      },
      {
        id: "195",
        italianWord: "arrivare",
        englishTranslation: "to arrive",
        partOfSpeech: "Verb",
        difficulty: 2,
        examples: [
          {
            italian: "A che ora arrivi?",
            english: "What time do you arrive?"
          }
        ]
      },
      {
        id: "196",
        italianWord: "pensiero",
        englishTranslation: "thought",
        partOfSpeech: "Noun",
        difficulty: 2,
        examples: [
          {
            italian: "Che bel pensiero!",
            english: "What a nice thought!"
          }
        ]
      },
      {
        id: "197",
        italianWord: "fiume",
        englishTranslation: "river",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Il fiume scorre attraverso la città.",
            english: "The river flows through the city."
          }
        ]
      },
      {
        id: "198",
        italianWord: "governo",
        englishTranslation: "government",
        partOfSpeech: "Noun",
        difficulty: 2,
        examples: [
          {
            italian: "Il governo ha approvato una nuova legge.",
            english: "The government has approved a new law."
          }
        ]
      },
      {
        id: "199",
        italianWord: "cuore",
        englishTranslation: "heart",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Il cuore è un organo vitale.",
            english: "The heart is a vital organ."
          }
        ]
      },
      {
        id: "200",
        italianWord: "mare",
        englishTranslation: "sea",
        partOfSpeech: "Noun",
        difficulty: 1,
        examples: [
          {
            italian: "Mi piace nuotare nel mare.",
            english: "I like swimming in the sea."
          }
        ]
      }
    ];
    
    export default vocabularyData;