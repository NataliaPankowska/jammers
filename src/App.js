import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Track from './Components/Track';
import {useState} from 'react';

function App() {
  

  return (
    <div className="App">
      <SearchBar />
      
      <Track />
    </div>
  );
}

export default App;
