import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(props) {
    return (
      <>
        <Navbar title="Ice-Cream Shop"/>
        <div className="container my-3">
          <TextForm heading="Enter the text to analize bellow"/>
        </div>
      </>
    );
}

export default App;
