// Array of quotes from Goodreads
const quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        text: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        text: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
    {
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    }
];

// DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a new quote
function displayNewQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = quote.text;
    authorText.textContent = `- ${quote.author}`;
    
    // Update tweet button
    const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

// Event Listeners
newQuoteBtn.addEventListener('click', displayNewQuote);

// Display initial quote when page loads
displayNewQuote(); 