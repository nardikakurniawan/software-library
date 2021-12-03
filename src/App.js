import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@material-tailwind/react/tailwind.css";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import SourceCode from "./pages/SourceCode";
import UserManagement from "./pages/UserManagement";
import SourceCodeAdd from "./pages/SourceCodeAdd";
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
            <Route path="/source-code/add-data" element={<SourceCodeAdd />} />

            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
