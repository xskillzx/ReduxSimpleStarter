import React from 'react';

const VideoDetail = ({ video }) => {
  const { id: videoId } = video;
  const url = `https://www.youtube.com/embed/${videoId}`;

  console.log(video);
  console.log(videoId);

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
