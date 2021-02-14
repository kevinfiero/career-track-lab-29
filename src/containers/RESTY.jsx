import React, { Component } from 'react';
import Header from '../components/Header/Header';
//import History from '../components/History/History';
import Request from '../components/Request/Request';
import Response from '../components/Response/Response';
import { getResponse } from '../services/responseApi';
import styles from './RESTY.css';

export default class RESTY extends Component {
  state = {
    button: 'GET',
    url: '',
    inputField: '',
    response: {}
  }

  fetchResponse = () => {
    getResponse(
      this.state.url, 
      this.state.button, 
      this.state.inputField
    ).then(response => 
      this.setState({ response }));
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { button, url, inputField, response } = this.state;
    return (
      <>
        <div className ={styles.RESTY}>
          <section className = {styles.column}>
            <Header />
            <section className = {styles.row}>
              <section className = {styles.column}>
                <Request 
                  button={button} 
                  url={url}
                  inputField={inputField}
                  response={response}
                  onChange = {this.handleChange} 
                  onClick = {this.fetchResponse}
                />
                <Response response={response} />
              </section>
            </section>
          </section>
        </div>
      </>
    );
  }
}
