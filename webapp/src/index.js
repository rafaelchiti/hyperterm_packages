import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'webapp/assets/stylesheets/base';


class App extends Component {
  render() {
    return (
      <div>Icon <span className="glyphicon glyphicon-search"></span></div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
