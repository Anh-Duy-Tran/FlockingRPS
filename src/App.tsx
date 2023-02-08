import { BoidProvider } from "./contexts/BoidProvider";
import { MainPage } from "./pages/MainPage";


function App() {
  return (
    <BoidProvider>
      <MainPage/>
    </BoidProvider>
  );
}

export default App;
