import React from 'react';

import { SectionProvider } from '../contexts/section.context';

import Navbar from '../components/page-nav/navbar.component';
import SideNav from '../components/page-nav/side-nav.component';
import PageContainer from '../components/page-content/page-container.component';
import Footer from '../components/page-nav/footer.component';

export default function HomePage() {
  return (
    <div className='home-page'>
        <SectionProvider>
          <Navbar />
          <div className='center-container'>
            <SideNav />
            <PageContainer />
          </div>
          <Footer />
        </SectionProvider>
      </div>
  );
}