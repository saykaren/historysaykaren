import React from "react";
import cancel from "../../Assets/cancel.png";
import { FamilyHistory } from "../../Data/FamilyHistory";
import HistoryCardDetail from "./HistoryCardDetail";

const Modal = ({ modalData, modal, setModal, familyData, updateModal, myRef }) => {
  return (
    <>
      {modalData && (
        <div className="modal" ref={myRef}>
          {/* <section>
            <img
              src={cancel}
              alt="minimize"
              onClick={() => setModal(!modal)}
              className="smallIcon floatRight"
              id="modal_close"
            />
          </section> */}
          {/* <span className="modal_title modal_header_title"></span> */}
          {/* <section className="modal_header"> */}
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
          {/* </section> */}
        </div>
      )}
    </>
  );
};

export default Modal;
