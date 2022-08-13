import { Title } from '../components/Title';
import { Selector } from '../components/Selector';
import { Results } from '../components/Results';
import { Header } from '../components/Header';

export const TopPage =({countriesJson, setSelectedCountry, countryData, loading})=> {
    return(
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={countriesJson} 
                            setSelectedCountry={setSelectedCountry} />
                <Results countryData={countryData} loading={loading} />
            </div>
        </div>
    );
}