import React, {useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = function() {

    const [city, setCity] = useState(null);
    const [search, setSearch ] = useState("");

    useEffect( () => {
        const fetchapi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8026d3534aa3fce55eb1b682379afd02`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }  
        fetchapi();
    },[search])

    return(
        <>
        <div className="main">

            <div className="box">
                <div className="inputData">
                    <input type="search" 
                        className="inputField"
                        placeholder="Enter City Name"
                        onChange={ (event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <div>
                    <div className="info">
                    <h1 className="location"> 
                    <i className="fas fa-street-view fa-light"></i>
                    </h1>
                    <h1 className="temp">
                    </h1>
                    <h3 className="tempmin_max">Min °C | Max :°C</h3>
                </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>
                ) : 
                (
                    <div>
                    <div className="info">
                    <h2 className="location"> 
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                    <i class="fa-solid fa-temperature-three-quarters"></i>{city.temp}°C
                    </h1>
                    <h3 className="tempmin_max">Min {city.temp_min}°C | Max :{city.temp_max}°C</h3>
                </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>
                )}
            </div>
                </div>
        </>
    )
};
export default Tempapp;