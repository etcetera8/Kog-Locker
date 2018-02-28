import React, { Component } from 'react';
import './PhotoGallery.css';
import { LazyBackgroundImage, LazyImage, LazyFrame } from "lazy-react";

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

  onScroll = (event) => {
    console.log(this)
  }

  photos = () => this.props.photoArray.map( (url, i) => {
    return <LazyImage onScroll = {this.onScroll} offset={1} className="photo" key={i} link={url} offset={100} />;
  });
  
  render() {
    return (
      <div>
        <div onScroll={this.onScroll} className='gallery'>
          { this.photos() }
          <button className="more-photos" onClick={this.props.lazyLoad}>Load more</button>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;