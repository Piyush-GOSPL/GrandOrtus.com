import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Resource from './pages/Resource/Resource';
// import Solution from './components/Solution/Solution';
import ScrollToTop from './pages/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter> 
          <ScrollToTop />
    <Resource/>
    {/* <Solution/> */}
    </BrowserRouter>
    
  );
}

export default App;
