import React from 'react';
import styles from './explores.css';

class ExploresList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={styles.listbutton}
        onClick={() => this.props.updateModalIndex(this.props.id)}
        style={{
          transform: `translateX(${this.props.translateValue}px)`,
          transition: 'transform 300ms ease 0s'
        }}
      >
        <img className={styles.imgs} src={this.props.list.image} />
      </div>
    );
  }
}

export default ExploresList;
