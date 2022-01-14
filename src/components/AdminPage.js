import { useState } from "react";

function AdminPage({ facade }) {
  const init = {
    name1: "",
    location: "",
    carList:[{
    name2: "",
    brand: "",
    make: "",
    year: "",
  }]
  };

  const [raceCredentials, setRaceCredentials] = useState(init);

  const addRace = (evt) => {
    evt.preventDefault();
    facade.CreateRace(
      raceCredentials.name1,
      raceCredentials.location,
      raceCredentials.name2,
      raceCredentials.brand,
      raceCredentials.make,
      raceCredentials.year
    );
    console.log(raceCredentials.name);
  };


  const onChange = (evt) => {
    setRaceCredentials({
      ...raceCredentials,
      [evt.target.id]: evt.target.value,
    });
  };


  return (
    <div>
      <div>
        <div>
          <div />
          <div>
            <h2>Add a race + car</h2>
            <form onChange={onChange}>
              <div>
                <p>
                <input
                  type="text"
                  placeholder="Name of race"
                  name="name1"
                  id="name1"
                />
                </p>
                <p>
                <p>
                  <input type="text" placeholder="Location" name="location" id="location" />
                </p>
                  <input type="text" placeholder="Name of car" name="name2" id="name2" />
                </p>
                <p>
                  <input type="text" placeholder="Brand of car" name="brand" id="brand" />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Make of car"
                    name="make"
                    id="make"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="year of release"
                    name="year"
                    id="year"
                  />
                </p>
                
                <div>
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={addRace}
                  >
                    Add Race
                  </button>
                </div>
              </div>
            </form>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
