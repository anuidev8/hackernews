import { Routes, Route } from 'react-router-dom'

import Posts from './pages/Posts';
const MainRoutes = () => {
return (         
    <Routes>    <Route path='/' element={<Posts/>} />

  </Routes>
);
}
export default MainRoutes;