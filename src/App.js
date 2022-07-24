import "./App.css";
import Home from "./components/Home";
import Dataprovider from "./context/dataprovider";
function App() {
  return (
    <div className="App">
      <Dataprovider>
        <Home />
      </Dataprovider>
    </div>
  );
}

export default App;
