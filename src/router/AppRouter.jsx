import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { privateRoute } from '.';
import MainPage from '../components/MainPage';
import Main from '../components/Main';
function AppRouter() {

   return (
         <Routes>
            <Route path='/' element={
                     <Main />
                  }>
               <Route index element={<Navigate to="/main" />} />
                {privateRoute.map((item, index) => 
                  <Route path={item.path} element={item.element} key={index}/>
               )}
            </Route>
         </Routes>
   )
}

export default AppRouter;