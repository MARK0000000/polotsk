import React, { useState, useContext } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png'
import { NavContext } from '../../context/NavContext';
export default function Header() {
  const navigate = useNavigate();
  const {activeSide, updateSide } = useContext(NavContext)

  const handleNavigate = (route) => {
    navigate(route, { replace: false });
    window.scrollTo(0, 0)
    updateSide(route)
  }
  return (
    <header className='header'>
      <div className="header__container">
        <nav className={`header__nav header__nav_dark ${activeSide == 'war' && 'header__nav_big' }`}>
          {(activeSide == 'main' || activeSide == 'peace') && 
            <a onClick={() => handleNavigate("war")} className="header__link header__link_big header__link_dark">ГОДЫ ОПАЛЕННЫЕ ВОЙНОЙ</a>
          }
          {activeSide == 'war' && 
            <>
              <Link className="header__link header__link_dark"  to={`history`} smooth={true} offset={-170}>
                ИСТОРИЧЕСКАЯ СПРАВКА
              </Link>

              <Link className="header__link header__link_dark" to={`photo`} smooth={true} offset={-120}>
                ФОТОХРОНИКА
              </Link>

              <Link className="header__link header__link_dark" to={`memory`} smooth={true} offset={-170}>
                ПАМЯТЬ
              </Link>

              <Link className="header__link header__link_dark" to={`appeal`} smooth={true} offset={-170}>
                Я ПОМНЮ. Я ГОРЖУСЬ
              </Link>

              <Link className="header__link header__link_dark" to={`quiz`} smooth={true} offset={-170}>
                ВИКТОРИНА
              </Link>
            </>
          }
        </nav>

          <a onClick={() => handleNavigate("main")}>
            <img src={logo} alt="" className={`header__logo ${activeSide == 'peace' && 'header__logo_left' } ${activeSide == 'war' && 'header__logo_right' } ${activeSide == 'main' && 'header__logo_center' }`} />
          </a>

        <nav className={`header__nav header__nav_light ${activeSide == 'peace' && 'header__nav_big' }`}>
          {(activeSide == 'main' || activeSide == 'war')  && 
            <a onClick={() => handleNavigate("peace")} className="header__link header__link_big header__link_white">СОВРЕМЕННЫЙ ПОЛОЦК</a>
          }
          {activeSide == 'peace' && 
            <>
              <Link className="header__link header__link_white" to={`photo`} smooth={true} offset={-170}>
                ГОРОД В ОБЪЕКТИВЕ
              </Link>

              <Link className="header__link header__link_white" to={`aboutCity`} smooth={true} offset={-130}>
                О ГОРОДЕ
              </Link>

              <Link className="header__link header__link_white" to={`enterprises`} smooth={true} offset={-170}>
                ПРЕДПРИЯТИЯ
              </Link>

              <Link className="header__link header__link_white" to={`citizens`} smooth={true} offset={-180}>
                ПОЧЕТНЫЕ ГРАЖДАНЕ
              </Link>
            </>
          }
        </nav>
      </div>
    </header>
  )
}
