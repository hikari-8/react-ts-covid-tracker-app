

export const Selector =(props)=> {
    const {countriesJson, setSelectedCountry, getCountryData} = props;
    const onCangeSelectCountry =(e)=> setSelectedCountry(e.target.value)

    return(
        <div>
            <select onChange={onCangeSelectCountry}>
                <option>Select A Country</option>
                    {countriesJson.map((country, index) => 
                        <option key={index} value={country.Slug}>{country.Country}</option>
                    )}
            </select>
            <button onClick={getCountryData}>Get Data</button>
        </div>
    );
};