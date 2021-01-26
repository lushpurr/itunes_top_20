import React, {useEffect, useState} from 'react';
import SongDetails from './SongDetails';

const ChartContainer = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);

    // hook to call the api function

    useEffect(() => {
        getChart();
    }, []);



    const getChart = () => {
        console.log("getting chart info");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res=> res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
        ;
    }




    return(
        <>

        <p>This is the chart listings will go</p>
        <SongDetails 
        songs={songs}
        loaded={loaded}
        />

        </>
    )
}

export default ChartContainer;