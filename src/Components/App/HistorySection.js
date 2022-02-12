import React, { useState, useRef } from "react";
import { FamilyHistory } from "../../Data/FamilyHistory";
import HistoryCard from "./HistoryCard.js";
import Modal from "./Modal";

const HistorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [familyData, setFamilyData] = useState(FamilyHistory);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(1061);
  const levelArray = [
    400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
    1700, 1800, 1900, 2000,
  ];

  const myRef = useRef(null);

  const updateModal = (newId) => {
    setModalData(newId);
    setModal(true);
  };

  return (
    <section>
      {modal && (
        <Modal
          modalData={modalData}
          setModal={setModal}
          modal={modal}
          familyData={familyData}
          updateModal={updateModal}
          myRef={myRef}
        />
      )}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value.toLowerCase())}
        placeholder="First or Last Name"
        id="inputHistorySearch"
        className="input"
      />
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
