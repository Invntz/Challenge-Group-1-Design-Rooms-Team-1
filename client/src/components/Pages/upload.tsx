// Created by Ajithsan
// Edited by Erikas Ramanauskas

import React, { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';

const Upload: React.FC = () => {
  const [images, setImages] = useState<Array<{ url: string }>>([]);
  const [text, setText] = useState(''); // State to hold the typed text
  const [isTyping, setIsTyping] = useState(false); // State to control typing effect

  const handleImageUpload = (image: File) => {
    const imageUrl = URL.createObjectURL(image);
    const newImage = {
      url: imageUrl,
    };
    setImages((prevImages) => [newImage, ...prevImages.slice(0, 29)]); // Limit to 30 images
    setIsTyping(true); // Start the typing effect
  };

  useEffect(() => {
    if (isTyping) {
      const fullText = `The image showcases a man dressed in a traditional yet elegant outfit, exuding sophistication and cultural richness. The attire consists of a sherwani, a long coat-like garment, which is often worn during special occasions like weddings, formal events, or religious ceremonies in South Asian cultures.

The sherwani is meticulously tailored, made from a luxurious fabric with a subtle, intricate pattern that is woven into the material, giving it a textured appearance. The color is a refined shade of beige or ivory, which adds a touch of timeless elegance to the overall look. This neutral tone is versatile and classic, suitable for a variety of formal settings, while also allowing the intricate designs to stand out without being overpowering.

The sherwani features a mandarin collar, a characteristic detail of this traditional garment, which adds to its regal appearance. The collar is stiff and stands upright, framing the face and neck, lending an air of formality and dignity. The front of the sherwani is adorned with a row of ornate buttons, likely made of brass or gold-plated material, which adds a subtle yet impactful detail to the garment. The buttons are evenly spaced, running down the front of the sherwani, and their shiny surface catches the light, adding to the garment’s overall luxurious feel.

A small pocket square, in a rich burgundy or maroon color, peeks out from the breast pocket of the sherwani. This accessory not only adds a pop of color to the otherwise monochromatic outfit but also introduces a layer of sophistication and attention to detail. The deep, rich hue of the pocket square complements the lighter tone of the sherwani, creating a balanced and harmonious look.

The trousers worn beneath the sherwani are tailored to perfection, matching the color and fabric of the sherwani itself. They are slim and fitted, aligning with the contemporary style while maintaining the traditional essence of the outfit. The trousers fall neatly over a pair of mojaris, traditional Indian shoes that complete the ensemble. These shoes are made from the same or similar fabric as the sherwani, featuring ornate embroidery or embellishments that mirror the detailing on the garment. The pointed toe and slight heel of the mojaris add an extra layer of elegance, while their gold or beige tone ensures they blend seamlessly with the overall outfit.

The entire ensemble speaks to a perfect blend of tradition and modernity, combining classic elements with contemporary tailoring. The choice of accessories, from the pocket square to the mojaris, reflects a keen attention to detail and an understanding of how to elevate traditional attire to suit formal, high-profile occasions. The man’s posture and the way he carries himself in this outfit suggest confidence, grace, and an appreciation for cultural heritage, all while looking impeccably stylish.`;
      let currentIndex = -1;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText((prevText) => prevText + fullText[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 50); // Adjust the speed here (50ms per character)
    }
  }, [isTyping]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">
        Image Upload and Gallery
      </h1>
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Left side: Image Upload and Image List */}
        <div className="w-full md:w-1/3">
          <div className="p-4">
            <ImageUpload onUpload={handleImageUpload} />
          </div>
          <div className="p-4">
            <ImageList images={images} />
          </div>
        </div>

        {/* Right side: Typing Text */}
        <div className="w-full md:w-2/3 p-4">
          <div className="w-full h-full p-4 border border-gray-300 rounded-lg">
            <p className="whitespace-pre-line">{text}</p>
            {/* Display typed text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
