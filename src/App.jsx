import "./App.css";
import React from "react";
// import ExplorerPage from "./Components/ExplorerPage/ExplorerPage";
import ExplorerPage from "./Components/ExplorerPage/ExplorerPage";
// import SearchPage from "./Components/SearchPage/SearchPage";
import NotificationPage from "./Components/NotificationPage/NotificationPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NoPage from "./NoPage";
// import Layout from "./Layout";
// import { useState } from "react";
// import { createContext } from "react";

// export const footerContext = createContext("");
// import { Link } from "react-router-dom";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* <Layout> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Footer />}> */}
          <Route index path="/" element={<ExplorerPage />} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
          <Route path="notifications" element={<NotificationPage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </Layout> */}
    </div>

    // <Link to="/">{ExplorerPage}</Link>
    // <div className="app">
    //   <ExplorerPage />
    // </div>
  );
};

export default App;
