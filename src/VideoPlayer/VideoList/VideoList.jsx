function VideoList({ videos, onSelect }) {
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

export default VideoList;
