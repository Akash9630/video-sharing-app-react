import React from "react";
import { Grid } from "@mui/material";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, index) => (
        <VideoItem
            onVideoSelect={onVideoSelect}
            // key={video.id.videoId}
            key={index}
            video={video}
        />
    ));

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;