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
import Account from "./pages/Account";
import SourceCodeAddCategory from "./pages/SourceCodeAddCategory";
import SourceCodeDetail from "./pages/SourceCodeDetail";
import SourceCodeAddVideos from "./pages/SourceCodeAddVideos";
import SourceCodeEditVideos from "./pages/SourceCodeEditVideos";
import SourceCodeAddDocuments from "./pages/SourceCodeAddDocuments";
import SourceCodeEditDocuments from "./pages/SourceCodeEditDocuments";
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
          <Route path="/source-code/detail" element={<SourceCodeDetail />} />
          <Route path="/source-code/edit-data" element={<SourceCodeEdit />} />
          <Route
            path="/source-code/add-category"
            element={<SourceCodeAddCategory />}
          />
          <Route
            path="/source-code/add-video"
            element={<SourceCodeAddVideos />}
          />
          <Route
            path="/source-code/edit-video"
            element={<SourceCodeEditVideos />}
          />
          <Route
            path="/source-code/add-documents"
            element={<SourceCodeAddDocuments />}
          />
          <Route
            path="/source-code/edit-documents"
            element={<SourceCodeEditDocuments />}
          />

          <Route path="/user-management" element={<UserManagement />} />
          <Route
            path="/user-management/add-data"
            element={<UserManagementAdd />}
          />
          <Route
            path="/user-management/edit-data"
            element={<UserManagementEdit />}
          />

          <Route path="/Account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
