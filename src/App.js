import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider value={ {color: 'red' }}>
        <div>
            <SelectColors/>
            <ColorBox/>
        </div>
    </ColorProvider>
  );
}

export default App;
