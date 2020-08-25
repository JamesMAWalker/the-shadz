import React from 'react';
import NavItem from './nav-item.component';

import '../../styles/side-nav.styles.scss';

function SideNav() {
  return (
    <nav className='side-nav'>
        <NavItem id={1}>shop</NavItem>
        <NavItem id={0}>shop insta</NavItem>
        <NavItem id={1}>collections</NavItem>
        <NavItem id={0}>blog</NavItem>
        <NavItem id={1}>press</NavItem>
        <NavItem id={0}>faq</NavItem>
      </nav>
  );
}

export default SideNav;