import React, { Component } from 'react';
import HypertermPackagesList from 'webapp/views/hyperterm_packages_list';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <HypertermPackagesList
          items={items}
        />
      </div>
    );
  }
}



const items = [
  {
    name: 'hyperterm-material',
    githubUrl: 'github.com/dperrera/hyperterm-material',
    description: 'A material inspired theme for hyperterm.'
  },
  {
    name: 'hyperterm-dibdabs',
    githubUrl: 'https://github.com/supercrabtree/hyperterm-dibdabs',
    description: 'Add dibdabs to your hyperterm tabs'
  }
];
