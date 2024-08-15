import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Main from "./components/Main/main";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
