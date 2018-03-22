import React, { Component } from 'react';
import TheMovieDbApi from '../TheMovieDbApi';

var arraycategorias

const getYear = () => {
    var year = new Date().getFullYear()
    var options = []
    var x = 0
    for (var i = 1997; i <= year; i++) {
     x++
     options.push(<option key={x} value={i}>{i}</option>)
    }
    return options
}

class BarraFiltros extends Component{    
  state = {
    cat:[],
    type:'series'
  } 
  componentDidMount() {
    this.api = new TheMovieDbApi()
    if (this.state.type === 'movies') {
      arraycategorias = this.api.getCategories()
    }else if(this.state.type === 'series'){
      arraycategorias = this.api.getCategoriesSeries()
    }else{
      arraycategorias = this.api.getCategories()
      console.log('Type no encontrado en Barrafiltros (Categorias Movies por defecto)')
    }

    arraycategorias.then(res => {
      this.setState({
        cat:[res.data.genres][0]
    })
    })
  }   
  render(){
    const optionsCat = this.state.cat.map((items,i) => (
    <option key={i}>{this.state.cat[i].name}</option>
    ))

    return(
      <div>
      <div className="filters-bar">
        <div className="filters-bar-left">
            <select name="filter-year" id="filter-year" className="form-control">
                <option value="">Año</option>
                {getYear()}
              }
            </select>
            {this.state.type === 'movies' ? (
            <select name="filter-sort" id="filter-sort" className="form-control">
                <option value="">Ordenar por</option>
                <option value="popularity.asc">Populiaridad ASC</option>
                <option value="popularity.desc">Populiaridad DESC</option>
                <option value="release_date.asc">Fecha ASC</option>
                <option value="release_date.desc">Fecha ASC</option>
                <option value="revenue.asc">Ingresos ASC</option>
                <option value="revenue.desc">Ingresos DESC</option>
                <option value="primary_release_date.asc">fecha de lanzamiento primaria ASC</option>
                <option value="primary_release_date.desc">fecha de lanzamiento primaria DESC</option>
                <option value="original_title.asc">Titulo original ASC</option>
                <option value="original_title.desc">Titulo original DESC</option>
                <option value="vote_average.asc">Votaciones ASC</option>
                <option value="vote_average.desc">Votaciones DESC</option>
                <option value="vote_count.asc">Cantidad de votos ASC</option>
                <option value="vote_count.desc">Cantidad de votos DESC</option>
            </select>
            ) : (
            <select name="filter-sort" id="filter-sort" className="form-control">
              <option value="">Ordenar por</option>
              <option value="popularity.asc">Populiaridad ASC</option>
              <option value="popularity.desc">Populiaridad DESC</option>
              <option value="vote_average.asc">Votaciones ASC</option>
              <option value="vote_average.desc">Votaciones DESC</option>
              <option value="first_air_date.asc">Fecha de salida ASC</option>
              <option value="first_air_date.desc">Cantidad de votos DESC</option>
            </select>
            )} 
            <select name="filter-genre" id="filter-genre" className="form-control">
            	{optionsCat}
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
