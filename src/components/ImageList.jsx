import React from 'react';
import Image from './Image';

class ImageList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Image /></li>
          <li><Image /></li>
        </ul>
      </div>
    );
  }
}

export default ImageList;
