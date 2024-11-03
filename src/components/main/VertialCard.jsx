import React from 'react'

export default function VertialCard({ data, horizontal }) {

    return (
      <div 
        className='verticalCard' 
      >
        <img src={data.img} className={`verticalCard__img ${horizontal && 'verticalCard__img_horizontal'} `} />
        <h4 className="verticalCard__title">{data.title}</h4>
        <p className="verticalCard__description">{data.description}</p>
      </div>
    );
  }
