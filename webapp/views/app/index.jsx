import React, { Component, PropTypes } from 'react';
import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash/debounce';
import TopMenu from './top_menu';
import ListScreen from 'webapp/views/list_screen';
import styles from './styles';


class App extends Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      packages: PropTypes.array
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.search = debounce(this.search, 200);
  }

  handleSearchTermChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.search(searchTerm);
  }

  search(term) {
    this.props.data.refetch({ term });
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

function mapQueriesToProps() {
  return {
    data: {
      query: gql`
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
      `,
      variables: {
        term: '',
      }
    }
  };
}

export default connect({
  mapQueriesToProps
})(App);
