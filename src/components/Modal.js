import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function Modal({ person, toggleModal, showModal, setShowModal }) {
  const [userName, setUserName] = useState(person.name);
  const [userEmail, setUserEmail] = useState(person.email);
  const [userBio, setUserBio] = useState(person.bio);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("works");
    try {
      axios.patch(`https://ti-react-test.herokuapp.com/users/${person.id}`, {
        name: userName,
        email: userEmail,
        bio: userBio,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MDBModal
      show={showModal}
      getOpenState={(e) => setShowModal(e)}
      tabIndex="-1"
    >
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{userName} Details</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleModal}
            ></MDBBtn>
          </MDBModalHeader>
          <form>
            <MDBModalBody>
              {/* name occupation email bio */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <label className="form-label" htmlFor="form4Example1">
                  {/* Name */}
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
                <label className="form-label" htmlFor="form4Example2">
                  {/* Email address */}
                </label>
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                  value={userBio}
                  onChange={(e) => {
                    setUserBio(e.target.value);
                  }}
                >
                  {/* {person.bio} */}
                </textarea>
                <label className="form-label" htmlFor="form4Example3">
                  {/* Bio */}
                </label>
              </div>
            </MDBModalBody>

            <MDBBtn type="submit" onClick={handleSubmit}>
              Save changes
            </MDBBtn>
          </form>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleModal}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

export default Modal;
