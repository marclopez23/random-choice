import "./App.css";
import Main from "./views/Main/Main";
import platforms from "./data/data.json";

function App() {
  
  return <Main platforms={platforms} />;
}

export default App;
