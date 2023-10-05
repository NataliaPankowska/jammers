import React from 'react';
import Slider from '@mui/material/Slider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import './Track.css'

function Track(){
    return (
        <div className='player'>
            <div className='controls'>
            <FastRewindIcon />
            
            <PlayArrowIcon />
            <FastForwardIcon />
            
            </div>
            <Slider className='slider' sx={{
                color:' #ffff',
            }}/>
        </div>
    )

}

export default Track;