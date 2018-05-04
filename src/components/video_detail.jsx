import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {
  if (Object.keys(video).length === 0) {
    return <div>Loading...</div>;
  }
  const { id: { videoId } } = video;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="THIS IS UNIQUE" />
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.shape(),
};

VideoDetail.defaultProps = {
  video: {},
};

export default VideoDetail;
