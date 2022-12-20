import React from "react";

import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";

import { getToken } from "@/utils/token";
import Link from "next/link";

const Navbar = () => {
  /*This function can also be the context of user 
    if avail then you can make further checks */

  // { data: { authLogin, authLogout }

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
                src="/images/tsks/Logo3.png"
                alt={""}
                sx={{ width: "100px", height: "30px" }}
              />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href={"/"}>
            <a>
              <Typography
                variant="body1"
                color="text.dark"
                fontWeight={"fontWeightMedium"}
              >
                Features
              </Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
