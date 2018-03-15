import React, { Component } from 'react';
import TheMovieDbApi from '../TheMovieDbApi';

this.api = new TheMovieDbApi()
var categorias = []
this.api.getCategories().then(res => {
  categorias  = res.data.genres
})



const BarraFiltros = ()=> {     

	componentDidMount () {
  
		console.log("hola")
  	}

     render() {
       return(
      <div>
      <div className="filters-bar">
        <div className="filters-bar-left">
            <select name="filter-year" id="filter-year" className="form-control">
                <option value="">Año</option>
            </select>
            <select name="filter-sort" id="filter-sort" className="form-control">
                <option value="">Ordenar por</option>
            </select>
            <select name="filter-genre" id="filter-genre" className="form-control">
            	
              </select>          
        </div>
		        <div className="filters-bar-right">
		            <a href="peliculas-grid.html" className="btn btn-light active" aria-label="Profile">
		                <i className="mdi mdi-view-grid" aria-hidden="true"></i>
		            </a>
		            <a href="peliculas-list.html" className="btn btn-light" aria-label="Profile">
		                <i className="mdi mdi-view-list" aria-hidden="true"></i>
		            </a>
		        </div>
		    </div>
		 </div>
      )
	}
}

export default BarraFiltros;
