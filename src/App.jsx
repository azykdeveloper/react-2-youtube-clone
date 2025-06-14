import { Route, Routes } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [sidebar, setSidebar] = useState(true)
  
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/watch/:categoryId?/:videoId" element={<Watch />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;