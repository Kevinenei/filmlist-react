import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridItem extends Component {
  render() {
    return (
	<article className="col-md-2">
	<a href={this.props.url} className="grid-item">
	    <img src={this.props.img}  alt={'pelicula de ' + this.props.titulo } className="img-fluid" />
	    <span className="grid-item-body">
	        <span className="grid-item-title">{this.props.titulo}</span>
	        <span className="grid-item-date">{this.props.fecha}</span>
	    </span>
	</a>
	</article>
	);
  }

}

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
