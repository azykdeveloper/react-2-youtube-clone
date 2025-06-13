import { Routes, Route } from "react-router";
import Box from "@mui/material/Button";
import Main from "../main/main";
import Channel from "../channel/channel";
import Navbar from "../navbar/navbar";
import Video from "../video/video";
import Search from "../search/search";
function App() {
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/channel/:id" Component={Channel} />
          <Route path="/video/:id" Component={Video} />
          <Route path="/search/:id" Component={Search} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
