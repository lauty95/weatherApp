import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './estilos.module.css';

function SearchBar({ onSearch }) {

  const [city, setCities] = useState("");

  const handleInputChange = function (e) {
    setCities(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCities("");
    }}>

      <div className={s.buscador} >
        <input className={`${s.inputText} form-control m-2`} type="text" placeholder="Ciudad..." value={city} onChange={handleInputChange} />
        <input type="submit" value="Agregar" className={`btn btn-outline-primary m-2`} id="button-addon2" />
      </div>
    </form>

  );
}

export default SearchBar;
