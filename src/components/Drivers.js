import facade from "../apiFacade";
import { useState, useEffect } from "react";

function Drivers() {
  

  const [driverRace, setDriverRace] = useState("");
  const [driverRace1, setDriverRace1] = useState([
    {
      id: "",
      name: "",
      brand: "",
      make: "",
      year: ""
    },
  ]);


  const updates = (data) => {
    const carRaceList = [];
    data.map((i) => {
      carRaceList.push({
        id: i.id,
        name: i.name,
        brand: i.brand,
        make: i.make,
        year: i.year,
      });
    });
    setCarRace1(carRaceList);
    console.log(carRace);
    console.log(carRaceList);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    facade.fetchData("race/" + carRace, updates);
  };

  function handleInput(e) {
    const target = e.target;
    const value = target.value;
    setCarRace(value);
    console.log(value);
  }


  function tableRows() {
    return carRace1.map((i) => {
      return (
        <tr>
          <td>{i.id}</td>
          <td>{i.name}</td>
          <td>{i.brand}</td>
          <td>{i.make}</td>
          <td>{i.year}</td>
        </tr>
      );
    });
  }

  const handleSelect = (e) => {
    setCarRace(e);
    console.log(carRace);
  };

  const onChange = (evt) => {
    setCarRace1({
      ...carRace1,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
        <h1>Car(s) by a specific race</h1>
      <div className="input-group mb-3">
        <input
          onChange={handleInput}
          type="text"
          className="form-control"
          placeholder="Search for a race to see cars belonging to it"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Make</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>{tableRows()}</tbody>
      </table>
    </div>
  );
}

export default Drivers;
