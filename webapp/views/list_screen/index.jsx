import React, { Component, PropTypes } from 'react';
import HypertermPackagesList from './hyperterm_packages_list';
import SearchBar from './search_bar';
import styles from './styles';


export default class ListScreen extends Component {

  static propTypes = {
    packages: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  getPackages() {
    const { packages } = this.props;
    const { searchTerm } = this.state;

    if (searchTerm === '') return packages;

    return packages.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div>
        <div className={styles.searchBarContainer}>
          <SearchBar term={this.state.searchTerm} onChange={this.handleSearchTermChange.bind(this)} />
        </div>
        <HypertermPackagesList items={this.getPackages()} />
      </div>
    );
  }
}
