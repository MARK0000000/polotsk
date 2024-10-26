import React, { useState } from 'react';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox.css';

export default function ImageCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    Fancybox.show([{ src: data.url, type: "image" }]);
  };

  return (
    <div 
      className='imageCard' 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      onClick={handleClick}
    >
      <img src={data.url} key={data.id} className="imageCard__img" />
      {isHovered && (
        <div className="imageCard__overlay">
          <div className="imageCard__textBox">
            <h4 className="imageCard__title">{data.title}</h4>
          </div>
        </div>
      )}
    </div>
  );
}