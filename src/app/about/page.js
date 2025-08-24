// /app/about/page.js
'use client';
import React from 'react';
import '../../styles/aboutus-page.css'

const AboutPage = () => {
  return (
    <div className='aboutus-container'>
      <div className='aboutus-container-heading'>About Us</div>
      <p className='aboutus-text'>
        Welcome to unitcave.com your go-to tool for converting between all standard units
        of measurement. You can use this tool to convert a variety of basic and derived units of measurement.
      </p>
      <p className='aboutus-text'>
        Our mission is to make unit conversion fast, intuitive, and
        accessible for everyone from students and professionals to everyday users.
      </p>
      <p className='aboutus-text'>
        Stay connected and explore more exciting features. If you have any questions or feedback, feel free to reach out to us anytime!
      </p>
    </div>
  );
};

export default AboutPage;
