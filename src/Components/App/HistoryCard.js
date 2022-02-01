import React from "react";

const HistoryCard = ({ familyData, generationLevel, searchTerm }) => {
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
            <div key={personIndex} className="historyDetail">
              <h3>
                {person.firstName} {person.middleName} {person.lastName}{" "}
                {person.maidenName && <sub>(Born {person.maidenName})</sub>}
              </h3>
              {person.dateOfBirthYear && person.dateofDeathYear && (
                <div>
                  Age: {person.dateofDeathYear - person.dateOfBirthYear}
                </div>
              )}
              <sub>sayKaren id: {person.id}</sub>
              {person.dateOfBirthYear && person.dateofBirthDateMonth && (
                <div>
                  Birth: {person.dateofBirthDateMonth}/{person.dateOfBirthYear}
                </div>
              )}
              {person.dateofDeathYear && (
                <div>
                  Death: {person.dateofDeathDateMonth}/{person.dateofDeathYear}
                </div>
              )}
              {person.BirthCountry && (
                <div>Birth Country: {person.BirthCountry}</div>
              )}
              {person.BirthState && <div>Birth State: {person.BirthState}</div>}
              {person.Spouse && (
                <div>
                  Spouse:
                  {familyData
                    .filter((personFilter) => personFilter.Spouse === person.Spouse)
                    .map((details, detailsIndex) => (
                      <div key={detailsIndex}>
                        {details.firstName} {details.lastName}{" "}
                      </div>
                    ))}{" "}
                </div>
              )}
              {person.childrenId && person.childrenId.length > 0 && (          
                <div>
                  Important Child: 
                  {familyData
                    .filter((personFilter) => personFilter.childrenId === person.childrenId)
                    .map((details, detailsIndex) => (
                      <span key={detailsIndex}>
                        {details.firstName} {details.lastName}{" "}
                      </span>
                    ))}{" "}
                </div>
              )}
              {person.marrageDate && (
                <div>Marriage Date: {person.marrageDate}</div>
              )}
              {person.nickname && <div> Nickname: {person.nickname}</div>}
              {person.SpouseId && (
                <>
                  {familyData
                    .filter((spouseid) => spouseid.id === person.SpouseId)
                    .map((personObject, personObIndex) => (
                      <div key={personObIndex}>
                        Spouse: {personObject.firstName} {personObject.lastName}{" "}
                      </div>
                    ))}
                </>
              )}
              {person.Father && <div>Father: {person.Father}</div>}
              {person.Mother && <div>Mother: {person.Mother}</div>}
              {person.FatherId && (
                <>
                  {familyData
                    .filter((fatherId) => fatherId.id === person.FatherId)
                    .map((personObject, personObIndex) => (
                      <div key={personObIndex}>
                        Father: {personObject.firstName} {personObject.lastName}
                      </div>
                    ))}
                </>
              )}

              {person.MotherId && (
                <>
                  {familyData
                    .filter((motherId) => motherId.id === person.MotherId)
                    .map((personObject, personObIndex) => (
                      <div key={personObIndex}>
                        Mother: {personObject.firstName} {personObject.lastName}{" "}
                      </div>
                    ))}
                </>
              )}
              <div>
                {person.Siblings && person.Siblings.length >= 1 && (
                  <>Siblings:</>
                )}
                {person.Siblings &&
                  person.Siblings.length >= 1 &&
                  person.Siblings.map((siblingCount, siblingIndex) => (
                    <div key={siblingIndex}>{siblingCount}</div>
                  ))}
              </div>
              {person.BirthCountry && (
                <div>Birth Country: {person.BirthCountry}</div>
              )}
            </div>
          ))}
    </section>
  );
};

export default HistoryCard;
