import { Button } from "./IconButton.styled";

const IconButton = ({
  children = null,

  onClick = () => {
    console.log("click - якщо пропс не переданий");
    return null;
  },

  ...allyProps // сюди заходить aria-label="Додати завдання"
}) => {
  return (
    <Button type="button" onClick={onClick} {...allyProps}>
      {children}
    </Button>
  );
};

export default IconButton;
