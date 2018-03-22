import React, { Component } from 'react';
import ListItem from '../ListItem';

class ViewedItems extends Component {
  render() {
    var movies = [
       {
       name: "Thor Ragnarok",
       viewed: true,
       },
       {
       name: "Back to the Future",
       viewed: true,
       },
       {
       name: "Robocop",
       viewed: false,
       },
      ];

      let peliculasvistas = movies.filter(function(x){
       return x.viewed;
      })

      const listarpeliculas = peliculasvistas.map((x,index) =>  
        <ListItem key={index} titulo={x.name} />    
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


export default ViewedItems;
