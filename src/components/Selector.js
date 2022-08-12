import countriesJson from '../countries.json';
import { useState  } from 'react';

export const Selector =()=> {
    const[selectedCountry, setSelectedCountry] = useState("");
    const onCangeSelectCountry =(e)=> setSelectedCountry(e.target.value)
    const getCountryData = ()=>{
        fetch()

    }

    return(
        <div>
            <select onChange={onCangeSelectCountry}>
                { countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}
            </select>

            <option onChange={getCountryData}></option>

            {selectedCountry}

        </div>
    );
};