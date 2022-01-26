import React, { useState } from "react";
import "../Styling/App.css";
import secret from "../../Data/secret";
import HistorySection from "./HistorySection";

const App = () => {
  const [usePassword, setPassword] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h2>History</h2>
      </header>
      <main>
        {secret === usePassword ? (
        
          <HistorySection />
        ) : (
          <>
            {" "}
            <input
              type="text"
              id="password"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <div onClick={() => setPassword(inputValue)}>Button</div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
