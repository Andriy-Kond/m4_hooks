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

      {/* <Clock />
      <Clock />
      <Clock /> */}
      {/* <News /> */}
      {/* <SignupForm /> */}
      {/* <Pokemon /> */}
      {/*  
      <LoginForm />
      <Counter />
      <ColorPicker />
      <Todo />
      <Tabs />
      <Materials />
      <Publications />
      <VideoPlayer /> 
      <Memoization />
    */}
    </>
  );
}

export default App;
