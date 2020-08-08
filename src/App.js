import React from 'react';
import Header from './components/Header/Header';
import LayoutBody from './components/BodyLayout/BodyLayout'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="greenBar"></div>
        <div className="appLayout">
          <div className="chatLayout">
            <Header />
            <LayoutBody />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
