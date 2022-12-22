import { Box } from "@mui/material";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.primary" }}>
      <Navbar />
      {children}

      {router.pathname !== "/contact-us" && <Footer />}
    </Box>
  );
};

export default MainLayout;
