import React, { Component, PropTypes } from 'react';
import HypertermPackagesList from './hyperterm_packages_list';
import SearchBar from './search_bar';
import styles from './styles';


export default class ListScreen extends Component {

  static propTypes = {
    packages: PropTypes.array,
    loadingPackages: PropTypes.bool,
    searchTerm: PropTypes.string,
    onSearchTermChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <div className={styles.searchBarContainer}>
          <SearchBar
            totalPackages={this.props.loadingPackages ? 0 : this.props.packages.length}
            term={this.props.searchTerm}
            onChange={this.props.onSearchTermChange}
          />
        </div>
        {this.props.loadingPackages && 'Loading...'}
        {!this.props.loadingPackages &&
          <HypertermPackagesList items={this.props.packages} />
        }
      </div>
    );
  }
}
