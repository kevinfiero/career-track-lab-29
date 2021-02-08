import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Request.css';


const Request = () => (
  <div className = {styles.Request}>
    <form>
      <div className="radio">
        <label>
          <input type="radio" value="GET" />
        GET
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="POST"  />
        POST
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="PUT"  />
        PUT
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="DELETE"  />
        DELETE
        </label>
      </div>
    </form>

  </div>
);

// Header.propTypes = {

// };

export default Request;
