import React, { useState, useEffect } from "react";
import {data} from "./data";
import "./App.css"
import { Link, useParams } from "react-router-dom";

export const Country = () => {

    const { continent } = useParams();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const filteredCountries = data.continents.filter((item) => {
            return item.name === continent;
        })[0].countries;
        setCountries(filteredCountries);
    }

        , [continent]);

    return (
        <div className="App">

            <div className="country">
                {countries.map((item) => {
                    return (
                         <Link  to={`/continents/${continent}/countries/${item.name}`} key={item.id}>
                            <div key={item.id} className="country">

                                <img src={item.image} height={"150"} width={"150"} />
                                <h1>{item.name}</h1>
                            </div>

                        </Link>
                    );
                }
                )}
            </div>
        </div>
    );
};



