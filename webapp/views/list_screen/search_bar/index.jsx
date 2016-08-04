import React, { PropTypes } from 'react';
import styles from './styles';


export default class SearchBar extends React.Component {

  static propTypes = {
    term: PropTypes.string,
    onChange: PropTypes.func
  }

  render() {
    return (
      <input placeholder="find package..." className={styles.input} type="text" value={this.props.term} onChange={this.props.onChange} />
    );
  }
}
