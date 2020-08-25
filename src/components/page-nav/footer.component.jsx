import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NavItem from '../page-nav/nav-item.component';

import '../../styles/footer.styles.scss';

function Footer(props) {

  const links = ['mailing list', 'shipping', 'returns', 'contact', 'ethics', 'FAQ']

  return (
    <div className='footer'>
      {
        links.map(l => <NavItem key={uuidv4()} >{l}</NavItem>)
      }
    </div>
  );
}

export default Footer;