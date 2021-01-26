import React from 'react';

const SongDetails = ({name, children, loaded}) => {
    // <p>Song Details Go Here</p>
    // <p>{songs[0].["im:name"].label} by {songs[0].["im:artist"].label}</p>
    // <p>{songs[1].["im:name"].label}</p>
    // <p>{songs[2].["im:name"].label}</p>

    if(!loaded){
        return <p>Loading...</p>
    }
    return(


        <>
        <p>{name} by {children}</p>
        </>
    )
}

export default SongDetails;