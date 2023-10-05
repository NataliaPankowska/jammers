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
function SearchResults({input}){
    // const {input }= props;
const [searchResult, setSearchResult] = useState([]);
// const selectedData = [];
// for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     selectedData.push(item.title);
    
// }



useEffect(() => {
   const newSearchResult = data.filter((item) => {
        return item.title.toLowerCase().includes(input.toLowerCase())
});
    console.log(newSearchResult);
    setSearchResult(() => {
       return newSearchResult
    })}, [input]);
// setSearchResult(selectedData);
// function handleClick() {
//     // console.log('bbb')
// }


return (
    <>
   
   {/* <button onClick={handleClick}>consolelog</button> */}
    <div className='searchResults'>
         
        {searchResult.map((song) => 
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