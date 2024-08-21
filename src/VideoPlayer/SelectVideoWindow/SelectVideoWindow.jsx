import { useState } from "react";

import videos from "../dataBase/videos.json";
import VideoList from "../VideoList";
import Player from "../Player";

function SelectVideoWindow() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = link => {
    setSelectedVideo(link);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={selectVideo} />
      <Player url={selectedVideo} />
    </div>
  );
}

export default SelectVideoWindow;
