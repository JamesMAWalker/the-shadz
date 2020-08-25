import React, { useContext } from 'react';

import { SectionContext } from '../../contexts/section.context.js';

import NavItem from './nav-item.component';
import { ReactComponent as Logo } from '../../assets/provisional-logo.svg';
import { ReactComponent as BagIcon } from '../../assets/cart-indicator--HC.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as WishlistIcon } from '../../assets/wishlist-icon.svg';
import { ReactComponent as Divider } from '../../assets/nav-divider.svg';

import '../../styles/nav-bar.styles.scss';


function NavBar(props) {
  const { changeContent } = useContext(SectionContext);
  
  const handleClick = () => {
    changeContent(0);
  }
 
  return (
     <nav className='nav'>
        <Logo onClick={handleClick} className='site-logo' />
        <ul className='nav__item-list'>
          <SearchIcon />
          <Divider />
          <WishlistIcon />
          <Divider />
          <NavItem>Account</NavItem>
          <Divider />
          <BagIcon />
        </ul>
      </nav>
  );
}

export default NavBar;