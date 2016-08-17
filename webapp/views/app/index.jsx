import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash/debounce';
import TopMenu from './top_menu';
import ListScreen from 'webapp/views/list_screen';
import styles from './styles';


class App extends Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      packages: PropTypes.array,
      refetch: PropTypes.func
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.search = debounce(this.search, 200);
  }

  search(term) {
    this.props.data.refetch({ term });
  }

  handleSearchTermChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.search(searchTerm);
  }


  render() {
    const { loading, packages } = this.props.data;

    return (
      <div className={styles.appContainer}>
        <TopMenu />
        <ListScreen
          packages={packages}
          loadingPackages={loading}
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.handleSearchTermChange.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(gql`
  query getPackages($term: String!) {
    packages(term: $term) {
      id,
      name,
      description,
      homepage,
      keywords,
      author
    }
  }
`, {
  options: () => ({ variables: { term: '' } })
})(App);
