import { Component } from "react";

class VideoList extends Component {
  render() {
    const { videos, onSelect } = this.props;
    return (
      <ul>
        {videos.map(({ id, link }) => {
          return (
            <li
              key={id}
              onClick={() => {
                onSelect(link);
              }}>
              {link}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default VideoList;
