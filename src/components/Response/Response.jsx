import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Response.css';


const Response = ({ response }) => (
  <div className = {styles.Response}>
    <ReactJson src={response} />
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired

};

export default Response;
