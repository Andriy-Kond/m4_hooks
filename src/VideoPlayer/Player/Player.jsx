import { useEffect, useState } from "react";
import { PlayerWrapper, StyledPlayer } from "./Player.styled";

function Player({ url }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [url]);

  const preloader = !isVideoLoaded && url;
  const playerSize = isVideoLoaded ? "100%" : 0;

  return (
    <>
      {preloader && <p>Завантажую відео...</p>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            controls
            width={playerSize}
            hight={playerSize}
            onReady={() => {
              setIsVideoLoaded(true);
            }}
          />
        </PlayerWrapper>
      )}
    </>
  );
}

export default Player;
