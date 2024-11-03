import React, {useState} from 'react'
import img1 from '../../img/photoGallery/item41.jpg'
import img2 from '../../img/photoGallery/item42.jpg'
import img3 from '../../img/photoGallery/item43.jpg'
import img4 from '../../img/photoGallery/item40.jpg'
import img5 from '../../img/photoGallery/item39.jpg'
import img6 from '../../img/photoGallery/item37.jpg'

import ImageCard from '../main/ImageCard'
import Streets from './Streets'
export default function Memory() {
  const [data, setData] = useState([
    {
      id: 1,
      url: img1,
      title: "Мемориал «Урочище Пески»",
    },
    {
      id: 2,
      url: img2,
      title: "Героизм танкистов‑освободителей",
    },
    {
      id: 3,
      url: img3,
      title: "Памятник освободителям Полоцка",
    },
    {
      id: 4,
      url: img4,
      title: "Прикосновение колледжа к памяти",
    },
    {
      id: 5,
      url: img5,
      title: "Моё прикосновение к победе",
    },
    {
      id: 6,
      url: img6,
      title: "Велопробег в четь 9 мая",
    },
  ])
  
  return (
    <section className='photoGallery photoGallery_light photoGallery_memory'>
      <h2 className="photoGallery__title photoGallery__title_light" id='memory'>ПАМЯТЬ</h2>
      <hr className="photoGallery__hr photoGallery__hr_light" />
      <Streets/>
      <h3 className="photoGallery__subtitle">Помним, чтим, гордимся</h3>
      <div className="photoGallery__content">
        {data.map((item, index) => 
            <ImageCard key={index} data={item} mode={"light"}/>
        )}
      </div>
    </section>
  )

}
