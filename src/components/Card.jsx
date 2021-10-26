import React from 'react';
import s from './estilos.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(props) {
  var imagen = "http://openweathermap.org/img/wn/"+props.img+"@2x.png";
  return (
    <div className={s.cards}>
      <div className={s.ubicacionBoton}><button className = {s.btnClose} onClick={props.onClose}>X</button></div>
      <div className ={s.cardContent}>
        <h1>{props.name}</h1>
        <div>
          <div>
            <h3>Min:</h3>
            <h3>{props.min}°</h3>
            <h3>|</h3>
            <h3>Max:</h3>
            <h3>{props.max}°</h3>
          </div>
          <div className ={s.ico}>
            <img src = {imagen} alt="Imagen que representa el clima actual"/>
          </div>
        </div>
      </div>
    </div>
  )
};

