import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { SearchBar, VideoList, VideoDetail } from "../src/components/index";
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

    useEffect(() => {
        handleSubmit()
    }, [])

    return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await axios.get(process.env.REACT_APP_YOUTUBE_API_URL, {
            params: {
                part: "snippet",
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                q: searchTerm,
                maxResults: 5,
            }
        });

        setVideos(videos);
        setSelectedVideo(videos[0]);
    }
}

export default App