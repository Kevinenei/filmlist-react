import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'



const GridItem = ({url,img,titulo,fecha,position = 0})=>
	<ArticleStyle className="col-md-2 " style={{animationDuration: `${300 * position}ms`}}>
	<a href={url} className="grid-item">
	    <img src={img}  alt={'pelicula de ' + titulo } className="img-fluid" />
	    <span className="grid-item-body">
	        <span className="grid-item-title">{titulo}</span>
	        <span className="grid-item-date">{fecha}</span>
	    </span>
	</a>
	</ArticleStyle>

const ArticleStyle = styled.article`
   animation: sizepopup 2s ease-in-out;
   @keyframes sizepopup {
	 	0%{
	 		opacity:0;
	 	}
	    100% {
	      transform:10;
	    }
	  }
`

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
