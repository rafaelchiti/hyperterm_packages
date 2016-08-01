import React, { Component, PropTypes } from 'react';
import styles from './styles';


export default class HypertermPackage extends Component {

  static propTypes = {
    item: PropTypes.object
  }

  render() {
    return (
      <div className={styles.box}>
        <h1>{this.props.item.name}</h1>
        <h2>{this.props.item.description}</h2>
      </div>
    );
  }
}
