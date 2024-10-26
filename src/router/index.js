import MainPage from '../components/MainPage';
import WarPage from '../components/WarPage';
import PeacePage from '../components/PeacePage';

export const privateRoute = [
    { path: 'main', element: <MainPage /> },
    { path: 'war', element: <WarPage /> },
    { path: 'peace', element: <PeacePage /> },
];