/**
 * Heartspeak — 30 forced-choice items.
 * Each of the 10 language pairs appears exactly 3 times,
 * so every language is offered 12 times.
 *
 * Wording aims for clear, everyday English (ESL-friendly):
 * short sentences, common words, few idioms.
 */
const QUESTIONS = [
  // words vs acts
  {
    prompt: "What would make a normal day feel special?",
    a: { text: "A kind note that says something nice about you", lang: "words" },
    b: { text: "They do a hard chore for you", lang: "acts" },
  },
  {
    prompt: "After a bad day, what helps you feel loved first?",
    a: { text: "Hearing “I am proud of you. You can do this.”", lang: "words" },
    b: { text: "They cook dinner so you can rest", lang: "acts" },
  },
  {
    prompt: "How do you want someone to show they care?",
    a: { text: "They tell you clearly what you mean to them", lang: "words" },
    b: { text: "They help you with real tasks, without a big show", lang: "acts" },
  },

  // words vs gifts
  {
    prompt: "On your birthday, which gift means more to you?",
    a: { text: "They say out loud what they love about you", lang: "words" },
    b: { text: "A small present that shows they listen to you", lang: "gifts" },
  },
  {
    prompt: "When you come home from a trip, what makes you happier?",
    a: { text: "A message that says “I missed you every day”", lang: "words" },
    b: { text: "A small gift they chose just for you", lang: "gifts" },
  },
  {
    prompt: "During a busy week, which feels more romantic?",
    a: { text: "A surprise compliment", lang: "words" },
    b: { text: "A small treat left on your desk", lang: "gifts" },
  },

  // words vs time
  {
    prompt: "On a quiet evening together, what do you want most?",
    a: { text: "Talking, and hearing how they feel about you", lang: "words" },
    b: { text: "Time together with phones put away", lang: "time" },
  },
  {
    prompt: "When you feel far from someone, what helps fastest?",
    a: { text: "Hearing “We are okay. I am here.”", lang: "words" },
    b: { text: "Going for a walk with only the two of you", lang: "time" },
  },
  {
    prompt: "Which apology feels better to you?",
    a: { text: "They say what went wrong, and what you mean to them", lang: "words" },
    b: { text: "They make free time so they can be with you", lang: "time" },
  },

  // words vs touch
  {
    prompt: "In a busy room, how do you feel closest to someone?",
    a: { text: "They lean close and say something kind", lang: "words" },
    b: { text: "They hold your hand and do not let go", lang: "touch" },
  },
  {
    prompt: "Before sleep, what helps you feel calm?",
    a: { text: "Kind words about the day you shared", lang: "words" },
    b: { text: "A long hug that is not rushed", lang: "touch" },
  },
  {
    prompt: "When you celebrate good news together, what do you prefer?",
    a: { text: "They say out loud how great you are", lang: "words" },
    b: { text: "A happy hug, kiss, or high-five", lang: "touch" },
  },

  // acts vs gifts
  {
    prompt: "If someone wants to surprise you, what do you prefer?",
    a: { text: "They fix something you have put off for a long time", lang: "acts" },
    b: { text: "They bring a gift you once said you wanted", lang: "gifts" },
  },
  {
    prompt: "Which action better shows “I thought of you”?",
    a: { text: "They do a small job you mentioned earlier", lang: "acts" },
    b: { text: "They leave a wrapped gift with a short note", lang: "gifts" },
  },
  {
    prompt: "On a stressful weekend, what makes you feel supported?",
    a: { text: "They organize things so life feels easier", lang: "acts" },
    b: { text: "A comfort gift chosen for how you feel today", lang: "gifts" },
  },

  // acts vs time
  {
    prompt: "Your partner has a free afternoon. What do you hope for?",
    a: { text: "Help finishing a project that worries you", lang: "acts" },
    b: { text: "Relaxing together with no urgent plans", lang: "time" },
  },
  {
    prompt: "When life is very busy, which feels more loving?",
    a: { text: "They handle plans and chores without you asking", lang: "acts" },
    b: { text: "They save one hour that is only for you two", lang: "time" },
  },
  {
    prompt: "To feel important to someone, what do you want?",
    a: { text: "They handle useful tasks that tire you", lang: "acts" },
    b: { text: "They sit with you and give you full attention", lang: "time" },
  },

  // acts vs touch
  {
    prompt: "When you feel too stressed, what do you want first?",
    a: { text: "Help with real tasks so you have less to do", lang: "acts" },
    b: { text: "An arm around your shoulders", lang: "touch" },
  },
  {
    prompt: "When you come home late, which welcome feels warmer?",
    a: { text: "Dinner is ready and the lights are on", lang: "acts" },
    b: { text: "A quiet hug at the door", lang: "touch" },
  },
  {
    prompt: "During a hard talk, what makes you feel safer?",
    a: { text: "They offer clear next steps to help", lang: "acts" },
    b: { text: "They hold your hand while you talk", lang: "touch" },
  },

  // gifts vs time
  {
    prompt: "For an anniversary, which would you choose?",
    a: { text: "A special gift you will keep for years", lang: "gifts" },
    b: { text: "A day planned for just the two of you", lang: "time" },
  },
  {
    prompt: "After time apart, which “I missed you” feels better?",
    a: { text: "A small gift that shows they thought of you", lang: "gifts" },
    b: { text: "A slow afternoon with no rush", lang: "time" },
  },
  {
    prompt: "How does someone show they know you well?",
    a: { text: "They find the exact gift you would not buy yourself", lang: "gifts" },
    b: { text: "They protect time so you can be together", lang: "time" },
  },

  // gifts vs touch
  {
    prompt: "In a sweet moment, what feels closest?",
    a: { text: "Getting a gift chosen with care", lang: "gifts" },
    b: { text: "Sitting close so your knees touch", lang: "touch" },
  },
  {
    prompt: "Before a long day, which goodbye stays with you?",
    a: { text: "A small gift placed in your bag", lang: "gifts" },
    b: { text: "A long kiss or a touch on your forehead", lang: "touch" },
  },
  {
    prompt: "On a normal night, what makes you feel loved?",
    a: { text: "A surprise present for no special reason", lang: "gifts" },
    b: { text: "Cuddling on the couch with no plans", lang: "touch" },
  },

  // time vs touch
  {
    prompt: "On a slow Sunday, what makes you happiest?",
    a: { text: "Hours together — talking, cooking, or walking", lang: "time" },
    b: { text: "Being close in body, even if you are quiet", lang: "touch" },
  },
  {
    prompt: "When you want closeness without talking, what do you prefer?",
    a: { text: "Doing the same thing side by side", lang: "time" },
    b: { text: "A hand on your back, holding hands, or leaning close", lang: "touch" },
  },
  {
    prompt: "Which date feels most like “us”?",
    a: { text: "A long talk with nowhere else to go", lang: "time" },
    b: { text: "Dancing, walking arm in arm, or sitting close", lang: "touch" },
  },
];

const LANGUAGE_INFO = {
  words: {
    name: "Words of Affirmation",
    short: "Words",
    description:
      "Kind words mean the most to you. Praise, thanks, and clear “I love you” messages help you feel seen. Silence or harsh words can hurt for a long time.",
  },
  acts: {
    name: "Acts of Service",
    short: "Acts",
    description:
      "Love feels like help. When someone does useful things for you — chores, plans, small jobs — you feel cared for. Promises with no action feel empty.",
  },
  gifts: {
    name: "Receiving Gifts",
    short: "Gifts",
    description:
      "A thoughtful gift shows love. It is not about money. A well-chosen gift says “I was thinking of you.” The care behind the gift is what warms you.",
  },
  time: {
    name: "Quality Time",
    short: "Time",
    description:
      "Full attention is your love language. Walks, talks, and shared time without phones make you feel chosen. When someone is only half there, you can feel alone.",
  },
  touch: {
    name: "Physical Touch",
    short: "Touch",
    description:
      "Touch shows love most clearly for you: hugs, holding hands, a hand on your shoulder. Warmth and nearness calm you. Distance can feel like coldness.",
  },
};
