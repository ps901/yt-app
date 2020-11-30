import React from "react";
import "./VideoItem.css";
/** This function is used to do shit
 * @returns jsx
 */
function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
