import React, { useState } from "react";
import { FamilyHistory } from "../../Data/FamilyHistory";

const HistorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [familyData, setFamilyData] = useState(FamilyHistory);

  return (
    <section>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        placeholder="Search History by First Name"
        id="inputHistorySearch"
      />
      <section className="historyCard">
        <h2>Grandparents</h2>
        {familyData &&
          familyData
            .filter((searching) =>
              searching.firstName
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            )
            .map((person, personIndex) => (
              <div key={personIndex} className="historyDetail">
                <h3>
                  {person.firstName} {person.middleName} {person.lastName}
                </h3>
                <div>sayKaren id: {person.id}</div>
                {person.dateOfBirthYear && person.dateofBirthDateMonth && (
                  <div>
                    Birth: {person.dateofBirthDateMonth}/
                    {person.dateOfBirthYear}
                  </div>
                )}
                {person.BirthCountry && (
                  <div>Birth Country: {person.BirthCountry}</div>
                )}
                {person.BirthState && (
                  <div>Birth State: {person.BirthState}</div>
                )}
                {person.Spouse && (
                  <div>
                    Spouse:{" "}
                    {familyData
                      .filter(
                        (personId) =>
                          (personId.id =
                            person.Spouse)
                      )
                      .map((details, detailsIndex) => (
                        <div key={detailsIndex}>
                          {details.firstName} {details.lastName}{" "}
                        </div>
                      ))}{" "}
                  </div>
                )}
              </div>
            ))}
      </section>
    </section>
  );
};

export default HistorySection;
