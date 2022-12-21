import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HomeBanner from "@/components/Banner/HomeBanner";
import GradientTypography from "@/components/StyledComponents/Texts/gradientTexts";
import GradientDivider from "@/components/StyledComponents/Divider/GradiantDivider";
import FeatureCard from "../Cards/FeatureCard";
import DisorderedCard from "../Cards/DisorderedCard";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <GradientDivider sx={{}} />
      <Box
        sx={{
          padding: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
          backgroundColor: "white",
        }}
      >
        {companies?.map((item) => (
          <Box
            key={item}
            component={"img"}
            src={item}
            sx={{ width: "150px" }}
          />
        ))}
      </Box>
      <GradientDivider sx={{}} />

      <Box sx={{ padding: "100px 50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
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
                About Us{" "}
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{
                letterSpacing: "0.5rem",
                fontWeight: "bold",
                lineHeight: "1.8rem",
              }}
            >
              Over 25+ Years Helping Brands to Reach Full Potential
            </Typography>
            <Typography
              variant="f16"
              sx={{
                lineHeight: "1.8rem",
                textAlign: "justify",
              }}
            >
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world. From
              its medieval origins to the digital era, learn everything there is
              to know about the ubiquitous lorem ipsum passage. Creation
              timelines for the standard lorem ipsum passage vary, with some
              citing the 15th century.
            </Typography>
            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GradientTypography variant="h3" sx={{ fontWeight: "bold" }}>
                  450+
                </GradientTypography>
                <Typography variant="h6" sx={{}}>
                  Happy Clients
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GradientTypography variant="h3" sx={{ fontWeight: "bold" }}>
                  750 +
                </GradientTypography>
                <Typography variant="h6" sx={{}}>
                  Project Delivered
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "60%",
              padding: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {howCode?.map((item, index) => (
              <DisorderedCard key={item.title} item={item} index={index} />
            ))}
          </Box>
        </Box>
      </Box>

      <Box height="40vh" sx={{ position: "relative" }}>
        <Box
          sx={{
            height: "40vh",
            backgroundImage: "url(/images/002.webp)",
            backgroundSize: "cover ",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            height: "40vh",
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            opacity: 0.5,
          }}
        />
      </Box>
      <Box sx={{ padding: "100px 50px" }}>
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

        <Grid container spacing={5} sx={{ padding: "30px " }}>
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
    Icon: SportsEsportsIcon,
    description:
      "Video game developers help transform games from a concept to a playable reality. They do this by coding visual elements, programming features, and testing iterations until a game is ready for market. If you love video games and enjoy working with computers, a career in video game development can be immensely rewarding.",
  },
  {
    title: "Web Development",
    Icon: LanguageIcon,
    description:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services in Web development",
  },
  {
    title: "Graphics Designing",
    Icon: GraphicEqIcon,
    description:
      "Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports.",
  },
];

const companies = [
  "/images/Companylogo/logo_4.webp",
  "/images/Companylogo/logo_5.webp",
  "/images/Companylogo/partner-1.webp",
  "/images/Companylogo/partner-3.webp",
  "/images/Companylogo/partner-21.webp",
];

const howCode = [
  {
    title: "High-quality Code  ",
    image: "/images/icons/laptop-screen-w.webp",
    description: `Good code is high quality. And it's clean code. It stands the test of time. Bad code is low quality. It won't last long`,
  },
  {
    title: "Agile Approach",
    image: "/images/icons/optimization-w.webp",
    description:
      "an iterative approach to project management and software development that helps teams deliver value",
  },
  {
    title: "Full-stack teams",
    image: "/images/icons/development-u.webp",
    description:
      "a group of dedicated developers who specialize in various fields of software development ",
  },
  {
    title: "Flexibility  ",
    image: "/images/icons/shield-w.webp",
    description:
      "ability of a joint or series of joints to move through an unrestricted, pain free range of motion",
  },
];
