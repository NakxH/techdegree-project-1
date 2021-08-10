/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/* This is an array of objects that holds a quote and a source. Optional properties are citation, year and tags.*/
const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    year: 1957,
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin',
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
 * `getRandomQuote` function.
 * This function will return a random quote from the quotes array.
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function.
 *  This function prints the random quote to the browser, including all of the properties.
***/
function printQuote() {
  const randomQuote = getRandomQuote();

  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.hasOwnProperty('citation')) {
    html += `
    <span class="citation">${randomQuote.citation}</span>
    `;
  }

  if (randomQuote.hasOwnProperty('year')) {
    html += `
    <span class="year">${randomQuote.year}</span>
    `;
  }

  if (randomQuote.hasOwnProperty('tags')) {
    html += `
    <span class="tags">${randomQuote.tags}</span>
    `;
  }

  html += '</p>'

  document.getElementById('quote-box').innerHTML = html;
  setBackgroundColor();
}

/* This is where I found the information for the setInterval function.
  https://stackoverflow.com/questions/32913226/auto-refresh-page-every-30-seconds#:~:text=If%20you%20really%20want%20to,(function%20()%20%7B%20window.
  This function refreshes the printQuote function every 7000ms
*/
window.setInterval(function () {
  printQuote();
}, 7000);

// This function returns a random number between 0 and 255 
function randomColorNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

// This function calls randomColorNumber 3 times to get the r, g and b values and sets the body background color
function setBackgroundColor() {
  const r = randomColorNumber();
  const g = randomColorNumber();
  const b = randomColorNumber();

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
