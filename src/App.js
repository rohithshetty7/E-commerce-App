import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './components/OurStore';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='ourstore' element={<OurStore />} />
            <Route path='blogs' element={<BlogPage />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
