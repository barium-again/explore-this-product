import React from 'react';
import RightArrow from '../svgComponent/exploreArrowRight.jsx';
import LeftArrow from '../svgComponent/exploreArrowLeft.jsx';
import Toggle from './toggleButton.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      translateValue: -25,
      currentIndex: 0
    };

    this.leftSlide = this.leftSlide.bind(this);
    this.rightSlide = this.rightSlide.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setState({ translateValue: this.props.translateStart });
  }

  leftSlide() {
    const { itemDisplay, imageSize, translateStart } = this.props;

    if (this.state.currentIndex === 1 || this.state.currentIndex === 0) {
      this.setState({ translateValue: translateStart }, () => {
        if (this.state.currentIndex !== 0) {
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
          }));
        }
      });
    }
    if (this.state.currentIndex > 0 && this.state.currentIndex !== 1) {
      this.setState(
        prevState => ({ currentIndex: prevState.currentIndex - 1 }),
        () =>
          this.setState({
            translateValue: this.state.currentIndex * itemDisplay * imageSize
          })
      );
    }
  }

  rightSlide() {
    const { lists, listLength, itemDisplay, imageSize } = this.props;

    let x = (lists.length - (lists.length % itemDisplay)) / itemDisplay;

    if (this.state.currentIndex <= x - 1 && listLength % itemDisplay !== 0) {
      if (this.state.currentIndex < x - 1) {
        this.setState(
          {
            translateValue:
              (this.state.currentIndex + 1) * itemDisplay * imageSize
          },
          () => {
            this.setState(prevState => ({
              currentIndex: prevState.currentIndex + 1
            }));
          }
        );
      } else if (this.state.currentIndex === x - 1) {
        this.setState(
          {
            translateValue:
              ((listLength % itemDisplay) +
                itemDisplay * this.state.currentIndex) *
              imageSize
          },
          () => {
            this.setState(prevState => ({
              currentIndex: prevState.currentIndex + 1
            }));
          }
        );
      }
    }
    if (this.state.currentIndex < x - 1 && listLength % itemDisplay === 0) {
      this.setState(
        {
          translateValue:
            (this.state.currentIndex + 1) * itemDisplay * imageSize
        },
        () => {
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
          }));
        }
      );
    }
  }

  handleToggle(toggleId) {
    if (toggleId > this.state.currentIndex) {
      this.setState({ currentIndex: JSON.parse(toggleId) - 1 }, () => {
        this.rightSlide();
      });
    }

    if (toggleId < this.state.currentIndex) {
      this.setState({ currentIndex: JSON.parse(toggleId) + 1 }, () => {
        this.leftSlide();
      });
    }
  }

  render() {
    const { lists, itemDisplay, compCarouselStyles } = this.props;

    let x = (lists.length - (lists.length % itemDisplay)) / itemDisplay;

    let y;
    if (lists.length % itemDisplay !== 0) {
      y = x + 1;
    } else {
      y = x;
    }

    return (
      <div>
        <div className={compCarouselStyles.innercontainer}>
          <LeftArrow
            leftSlide={this.leftSlide}
            compCarouselStyles={compCarouselStyles}
            currentIndex={this.state.currentIndex}
          />
          <div className={compCarouselStyles.flexContainer}>
            {lists.map((list, index) => {
              return (
                <this.props.component
                  updateModalIndex={this.props.updateModalIndex}
                  key={index}
                  id={index}
                  list={list}
                  translateValue={this.state.translateValue}
                  // title = {this.props.title}
                />
              );
            })}
          </div>
          <RightArrow
            rightSlide={this.rightSlide}
            compCarouselStyles={compCarouselStyles}
            currentIndex={this.state.currentIndex}
            numberOfSlide={y}
          />
        </div>
        <div className={compCarouselStyles.toggleContainer}>
          {[...Array(y).keys()].map((id, key) => {
            return (
              <Toggle
                key={key}
                id={JSON.stringify(id)}
                currentIndex={this.state.currentIndex}
                handleToggle={this.handleToggle}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
