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
        className="input"
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
                {person.dateOfBirthYear && person.dateofDeathYear && <div>Age: {person.dateofDeathYear-person.dateOfBirthYear}
                  </div>}
                <div>sayKaren id: {person.id}</div>
                {person.dateOfBirthYear && person.dateofBirthDateMonth && (
                  <div>
                    Birth: {person.dateofBirthDateMonth}/
                    {person.dateOfBirthYear}
                  </div>
                )}
                {person.dateofDeathYear && (<div>Death: {person.dateofDeathDateMonth}/{person.dateofDeathYear}</div>)}
                {person.BirthCountry && (
                  <div>Birth Country: {person.BirthCountry}</div>
                )}
                {person.BirthState && (
                  <div>Birth State: {person.BirthState}</div>
                )}
                {/* {person.Spouse && (
                  <div>
                    Spouse:{" "}
                    {familyData
                      .filter((person) => person.Spouse === person.Spouse)
                      .map((details, detailsIndex) => (
                        <div key={detailsIndex}>
                          {details.firstName} {details.lastName}{" "}
                        </div>
                      ))}{" "}
                  </div>
                )} */}
                {person.marrageDate && (
                  <div>Marriage Date: {person.marrageDate}</div>
                )}
                {person.nickname && <div> Nickname: {person.nickname}</div>}
                {person.SpouseId && (
                  <>
                    Spouse:  {familyData.filter((spouseid)=>spouseid.id === person.SpouseId).map((personObject, personObIndex)=>(
                      <div key={personObIndex}>Spouse: {personObject.firstName}  {personObject.lastName} </div>
                    ))}
                    </>
                )}
                {person.Father && <div>Father: {person.Father}</div>}
                {person.Mother && <div>Mother: {person.Mother}</div>}
                {person.FatherId && (
                  <>
                    Father {familyData.filter((fatherId)=>fatherId.id === person.FatherId).map((personObject, personObIndex)=>(
                      <div key={personObIndex}>Father: {personObject.firstName} {personObject.lastName}</div>
                    ))}
                    </>
                )}
                
                {person.MotherId && (
                  <>
                    Mother:  {familyData.filter((motherId)=>motherId.id === person.MotherId).map((personObject, personObIndex)=>(
                      <div key={personObIndex}>Mother: {personObject.firstName} {personObject.lastName} </div>
                    ))}
                    </>
                )}

              </div>
            ))}
      </section>
    </section>
  );
};

export default HistorySection;
