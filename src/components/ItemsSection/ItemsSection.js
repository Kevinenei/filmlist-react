import React from 'react';
import PropTypes from 'prop-types';
import { GridItem, ListItem } from '../VistaItems';
import PrimaryTitle from '../PrimaryTitle';
import Loading from './Loading';
import Dimmer from './Dimmer';
var date ="";
var titleitem = "";

const consultaundefined = (x) => {
   if(!x.x.release_date){
            date = x.x.first_air_date
            titleitem = x.x.original_name
          }else{
            date = x.x.release_date
            titleitem = x.x.original_title
    }
}

const ItemsSection  = (props) => {
  if(props.loading){
    var loading = <Loading/>
  }else{
    if (props.items.length === 0) {
      var noitems = <Dimmer>No se encontraron Peliculas</Dimmer>
    }else{
      if (props.type === "grid") {
        {
          loading = props.items.map((x,index) => {
          consultaundefined({x})
          return <GridItem
             key={index}
             url="id5.html"
             img={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + {x}.x.poster_path}
             titulo={titleitem}
             fecha={date}       
            />
        })}

      }else if (props.type === "list"){
        { loading = props.items.map((x,index) => {
        consultaundefined({x})
        return <ListItem
          key={index}
          img={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + {x}.x.poster_path}
          titulo={titleitem}
          texto={{x}.x.overview}
        />
        })}
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
