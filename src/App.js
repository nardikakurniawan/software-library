import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Sidebar";
// import * as FaIcons from "react-icons/fa";

function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
