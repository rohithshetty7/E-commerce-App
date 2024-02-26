import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './components/OurStore';
import BlogPage from './pages/BlogPage';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import TermCOnstion from './pages/TermCOnstion';
import Shipping from './pages/Shipping';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<BlogPage />} />
            <Route path='blogs/:id' element={<SingleBlog />} />
            <Route path='cart' element={<Cart/>} />

            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='term-condition' element={<TermCOnstion />} />
            <Route path='shipping' element={<Shipping />} />
            <Route path='privacyPolicy' element={<PrivacyPolicy />} />
            <Route path='refund' element={<RefundPolicy />} />











          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
