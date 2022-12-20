import { Box } from "@mui/material";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.primary" }}>
      <Navbar />
      {children}
    </Box>
  );
};

export default MainLayout;
