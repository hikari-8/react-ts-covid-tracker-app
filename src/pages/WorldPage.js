import { Card } from '../components/Card';
import { Title } from '../components/Title';

export const WorldPage =(props)=> {
    const {allCountriesData} = props;
    return(
        <>
        <Title />
        <Card allCountriesData={allCountriesData}/>
        </>
    );
}