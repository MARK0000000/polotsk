import React, {useContext, useEffect} from 'react'
import MainSlider from './main/MainSlider'
import History from './war/History'
import Photo from './war/Photo'
import Memory from './war/Memory'
import Appeal from './war/Appeal'
import Quiz from './war/Quiz'
import { NavContext } from '../context/NavContext'
import { WOW } from 'wowjs';
import ScrollToTop from './ScrollToTop'
import img1 from '../img/mainSlider/домаВ.jpg'
import img2 from '../img/mainSlider/саборВ.jpg'
import img3 from '../img/mainSlider/МостВ.jpg'
import img4 from '../img/mainSlider/дом офицеровВ.jpg'

export default function WarPage() {
  const {activeSide, updateSide } = useContext(NavContext)
  const data =[
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
  ]

  useEffect(() => {
    updateSide("war")
  }, [])

  useEffect(() => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.classList.add('wow', 'animate__animated', 'animate__fadeIn');
    });

    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach(el => {
      el.classList.add('wow', 'animate__animated', 'animate__fadeIn');
    });

    const summaries = document.querySelectorAll('summary');
    summaries.forEach(el => {
      el.classList.add('wow', 'animate__animated', 'animate__fadeInLeft');
    });

    const wow = new WOW();
    wow.init();

    return () => {
      wow.sync();
    };
  }, []);
  return (
    <>
        <MainSlider data={data}/>
        <History/>
        <Photo/>
        <Memory/>
        <Appeal/>
        <Quiz/>
        <ScrollToTop/>
    </>
  )
}
