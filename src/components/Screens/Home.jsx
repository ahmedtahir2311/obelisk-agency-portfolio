import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import HomeBanner from "@/components/Banner/HomeBanner";
import GradientTypography from "@/components/StyledComponents/Texts/gradientTexts";
import GradientDivider from "@/components/StyledComponents/Divider/GradiantDivider";
import FeatureCard from "../Cards/FeatureCard";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <GradientDivider
        sx={{
          width: "80%",
        }}
      />

      <Box sx={{ padding: "100px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" sx={{ letterSpacing: "0.5rem" }}>
            BEST FEATURES
          </Typography>
          <GradientTypography
            variant="h2"
            sx={{ width: "75%", textAlign: "center" }}
          >
            We are a new digital product development agency
          </GradientTypography>
        </Box>

        <Grid container spacing={10} sx={{ padding: "30px " }}>
          {data?.map((item) => (
            <Grid item lg={6} key={item?.name} sx={{ width: "50%" }}>
              <FeatureCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;

const data = [
  {
    title: "Game Development",
    description:
      "Game Development is the art of creating games and describes the design, development and release of a game.",
  },
  {
    title: "Web Development",
    description:
      "Create a website page from a template, or you could painstakingly develop a massive website as web development",
  },
];
