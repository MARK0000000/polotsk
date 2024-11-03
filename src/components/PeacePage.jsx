import React, {useContext, useEffect} from 'react'
import MainSlider from './main/MainSlider'
import Photo from './peace/Photo'
import AboutCity from './peace/AboutCity'
import Citizens from './peace/Citizens'
import { NavContext } from '../context/NavContext'
import { WOW } from 'wowjs';
import Enterprises from './peace/Enterprises'
import ScrollToTop from './ScrollToTop'
import img1 from '../img/mainSlider/домаН.jpg'
import img2 from '../img/mainSlider/саборН.jpg'
import img3 from '../img/mainSlider/МостН.jpg'
import img4 from '../img/mainSlider/дом офицеровН.jpg'

export default function PeacePage() {
  const {activeSide, updateSide } = useContext(NavContext)
  const data =[
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
  ]

  useEffect(() => {
    updateSide("peace")
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

    const wow = new WOW();
    wow.init();

    return () => {
      wow.sync();
    };
  }, []);

  return (
    <>
        <MainSlider data={data}/>
        <Photo/>
        <AboutCity/>
        <Enterprises/>
        <Citizens/>
        <ScrollToTop/>
    </>
  )
}
