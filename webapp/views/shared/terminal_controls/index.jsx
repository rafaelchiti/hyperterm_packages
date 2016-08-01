import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles';

export default class TerminalControls extends Component {

  render() {
    return (
      <div>
        <div className={styles.controlContainer}>
          <Control close />
        </div>
        <div className={styles.controlContainer}>
          <Control minimize />
        </div>
        <div className={styles.controlContainer}>
          <Control maximize />
        </div>
      </div>
    );
  }
}


function Control(props) {
  const classNames = classnames(
    styles.control,
    props.close && styles.controlClose,
    props.minimize && styles.controlMinimize,
    props.maximize && styles.controlMaximize
  );

  return <span className={classNames}></span>;
}

Control.propTypes = {
  close: PropTypes.bool,
  minimize: PropTypes.bool,
  maximize: PropTypes.bool
};
