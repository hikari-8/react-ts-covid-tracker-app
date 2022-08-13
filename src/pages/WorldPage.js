import { Card } from '../components/Card';
import { Title } from '../components/Title';
import { Header } from '../components/Header';

export const WorldPage =(props)=> {
    const {allCountriesData} = props;
    return(
        <div className="world-page-container">
        <Header />
        <Title />
        <Card allCountriesData={allCountriesData}/>
        </div>
    );
}