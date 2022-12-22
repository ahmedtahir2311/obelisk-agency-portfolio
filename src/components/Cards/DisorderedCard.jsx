import { Box, Typography } from "@mui/material";
import React from "react";

const DisorderedCard = ({ item, index }) => {
  return (
    <Box
      sx={{
        margin: index % 2 == 0 ? "" : "-30px 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          width: "300px",
          minHeight: "300px",
          borderRadius: "20px",
          padding: "30px",
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          cursor: "pointer",

          "&:hover": {
            background:
              "linear-gradient(45deg, rgba(196,84,198,1) 0%, rgba(243,150,131,1) 54%, rgba(237,128,106,1) 100%)",
          },
        }}
      >
        <Box
          component={"img"}
          src={item?.image}
          sx={{ width: "50px", filter: "invert(1)" }}
        />
        <Typography variant="f18" sx={{ fontWeight: "bold" }}>
          {item?.title}
        </Typography>
        <Typography variant="f14">{item?.description}</Typography>
      </Box>
    </Box>
  );
};

export default DisorderedCard;
