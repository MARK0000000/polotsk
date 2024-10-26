import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { NavProvider } from './context/NavContext';
function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
