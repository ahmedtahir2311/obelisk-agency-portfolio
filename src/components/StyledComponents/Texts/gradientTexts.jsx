import { Typography } from "@mui/material";
import React from "react";

const GradientTypography = ({ variant = "body1", children, sx = {} }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...sx,
        background:
          "-webkit-linear-gradient(45deg, rgba(196,84,198,1) 0%, rgba(243,150,131,1) 54%, rgba(237,128,106,1) 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      }}
    >
      {children}
    </Typography>
  );
};

export default GradientTypography;
