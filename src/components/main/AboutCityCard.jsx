import React, { useState } from 'react';


export default function AboutCityCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className='aboutCityCard' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
        >
        <svg 
        className={`aboutCityCard__icon ${isHovered ? 'hovered' : ''}`} 
        width="21" 
        height="18" 
        viewBox="-2 -2 25 22"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke='#000'
        strokeWidth="2px"
        >
            <path d="M20.1 6.1C20 2.7 17.3 0 13.9 0C12.8 0 11.1 0.8 10.4 2.1C10.3 2.4 9.9 2.4 9.8 2.1C9 0.9 7.4 0.1 6.2 0.1C2.9 0.1 0.1 2.8 0 6.1V6.3C0 8 0.7 9.6 1.9 10.8C1.9 10.8 1.9 10.8 1.9 10.9C2 11 6.8 15.2 9 17.1C9.6 17.6 10.5 17.6 11.1 17.1C13.3 15.2 18 11 18.2 10.9C18.2 10.9 18.2 10.9 18.2 10.8C19.4 9.7 20.1 8.1 20.1 6.3V6.1Z" fill="none"/>
        </svg>
            <div className="aboutCityCard__titleContainer">
                {data.title.map((item) => 
                    <h4 className={`aboutCityCard__title ${isHovered && "aboutCityCard__title_hovered"}`}>{item}</h4>
                )}
            </div>
                <p className={`aboutCityCard__description ${isHovered && "aboutCityCard__description_hovered"}`} >{data.description}</p>

        </div>
    );
  
}