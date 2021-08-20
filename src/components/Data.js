import React, { useEffect, useState } from "react";
import Home from "./Home";

//https://ti-react-test.herokuapp.com/users
const url = "https://ti-react-test.herokuapp.com/users";

function Data() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    try {
      let response = await fetch(url);
      let newPeople = await response.json();
      console.log(newPeople);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
}

export default Data;
