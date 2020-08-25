import React from 'react';

import '../../styles/image-pair.styles.scss';

function ImagePairSplash(props) {
  return (
    <div className='splash-container'>
      <img
        src={require('../../assets/media/yellow-close.png')}
        alt=''
        className='splash-left'
      />
      <img
        src={require('../../assets/media/yellow-wide.png')}
        alt=''
        className='splash-right'
      />
    </div>
  );
}

export default ImagePairSplash;