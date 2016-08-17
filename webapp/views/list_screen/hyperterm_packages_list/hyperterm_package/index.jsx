import React, { Component, PropTypes } from 'react';
import TerminalControls from 'webapp/views/shared/terminal_controls';
import styles from './styles';


export default class HypertermPackage extends Component {

  static propTypes = {
    item: PropTypes.object
  }

  render() {
    const el = (
      <div className={styles.box}>
        <TerminalControls />
        <h1 className={styles.title}>{this.props.item.name}</h1>
        <h2 className={styles.subtitle}>{this.props.item.description}</h2>
        <Keywords keywords={this.props.item.keywords} />
        <div className={styles.userRepoInfoBox}>
          <span className={styles.author}>{this.props.item.author}</span>
        </div>
      </div>
    );

    if (this.props.item.homepage) {
      return (
        <a
          href={this.props.item.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.homepageLink}
        >
          {el}
        </a>
      );
    }

    return el;
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
