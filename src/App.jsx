import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/video";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true)
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;