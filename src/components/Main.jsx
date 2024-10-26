import React, {useState, useEffect} from 'react'
import { Outlet} from 'react-router-dom';
import '../styles/style.scss'
import Header from './main/Header';

export default function Main() {

  return (
    <>
    <Header/>
    <main>
        <Outlet />
    </main>
    </>
  )
}
