import React, { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState(data.slice(0, 20));

  const displayResults = (event) => {
    let newResults = [];

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length >= 20) {
          break;
        } else {
          newResults.push(data[i]);
        }
      }
    }
    setResults(newResults);
  };

  return (
    <div className="container">
      <Search displayResults={displayResults} />
      {results.map((emoji, index) => {
        return <Line key={index} emoji={emoji} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
