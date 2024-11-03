import React, { useState, useEffect } from 'react';
import icon from '../img/icons/scrollToTop.svg';

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    // Показываем кнопку, если прокрутка больше высоты экрана
    if (window.scrollY > window.innerHeight) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showScroll && (
        <button onClick={scrollToTop} className='scrollToTop'>
          <img src={icon} alt="Scroll to Top" />
        </button>
      )}
    </>
  );
}