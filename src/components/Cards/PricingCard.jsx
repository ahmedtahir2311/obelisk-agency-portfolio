import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GradientDivider from "../StyledComponents/Divider/GradiantDivider";
import GradientBackground from "../StyledComponents/StyledBox/GradiantBackground";

const DisorderedCard = ({ data, index }) => {
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
          padding: "30px ",
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <GradientBackground
          sx={{
            position: "absolute",
            top: 40,
            left: 0,
            padding: "0 30px",
            borderRadius: "0 10px  10px 0",
            color: "#fff",
          }}
        >
          {data.name}
        </GradientBackground>
        <Box component={"img"} src={data?.icon} sx={{ width: "100px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {" "}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {data?.price}
          </Typography>
          <Typography variant="f14">Monthly Package</Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <GradientDivider />
        </Box>

        <Box
          sx={{
            padding: "10px 0 30px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {data.benefits?.map((item, index) => (
            <Typography key={item} variant="f14">
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ position: "absolute", bottom: "-10px", left: "30%" }}>
          <Button
            variant="gradiented"
            onClick={() => router.push("/contact-us")}
          >
            {" "}
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DisorderedCard;
