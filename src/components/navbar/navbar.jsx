import "./navbar.css";
import { logo } from "../../constants";
import { Link } from "react-router";
import {
  Stack,
  Paper,
  InputBase,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Input({ isMobile }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 14px",
        display: "flex",
        alignItems: "center",
        width: isMobile ? "100%" : 500,
        borderRadius: 20,
        mt: isMobile ? 1 : 0,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent={isMobile ? "flex-start" : "space-between"}
      spacing={isMobile ? 2 : 0}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "#fff",
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={30} />
      </Link>

      {/* Input markazda bo'lishi uchun Box bilan o'ralgan */}
      {!isMobile && (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Input isMobile={isMobile} />
        </Box>
      )}

      {/* Mobile versiyada to'g'ridan-to'g'ri qo'yiladi */}
      {isMobile && <Input isMobile={isMobile} />}

      <span></span>
    </Stack>
  );
}
