import React from "react";
import { data } from "./data";
import "./App.css"
import { Link } from "react-router-dom";

export const Home = () => {
    return (
      <div className="App">
        
        {data.continents.map((item) => {
          return (
            <Link to={`/continents/${item.name}`} key={item.id}>
            <div key={item.id} className="country">

              <img src={item.image} height={"150"} width={"150"} />
              <h1>{item.name}</h1>
            </div>

            </Link>
          );
        })}
      </div>
    );
  };
  