import React, { Component } from 'react';
import {ItemsSection} from '../ItemsSection';
import TheMovieDbApi from '../TheMovieDbApi';

this.api = new TheMovieDbApi()
var data = []
this.api.getPopularSeries().then(res => {
  data  = res.data.results
})

class PopularSeriesItemsSection extends Component {
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
   render() {
        return(
          <ItemsSection
            title="Series Mas Populares"
            items={this.state.moviesx}
            loading={this.state.isLoading}
            viewAllLink="http://google.com"
          />

        );

  }
}


export default PopularSeriesItemsSection;
