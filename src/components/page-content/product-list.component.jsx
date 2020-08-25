import React from 'react';

import ListItem from '../products/list-item.component';

import '../../styles/product-list.styles.scss';


function ProductList(props) {
  return (
    <div className='product-list'>
      <ListItem />  
      <ListItem />  
      <ListItem />  
      <ListItem />  
      <ListItem />  
      <ListItem />  
    </div>
  );
}
    
export default ProductList;