import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import SearchResults from './SearchResults';

function SearchBar() {
const [searchInput,  setSearchInput] = useState('');
function handleType(e){
    setSearchInput(e.target.value);
}
return(
    <>
        <SearchResults result={searchInput}/>
       <div className='search'>
        <div className='searchInput'>
        <input id="search" type="text" placeholder="search" onChange={handleType} value={searchInput}/>
        <div className='searchIcon'>
            <SearchIcon />
        </div>
        </div>
      
      
        </div>
    </>
       
  
    
)
}

export default SearchBar;