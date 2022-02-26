import React from 'react';
/* import logo from './logo.svg'; */

import MainRoutes  from './MainRoutes';

//Components
import MainHeader from './components/MainHeader';

const App = () =>{
  return(
    <main className='wrapper'>
      <MainHeader  />
       <h1>web page</h1> 
      <MainRoutes />

    </main>
  )
}

export default App;
