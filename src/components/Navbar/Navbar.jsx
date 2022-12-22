import React from "react";

import { Box, Typography } from "@mui/material";

import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.transparent",
        width: "100%",
        padding: "25px 10%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Link href="/">
            <a>
              <Box
                component={"img"}
                src="/images/obelisk/logo_dark.webp"
                alt={""}
                sx={{ width: "100px", height: "30px" }}
              />
            </a>
          </Link>
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Link href={"/#aboutus"}>
              <a>
                <Typography
                  variant="body1"
                  color="text.dark"
                  fontWeight={"fontWeightMedium"}
                >
                  About US
                </Typography>
              </a>
            </Link>
            <Link href={"/services"}>
              <a>
                <Typography
                  variant="body1"
                  color="text.dark"
                  fontWeight={"fontWeightMedium"}
                >
                  Services
                </Typography>
              </a>
            </Link>
            <Link href={"/services/#pricing"}>
              <a>
                <Typography
                  variant="body1"
                  color="text.dark"
                  fontWeight={"fontWeightMedium"}
                >
                  Pricing
                </Typography>
              </a>
            </Link>
            <Link href={"/contact-us"}>
              <a>
                <Typography
                  variant="body1"
                  color="text.dark"
                  fontWeight={"fontWeightMedium"}
                >
                  Contact Us
                </Typography>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
