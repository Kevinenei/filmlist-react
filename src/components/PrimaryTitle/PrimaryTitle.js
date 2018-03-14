import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PrimaryTitle = ({children})=>
 <h1>{children}</h1>

PrimaryTitle.propTypes = {
  	children: PropTypes.any.isRequired,
  };
  
export default PrimaryTitle;
