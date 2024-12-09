// Prodotti.js
import React from "react";
import Card from "../../components/card"; 

export default function Prodotti() {
  const blastoise = [
    {
      id: 1,
      country: "Francia",
      blastoiseTypes: [
        {
          type: "Blastoise Classico",
          photo: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",
        },
      ],
    },
    {
      id: 2,
      country: "Giappone",
      blastoiseTypes: [
        {
          type: "Blastoise di Montagna",
          photo: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009_f2.png",
        },
      ],
    },
    {
      id: 3,
      country: "Spagna",
      blastoiseTypes: [
        {
          type: "Blastoise Selvatico",
          photo: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/shiny-alolan-blastoise-in-pokemon-go.jpg",
        },
      ],
    },
  ];

  return (
    <section className="prodotti">
      <h1>Ecco i nostri Blastoise</h1>

      <div>
        {blastoises.map((blastoise) => (
          <Card key={blastoise.id} blastoise={blastoise} />
        ))}
      </div>
    </section>
  );
}