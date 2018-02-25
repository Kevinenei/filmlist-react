import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
     <a className={"btn btn-" + this.props.type + ' ' + this.props.active} aria-label="Profile">
		<i className={"mdi " + this.props.icon} aria-hidden="true"></i> {this.props.title}
	 </a>
    );
  }
}

Button.propTypes = {
  	title: PropTypes.string.isRequired,
  	icon: PropTypes.string
  };

 Button.defaultProps = {
 type: "primary",
 icon: null,
 active: "false"


} 

export default Button;
