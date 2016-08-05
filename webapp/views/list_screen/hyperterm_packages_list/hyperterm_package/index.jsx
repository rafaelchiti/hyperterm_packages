import React, { Component, PropTypes } from 'react';
import TerminalControls from 'webapp/views/shared/terminal_controls';
import styles from './styles';


export default class HypertermPackage extends Component {

  static propTypes = {
    item: PropTypes.object
  }

  render() {
    const latestVersion = '0.1.0';
    const homepage = 'http://github.com/user/repo';
    const author = 'Juan Lopez';
    const keywords = ['hyperterm', 'nice plugin', 'window'];


    return (
      <div className={styles.box}>
        <TerminalControls />
        <h1 className={styles.title}>{this.props.item.name}</h1>
        <h2 className={styles.subtitle}>{this.props.item.description}</h2>
        <Keywords keywords={keywords} />
        <div className={styles.userRepoInfoBox}>
          <span className={styles.author}>{author}</span>
          <a href={homepage} className={styles.homePageLink}>{homepage}</a>
        </div>
      </div>
    );
  }
}


const Keywords = (props) => {
  const keywords = props.keywords.map((keyword, i) => (
    <div
      key={i}
      className={styles.keyword}
    >
      <span className={styles.keywordHash}>#</span>{keyword}
    </div>
  ));

  return (
    <div className={styles.keywordsList}>{keywords}</div>
  );
};

Keywords.propTypes = {
  keywords: PropTypes.array
};
