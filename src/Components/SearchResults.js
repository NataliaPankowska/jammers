import { useState } from 'react';
import React from 'react';
import './SearchResults.css';

function SearchResults(){
const [searchResult, setSearchResult] = useState([
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
])
const data = searchResult;
console.log(data);
return (
    <div className='searchResults'>
         
        {data.map((song) => 
            <div className='result'>
                <h2 className='title'>{song.title}</h2> 
                <h2 className='artist'>{song.artist}</h2>
            </div>
        
        )}
    </div>
)
}

export default SearchResults;