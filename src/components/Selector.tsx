import { SelectorType } from "../types";

export const Selector =({countriesJson, setSelectedCountry}: SelectorType)=> {
    return(
        <div className="selector-container">
            <select onChange={(e)=> setSelectedCountry(e.target.value)}>
                    {countriesJson.map((country, index) => 
                        <option key={index} value={country.Slug}>{country.Country}</option>
                    )}
            </select>
        </div>
    );
};