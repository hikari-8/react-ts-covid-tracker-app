import { Title } from '../components/Title';
import { Selector } from '../components/Selector';
import { Results } from '../components/Results';

export const TopPage =(props)=> {
    return(
        <div>
            <Title />
            <Selector countriesJson={props.countriesJson} 
                        setSelectedCountry={props.setSelectedCountry} 
                        getCountryData={props.getCountryData} />
            <Results />
        </div>
    );
}