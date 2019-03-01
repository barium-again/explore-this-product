import React from 'react';
import styles from './mstyles.css';
import HeartSVG from '../svgComponent/heart.jsx';
import ShareSVG from '../svgComponent/share.jsx';
import CloseModalSVG from '../svgComponent/closeModal.jsx';
import Carousel from '../carouselComponent/carousel.jsx';
import InnerCarousel from './exploresModalCarousel/innerCarousel.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showHideClassName =
      this.props.modalIndex !== null
        ? styles.modalDisplayBlock
        : styles.modalDisplayNone;
    const info = this.props.lists[this.props.modalIndex];
    if (this.props.modalIndex === null) {
      return <div />;
    }
    return (
      <div className={showHideClassName} onClick={this.props.hideModal}>
        <section
          onClick={e => {
            e.stopPropagation();
          }}
          className={styles.modalMain}
        >
          <div className={styles.lightBoxHeader}>
            <span className={styles.mLooks}>Look info</span>
            <div onClick={this.props.hideModal} className={styles.close}>
              <CloseModalSVG />
            </div>
          </div>
          <div style={{ width: '913px', height: '461px' }}>
            <div className={styles.mmwrapper}>
              <div className={styles.mimageHolder}>
                <img className={styles.mimg} src={info.image} />
              </div>

              <div className={styles.minfoPanel}>
                {/* <div style={{width: '425px', height: '77px'}} ></div> */}
                <div className={styles.userInfoPanel}>
                  <div className={styles.mimgDetailHead}>
                    <div className={styles.mheaderComment}>
                      {info.headerComments}
                    </div>
                    <div className={styles.icons}>
                      <div className={styles.heartContainer}>
                        <HeartSVG />
                        <div>{Math.floor(Math.random() * 20)}</div>
                      </div>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className={styles.mgroupTime}>
                    <div>
                      in{' '}
                      <span style={{ fontWeight: 'bold' }}>
                        {' ' + info.productBrand}
                      </span>{' '}
                      |{' '}
                    </div>
                    <div style={{ marginLeft: '5px' }}>{info.date}</div>
                  </div>
                  <br />
                  <div className={styles.mcomments}>{info.comments}</div>
                </div>
                <div className={styles.userInfo}>
                  <div style={{ cursor: 'pointer' }}>
                    <img
                      src={`https://s3-us-west-1.amazonaws.com/sephoraimage/sephoraAvatar.svg`}
                    />
                  </div>
                  <div className={styles.userInfoContainer}>
                    <div className={styles.exploresUser}>{info.user}</div>
                    <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                      <div>
                        <img
                          className={styles.sephoraBrand}
                          src="https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-badge-sephora_brand.png"
                        />
                      </div>
                      <div>
                        <img
                          className={styles.rookie}
                          src="https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-engagement-rookie-01.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gallery}>
                  See this look in the Gallery >
                </div>
                <span className={styles.report}>Report</span>
              </div>
            </div>
          </div>
          <div className={styles.shopThisLookContainer}>
            <div className={styles.innerCarouselHeader}>Shop this look</div>
            <Carousel
              lists={this.props.innerCarouselLists}
              component={InnerCarousel}
              listLength={this.props.innerCarouselLists.length}
              itemDisplay={5}
              compCarouselStyles={styles}
              imageSize={-113}
              translateStart={-25}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
