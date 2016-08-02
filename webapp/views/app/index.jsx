import React, { Component, PropTypes } from 'react';
import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import HypertermPackagesList from 'webapp/views/hyperterm_packages_list';
import styles from './styles';


class App extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      packages: PropTypes.array
    })
  }
  render() {
    const { loading, packages } = this.props.data;
    return (
      <div className={styles.appContainer}>
        {loading && 'Loading...'}
        {!loading && <HypertermPackagesList items={packages} />}
      </div>
    );
  }
}

function mapQueriesToProps() {
  return {
    data: {
      query: gql`
        query {
          packages {
            id,
            name,
            description,
            homepage
          }
        }
      `
    }
  };
}

export default connect({
  mapQueriesToProps
})(App);
