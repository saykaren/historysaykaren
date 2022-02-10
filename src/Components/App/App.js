import React, { useState } from "react";
import "../Styling/App.css";
import secret from "../../Data/secret";
import HistorySection from "./HistorySection";
import Footer from "./Footer";

const App = () => {
  const [usePassword, setPassword] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h2>sayKaren's History</h2>
      </header>
      <main>
        {secret === usePassword ? (
          // {true ? (
          <HistorySection />
        ) : (
          <div className="cardHolder">
            {" "}
            <input
              type="text"
              id="password"
              placeholder="PASSWORD"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              className="input"
            />
            <div
              className="button"
              onClick={() => setPassword(inputValue.trim())}
            >
              Submit
            </div>
          </div>
        )}
        <section>
          <h3>Resources Used</h3>

          <a
            href="https://www.irishgenealogy.ie/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="historyLink"
          >
            {" "}
            Irish Genealogy
          </a>
          <br />
          <a
            href="https://www.anythinklibraries.org/research?access=All&category=53&audience=All&media=All&language=All&undefined=Apply"
            className="historyLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Anythink Library MyHeritage Access
          </a>
          <br />
          <a
            href="https://www.statueofliberty.org/statue-of-liberty/"
            target="_blank"
            rel="noopener noreferrer"
            className="historyLink"
          >
            {" "}
            Statue of Liberty Ellis Island Foundation Inc.
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
