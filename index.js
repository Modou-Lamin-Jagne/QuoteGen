const quotes = [
  {
    quote:
      "Technology is a word that describes something that doesn't work yet.",
    author: 'Douglas Adams',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote: 'The future of technology is the future of humanity.',
    author: 'Ray Kurzweil',
  },
  {
    quote:
      "Technology is a gift of God. After the gift of life it is perhaps the greatest of God's gifts. It is the mother of civilizations, of arts and of sciences.",
    author: 'Freeman Dyson',
  },
  {
    quote: 'Technology has the shelf life of a banana.',
    author: 'Bill Gates',
  },
];

function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteEl = document.getElementById('quote');
  quoteEl.innerHTML = `<p class="quote">"${quote.quote}"</p>
                       <p class="author">- ${quote.author}</p>`;
}
