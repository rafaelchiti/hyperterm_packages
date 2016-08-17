import React from 'react';
import GithubIcon from './github_icon';

import styles from './styles.styl';


const TopMenu = () => (
  <div className={styles.container}>
    <a
      href="https://github.com/leoasis"
      target="_blank"
      rel="noopener noreferrer"
    >
      /leoasis
    </a>
    {' '}
    •
    {' '}
    <a
      href="https://github.com/rafaelchiti"
      target="_blank"
      rel="noopener noreferrer"
    >
      /rafaelchiti
    </a>
    {' '}
    •
    {' '}
    <a
      href="https://github.com/rafaelchiti/hyperterm_packages"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon size={20} />
    </a>

  </div>
);

export default TopMenu;
