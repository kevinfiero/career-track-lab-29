import React, { Component } from 'react';
import Header from '../components/Header/Header';
import History from '../components/History/History';
import Request from '../components/Request/Request';
import Response from '../components/Response/Response';
import styles from './RESTY.css';

export default class RESTY extends Component {
  state = {

    button: 'GET'

  }

  handleRadioChange = ({ target }) => {
    console.log(target.value);
    this.setState({ button: target.value });
  }

  render() {

    const { button } = this.state;

    return (
      <>
        <div className ={styles.RESTY}>
          <section className = {styles.column}>
            <Header />
            <section className = {styles.row}>
              <History />
              <section className = {styles.column}>
                <Request 
                  button={button} 
                  onRadioChange = {this.handleRadioChange} />
                <Response />
              </section>
            </section>
          </section>
        </div>
      </>
    );
  }
}
