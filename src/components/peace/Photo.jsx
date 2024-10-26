import React, {useState} from 'react'
import img1 from '../../img/photoGallery/item.jpg'
import img2 from '../../img/photoGallery/item2.jpg'
import img3 from '../../img/photoGallery/item3.jpg'
import img4 from '../../img/photoGallery/item4.jpg'
import img5 from '../../img/photoGallery/item7.jpg'
import img6 from '../../img/photoGallery/item8.jpg'
import img7 from '../../img/photoGallery/item11.jpg'
import img8 from '../../img/photoGallery/item12.jpg'
import img9 from '../../img/photoGallery/item13.jpg'
import img10 from '../../img/photoGallery/item4.jpg'
import img11 from '../../img/photoGallery/item15.jpg'
import img12 from '../../img/photoGallery/item16.jpg'

import ImageCard from '../main/ImageCard'
export default function Photo() {
  const [data, setData] = useState([
    {
      id: 1,
      url: img1,
      title: "Родные просторы",
    },
    {
      id: 2,
      url: img2,
      title: "Полоцк на рассвете",
    },
    {
      id: 3,
      url: img3,
      title: "Город с высоты птичьего полёта",
    },
    {
      id: 4,
      url: img4,
      title: "Под небом голубым есть город золотой",
    },
    {
      id: 5,
      url: img5,
      title: "Богоявленский собор",
    },
    {
      id: 6,
      url: img6,
      title: "Просторы Западной Двины",
    },
    {
      id: 7,
      url: img7,
      title: "Панорама Полоцка",
    },
    {
      id: 8,
      url: img8,
      title: "Парк атракционов",
    },
    {
      id: 9,
      url: img9,
      title: "Зимний софийский собор",
    },
    {
      id: 10,
      url: img10,
      title: "Курган Славы",
    },
    {
      id: 11,
      url: img11,
      title: "Ночной город",
    },
    {
      id: 12,
      url: img12,
      title: "Ночная София",
    },
  ])
  
  return (
    <section className='photoGallery' >
      <h2 className="photoGallery__title" id='photo'>ГОРОД В ОБЪЕКТИВЕ</h2>
      <hr className="photoGallery__hr" />
      <p className="photoGallery__description">Нет города красивее Полоцка на просторах нашей страны.</p>
      <div className="photoGallery__content">
        {data.map((item, index) => 
            <ImageCard key={index} data={item}/>
        )}
      </div>
    </section>
  )

}
