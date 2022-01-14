import facade from "../apiFacade";
import { useState, useEffect } from "react";

function Owners() {
  const [allRaces, setAllRaces] = useState([
    { id: "", name: "", location: "", date: ""},
  ]);



  const updates = (data) => {
    const allRacesList = [];
    data.map((i) => {
      allRacesList.push({
        id: i.id, name: i.name, location: i.location, date: i.date
      });
    });
    setAllRaces(allRacesList);
    console.log(allRacesList);
  };

  
   

  useEffect(() => {
    facade.fetchData("user/all", updates);
  }, [facade]);



  function tableRows() {
    return allRaces.map((i) => {
      return (
        <tr>
          <td>{i.id}</td>
          <td>{i.name}</td>
          <td>{i.location}</td>
          <td>{i.date}</td>
        </tr>
      );
    });
  }


  return (
    <div>
      <h1>All the races</h1>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>{tableRows()}</tbody>
      </table>


    </div>
  );
}

export default Owners;
