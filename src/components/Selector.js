

export const Selector =({countriesJson, setSelectedCountry})=> {

    const onCangeSelectCountry =(e)=> setSelectedCountry(e.target.value)

    return(
        <div className="selector-container">
            <select onChange={onCangeSelectCountry}>
                    {countriesJson.map((country, index) => 
                        <option key={index} value={country.Slug}>{country.Country}</option>
                    )}
            </select>
        </div>
    );
};