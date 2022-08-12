import countriesJson from '../countries.json';
import { useState  } from 'react';

export const Selector =()=> {
    const[selectedCountry, setSelectedCountry] = useState("");
    const onCangeSelectCountry =(e)=> setSelectedCountry(e.target.value)
    const getCountryData = ()=>{
        fetch(`https://api.covid19api.com/country/${selectedCountry}`)
        .then(res => res.json()
        .then(data => console.log(data))
        )

    }

    return(
        <div>
            <select onChange={onCangeSelectCountry}>
                <option>Select A Country</option>
                    { countriesJson.map((country, index) => 
                        <option key={index} value={country.Slug}>{country.Country}</option>
                    )}
            </select>

            <option onChange={getCountryData}></option>
            <button onClick={getCountryData}>Get Data</button>

        </div>
    );
};