import React from 'react';
import Card from './Card';
import s from './estilos.module.css';

export default function Cards({cities, onClose}) {

  if(!cities){
    return <h1>No hay ciudades</h1>
  } else {
    return (<div className={s.container}>{
      cities.map(city =>
        <Card
        max = {city.max}
        min = {city.min}
        name = {city.name}
        img = {city.img}
        onClose = {() => onClose(city.id)}
        id = {city.id}
        key = {city.id}
        />
      )
    
    }</div>)
  }

};