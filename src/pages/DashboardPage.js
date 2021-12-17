import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "./Dashboard";
import SourceCode from "./SourceCode";
import UserManagement from "./UserManagement";
import SourceCodeAdd from "./SourceCodeAdd";
import SourceCodeEdit from "./SourceCodeEdit";
import UserManagementAdd from "./UserManagementAdd";
import UserManagementEdit from "./UserManagementEdit";
import Account from "./Account";

export default function DashboardPage() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
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

        <Route path="/Account" element={<Account />} />
      </Routes>
    </>
  );
}
