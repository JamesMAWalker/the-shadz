import React from 'react';

import '../../styles/list-item.scss';

function ListItem(props) {

  const style = {
    transition: "all 1s",
  }

  return (
    <div
      className='list-item'
      onMouseOver={(e) => { 
        e.currentTarget.style.transition = `all 1s`;
        e.currentTarget.style.backgroundImage = `url(${props.photo[1]})`;
    }
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundImage = `none`)
      }
    >
      <img
        alt='product-1'
        className='product-photo'
        src={props.photo[0]}
        // onMouseOver={e => e.currentTarget.src = props.photo[1]}
        // onMouseOut={e => e.currentTarget.src = props.photo[0]}
        // src={require('../../assets/products/product-thumbs/3-plain.jpg')}
      />
      <div />
      <div className='item-details'>
        <a
          href='https://www.facebook.com/shadzsunglasses/'
          className='item-title'
        >
          {props.name}
        </a>
        <span className='price'>$25.00</span>
      </div>
    </div>
  );
}

export default ListItem;

