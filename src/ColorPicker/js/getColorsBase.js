const { default: getRandomHexColor } = require("./getRandomHexColor");

const colorsBase = () => {
  let colors = [];
  for (let i = 0; i < 10; i++) {
    colors.push({ hex: getRandomHexColor() });
  }

  return colors;
};

export default colorsBase;
