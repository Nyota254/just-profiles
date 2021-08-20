import React, { useEffect, useState } from "react";
import Person from "./Person";
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
          return <Person person={person} key={person.id} />;
        })}
      </div>
    </>
  );
}

export default Home;
