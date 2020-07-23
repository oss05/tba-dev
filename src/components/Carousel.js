import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import firstSlide from '../assets/at.png'
import firstSlideEng from '../assets/BannerIng.png'
import secondSlide from '../assets/carousel2020.png'
import thirdSlide from '../assets/carousel2020.png'
import at20 from '../assets/DocsTBA/2020/Actualizacion-Tributaria2020.pdf'
import at20Eng from '../assets/DocsTBA-EN/2020/Mexican-Fiscal-Update-MEXICAN-TAX-AMENDMENTS-FOR-2020.pdf'

const imagesPath = {
  mx: 'https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png',
  us: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/512px-United-kingdom_flag_icon_round.svg.png'
}

const items = [
  {
    src: firstSlide,
    altText: 'Boletin 03-19',
    caption: 'Slide 1',
    href: at20
  },
  // {
  //   src: secondSlide,
  //   altText: 'Boletin 04-19',
  //   caption: 'Slide 2',
  //   href: 'https://www.facebook.com'
  // },
  // {
  //   src: thirdSlide,
  //   altText: 'Slide 3',
  //   caption: 'Slide 3',
  //   href: 'https://www.yahoo.com'
  // }
];


class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  state = {
    open: true,
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
    this.props.handelChangeIdioma()
  }
  getImageName = () => this.state.open ? 'us' : 'mx'

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const imageName = this.getImageName();
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a href={item.href} target="_blank">
            <img src={item.src} alt={item.altText} className="carouselImage" style={{objectFit: "contain"}} onChange={this.props.handelChangeIdioma}  onClick={this.toggleImage}/> 
          </a>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
      </Carousel>
    );
  }
}


export default CustomCarousel;