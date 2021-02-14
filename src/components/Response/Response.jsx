import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';
import ReactJson from 'react-json-view';


const Response = ({ response }) => (
  <div className = {styles.Response}>
    <h1>Response</h1>
    { (response === '') 
      ? <div></div>
      : <ReactJson src={response}/>
    }
    
  </div>
);

Response.propTypes = {
  response: 
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])

};

export default Response;
