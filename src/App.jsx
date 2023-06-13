import React from 'react'
import Mmain from './components/Mmain'
import Sidebar from './components/Sidebar'
import Works from './components/Works'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <div>
      <Sidebar />
      <Mmain />
      <Works />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
