import "./App.css";
// import React from "react";
// import ExplorerPage from "./Components/ExplorerPage/ExplorerPage";
import ExplorerPage from "./Components/ExplorerPage/ExplorerPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import NotificationPage from "./Components/NotificationPage/NotificationPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<ExplorerPage />} />
        <Route path="/" element={<ExplorerPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
    // <Link to="/">{ExplorerPage}</Link>
    // <div className="app">
    //   <ExplorerPage />
    // </div>
  );
}

export default App;
