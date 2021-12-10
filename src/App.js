import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@material-tailwind/react/tailwind.css";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import SourceCode from "./pages/SourceCode";
import UserManagement from "./pages/UserManagement";
import SourceCodeAdd from "./pages/SourceCodeAdd";
import SourceCodeEdit from "./pages/SourceCodeEdit";
import UserManagementAdd from "./pages/UserManagementAdd";
import UserManagementEdit from "./pages/UserManagementEdit";
// import * as FaIcons from "react-icons/fa";

function App() {
  return (
    <>
      <Router>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/source-code" element={<SourceCode />} />
          <Route path="/source-code/add-data" element={<SourceCodeAdd />} />
          <Route path="/source-code/edit-data" element={<SourceCodeEdit />} />

          <Route path="/user-management" element={<UserManagement />} />
          <Route
            path="/user-management/add-data"
            element={<UserManagementAdd />}
          />
          <Route
            path="/user-management/edit-data"
            element={<UserManagementEdit />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
