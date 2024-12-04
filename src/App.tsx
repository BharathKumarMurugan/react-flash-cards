import Stacker from "./components/Stacker";
import { cardData } from "./utils/data";

function App() {

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <Stacker data={cardData} />
    </div>
  );
}

export default App;
