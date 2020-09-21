import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar() {
  const [like, setLike] = useState(false);
  const handleLike = (e) => {
    setLike(!like);
  };
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {like ? (
          <FavoriteIcon fontSize="large" onClick={handleLike} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={handleLike} />
        )}
        <p>1220</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>400</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>32</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
