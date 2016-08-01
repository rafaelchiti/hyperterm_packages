import React, { Component, PropTypes } from 'react';
import HypertermPackage from './hyperterm_package';
import styles from './styles';


export default class HypertermPackagesList extends Component {
  static propTypes = {
    items: PropTypes.array
  }

  render() {
    const children = this.props.items.map((item, i) => (
      <div key={i} className={styles.listItem}>
        <HypertermPackage item={item} />
      </div>
    ));

    return (
      <div>
        {children}
      </div>
    );
  }
}
