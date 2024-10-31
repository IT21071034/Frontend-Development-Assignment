import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import UserTable from "./components/UserTable";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-4">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <UserTable activeTab={activeTab} />
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
