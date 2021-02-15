import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request = ({ button, url, inputField, onChange, onClick }) => (
  <div className = {styles.Request}>
    <div className = {styles.row}>
      <div className={styles.center}>
        <div className={styles.radiobutton}>
          <input 
            type="radio" 
            name="button"
            value="GET"
            checked={button === 'GET'}
            onChange={onChange}
            className={styles.input}
          />
          <label className={styles.label}>GET</label>
        </div>
        <div className={styles.radiobutton}>
          <input 
            type="radio" 
            name="button"
            value="POST"  
            checked={button === 'POST'}
            onChange={onChange}
            className={styles.input}
          />
          <label className={styles.label}>POST</label>
        </div>
        <div className={styles.radiobutton}>
          <input 
            type="radio" 
            name="button"
            value="PUT"  
            checked={button === 'PUT'}
            onChange={onChange}
            className={styles.input}
          />
          <label className={styles.label}>PUT</label>
        </div>
        <div className={styles.radiobutton}>
          <input 
            type="radio" 
            name="button"
            value="DELETE"
            checked={button === 'DELETE'}
            onChange={onChange}
            className={styles.input}
          />
          <label className={styles.label}>DELETE</label>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          <input 
            type="text" 
            name="url" 
            value={url} 
            onChange={onChange} 
            className={styles.urlinput}
          />
          <button type="button" 
            onClick={onClick} 
            className={styles.submitbutton}>
            Submit
          </button>
        </div>
        <textarea 
          name="inputField" 
          value={inputField} 
          onChange={onChange} 
          className={styles.textinput}/>
      </div>
    </div>
  </div>
);

Request.propTypes = {
  button: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  inputField: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Request;
