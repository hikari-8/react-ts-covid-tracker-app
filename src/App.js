import countriesJson from './countries.json';
import { useState ,useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { WorldPage } from './pages/WorldPage';
import './App.css';

function App() {
  const[selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({
        date: "",
        newConfirmed: "",
        totalConfirmed: "",
        newRecovered: "",
        totalRecovered: "",
  });

  const [allCountriesData, setAllCountriesData] = useState([]);


  const getCountryData = ()=>{
    fetch(`https://api.covid19api.com/country/${selectedCountry}`)
    .then(res => res.json())
    .then(data => {
      setCountryData({
        date: data[data.length - 1].Date,
        newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
        totalConfirmed: data[data.length - 1].Confirmed,
        newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
        totalRecovered: data[data.length - 1].Recovered,
      });
    })

}

useEffect(()=>{
    fetch("https://api.covid19api.com/summary")
    .then(res=>res.json())
    .then(data=>setAllCountriesData(data.Countries))
},[])

  return (
    <BrowserRouter>
      <Switch>
        {/* react-router-dom@5 */}
          <Route exact path="/">
            <TopPage countriesJson={countriesJson} 
                      setSelectedCountry={setSelectedCountry} 
                      getCountryData={getCountryData}
                      countryData={countryData}/>
          </Route>
          <Route exact path="/world">
            <WorldPage allCountriesData={allCountriesData} />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
