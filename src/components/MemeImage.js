import React from 'react';

export default function MemeImage(props) {
  // react fragment '<></>' works like a placeholder div
  const imageStyle = {
    width: '100%',
  };
  const setImage = () => {
    props.setState({
      ...props.state,
      //   maintains current state
      currentImage: props.image,
      //   setting new values we want to change
    });
  };

  return (
    <li>
      <img
        style={imageStyle}
        src={`/images/${props.image.file}`}
        alt={`/images/${props.image.name}`}
        onClick={setImage}
      />
    </li>
  );
}
