import React, { useState, useEffect } from 'react';
import Image from 'next/image';

//Yıldız değiştirelecek.Resmin alttan taşan kısmı gizlenecek.

const Contact = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div id="contact" className="w-full h-screen bg-center bg-no-repeat bg-contain flex items-start justify-center" 
    style={{ backgroundImage: `url('https://chainzoku.io/_nuxt/image/fa5785.webp')` }}
    >
   <div className="mt-20">
  <Image 
    src={currentImage} 
    alt={`Image ${currentImageIndex + 1}`} 
    width={500} 
    height={300} 
  />
</div>
    </div>
  );
};

export default Contact;