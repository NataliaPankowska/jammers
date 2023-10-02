import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

function SearchBar() {
const [searchInput,  setSearchInput] = useState('');
return(
    
    
       <div className='search'>
        <div className='searchInput'>
        <input id="search" type="text" placeholder="search"/>
        </div>
        <div className='searchIcon'>
            <SearchIcon />
        </div>
      
        </div>
       
  
    
)
}

export default SearchBar;