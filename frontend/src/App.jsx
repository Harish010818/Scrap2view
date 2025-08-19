import { useState } from 'react'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchQuotes = async () => {
    setLoader(true);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/scrape`);
    const data = await res.json();
    setQuotes(data.quotes);
    setLoader(false);
  }

  return (
    <>
      <h1>📜 Quotes Scraper</h1>
      <button onClick={fetchQuotes}>
        {loader ? "Loading..." : "Scrape Quotes"}
      </button>
      <ul>
        {quotes.map((q, i) => (
          <li key={i}>
            <blockquote>{q.text}</blockquote>
            <p>— {q.author}</p>
            <small>Tags: {q.tags.join(", ")}</small>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
