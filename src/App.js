import React, {useEffect} from 'react';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { NavProvider } from './context/NavContext';
import 'animate.css';


function App() {
  
  return (
    <NavProvider>
      <HashRouter>
        <AppRouter/>
      </HashRouter>
    </NavProvider>
  );
}

export default App;
