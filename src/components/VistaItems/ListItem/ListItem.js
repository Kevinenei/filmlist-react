import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';


const ListItem = ({img,titulo,texto})=>
      <div className="list-item">
        <div className="list-item-img">
            <img src={img} alt={titulo} className="img-fluid" />
        </div>
        <div className="list-item-body">
            <h3 className="list-item-title">{titulo}</h3>
            <div className="list-item-description">
                <p>{texto}</p>
            </div>
            <div className="list-item-actions">
            <Button icon="mdi-heart-outline">Agregar a Mi Lista</Button>
            </div>
        </div>
    </div>

ListItem.propTypes = {
  img: PropTypes.string,
  titulo: PropTypes.string,
  texto: PropTypes.string
  };

 ListItem.defaultProps = {
 img: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
 titulo: "Sin titulo",
 texto: "Sin descripcion"
}
export default ListItem;
