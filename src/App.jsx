import React from 'react'
import Main from './components/main'
import Sidebar from './components/Sidebar'
import Works from './components/Works'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <Works />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
