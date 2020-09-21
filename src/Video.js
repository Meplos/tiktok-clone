import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={handleVideoPress}
        className="video__player"
        loop
        src="https://v16m.tiktokcdn.com/deaab4009baf29e51fd1bc3d15b1f27a/5f52577b/video/tos/useast2a/tos-useast2a-ve-0068c004/1c95af9e19ac4989b53e460515a363dd/?a=1233&br=1700&bt=850&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200904090417010189056034250040EA&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2d2aHBqeWZxdjMzNTczM0ApZmc8Z2Y4ZmVoN2RnMzszNWc1bG9nc25lcl5fLS1iMTZzczM1LzQ1Mi4wMzJgLl8zYWI6Yw%3D%3D&vl=&vr="
      ></video>
      {/** video footer */}
      <VideoFooter />
      {/** video sidebar */}
      <VideoSidebar />
    </div>
  );
}

export default Video;
