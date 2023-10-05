import { useEffect, useState } from 'react';
import React from 'react';
import './SearchResults.css';
import { Search } from '@mui/icons-material';

const data = [
    {
        title: 'Perhaps, perhaps',
        artist: 'Dusty Springfield'
    },
    {
        title: 'Jolene',
        artist: 'Dolly Parton'
    },
    {
        title: 'All i want for Christmas',
        artist: 'Mariah Carrey'
    },
    {
        title: 'Rain Dogs',
        artist: 'Tom Waits'
    },
    {
        title: 'My name is Mud',
        artist: 'Primus'
    },
    {
        title: 'Lovesong',
        artist: 'Sarah Bareilles'
    },
    {
        title: 'Bang Bang',
        artist: 'Nancy Sinatra'
    },
    {
        title: 'Śmierć Poety',
        artist: 'Kazik Staszewski'
    }
];
function SearchResults({result}){
const [searchResult, setSearchResult] = useState([]);
// const selectedData = [];
// for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     selectedData.push(item.title);
    
// }



useEffect(() => {
    const newResult = data.filter((it) => it.title.includes({result}));
    console.log(newResult);
    setSearchResult(newResult)}, [{result}]);
// setSearchResult(selectedData);
function handleClick() {
    console.log('bbb')
}


return (
    <>
   <h1>{searchResult}</h1>
   <button onClick={handleClick}>consolelog</button>
    <div className='searchResults'>
         
        {data.map((song) => 
            <div className='result'>
                <h2 className='title'>{song.title}</h2> 
                <h2 className='artist'>{song.artist}</h2>
            </div>
        
        )}
        
    </div>
    </>
)
}


export default SearchResults;