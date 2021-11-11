import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [textAreaTheme, setTextAreaTheme] = useState({ backgroundColor: 'white', color: 'black' });

  const toggleDarkMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.getElementById('darkModeToggler').style.color = 'gray';

      // Page Theme
      document.getElementById('main').style.backgroundColor = 'white';
      document.getElementById('main').style.color = 'black';

      // TextArea Theme
      setTextAreaTheme({ backgroundColor: 'white', color: 'black' })

    } else {
      setMode('dark');
      document.getElementById('darkModeToggler').style.color = 'white';

      // Page Theme
      document.getElementById('main').style.backgroundColor = '#010d40';
      document.getElementById('main').style.color = 'rgb(190, 190, 184)';

      // TextArea Theme
      setTextAreaTheme({ backgroundColor: 'rgb(32, 32, 30)', color: 'white' })

    }
  }

  return (
    <>
      <Navbar title="Ice Cream Shop" mode={mode} toggleDarkMode={toggleDarkMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analize bellow" textAreaTheme={textAreaTheme} />
      </div>
    </>
  );
}

export default App;
