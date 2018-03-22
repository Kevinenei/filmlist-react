import React, { Component } from 'react';
import {ItemsSection} from '../ItemsSection';
import TheMovieDbApi from '../TheMovieDbApi';
import store from '../../store.js'
this.api = new TheMovieDbApi()
var data = []
this.api.getPopularMovies().then(res => {
  data  = res.data.results
})

class PopularMoviesItemsSection extends Component {
  state = {
    moviesx: [],
    isLoading: false
  }

componentDidMount () {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({
        isLoading: false,
        moviesx: data
      })
    }, 5000)
  }
  /*store.subscribe(() => {
    this.setState({
    type: store.getState().type
    })
  */
   render() {
        return(
          <ItemsSection
            title="Peliculas Mas Populares "
            items={this.state.moviesx}
            loading={this.state.isLoading}
            viewAllLink="http://google.com"
          />

        );

  }
}


export default PopularMoviesItemsSection;
