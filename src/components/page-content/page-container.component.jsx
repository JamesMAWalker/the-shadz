import React, { useContext } from 'react';

import { SectionContext } from '../../contexts/section.context.js';

import ImagePairSplash from '../page-content/image-pair.component';
import ProductList from '../page-content/product-list.component';


function PageContainer(props) {
  const { currSection } = useContext(SectionContext);
  console.log(currSection);

  const renderContent = (context) => {
    if (context === 'landing') {
      return <ImagePairSplash />;
    } else if (context === 'shop') {
      return <ProductList />;
    }
  };

  return (
    <div className='page-container'>
      {renderContent(currSection)}
    </div>
  );
}

export default PageContainer;


