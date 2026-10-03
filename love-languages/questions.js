/**
 * Heartspeak — 30 forced-choice items.
 * Each of the 10 language pairs appears exactly 3 times,
 * so every language is offered 12 times.
 */
const QUESTIONS = [
  // words vs acts
  {
    prompt: "Which would make an ordinary Tuesday feel special?",
    a: { text: "A sincere note about something they admire in you", lang: "words" },
    b: { text: "Them handling a chore you were dreading", lang: "acts" },
  },
  {
    prompt: "After a rough day, what helps you feel cared for first?",
    a: { text: "Hearing “I’m proud of you — you’ve got this”", lang: "words" },
    b: { text: "Them cooking dinner so you can rest", lang: "acts" },
  },
  {
    prompt: "When someone wants to show they’re invested, you’d rather they…",
    a: { text: "Say clearly what you mean to them", lang: "words" },
    b: { text: "Show up and quietly take something off your plate", lang: "acts" },
  },

  // words vs gifts
  {
    prompt: "On your birthday, which gesture sticks with you longer?",
    a: { text: "A toast that names what they love about you", lang: "words" },
    b: { text: "A small present that proves they listen", lang: "gifts" },
  },
  {
    prompt: "Coming home from a trip, what thrills you more?",
    a: { text: "A message waiting: “Missed you every day”", lang: "words" },
    b: { text: "A thoughtful souvenir chosen just for you", lang: "gifts" },
  },
  {
    prompt: "Which feels more romantic in the middle of a busy week?",
    a: { text: "An unexpected compliment that catches you off guard", lang: "words" },
    b: { text: "Finding a little treat left on your desk", lang: "gifts" },
  },

  // words vs time
  {
    prompt: "For a quiet evening together, what do you crave?",
    a: { text: "Conversation where they tell you how they see you", lang: "words" },
    b: { text: "Uninterrupted hours with phones put away", lang: "time" },
  },
  {
    prompt: "When you feel distant, what reconnects you fastest?",
    a: { text: "Hearing the words “We’re okay — I’m here”", lang: "words" },
    b: { text: "Planning a walk with nowhere else to be", lang: "time" },
  },
  {
    prompt: "Which apology lands more deeply?",
    a: { text: "They name what went wrong and what you mean to them", lang: "words" },
    b: { text: "They clear their calendar to be fully present with you", lang: "time" },
  },

  // words vs touch
  {
    prompt: "In a crowded room, how do you feel closest to someone?",
    a: { text: "They lean in and whisper something affirming", lang: "words" },
    b: { text: "Their hand finds yours and stays", lang: "touch" },
  },
  {
    prompt: "Before sleep, what settles you most?",
    a: { text: "Soft words about the day you shared", lang: "words" },
    b: { text: "A long hug that doesn’t hurry", lang: "touch" },
  },
  {
    prompt: "When celebrating good news together, you prefer…",
    a: { text: "Them saying how amazing you are out loud", lang: "words" },
    b: { text: "An excited squeeze, kiss, or high-five that lingers", lang: "touch" },
  },

  // acts vs gifts
  {
    prompt: "If someone wants to surprise you, you’d rather they…",
    a: { text: "Fix something you’ve been putting off", lang: "acts" },
    b: { text: "Bring home a gift that fits a wish you mentioned once", lang: "gifts" },
  },
  {
    prompt: "Which “thinking of you” gesture feels truer?",
    a: { text: "They run the errand you mentioned in passing", lang: "acts" },
    b: { text: "They leave a wrapped something with a tiny note", lang: "gifts" },
  },
  {
    prompt: "On a stressful weekend, what says “I’ve got you”?",
    a: { text: "Them organizing the chaos so you can breathe", lang: "acts" },
    b: { text: "A comfort gift chosen for exactly this mood", lang: "gifts" },
  },

  // acts vs time
  {
    prompt: "A partner has a free afternoon. What do you hope for?",
    a: { text: "Help finishing a project hanging over you", lang: "acts" },
    b: { text: "Doing nothing urgent — just being together", lang: "time" },
  },
  {
    prompt: "Which feels more loving when life is hectic?",
    a: { text: "Them taking over logistics without being asked", lang: "acts" },
    b: { text: "Them protecting an hour that belongs only to you two", lang: "time" },
  },
  {
    prompt: "To feel prioritized, you’d rather someone…",
    a: { text: "Handle the practical things that drain you", lang: "acts" },
    b: { text: "Sit with you and give their full attention", lang: "time" },
  },

  // acts vs touch
  {
    prompt: "When you’re overwhelmed, what do you reach for?",
    a: { text: "Practical help that lightens the load", lang: "acts" },
    b: { text: "A steady arm around your shoulders", lang: "touch" },
  },
  {
    prompt: "Coming home late, which welcome feels warmer?",
    a: { text: "Dinner ready and the lights already on", lang: "acts" },
    b: { text: "A wordless hug at the door", lang: "touch" },
  },
  {
    prompt: "During a hard conversation, what reassures you more?",
    a: { text: "Them offering concrete next steps to help", lang: "acts" },
    b: { text: "Them holding your hand while you talk", lang: "touch" },
  },

  // gifts vs time
  {
    prompt: "For an anniversary, which would you choose?",
    a: { text: "A meaningful keepsake you’ll keep for years", lang: "gifts" },
    b: { text: "A day planned around just the two of you", lang: "time" },
  },
  {
    prompt: "Which “I missed you” lands better after time apart?",
    a: { text: "A little gift that says they thought of you afar", lang: "gifts" },
    b: { text: "A slow afternoon with nowhere else to rush", lang: "time" },
  },
  {
    prompt: "When someone knows you well, they prove it by…",
    a: { text: "Finding the exact thing you’d never buy yourself", lang: "gifts" },
    b: { text: "Remembering to protect time that is yours together", lang: "time" },
  },

  // gifts vs touch
  {
    prompt: "In a tender moment, what feels most intimate?",
    a: { text: "Receiving something chosen with care", lang: "gifts" },
    b: { text: "Sitting close enough that knees touch", lang: "touch" },
  },
  {
    prompt: "Which goodbye before a long day stays with you?",
    a: { text: "A small token slipped into your bag", lang: "gifts" },
    b: { text: "A lingering kiss or forehead touch", lang: "touch" },
  },
  {
    prompt: "To feel adored on an ordinary night, you’d pick…",
    a: { text: "A spontaneous present “just because”", lang: "gifts" },
    b: { text: "Cuddling on the couch with no agenda", lang: "touch" },
  },

  // time vs touch
  {
    prompt: "On a lazy Sunday, what fills your cup?",
    a: { text: "Hours of shared attention — talking, cooking, wandering", lang: "time" },
    b: { text: "Being physically close, even if you’re quiet", lang: "touch" },
  },
  {
    prompt: "When you want closeness without words, you prefer…",
    a: { text: "Side-by-side presence doing the same thing", lang: "time" },
    b: { text: "A hand on your back, fingers laced, a lean-in", lang: "touch" },
  },
  {
    prompt: "Which date feels most “us”?",
    a: { text: "A long conversation with nowhere to be next", lang: "time" },
    b: { text: "Dancing, walking arm-in-arm, or sitting intertwined", lang: "touch" },
  },
];

const LANGUAGE_INFO = {
  words: {
    name: "Words of Affirmation",
    short: "Words",
    description:
      "Spoken and written appreciation land deepest for you. Encouragement, gratitude, and clear “I love you”s make you feel seen — silence or criticism can sting longer than people expect.",
  },
  acts: {
    name: "Acts of Service",
    short: "Acts",
    description:
      "Love looks like help. When someone eases your load — errands, planning, the unglamorous stuff — you feel cherished. Empty promises without follow-through feel especially cold.",
  },
  gifts: {
    name: "Receiving Gifts",
    short: "Gifts",
    description:
      "Thoughtful tokens are symbols, not materialism. A well-chosen gift says “you were on my mind.” It’s the care and meaning inside the object that warm you.",
  },
  time: {
    name: "Quality Time",
    short: "Time",
    description:
      "Undivided attention is your love language. Shared focus — walks, talks, rituals without distraction — makes you feel chosen. Half-present company can feel lonelier than being alone.",
  },
  touch: {
    name: "Physical Touch",
    short: "Touch",
    description:
      "Closeness through the body speaks loudest: hugs, hand-holding, a hand on the shoulder. Warmth and nearness reassure you; distance can feel like emotional withdrawal.",
  },
};
