import React, { Component } from 'react';
import Button from './Button.js';
import GridItem from './GridItem.js';
import ListItem from './ListItem.js';
import ItemsSection from './ItemsSection.js';
import ViewedItems from './ViewedItems.js';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
           <ItemsSection />
           <ViewedItems />


      </div>
    );
  }
}

export default App;
