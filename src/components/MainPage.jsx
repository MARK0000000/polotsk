import React, { useContext, useEffect, useState } from 'react';
import MainSlider from './main/MainSlider';
import { NavContext } from '../context/NavContext';
import img1 from '../img/mainSlider/дома.png';
import img2 from '../img/mainSlider/сабор.png';
import img3 from '../img/mainSlider/мост.png';
import img4 from '../img/mainSlider/дом офицеров.png';

import img5 from '../img/mainSlider/домаМ.png';
import img6 from '../img/mainSlider/саборМ.png';
import img7 from '../img/mainSlider/мостМ.png';
import img8 from '../img/mainSlider/дом офицеровМ.png';

export default function MainPage() {
  const { activeSide, updateSide } = useContext(NavContext);
  
  // Состояние для хранения данных изображений
  const [data, setData] = useState([]);

  // Функция для обновления данных изображений в зависимости от ширины экрана
  const updateImages = () => {
    if (window.innerWidth < 768) {
      setData([
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
      ]);
    } else {
      setData([
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
      ]);
    }
  };

  useEffect(() => {
    updateSide("main");
    updateImages(); // Устанавливаем изображения при первом рендере

    // Добавляем обработчик события для изменения размера окна
    window.addEventListener('resize', updateImages);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateImages);
    };
  }, []);

  return (
    <>
      <MainSlider data={data} />
    </>
  );
}