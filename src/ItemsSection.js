import React, { Component } from 'react';
import GridItem from './GridItem.js';

class ItemsSection extends Component {
  render() {
    var movies = [
       {
       name: "Thor Ragnarok",
       },
       {
       name: "Back to the Future",
       },
       {
       name: "Robocop",
       },
      ];

      const listarpeliculas = movies.map((x,index) =>
       <GridItem key={index} url="id5.html" img="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" titulo={x.name} fecha="October 25, 2017"/>
      )
         
      return(
        <section className="items-section">
            <div className="items-section-body">
              <div className="row">
                 { listarpeliculas }
              </div>
            </div>
        </section>
      );
  }
}


export default ItemsSection;