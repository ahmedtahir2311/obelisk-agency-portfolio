import { Box, Typography } from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const FeatureCard = ({ data }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        border: "solid 1px gray",
        borderRadius: "10px",
        boxShadow: "1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f5f5f550",
            borderRadius: "50%",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <data.Icon />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography
            variant="h5"
            color={"text.gray.dark"}
            sx={{ fontWeight: "semibold" }}
          >
            {data?.title}
          </Typography>
          <Typography variant="f16" color={"text.gray.light"}>
            {data?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
