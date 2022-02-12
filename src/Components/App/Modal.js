import React from "react";
import { FamilyHistory } from "../../Data/FamilyHistory";
import HistoryCardDetail from "./HistoryCardDetail";

const Modal = ({
  modalData,
  modal,
  setModal,
  familyData,
  updateModal,
  myRef,
}) => {
  return (
    <>
      {modalData && (
        <div className="modal" ref={myRef}>
          {FamilyHistory &&
            FamilyHistory.filter((filterId) => filterId.id === modalData).map(
              (modalPerson, modalIndex) => (
                <HistoryCardDetail
                  personIndex={modalIndex}
                  person={modalPerson}
                  familyData={familyData}
                  updateModal={updateModal}
                  cardType={"modalCard"}
                  setModal={setModal}
                  modal={modal}
                />
              )
            )}
        </div>
      )}
    </>
  );
};

export default Modal;
