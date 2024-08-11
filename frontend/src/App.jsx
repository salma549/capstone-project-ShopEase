import React from 'react'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage/HomePage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import About from './customer/components/About/About.jsx'
import Category from './customer/components/category/Category.jsx'
import Product from './customer/components/Products/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './customer/components/Cart/Cart.jsx'
import Checkout from './customer/components/Checkout/Checkout.jsx'

 


const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
        {/* <Product/> */}
        {/* <Checkout/> */}
   {/* <ProductDetails /> */}
   {/* <Cart/> */}
         <Category />
        {/* <About/>  */}
      </div>
      <Footer />
  </div>

  )
}

export default App