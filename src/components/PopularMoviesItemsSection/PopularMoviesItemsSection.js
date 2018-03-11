import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridItem from '../VistaItems/GridItem';
import ListItem from '../VistaItems/ListItem';

class PopularMoviesItemsSection extends Component {
constructor(props){
 super(props);
 this.state = {
 loading: true,
 items: [],
 type: this.props.type
 }
}

componentDidMount(){
setTimeout(() => {
  this.setState({ loading: false, items:this.props.items });
}, 5000);
}

render(){
	if(this.state.loading){

	var loading =   <div className="dimmer"><div className="loading"><i className="mdi mdi-loading" aria-hidden="true"></i></div></div>
	}else{
		if (this.state.type == "grid") {
			var loading = this.state.items.map((x,index) =>
	   		 <GridItem key={index} url="id5.html" img="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" titulo={x.name} fecha="October 25, 2017"/>
	   		 )
		}else if (this.state.type == "list"){
			var loading = this.state.items.map((x,index) =>
			<ListItem key={index} img="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" titulo={x.name} />
			)
		}else{
			console.log("Parametro Type " + this.state.type + " invalido")
		}
	}
    
      return(
        <section className="items-section">
            <div className="items-section-body">
              <div className="row">                  
               {loading}    
              </div>              
            </div>
        </section>
      );
  }
}

PopularMoviesItemsSection.propTypes = {
  type: PropTypes.string
};

PopularMoviesItemsSection.defaultProps = {
 type: GridItem
}


export default PopularMoviesItemsSection;