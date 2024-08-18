import ColorPicker from "./tasks/ColorPicker";
import colors from "dataBase/colors";

function App() {
  return (
    <>
      <div>
        <ColorPicker colors={colors} />
      </div>
    </>
  );
}

export default App;
