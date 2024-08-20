import styled from "styled-components";
import ReactPlayer from "react-player";

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; // для масштабування при зміні ширини вікна браузера
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;

  // перебиває стилі браузера (inline-styles у element.style) "height: 360px;"
  height: 100% !important;
`;

export { PlayerWrapper, StyledPlayer };
