import React from "react";
import HistoryCardDetail from "./HistoryCardDetail";

const HistoryCard = ({
  familyData,
  generationLevel,
  searchTerm,
  setModalData,
  setModal,
  updateModal,
}) => {
  return (
    <section className="historyCard">
      {familyData &&
        familyData
          .filter(
            (searching) =>
              searching.firstName.toLocaleLowerCase().includes(searchTerm) ||
              searching.lastName.toLocaleLowerCase().includes(searchTerm)
          )
          .filter(
            (searchGenerationLevel) =>
              searchGenerationLevel.Level === generationLevel
          )
          .map((person, personIndex) => (
            <HistoryCardDetail
              personIndex={personIndex}
              person={person}
              familyData={familyData}
              updateModal={updateModal}
            />
          ))}
    </section>
  );
};

export default HistoryCard;
