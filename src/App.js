import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/Home/Home";
import Destination from "../src/Destination/Destination";
import Crew from "../src/Crew/Crew";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
