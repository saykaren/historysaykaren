import React, { useState } from "react";
import { FamilyHistory } from "../../Data/FamilyHistory";
import HistoryCard from "./HistoryCard.js";

const HistorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [familyData, setFamilyData] = useState(FamilyHistory);
  // const [familyGenerationLevel, setFamilyGenerationLevel] = useState(400);
  const levelArray = [400, 500, 600, 700, 800, 900, 1000];

  return (
    <section>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value.toLowerCase())}
        placeholder="Search History by First Name"
        id="inputHistorySearch"
        className="input"
      />
      {/* <input
        type="number"
        value={familyGenerationLevel}
        onChange={(e) =>
          setFamilyGenerationLevel(parseInt(e.currentTarget.value))
        }
        placeholder="Search History by First Name"
        id="inputHistorySearch"
        className="input"
      /> */}
      {/* <select
        id="levelGeneration"
        name="levelGeneration"
        value={familyGenerationLevel}
        onChange={(e) =>
          setFamilyGenerationLevel(parseInt(e.currentTarget.value))
        }
      >
        <option value="400">Grandparents</option>
        <option value="500">Great Grandparents</option>
        <option value="600">Great Great Grandparents</option>
        <option value="700">Great3 Grandparents</option>
        <option value="800">Great4 Grandparents</option>
        <option value="900">Great5 Grandparents</option>
        <option value="1000">Great6 Grandparents</option>
      </select> */}

      {familyData &&
        levelArray.map((level, levelIndex) => (
          <HistoryCard
            key={levelIndex}
            familyData={familyData}
            generationLevel={level}
            searchTerm={searchTerm}
          />
        ))}
    </section>
  );
};

export default HistorySection;
