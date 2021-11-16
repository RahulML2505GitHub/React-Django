import React, { useState } from 'react';
import Aleart from './components/Aleart';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // State Variables
  const [alert, setAleart] = useState(null);
  const [colorPaletOpacity, setColorPaletOpacity] = useState(0);

  // Theming
  let themes = {
    lightMode: {
      name: 'Light',
      type: 'light',
      bg: 'white',
      text: 'black',
      navbar: 'light',
      darkModeTogglerText: 'black',
      textAreaTheme: {
        backgroundColor: 'white',
        color: 'black'
      },
      button: 'primary'
    },
    darkSkyBlue: {
      name: 'Dark SkyBlue',
      type: 'dark',
      bg: '#0c326a',
      text: 'gray',
      navbar: 'dark',
      darkModeTogglerText: 'gray',
      textAreaTheme: {
        background: 'rgb(32, 32, 30)',
        color: 'white'
      }, button: 'info'
    },
    darkBlue: {
      name: 'Dark Blue',
      type: 'dark',
      bg: '#010d40',
      text: 'gray',
      navbar: 'danger',
      darkModeTogglerText: 'gray',
      textAreaTheme: {
        background: 'rgb(32, 32, 30)',
        color: 'white'
      },
      button: 'primary'
    },
    darkRed: {
      name: 'Dark Red',
      type: 'dark',
      bg: 'rgb(134, 18, 18)',
      text: 'black',
      navbar: 'danger',
      darkModeTogglerText: 'gray',
      textAreaTheme: {
        background: 'rgb(32, 32, 30)',
        color: 'white'
      },
      button: 'danger'
    },
  }
  const [currentTheme, setCurrentTheme] = useState(themes.lightMode);

  // Big Functions
  const setTheme = (theme) => {
    setCurrentTheme(theme);
    document.getElementById('darkModeToggler').style.color = theme.darkModeTogglerText;

    // Page Theme
    document.getElementById('root').style.backgroundColor = theme.bg;
    document.getElementById('root').style.color = theme.text;

    showAlert(`${theme.name} Mode has been Enabled`, 'success');
  }
  const toggleDarkMode = () => {
    if (currentTheme.type === 'dark') {
      setColorPaletOpacity(0);
      setTheme(themes.lightMode);
      // document.title = 'TextUtils - Home'; // changes page Title
    } else {
      setColorPaletOpacity(1);
      setTheme(themes.darkBlue);
    }
  }
  const showAlert = (message, type) => {
    setAleart({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAleart(null);
    }, 1500);
  }

  // JSX Fragment
  return (
    <>
      <Navbar title="TextUtils" currentTheme={currentTheme} mode={currentTheme.type} colorPaletOpacity={colorPaletOpacity} setTheme={setTheme} toggleDarkMode={toggleDarkMode} themes={themes} />
      <Aleart alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analize bellow" currentTheme={currentTheme} alerFunction={showAlert} />
      </div>
    </>
  );
}

export default App;
