import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({photoArray, lazyLoad}) => {
  const photos = photoArray.map( (url, i) => {
    return <img className="photo" key={i} src={url} />;
  });
  
  return (
    <div>
      <button onClick={lazyLoad}>Load more</button>
      <div className='gallery'>
        { photos }
      </div>
    </div>
  );
};

export default PhotoGallery;