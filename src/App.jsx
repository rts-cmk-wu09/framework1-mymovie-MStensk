import DetailsView from "./pages/DetailView";
import ListView from "./pages/ListView";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {

  return (

    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
