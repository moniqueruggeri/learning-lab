import "./App.css";
import BreadCrumbs from "./components/BreadCrumb/BreadCrumb";
import Home from "./layout/Home";
import "./style.sass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
