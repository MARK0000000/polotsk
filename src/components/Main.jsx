import React, {useState, useEffect, useContext} from 'react'
import { Outlet} from 'react-router-dom';
import '../styles/style.scss'
import Header from './main/Header';
import { NavContext } from '../context/NavContext';
export default function Main() {
  const {activeSide} = useContext(NavContext)
  return (
    <>
    <Header/>
    <main className={`${activeSide == 'war' ? "main_dark" : "main_light"}`}>
        <Outlet />
    </main>
    </>
  )
}
