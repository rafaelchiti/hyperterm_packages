import React, { Component, PropTypes } from 'react';
import { connect } from 'react-apollo';
import gql from 'graphql-tag';
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
  }

  render() {
    const { loading, packages } = this.props.data;

    return (
      <div className={styles.appContainer}>
        {loading && 'Loading...'}
        {!loading && <ListScreen packages={packages} />}
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
