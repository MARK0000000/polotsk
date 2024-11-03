import React, { useState } from 'react';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox.css';

export default function ImageCard({ data, mode }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    Fancybox.show([{ src: data.url, type: "image" }]);
  };

  return (
    <div 
      className={`imageCard imageCard_${mode}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      onClick={handleClick}
    >
      <img src={data.url} key={data.id} className={`imageCard__img imageCard__img_${mode}`} />
      {isHovered && (
        <div className={`imageCard__overlay imageCard__overlay_${mode}`}>
          <div className={`imageCard__textBox imageCard__textBox_${mode}`}>
            <h4 className="imageCard__title">{data.title}</h4>
          </div>
        </div>
      )}
    </div>
  );
}