import React, { Component, PropTypes } from 'react';
import TerminalControls from 'webapp/views/shared/terminal_controls';
import styles from './styles';


export default class HypertermPackage extends Component {

  static propTypes = {
    item: PropTypes.object
  }

  render() {
    return (
      <div className={styles.box}>
        <TerminalControls />
        <h1 className={styles.title}>{this.props.item.name}</h1>
        <h2 className={styles.subtitle}>{this.props.item.description}</h2>
      </div>
    );
  }
}
