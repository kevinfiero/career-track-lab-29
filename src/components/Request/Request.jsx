import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';


const Request = ({ button, onRadioChange }) => (
  <div className = {styles.Request}>
    <div className={styles.button}>

      <input 
        type="radio" 
        value="GET"
        checked={button === 'GET'}
        onChange={onRadioChange}
        className={styles.input}
      />
      <label className={styles.label}>GET</label>
      

    </div>
    <div className={styles.button}>
      <input 
        type="radio" 
        value="POST"  
        checked={button === 'POST'}
        onChange={onRadioChange}
        className={styles.input}
      />
      <label className={styles.label}>POST</label>

    </div>
    <div className={styles.button}>
      <input 
        type="radio" 
        value="PUT"  
        checked={button === 'PUT'}
        onChange={onRadioChange}
        className={styles.input}
      />
      <label className={styles.label}>PUT</label>

    </div>
    <div  className={styles.button}>
      <input 
        type="radio" 
        value="DELETE"
        checked={button === 'DELETE'}
        onChange={onRadioChange}
        className={styles.input}
      />
      <label className={styles.label}>DELETE</label>

    </div>


  </div>
);

Request.propTypes = {
  button: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired

};

export default Request;
