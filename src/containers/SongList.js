import React from 'react';
import SongDetails from './SongDetails';

const SongList =(songs)=> {
    const songArray = songs.map(song => {
        return(
            <li><SongDetails name={song["im:name"].label} key={song.categories.attributes["im:id"]} artist={song["im:artist"].label}></SongDetails></li>
            )
    })

    return(
        <>
        <ul>
            {songArray}
            console.log([songArray]);
        </ul>
        </>
    )


 
}
