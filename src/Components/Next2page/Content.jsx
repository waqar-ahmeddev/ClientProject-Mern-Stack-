import React from 'react';

const Content = () => {
  return (
    <div className="max-w-4xl text-white px-6 py-12 md:py-20 select-none font-sans">
      
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 font-sans leading-tight">
        49 Years of Canadian Excellence.
      </h1>

      {/* Paragraphs Wrapper */}
      <div className="space-y-6 text-lg md:text-xl font-normal text-gray-200 leading-relaxed tracking-wide">
        
        {/* First Paragraph */}
        <p>
          For nearly five decades, Thermoproof has been pushing the envelope in the fenestration industry.
        </p>

        {/* Second Paragraph */}
        <p>
          Our systems are manufactured on patented Italian production lines engineered for precision, 
          structural integrity, and seamless welds that outperform conventional fabrication methods. 
          From thermal efficiency to material sustainability, every decision is made with longevity in mind.
        </p>

        {/* Third Paragraph */}
        <p>
          Over 49 years we've refined not only products, but the standards behind them. Our commitment 
          to performance, reliability, and ongoing support remains unmatched in the window and door industry.
        </p>
        
      </div>

    </div>
  );
};

export default Content;