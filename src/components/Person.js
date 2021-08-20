import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Modal from "./Modal";

function Person({ person }) {
  const { name, occupation, email, bio } = person;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: 18 + "rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name : {name}</li>
          <li className="list-group-item">Occupation: {occupation}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Bio: {bio}</li>
        </ul>
        <div className="card-footer">
          <div className="edit-view-icon">
            <MDBBtn color="white" onClick={() => toggleModal()}>
              <i className="far fa-edit"></i>Edit
            </MDBBtn>
            <MDBBtn color="white" onClick={() => toggleModal()}>
              <i className="far fa-eye"></i>Details
            </MDBBtn>
          </div>
          <hr />
        </div>
      </div>
      <Modal
        toggleModal={toggleModal}
        key={person.id}
        person={person}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default Person;
