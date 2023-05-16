import { getRandomQuote } from "./modules/utils.js";

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let newQuoteBtn = document.getElementById("new-quote");
let tweetQuoteBtn = document.getElementById("tweet-quote");

async function newQuoteGenerator() {
  try {
    quote.textContent = "Loading.....";
    author.textContent = "";

    const { newQuote, newAuthor } = await getRandomQuote();

    quote.textContent = `″${newQuote}″`;
    author.textContent = newAuthor;
  } catch (error) {
    console.log(error);
    quote.textContent = "failed to fetch a new quote";
    author.textContent = "";
  }
}

function postNewTweet() {
  const tweetText = `${quote.textContent} - ${author.textContent}`;

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  window.open(tweetURL);
}

window.addEventListener("load", newQuoteGenerator);

newQuoteBtn.addEventListener("click", newQuoteGenerator);
tweetQuoteBtn.addEventListener("click", postNewTweet);
