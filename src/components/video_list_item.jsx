import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.shape(),
  onVideoSelect: PropTypes.func,
};

VideoListItem.defaultProps = {
  video: {},
  onVideoSelect: () => {},
};

export default VideoListItem;
