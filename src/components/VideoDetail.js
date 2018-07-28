import React, { Fragment } from 'react';

const VideoDetail = ( {selectedVideo }) => {

    if(!selectedVideo) {
        return (
            <div>Loading spinner will go in here someday...</div>
        );
    };

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`

    return (
        <Fragment>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>Title Goes Here</h2>
            <p>Description goes here</p>
        </Fragment>
    );
}

export default VideoDetail;