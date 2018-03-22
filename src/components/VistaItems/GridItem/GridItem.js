import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({url,img,titulo,fecha})=>
	<article className="col-md-2">
	<a href={url} className="grid-item">
	    <img src={img}  alt={'pelicula de ' + titulo } className="img-fluid" />
	    <span className="grid-item-body">
	        <span className="grid-item-title">{titulo}</span>
	        <span className="grid-item-date">{fecha}</span>
	    </span>
	</a>
	</article>


GridItem.propTypes = {
  	url: PropTypes.string.isRequired,
  	img: PropTypes.string,
	titulo: PropTypes.string.isRequired,
	fecha: PropTypes.string.isRequired
  };

 GridItem.defaultProps = {
 img: "otraurlimagennoencontrada.jpg"
} 
export default GridItem;
