import React, { Component } from 'react';
import Header from './Header';
import HomeSectionA from './HomeSectionA';
import Footer from './Footer';
import FlatList from "./FlatList";
import Companies from './Companies';
import Details from './Details';
import Testimonials from './Testimonials';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSectionA />
        <Details/>
        <FlatList/>
        <Companies/>
        <Testimonials/>
        <Footer />
      </div>
    );
  }
}

export default Home;
