
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";


export default function App() {
 
  const cards = data.map(item => {
    return (
       <Card 
       key={item.id} 
       item={item}
                //  title={item.title} 
                //  description={item.description} 
                //  price={item.price} 
                //  img={item.coverImg} 
                //  rating={item.stats.rating}
                //  review={item.stats.reviewCount}
                //  location={item.location} o
                //  openSpots={item.openSpots}
     />
    )
  })

  return(
     <div>
    
       <Navbar />
       <Hero /> 
       <section className="cards-list">
      {cards}
      </section>
      </div>
    
  )

}

;
