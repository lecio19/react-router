import React from "react";

export default function Card({ blastoise }) {
  const { country, blastoiseTypes } = blastoise;

  return (
    <div className="card">
      <h3 className="card-country">Paese: {country}</h3>
      <div className="card-body">
        {blastoiseTypes.map((typeInfo, index) => (
          <div className="blastoise-type" key={index}>
            <h4>{typeInfo.type}</h4>
            <img src={typeInfo.photo} alt={`Immagine di ${typeInfo.type}`} className="blastoise-img"/>
          </div>
        ))}
      </div>
    </div>
  );
}