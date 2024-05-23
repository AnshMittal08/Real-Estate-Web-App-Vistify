import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GlobalStyle from './components/GlobalStyle';
import Listing from './components/Listings/Listing';
// import ListView from './components/Listings/ListView';
import Sellpage from './components/SellPage/Sellpage';
import Signup from './components/Signup_Login/Signup';
import Login from './components/Signup_Login/Login';
import Contact from './components/contact/Contact';
import About from './components/About';
import TermsOfUse from './components/TermOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import Agents from './components/Agents';
import Testimonials from './components/Testimonials';
import Partnerships from './components/Partnerships';
import FlatDetail from './components/FlatDetail';
const App = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Listings" element={<Listing />} />
        <Route exact path="/Sellpage" element={<Sellpage />} />
        <Route exact path="/sign" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route path="/ListView/:id" element={<ListView />} /> */}
        <Route exact path="/terms" element={<TermsOfUse/>}/>
        <Route exact path="/privacy" element={<PrivacyPolicy/>}/>
        <Route exact path="/agents" element={<Agents/>}/>
        <Route exact path='/testimonials' element={<Testimonials/>}/>
        <Route exact path='/partnerships' element={<Partnerships/>}/>
        <Route exact path='/flat-detail' element={<FlatDetail/>}/>
      </Routes>
    </Fragment>
  </Router>
  
);

export default App;
