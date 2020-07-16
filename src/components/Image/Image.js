import React from 'react';

import './Image.css';

const image = props => (
  <div
    className="image"
    id={props.publicId}
    style={{
      backgroundImage: `url('${props.imageUrl}')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.left ? 'left' : 'center'
    }}
  />
);

export default image;
