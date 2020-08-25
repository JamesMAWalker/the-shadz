import React from 'react';

import '../../styles/list-item.scss';

function ListItem(props) {
  return (
    <div className='list-item'>
      <div alt='product-1' className='product-photo'></div>
      <div className='item-details'>
        <a
          href='https://www.facebook.com/shadzsunglasses/'
          className='item-title'
        >
          WAYFAR
        </a>
        <span className='price'>$25.00</span>
      </div>
    </div>
  );
}

export default ListItem;

