import { Component } from "react";
import { PlayerWrapper, StyledPlayer } from "./Player.styled";

class Player extends Component {
  state = { isVideoLoaded: false };

  componentDidUpdate(prevProps, prevState) {
    prevProps.url !== this.props.url && this.setState({ isVideoLoaded: false });
  }

  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;
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
                this.setState({ isVideoLoaded: true });
              }}
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
