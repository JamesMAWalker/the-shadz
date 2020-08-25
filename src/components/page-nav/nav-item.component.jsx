import React, { useContext } from 'react';

import { SectionContext } from '../../contexts/section.context.js';


function NavItem({ id, children }) {
  const { changeContent } = useContext(SectionContext);
  
  const handleClick = () => {
    changeContent(id);
  };

  return <div className='nav-item' onClick={handleClick}>{children}</div>
}

export default NavItem;