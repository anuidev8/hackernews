import { Routes, Route } from 'react-router-dom'

import Posts from './pages/Posts';
import Faves from './pages/Faves';
const MainRoutes = () => {
return (         
    <Routes> 
      <Route path='/' element={<Posts/>} />
      <Route path={'faves'} element={<Faves/>} />

  </Routes>
);
}
export default MainRoutes;