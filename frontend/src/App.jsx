import React from 'react';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage.jsx';
import Category from './customer/components/category/Category.jsx';
import About from './customer/components/About/About.jsx';
import Footer from './customer/components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
        <Category />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
