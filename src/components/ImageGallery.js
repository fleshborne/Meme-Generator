import React from 'react';
import memes from '../data/memes.json';
import MemeImage from './MemeImage';

export default function ImageGallery(props) {
  // react fragment '<></>' works like a placeholder div

  //   this needs to display images from json data
  // render a <MemeImage/> component for each image
  // need an event for when the user selects and image, to update the state
  //   useEffect(() => {
  // called when the component loads
  // axios.get('/api/memeimages/').then((res) => {
  //     setImages(res.data)
  // });
  // ^ example for calling an api to get data after component state mounts
  //   });

  const listStyle = {
    height: '100vh',
    'overflow-y': 'scroll',
  };
  return (
    <>
      <ul style={listStyle} className='list-group'>
        {memes.map((image) => (
          <MemeImage
            state={props.state}
            setState={props.setState}
            image={image}
          />
        ))}
      </ul>
    </>
  );
}
