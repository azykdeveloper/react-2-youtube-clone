import { Route, Routes } from "react-router";
import { useState } from "react";
import Navbar from "./components/navbar";
import Video from "./pages/Video";
import Home from "./pages/Home";

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