import React, { useState } from 'react';

function SearchBar() {
const [searchInput,  setSearchInput] = useState('');
return(
    <>
    <form>
        <label for="search">Search</label>
        <input id="search" type="text" placeholder="search"/>
    </form>
    </>
)
}

export default SearchBar;