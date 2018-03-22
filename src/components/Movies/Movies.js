import React from 'react';
import BarraFiltros from '../BarraFiltros';
import PopularSeriesItemsSection from '../PopularSeriesItemsSection';

const Movies = ()=>
  <main role="main">
    <div className="py-5 bg-light">
        <div className="container">
            <h1>Películas</h1>
            <BarraFiltros/>
    		<PopularSeriesItemsSection/>
     </div>
  </div>
  </main>



export default Movies;
