import {
  ColorButton,
  ColorContainer,
  ButtonsContainer,
} from "./ColorPicker.styled";

import getInvertHexColor from "js/getInvertHexColor";
import colorsBase from "js/getColorsBase";
import { useState } from "react";

function ColorPicker() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [colors] = useState(colorsBase());

  const handleClick = index => {
    setActiveIndex(index !== activeIndex ? index : null);
  };

  const activeColor = activeIndex ? colors[activeIndex].hex : "жоден";

  return (
    <ColorContainer>
      <p style={{ lineHeight: 1.3, fontWeight: 900 }}>Color picker</p>

      <p>Обраний колір: {activeColor}</p>

      <ButtonsContainer>
        {colors.map(({ hex }, index) => {
          const invertColor = getInvertHexColor(hex);
          const isActive = activeIndex === index;

          return (
            <ColorButton
              type="button"
              onClick={() => handleClick(index)}
              isActive={isActive}
              key={hex}
              hexColor={hex}
              invertColor={invertColor}>
              color: {hex}
            </ColorButton>
          );
        })}
      </ButtonsContainer>
    </ColorContainer>
  );
}

export default ColorPicker;
