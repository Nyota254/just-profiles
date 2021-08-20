import React, { useEffect, useState } from "react";
// import Person from "./Person";
const url = "https://ti-react-test.herokuapp.com/users";

function Home() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    try {
      let response = await fetch(url);
      let newPeople = await response.json();
      setPeople(newPeople);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <h1 className="text-center">Profiles</h1>
      <div className="row">
        {people.map((person) => {
          return (
            <div className="col-md-4" key={person.id}>
              <div className="card" style={{ width: 18 + "rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name : {person.name}</li>
                  <li className="list-group-item">
                    Occupation: {person.occupation}
                  </li>
                  <li className="list-group-item">Email: {person.email}</li>
                  <li className="list-group-item">Bio: {person.bio}</li>
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
        })}
      </div>
    </>
  );
}

export default Home;
