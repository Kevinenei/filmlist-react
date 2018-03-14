import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridItem, ListItem } from '../VistaItems';
import { Loading, Dimmer } from '../ItemsSection';

const PopularMoviesItemsSection  = (props) => {
  var noitems = ''
  if(props.loading){
    var loading = <Loading/>
  }else{
    if (props.items.length === 0) {
      var noitems =
      <div className="dimmer">
        <p>No hay Peliculas encontradas</p>
      </div>
    }else{
      if (props.type == "grid") {
        var loading = props.items.map((x,index) =>
           <GridItem
             key={index}
             url="id5.html"
             img="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
             titulo={x.name}
             fecha="October 25, 2017"
           />
           )
      }else if (props.type == "list"){
        var loading = props.items.map((x,index) =>
        <ListItem
          key={index}
          img="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
          titulo={x.name}
        />
        )
      }else{
        console.log("Parametro Type " + props.type + " invalido")
      }
    }
    }

        return(
          <section className="items-section">
              <div className="items-section-body">
                <div className="row">
                 {loading}
                 {noitems}
                </div>
              </div>
          </section>
        );

  }

PopularMoviesItemsSection.propTypes = {
  type: PropTypes.string
};

PopularMoviesItemsSection.defaultProps = {
 type: "grid"
}


export default PopularMoviesItemsSection;
