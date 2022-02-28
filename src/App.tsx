import React from 'react';


import MainRoutes  from './MainRoutes';

//links
import { tabLinks } from './utils/tabLinks';

//Components
import MainHeader from './components/MainHeader';
import Tabs from './components/Tabs';


const App = () =>{
  return(
    <main className='wrapper'>
      <MainHeader  />
      <Tabs tabItems={tabLinks} />
      <MainRoutes />

    </main>
  )
}

export default App;
