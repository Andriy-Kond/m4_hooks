import styled from "styled-components";
// import styled from "@emotion/styled";

// styled-components (на відміну від @emotion-styled) не фільтрує автоматично нестандартні пропси, що передаються у DOM-елементи.

//  В цьому випадку пропси isActive, hexColor, та invertColor передаються до кнопки <button>, що викликає попередження в консолі, адже ці пропси не є стандартними для HTML елементів і не повинні передаватися до DOM.

// Щоб вирішити цю проблему, є два основних підходи:
// 1. Використання транзієнтних пропсів (Transient Props)
// Транзієнтні пропси починаються з $ і автоматично не передаються до DOM. Тобто, можна просто змінити ім'я пропсів на транзієнтні:

// <ColorButton
//   type="button"
//   onClick={() => this.handleClick(index)}
//   $isActive={isActive}
//   key={hex}
//   $hexColor={hex}
//   $invertColor={invertColor}>
//   color: {hex}
// </ColorButton>

// const ColorButton = styled.button`
//   ...
//   background-color: ${props => props.$hexColor};
//   color: ${props => props.$invertColor};
//   transform: ${({ $isActive }) => ($isActive ? "scale(1.2)" : "scale(1)")};
//    ...
// `;

// 2. Використання функції shouldForwardProp
// styled-components дозволяє контролювати, які пропси будуть передані до DOM, використовуючи shouldForwardProp. Це дає більше гнучкості, якщо не хочеш перейменовувати пропси.

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1px;
  border: 1px solid black;
  width: 400px;
  padding: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const ColorButton = styled.button.withConfig({
  shouldForwardProp: prop =>
    !["isActive", "hexColor", "invertColor"].includes(prop),
})`
  width: 40px;
  height: 40px;
  padding: 2px;

  background-color: ${props => props.hexColor};

  color: ${props => props.invertColor};

  font-size: 8px;
  cursor: pointer;

  transition: transform 250ms linear;
  transform: ${({ isActive }) => (isActive ? "scale(1.2)" : "scale(1)")};

  color: ${({ invertColor }) => invertColor};

  font-size: 8px;
  cursor: pointer;

  transition: transform 250ms linear;
`;

export { ColorButton, ColorContainer, ButtonsContainer };
