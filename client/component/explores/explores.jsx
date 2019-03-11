import React from 'react';
import axios from 'axios';
import styles from './explores.css';
import ExploresList from './exploresList.jsx';
import Carousel from '../carouselComponent/carousel.jsx';
import Modal from '../exploresModal/Modal.jsx';
import Checkbox from '../svgComponent/checkbox.jsx';
import QuestionBubble from '../svgComponent/questionBubble.jsx';
import Videos from '../videos/videos.jsx';
import Articles from '../articles/articles.jsx';

class Explores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        {
          exploresLists: '',
          videosLists: '',
          articlesLists: ''
        }
      ],
      modalIndex: null,
      checkedBox: false
    };
    this.fetchData = this.fetchData.bind(this);
    this.updateModalIndex = this.updateModalIndex.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.checkBox = this.checkBox.bind(this);
  }

  componentDidMount() {
    this.fetchData(Math.floor(Math.random() * 1e7) + 1);
  }

  fetchData(id) {
    axios
      .get(`/explores/${id}`)
      .then(data => this.setState({ lists: [data.data] }))
      .catch(err => console.error(err));
  }

  updateModalIndex(index) {
    this.setState({ modalIndex: index });
  }

  closeModal() {
    this.setState({ modalIndex: null });
  }

  checkBox() {
    this.setState({ checkedBox: !this.state.checkedBox });
  }

  render() {
    return (
      <div>
        <div className={styles.topDivider} />
        {this.state.lists[0].exploresLists === '' ? (
          <div />
        ) : (
          <div className={styles.exploreContainer}>
            <div className={styles.head0}>Explore This Product</div>
            <div className={styles.container}>
              <div className={styles.head1}>
                <div className={styles.looks}>
                  Looks {'(' + this.state.lists[0].exploresLists.length + ')'}
                </div>
                <div
                  style={{ width: '18px', height: '18px', alignSelf: 'center' }}
                >
                  <Checkbox
                    checkBox={this.checkBox}
                    checkedBox={this.state.checkedBox}
                  />
                </div>
                <div className={styles.showLooks}>Show looks from my</div>
                <img
                  className={styles.beautyMatch}
                  src={`https://s3-us-west-1.amazonaws.com/sephoraimage/BeautyMatchIcon.png`}
                />
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    margin: '3px',
                    alignSelf: 'center'
                  }}
                >
                  <QuestionBubble />
                </div>
              </div>
              <div className={styles.carouselContainer}>
                <Carousel
                  updateModalIndex={this.updateModalIndex}
                  lists={this.state.lists[0].exploresLists}
                  component={ExploresList}
                  listLength={this.state.lists[0].exploresLists.length}
                  itemDisplay={5}
                  compCarouselStyles={styles}
                  imageSize={-189.5}
                  translateStart={-25}
                />
              </div>
            </div>
            <Modal
              lists={this.state.lists[0].exploresLists}
              modalIndex={this.state.modalIndex}
              hideModal={this.closeModal}
              innerCarouselLists={this.state.lists[0].innerCarousel}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '1076px',
                  height: '250px',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  marginTop: '35px',
                  justifyContent: 'space-between',
                  alignSelf: 'center'
                }}
              >
                <Videos lists={this.state.lists[0].videosLists} />
                <Articles lists={this.state.lists[0].articlesLists} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Explores;
