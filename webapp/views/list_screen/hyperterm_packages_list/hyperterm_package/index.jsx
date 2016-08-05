import React, { Component, PropTypes } from 'react';
import TerminalControls from 'webapp/views/shared/terminal_controls';
import styles from './styles';


export default class HypertermPackage extends Component {

  static propTypes = {
    item: PropTypes.object
  }

  render() {
    return (
      <div className={styles.box}>
        <TerminalControls />
        <h1 className={styles.title}>{this.props.item.name}</h1>
        <h2 className={styles.subtitle}>{this.props.item.description}</h2>
        <Keywords keywords={this.props.item.keywords} />
        <div className={styles.userRepoInfoBox}>
          <span className={styles.author}>{this.props.item.author}</span>
          <a href={this.props.item.homepage} className={styles.homePageLink}>{this.props.item.homepage}</a>
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
