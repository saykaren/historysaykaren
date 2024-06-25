import React from "react";
import HistoryCardDetail from "./HistoryCardDetail";

const HistoryCard = ({
  familyData,
  generationLevel,
  searchTerm,
  updateModal,
}) => {
  return (
    <>
      {familyData &&
        familyData
          .filter(
            (searching) =>
              searching.firstName.toLocaleLowerCase().includes(searchTerm) ||
              searching.lastName.toLocaleLowerCase().includes(searchTerm) ||
              searching.id.toString() === searchTerm ||
              (searching.bloodline &&
                searching.bloodline.toLocaleLowerCase().includes(searchTerm))
          )
          .filter(
            (searchGenerationLevel) =>
              searchGenerationLevel.Level === generationLevel
          )
          .map((person, personIndex) => (
            <section className="historyCard">
              <HistoryCardDetail
                personIndex={personIndex}
                person={person}
                familyData={familyData}
                updateModal={updateModal}
                key={personIndex}
              />
            </section>
          ))}
    </>
  );
};

export default HistoryCard;
