import React from "react";
import HistoryCardDetail from "./HistoryCardDetail";

const HistoryCard = ({
  familyData,
  generationLevel,
  searchTerm,
  updateModal,
}) => {
  return (
    <section className="historyCard">
      {familyData &&
        familyData
          .filter(
            (searching) =>
              searching.firstName.toLocaleLowerCase().includes(searchTerm) ||
              searching.lastName.toLocaleLowerCase().includes(searchTerm) ||
              searching.id == searchTerm ||
              (searching.bloodline && searching.bloodline.toLocaleLowerCase().includes(searchTerm))
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
              key={personIndex}
            />
          ))}
    </section>
  );
};

export default HistoryCard;
