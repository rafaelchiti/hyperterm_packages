import React, { PropTypes } from 'react';
import styles from './styles';


export default class SearchBar extends React.Component {

  static propTypes = {
    term: PropTypes.string,
    onChange: PropTypes.func,
    totalPackages: PropTypes.number
  }

  render() {
    return (
      <input placeholder={`search ${this.props.totalPackages} packages`} className={styles.input} type="text" value={this.props.term} onChange={this.props.onChange} />
    );
  }
}
