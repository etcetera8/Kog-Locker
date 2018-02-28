import React, { Component } from 'react';
import './PhotoGallery.css';
import { LazyBackgroundImage, LazyImage, LazyFrame } from "lazy-react";
import { photosCall } from '../../api';

export class PhotoGallery extends Component {
  constructor() {
    super();
  }

  // componentDidMount = () => {
  //   this.addEventListener('scroll', this.onScroll, false)
  // }

  // componentWillUnmount = () => {
  //   this.removeEventListener('scroll', this.onScroll, false)
  // }

  // onScroll = (event) => {
  //   console.log(this)
  // }

  photos = () => this.props.photoArray.map( (url, i) => {
    return <LazyImage onScroll = {this.onScroll} offset={1} className="photo" key={i} link={url} offset={100} />;
  });

  isInViewport() {
    var rect = document.querySelector('.more-photos').getBoundingClientRect();
    var html = document.documentElement;
    const inView = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
    console.log(inView);
    if (inView === true) {
      console.log('fire fetch');
      this.props.lazyLoad(); 
    }
    return inView;
    
  }
  
  render() {
    return (
      <div>
        <div onScroll={() => this.isInViewport()} className='gallery'>
          { this.photos() }
          <button className="more-photos" onClick={this.props.lazyLoad}>Load more</button>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;