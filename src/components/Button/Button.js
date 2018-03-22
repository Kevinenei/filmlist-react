import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type,active,icon,children})=>
  <a className={"btn btn-" + type + ' ' + active} aria-label="Profile">
		<i className={"mdi " + icon} aria-hidden="true"></i> {children}
	</a>

Button.propTypes = {
  	children: PropTypes.string,
  	icon: PropTypes.string
  };

 Button.defaultProps = {
 type: "primary",
 icon: null,
 active: "false",
 children: "Texto default"

}

export default Button;
