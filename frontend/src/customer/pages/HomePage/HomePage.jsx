import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { womens } from '../../../Data/womens'; // Ensure this path is correct

const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data={womens} sectionName={"WOMENS"}/>
          <HomeSectionCarousel data={womens} sectionName={"MENS"}/>
        </div>
      </div>
    </>
  );
};

export default HomePage;