import React, {useState} from 'react'
import img1 from '../../img/photoGallery/item17.jpg'
import img2 from '../../img/photoGallery/item32.jpg'
import img3 from '../../img/photoGallery/item29.jpg'
import img4 from '../../img/photoGallery/item34.jpg'
import img5 from '../../img/photoGallery/item35.jpg'
import img6 from '../../img/photoGallery/item22.jpg'
import img7 from '../../img/photoGallery/item36.jpg'
import img8 from '../../img/photoGallery/item24.jpg'
import img9 from '../../img/photoGallery/item25.jpg'

import ImageCard from '../main/ImageCard'
export default function Photo() {
  const [data, setData] = useState([
    {
      id: 1,
      url: img1,
      title: "Левитан",
    },
    {
      id: 2,
      url: img2,
      title: "Полоцк наш",
    },
    {
      id: 3,
      url: img3,
      title: "Мост",
    },
    {
      id: 4,
      url: img4,
      title: "Николаевский собор",
    },
    {
      id: 5,
      url: img5,
      title: "Артиллерия",
    },
    {
      id: 6,
      url: img6,
      title: "Разруха",
    },
    {
      id: 7,
      url: img7,
      title: "Победа близка",
    },
    {
      id: 8,
      url: img8,
      title: "Богоявленский собор",
    },
    {
      id: 9,
      url: img9,
      title: "Войска в Полоцке",
    },
  ])
  
  return (
    <section id='photo' className='photoGallery photoGallery_dark'>
      <h2 className="photoGallery__title photoGallery__title_dark" id='photo'>ФОТОХРОНИКА</h2>
      <hr className="photoGallery__hr photoGallery__hr_dark" />
      <p className="photoGallery__description photoGallery__description_dark">Фотографии Полоцка во времена Великой Отечественной войны</p>
      <div className="photoGallery__content">
        {data.map((item, index) => 
            <ImageCard key={index} data={item} mode={"dark"}/>
        )}
      </div>
    </section>
  )

}
