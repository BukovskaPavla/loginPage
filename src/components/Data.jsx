import React from "react";

import { dataJSON } from "../dataJSON";
import './Data.css'

 //tad bych si chtěla udělat fetch z API, ale nerozumim Auth server

/*  fetch(url)
 .then((response) => response.json())
 .then((data) => console.log(data))  */


const Data = () => {
  return (
    <div className="data">
      {dataJSON.map((d) => (
        <div className="person">
          <p className="person__name">{d.name}</p>
          <p>{d.email}</p>
          <p>{d.phone}</p>
          <p>{d.address}</p>
          <p>{d.about}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
