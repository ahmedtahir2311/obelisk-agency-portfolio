import { Box } from "@mui/material";
import React from "react";

const GradientBackground = ({ sx = {}, children }) => {
  return (
    <Box
      sx={{
        padding: "5px",
        background:
          "linear-gradient(45deg, rgba(196,84,198,1) 0%, rgba(243,150,131,1) 54%, rgba(237,128,106,1) 100%)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default GradientBackground;
