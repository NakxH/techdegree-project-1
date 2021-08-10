/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    year: 2005,
    citation: 'Hubspot.com'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    year: 1957,
    citation: 'The Autobiography of Eleanor Roosevelt'
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin',
    year: 1777,
    citation: 'Quotations of Benjamin Franklin',
    tags: 'Education'
  },
  {
    quote: 'You will face many defeats in life, but never let yourself be defeated.',
    source: 'Maya Angelou',
    year: 1993,
    citation: 'On the Pulse of Morning'
  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa',
    year: 1977,
    citation: 'No Greater Love'
  },
  {
    quote: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. ',
    source: 'Helen Keller',
    year: 1927,
    citation: 'Light in my darkness',
    tags: 'feel-good'
  }
];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);