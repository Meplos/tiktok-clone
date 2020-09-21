import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>Meplos</h3>
        <p>This is the description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>I'm a song</p>
              </>
            )}
          </Ticker>
        </div>
        <img
          className="videoFooter__record"
          src=" https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoFooter;
