import { GlobalStyle } from "GlobalStyle";

import ColorPicker from "ColorPicker";
import Pokemon from "Pokemon";
import Todo from "Todo";
import Tabs from "Tabs";
import Clock from "Clock";
import LoginForm from "LoginForm";
import Materials from "Materials";
import Publications from "Publications";
import VideoPlayer from "VideoPlayer";

function App() {
  return (
    <>
      <GlobalStyle />
      <br />
      <hr />
      <hr />
      <ColorPicker />
      <br />
      <hr />
      <hr />
      <Pokemon />
      <br />
      <hr />
      <hr />
      <Todo />
      <br />
      <hr />
      <hr />
      <Tabs />
      <br />
      <hr />
      <hr />
      <Clock />
      <br />
      <hr />
      <hr />
      <LoginForm />
      <br />
      <hr />
      <hr />
      <Materials />
      <br />
      <hr />
      <hr />
      <Publications />
      <br />
      <hr />
      <hr />
      <VideoPlayer />
    </>
  );
}

export default App;
