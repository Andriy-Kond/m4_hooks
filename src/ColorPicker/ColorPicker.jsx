import { Component } from "react";
import {
  ColorButton,
  ColorContainer,
  ButtonsContainer,
} from "./ColorPicker.styled";

import getInvertHexColor from "./js/getInvertHexColor";
import colorsBase from "./js/getColorsBase";

class ColorPicker extends Component {
  state = {
    activeIndex: null,
    colors: colorsBase(),
  };

  handleClick = index => {
    this.setState({
      activeIndex: index !== this.state.activeIndex ? index : null,
    });
  };

  render() {
    const { activeIndex, colors } = this.state;
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
                onClick={() => this.handleClick(index)}
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
}

export default ColorPicker;
