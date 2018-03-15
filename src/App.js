import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Switch,Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';
import Button from './components/Button';
import GridItem from './components/VistaItems/GridItem';
import ListItem from './components/VistaItems/ListItem';
import {ItemsSection} from './components/ItemsSection';
import ViewedItems from './components/VistaItems/ViewedItems';
import Header from './components/Header';
import PrimaryTitle from './components/PrimaryTitle';
import TheMovieDbApi from './components/TheMovieDbApi';
import E404 from './components/E404';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/peliculas/" component={Movies}/>
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
       
      </div>
    );
  }
}

export default App;
