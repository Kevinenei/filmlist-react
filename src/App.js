import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Switch,Route, Link } from 'react-router-dom';

import Button from './components/Button';
import GridItem from './components/VistaItems/GridItem';
import ListItem from './components/VistaItems/ListItem';
import {ItemsSection} from './components/ItemsSection';
import ViewedItems from './components/VistaItems/ViewedItems';
import Header from './components/Header';
import PrimaryTitle from './components/PrimaryTitle';
import PopularMoviesItemsSection from './components/PopularMoviesItemsSection';

import E404 from './components/E404';

import './App.css';

var data  = [
   
  ];


class App extends Component {
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
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Button}/>
        <Route path="/peliculas/" component={ViewedItems}/>
        <Route component={E404} />
        </Switch>

           <h6>Componente MyListAddButton gato</h6>
           <Button icon="mdi-heart-outline" >
             Agregar a Mi Lista
           </Button>

           <h6>Componente Button </h6>
           <Button icon="mdi-delete">Quitar</Button>

           <h6>Componente MyListViewButton </h6>
           <Button icon="mdi-eye-outline">Marcar como vista</Button>

           <h6>Componente GridItem </h6>
           <GridItem url="id5.html" img="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" titulo="Thor: Ragnarok" fecha="October 25, 2017"/>

           <h6>Componente ListItem </h6>
           <ListItem  titulo="hola"/>
           <ListItem  />
          <PrimaryTitle>Peliculas Estreno</PrimaryTitle>
          <PopularMoviesItemsSection
            items={this.state.moviesx}
            type="grid"
            loading={this.state.isLoading}
          />

          <ItemsSection
            title="Items section pelis "
            items={this.state.moviesx}
            loading={this.state.isLoading}
            viewAllLink="http://google.com"
          />
      </div>
    );
  }
}

export default App;
