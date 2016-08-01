import React, { Component, PropTypes } from 'react';
import HypertermPackage from './hyperterm_package';

export default class HypertermPackagesList extends Component {
  static propTypes = {
    items: PropTypes.array
  }

  render() {
    const children = this.props.items.map((item, i) => (
      <HypertermPackage key={i} item={item} />
    ));

    return (
      <div>
        {children}
      </div>
    );
  }
}
