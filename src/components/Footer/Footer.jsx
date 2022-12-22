import { Box, Button, Typography } from "@mui/material";
import React from "react";

import GradientTypography from "@/components/StyledComponents/Texts/gradientTexts";

import GradientDivider from "@/components/StyledComponents/Divider/GradiantDivider";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          minHeight: "40vh",
          backgroundImage: "url(/images/004.webp)",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px 200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
              }}
            >
              <GradientDivider sx={{}} />

              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                lets Talk
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              ABOUT YOUR
            </Typography>
            <GradientTypography variant="h3" sx={{ fontWeight: "bold" }}>
              NEXT PROJECT .
            </GradientTypography>
          </Box>

          <Box>
            <Button
              variant="outlined"
              color="dark2"
              onClick={() => router.push("/contact-us")}
            >
              {" "}
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", padding: "30px 0" }}>
          {" "}
          © 2023 All Rights Reserved. Design & Developed By Edsom Devs
        </Box>
      </Box>
    </>
  );
};

export default Footer;
