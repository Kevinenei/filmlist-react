import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridItem, ListItem } from '../VistaItems';
import PrimaryTitle from '../PrimaryTitle';
import Loading from './Loading';
import Dimmer from './Dimmer';

const ItemsSection  = (props) => {
  var noitems = ''
  if(props.loading){
    var loading = <Loading/>
  }else{
    if (props.items.length === 0) {
      var noitems = <Dimmer/>
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
            <PrimaryTitle>{props.title}</PrimaryTitle>
            <div className="items-section-body">
              <div className="row">
               {loading}
               {noitems}
               <Dimmer/>
              </div>
            </div>
        </section>
      );

}

ItemsSection.propTypes = {
  type: PropTypes.string,
  title:PropTypes.string
};

ItemsSection.defaultProps = {
 type: "grid",
 title:"Titulo por Defecto (Agregar parametro)"
}


export default ItemsSection;
