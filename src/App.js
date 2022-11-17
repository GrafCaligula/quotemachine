import React from "react";
import { useState, useEffect } from "react";
import Quotebox from "./components/Quotebox";


export default function App() {
  const [quotes, setQuotes] = useState([
    {
      quote: "",
      author: "",
    },
  ]);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    console.log("USE EFFECT 1");
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((result) => result.json())
      .then((result) => setQuotes(result.quotes));
  }, []);

  useEffect(() => {
    console.log("USE EFFECT 2");
    if (quotes.length > 0) {
      getNewQuote();
    }
  }, [quotes]);

  function getNewQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(index);
  }

  return (
    <div id="app-wrapper" className="app-wrapper">
      <Quotebox
        quote={quotes[currentQuote].quote}
        author={quotes[currentQuote].author}
        handleClick={getNewQuote}
      />      
    </div>
  );
}
