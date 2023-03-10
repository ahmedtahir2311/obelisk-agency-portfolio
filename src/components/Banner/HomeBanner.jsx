import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GradientBackground from "@/components/StyledComponents/StyledBox/GradiantBackground";

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
                Technology consulting Agency
              </Typography>
            </GradientBackground>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              We Are Digital Agency & Technology Solution
            </Typography>
            <Typography variant="body1">
              We are leading technology solutions providing company all over the
              world doing over 40 years.
            </Typography>
            <Box>
              <Button variant="outlined" color="dark2">
                <a href="#aboutus" style={{ color: "#fff" }}>
                  About Us
                </a>
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
