import React, { Component } from 'react';
import Header from '../components/Header/Header';
import History from '../components/History/History';
import Request from '../components/Request/Request';
import Response from '../components/Response/Response';
import styles from './RESTY.css';

export default class RESTY extends Component {
  state = {

  }

  render() {

    return (
      <>
        <div className ={styles.RESTY}>
          <section className = {styles.column}>
            <Header />
            <section className = {styles.row}>
              <History />
              <section className = {styles.column}>
                <Request />
                <Response />
              </section>
            </section>
          </section>
        </div>
      </>
    );
  }
}
