import countriesJson from './countries.json';
import { useState  } from 'react';
import { TopPage } from './pages/TopPage';
import './App.css';

function App() {
  const[selectedCountry, setSelectedCountry] = useState("");
  const getCountryData = ()=>{
    fetch(`https://api.covid19api.com/country/${selectedCountry}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
  return (
    <div className="App">
      <TopPage countriesJson={countriesJson} 
              setSelectedCountry={setSelectedCountry} 
              getCountryData={getCountryData}/>
    </div>
  );
}

export default App;
