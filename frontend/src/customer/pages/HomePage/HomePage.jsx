import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { womens } from '../../../Data/womens'; // Ensure this path is correct
import { gouns } from '../../../Data/gouns';
import { dress } from '../../../Data/dress';
import { saree } from '../../../Data/saree';
import { lehengacholi } from '../../../Data/lehengacholi';
import { menShirt } from '../../../Data/nShirt';
import { jeans } from '../../../Data/jeans';
import { mens_kurta } from '../../../Data/mens_kurta';
import { men_pants } from '../../../Data/men_pants';

const HomePage = () => {
  return (
    <>
      <div className='bg-gray-100'>
     
      <div className='bg-pink-300 border'>
      <MainCarousel />
      </div>
    
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data={gouns} sectionName={"Gouns"}/>
          <HomeSectionCarousel data={womens} sectionName={"kurta"}/>
          <HomeSectionCarousel data={dress} sectionName={"Top"}/>
          <HomeSectionCarousel data={saree} sectionName={"Saree"}/>
          <HomeSectionCarousel data={lehengacholi} sectionName={"Lehenga Choli"}/>
          <HomeSectionCarousel data={menShirt} sectionName={"Shirt"}/>
          <HomeSectionCarousel data={jeans} sectionName={"Jeans"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Kurta"}/>
          <HomeSectionCarousel data={men_pants} sectionName={"Pants"}/>
        </div>
      </div>
    </>
  );
};

export default HomePage;