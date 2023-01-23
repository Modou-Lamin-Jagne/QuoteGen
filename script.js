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
  {
    quote: "Education is not the learning of facts, but the training of the mind tp think",
    author: 'Albert Einstein'
  },
  {
    quote: "Learning never exhausts the mind",
    author:'Leonardo da Vinci'
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author:'Nelson Mandela'
  }
];

function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteEl = document.getElementById('quote');
  quoteEl.innerHTML = `<p class="quote">"${quote.quote}"</p>
                       <p class="author">- ${quote.author}</p>`;
}
