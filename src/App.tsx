import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Pagination } from './component';
import { Home } from './view/Home/Home';

function App() {
  
  return (
    <div className="App">
      {/* <Pagination data={data}/> */}
      <Home/>
    </div>
  );
}

export default App;
