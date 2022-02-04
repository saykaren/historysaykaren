import React from 'react';

const HistoryCardDetail = ({personIndex, person, familyData, updateModal }) => {
    return ( 
        <div key={personIndex} className="historyDetail">
        <section>
          <h3>
            {person.firstName}{" "}
            {person.nickname && <div> "{person.nickname}"</div>}
            {person.middleName} {person.lastName}{" "}
            {person.maidenName && <sub>(Born {person.maidenName})</sub>}
          </h3>
          <sub>sayKaren id: {person.id}</sub>
        </section>

        <section>
          <div className="historyDetailSection">
            {person.dateofBirthDateMonth && (
              <span>{person.dateofBirthDateMonth}/</span>
            )}
            {person.dateOfBirthYear && (
              <span>{person.dateOfBirthYear}</span>
            )}{" "}
            -
            {person.dateofDeathDateMonth &&
              person.dateofDeathDateMonth.length > 3 && (
                <span>{personIndex.dateofDeathDateMonth}/</span>
              )}
            {person.dateofDeathYear ? (
              <span>{person.dateofDeathYear}</span>
            ) : (
              <span>?</span>
            )}
            {person.dateofDeathYear && person.dateOfBirthYear && (
              <span>
                &#8226; Age:{" "}
                {person.dateofDeathYear - person.dateOfBirthYear}
              </span>
            )}
          </div>
          <div className="historyDetailSection">
            <h4>Birth Details</h4>
            {person.BirthCountry && (
              <div>Birth Country: {person.BirthCountry}</div>
            )}
            {person.BirthState && (
              <div>Birth State: {person.BirthState}</div>
            )}
            {person.BirthCity && (
              <div>Birth City: {person.BirthCity}</div>
            )}
          </div>
          {person.SpouseId && (
            <div className="historyDetailSection">
              {familyData
                .filter((spouseid) => spouseid.id === person.SpouseId)
                .map((personObject, personObIndex) => (
                  <div key={personObIndex} onClick={()=>updateModal(personObject.id)} className="clickable">
                    Spouse: <span>{personObject.firstName}{" "}</span>
                    {personObject.lastName}{" "}
                  </div>
                ))}
              {person.marriageDate && (
                <details>
                    <summary>Marriage Details:</summary>
                    {person.marriageDate}
                </details>
             
              )}
            </div>
          )}
          {person.childrenId && person.childrenId.length > 0 && (
            <div className="historyDetailSection">
              Bloodline Child:
              {familyData
                .filter(
                  (personFilter) =>
                    personFilter.id === parseInt(person.childrenId)
                )
                .map((details, detailsIndex) => (
                  <span key={detailsIndex} onClick={()=>updateModal(details.id)} className="clickable">
                    {details.firstName} {details.lastName}{" "}
                  </span>
                ))}{" "}
            </div>
          )}
          {(person.Father ||
            person.Mother ||
            person.MotherId ||
            person.FatherId) && (
            <div className="historyDetailSection">
              {person.Father && <div>Father: {person.Father}</div>}
              {person.Mother && <div>Mother: {person.Mother}</div>}
              {person.FatherId && (
                <>
                  {familyData
                    .filter((fatherId) => fatherId.id === person.FatherId)
                    .map((personObject, personObIndex) => (
                      <div key={personObIndex} onClick={()=>updateModal(personObject.id)} className="clickable">
                        Father: {personObject.firstName}{" "}
                        {personObject.lastName}
                      </div>
                    ))}
                </>
              )}

              {person.MotherId && (
                <>
                  {familyData
                    .filter((motherId) => motherId.id === person.MotherId)
                    .map((personObject, personObIndex) => (
                      <div key={personObIndex} onClick={()=>updateModal(personObject.id)} className="clickable">
                        Mother: {personObject.firstName}{" "}
                        {personObject.lastName}{" "}
                      </div>
                    ))}
                </>
              )}
            </div>
          )}
          {person.Siblings && person.Siblings.length >= 1 && (
            <div className="historyDetailSection">
              <details><summary>Siblings:</summary>
              
              {person.Siblings &&
                person.Siblings.length >= 1 &&
                person.Siblings.map((siblingCount, siblingIndex) => (
                  <div key={siblingIndex}>{siblingCount}</div>
                ))}
                </details>
            </div>
          )}
          {person.Notes && (person.Notes[0].length > 0) && (
            <div className="historyDetailSection">
              <details>
                <summary>Notes</summary>
                {person.Notes.map((noteItem, noteKey) => (
                  <div key={noteKey}>{noteItem}</div>
                ))}
              </details>
            </div>
          )}
        </section>
      </div>
     );
}
 
export default HistoryCardDetail;