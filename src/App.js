import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetsups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}></Route>
        <Route path='/favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
