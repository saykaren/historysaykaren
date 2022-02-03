import React, { useState } from "react";
import { FamilyHistory } from "../../Data/FamilyHistory";
import HistoryCard from "./HistoryCard.js";
import Modal from "./Modal";

const HistorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [familyData, setFamilyData] = useState(FamilyHistory);
  const [modal, setModal] = useState(true);
  const [modalData, setModalData] = useState(1061);
  const levelArray = [400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];
  const updateModal = (newId)=>{
    setModalData(newId);
    setModal(true);
}

  return (
    <section>
      {modal && (<Modal modalData={modalData} setModal={setModal} modal={modal} familyData={familyData} updateModal={updateModal}/>)}
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
            setModalData={setModalData}
            setModal={setModal}
            updateModal={updateModal}
          />
        ))}
    </section>
  );
};

export default HistorySection;
