import React, { useEffect, useState } from "react";
import axios from "axios";

function Selects() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cities?city=")
      .then((resp) => setCities(resp.data.response))
      .catch((error) => console.log(error));
  }, []);


  const showOptions = (cityItem) => {
    return <option value={cityItem.value}>{cityItem.city}</option>;
  };

  return (
    <form>
      <select>
        <option>Select City</option>
        {cities.map(showOptions)}
      </select>
    </form>
  );
}

export default Selects;