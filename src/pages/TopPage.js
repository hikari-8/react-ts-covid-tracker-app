import { Title } from '../components/Title';
import { Selector } from '../components/Selector';
import { Results } from '../components/Results';

export const TopPage =(props)=> {
    const {countriesJson, setSelectedCountry, getCountryData, countryData}=props;
    return(
        <div className="top-page-container">
            <div>
                <Title />
                <Selector countriesJson={countriesJson} 
                            setSelectedCountry={setSelectedCountry} 
                            getCountryData={getCountryData} />
                <Results countryData={countryData}/>
            </div>
        </div>
    );
}