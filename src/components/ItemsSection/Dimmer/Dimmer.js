import React from 'react'
import PropTypes from 'prop-types';

const Dimmer = ({children})=>
  <div className="dimmer">
    <p>{children}</p>
  </div>

Dimmer.propTypes = {
  	children: PropTypes.any.isRequired,
  };

export default Dimmer
