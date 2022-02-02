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
      </main>
      <Footer/>
    </div>
  );
};

export default App;
