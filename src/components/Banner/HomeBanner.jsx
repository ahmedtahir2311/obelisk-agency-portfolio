import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GradientBackground from "@/components/StyledComponents/StyledBox/gradiantBackground";

const HomeBanner = () => {
  return (
    <Box width="100%" height="80vh" sx={{ padding: "0 100px" }}>
      <Box
        sx={{
          height: "inherit",
          display: "flex",
          justifyContent: " space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box width="50%">
          <Box
            sx={{
              display: "flex ",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <GradientBackground
              sx={{ width: "max-content", borderRadius: "6px " }}
            >
              <Typography
                variant="f12"
                sx={{
                  padding: "5px 30px",

                  letterSpacing: "0.2rem",
                }}
              >
                DIGITAL CONSULTING AGENCY
              </Typography>
            </GradientBackground>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Unique Business Consulting.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Box>
              <Button variant="outlined" color="dark2">
                {" "}
                About Us
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <GradientBackground
            sx={{
              width: "600px",
              height: "350px",
              border: "solid 10px gray",
              borderRadius: "30px",

              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "inherit",
                height: "inherit",
                backgroundImage: "url(/images/001.webp)",
                backgroundSize: "cover",
                borderRadius: "30px",
                transform: " rotate(10deg)",
                // filter: "invert(5)",
              }}
            />
          </GradientBackground>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
