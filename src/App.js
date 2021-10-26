import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar';
import Alerta from './components/Alerta';

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey = '6bc3d8eeeddf1c173e7643ed410d5ac0';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          <Alerta msg = {"Ciudad no encontrada"}/>
        }
      });
  }

  function onClose (id) {
    setCities( c => c.filter(city => city.id !== id));
  }
  return (
    <div className="App">
      <div className="search">
        <SearchBar onSearch={onSearch} />
      </div>

      <Cards cities = {cities} onClose = {onClose} />

    </div>
  );
}

export default App;
