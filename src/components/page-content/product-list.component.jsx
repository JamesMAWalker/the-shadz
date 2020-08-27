import React from 'react';

import ListItem from '../products/list-item.component';

import { PRODUCT_DATA } from '../../data/data-store';

import '../../styles/product-list.styles.scss';


function ProductList(props) {

  const pageOne = PRODUCT_DATA.slice(0,6);

  return (
    <div className='product-list'>
      {
        pageOne.map(p => (
          <ListItem 
            name={p.productName} 
            photo={p.productphotos} 
            price={p.price}
          />
      ))
      }
    </div>
  );
}
    
export default ProductList;