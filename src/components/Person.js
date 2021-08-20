import React from "react";

function Person({ prop }) {
  const { id, name, occupation, email, bio } = prop;

  return (
    <div className="col-md-4" key={id}>
      <div className="card" style={{ width: 18 + "rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name : {name}</li>
          <li className="list-group-item">Occupation: {occupation}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Bio: {bio}</li>
        </ul>
        <div className="card-footer">
          <div className="edit-view-icon">
            <i className="far fa-edit"></i>

            <i className="far fa-eye"></i>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Person;
