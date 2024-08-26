import { GlobalStyle } from "GlobalStyle";

import AppBar from "context/AppBar";

import ColorPicker from "ColorPicker";
import Pokemon from "Pokemon";
import Todo from "Todo";
import Tabs from "Tabs";
import Clock from "Clock";
import LoginForm from "LoginForm";
import Materials from "Materials";
import Publications from "Publications";
import VideoPlayer from "VideoPlayer";
import SignupForm from "SignupForm";
import Counter from "Counter";
import Memoization from "Memoization";
import News from "News";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <hr />
      <Clock />
      <Clock />
      <Clock />
      <hr />
      <News />
      <hr />
      <SignupForm />
      <hr />
      <Pokemon />
      <hr />

      <LoginForm />
      <hr />
      <Counter />
      <hr />
      <ColorPicker />
      <hr />
      <Todo />
      <hr />
      <Tabs />
      <hr />
      <Materials />
      <hr />
      <Publications />
      <hr />
      <VideoPlayer />
      <hr />
      <Memoization />
      <hr />
    </>
  );
}

export default App;
