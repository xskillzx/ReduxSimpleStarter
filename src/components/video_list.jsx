import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
  onVideoSelect: PropTypes.func,
};

VideoList.defaultProps = {
  videos: [],
  onVideoSelect: () => {},
};

export default VideoList;
