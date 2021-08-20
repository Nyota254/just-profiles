import React from "react";
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
  return (
    <MDBModal
      show={showModal}
      getOpenState={(e) => setShowModal(e)}
      tabIndex="-1"
    >
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{person.name} Details</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleModal}
            ></MDBBtn>
          </MDBModalHeader>
          <form>
            <MDBModalBody>
              {/* name occupation email bio */}
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  class="form-control"
                  value={person.name}
                />
                <label class="form-label" for="form4Example1">
                  {/* Name */}
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  class="form-control"
                  value={person.email}
                />
                <label class="form-label" for="form4Example2">
                  {/* Email address */}
                </label>
              </div>

              <div class="form-outline mb-4">
                <textarea
                  class="form-control"
                  id="form4Example3"
                  rows="4"
                  value={person.bio}
                >
                  {/* {person.bio} */}
                </textarea>
                <label class="form-label" for="form4Example3">
                  {/* Bio */}
                </label>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

export default Modal;
