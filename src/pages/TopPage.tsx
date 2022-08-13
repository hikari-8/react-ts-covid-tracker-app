import { Title } from '../components/Title';
import { Selector } from '../components/Selector';
import { Results } from '../components/Results';
import { Header } from '../components/Header';
import { TopPageType } from '../types';

export const TopPage =({countriesJson, setSelectedCountry, countryData, loading}: TopPageType)=> {
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