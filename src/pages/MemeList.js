import React, { useEffect, useState } from 'react';
import Meme from '../components/Meme';

export default function MemeList() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    const currentImages = JSON.parse(localStorage.getItem('images')) || [];
    setMemes(currentImages);
  }, []);
  return (
    <>
      <div className='row'>
        {memes.map((meme) => (
          <div className='col-4'>
            <Meme state={meme} />
          </div>
        ))}
      </div>
    </>
  );
}
