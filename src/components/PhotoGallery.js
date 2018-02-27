import React, { Component } from 'react';
import './PhotoGallery.css';

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
    console.log(this.scrollWidth, this.clientWidth)
  }

  photos = () => this.props.photoArray.map( (url, i) => {
    return <img className="photo" key={i} src={url} />;
  });
  
  render() {
    return (
      <div>
        <button onClick={this.props.lazyLoad}>Load more</button>
        <div onScroll={this.onScroll} className='gallery'>
          { this.photos() }
        </div>
      </div>
    );
  }
}

export default PhotoGallery;