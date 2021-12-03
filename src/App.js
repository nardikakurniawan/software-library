import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import SourceCode from "./pages/SourceCode";
import UserManagement from "./pages/UserManagement";
// import * as FaIcons from "react-icons/fa";

function App() {
  return (
    <>
      <Router>
        <div className="flex ">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/source-code" element={<SourceCode />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
