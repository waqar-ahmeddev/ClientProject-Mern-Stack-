import React from 'react';
import Header from './Header'; 
import Content from './Content'; 
import image1 from '../../assets/image1.jpeg';
import Quote from './Quote';

const BackgroundImage = () => {
  return (
    <>
      {/* Main Background Container */}
      <div 
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.45)', 
          }}
        />
      </div>
      <Header />
      <Content />
      <Quote />
    </>
  );
};

export default BackgroundImage;