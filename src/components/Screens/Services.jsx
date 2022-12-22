import React from "react";

import { Box, Typography } from "@mui/material";
import GradientTypography from "../StyledComponents/Texts/gradientTexts";
import DisorderedCard from "../Cards/DisorderedCard";
import PricingCard from "../Cards/PricingCard";
import GradientDivider from "../StyledComponents/Divider/GradiantDivider";
import GradientBackground from "../StyledComponents/StyledBox/GradiantBackground";

const Index = () => {
  return (
    <>
      <Box
        sx={{
          padding: "84px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minHeight: "20vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              //   alignItems: "center",
            }}
          >
            <GradientTypography variant="h2" sx={{ fontWeight: "bold" }}>
              Web and Game Development Services{" "}
            </GradientTypography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography variant="f24" sx={{ textAlign: "justify" }}>
                A successful offshore software application development company
                since 1997,providing a full range of website and mobile app
                development,games development, IOT,AR-VR and other IT services
                and solutions globally.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "500px",
              backgroundImage: "url(/images/banner5.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
              display: "Flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              position: "relative",
            }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 500,
            lineHeight: "1.8em",
            textAlign: "center",
            padding: "60px",
          }}
        >
          We bring the value of digital first approach to strategy & creative
        </Typography>
      </Box>
      <Box sx={{ padding: "0 50px" }}>
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
                Services
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
              Our Working Process - How We Work For Our Customers{" "}
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
                  100+
                </GradientTypography>
                <Typography variant="h6" sx={{}}>
                  Web Designs
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
                  300+
                </GradientTypography>
                <Typography variant="h6" sx={{}}>
                  Game Graphics
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "100px ",
        }}
        id="pricing"
      >
        <GradientBackground
          sx={{
            borderRadius: "20%",
            width: "max-content",
            padding: "10px 30px",
          }}
        >
          <Typography variant="f24" sx={{ letterSpacing: "0.2rem" }}>
            {" "}
            Pricing
          </Typography>
        </GradientBackground>
        <Typography
          variant="h3"
          sx={{ fontweight: "bold", letterSpacing: "0.2rem" }}
        >
          {" "}
          Our Pricing Plan
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            padding: "100px 100px 0",
          }}
        >
          {pricing?.map((item, index) => (
            <PricingCard
              key={`${item?.name}[${index}]`}
              data={item}
              index={index}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Index;

const howCode = [
  {
    title: "Discovery  ",
    image: "/images/icons/laptop-screen-w.webp",
    description: `Good code is high quality. And it's clean code. It stands the test of time. Bad code is low quality. It won't last long`,
  },
  {
    title: "Planning",
    image: "/images/icons/optimization-w.webp",
    description:
      "An iterative approach to project management and software development that helps teams deliver value",
  },
  {
    title: "Execute",
    image: "/images/icons/development-u.webp",
    description:
      "A group of dedicated developers who specialize in various fields of software development ",
  },
  {
    title: "Deliver",
    image: "/images/icons/shield-w.webp",
    description:
      "Ability of a joint or series of joints to move through an unrestricted, pain free range of motion",
  },
];

const pricing = [
  {
    name: "Silver",
    icon: "/images/1-1.webp",
    price: "$29.99 - $100",
    packageType: "Monthly Package",
    benefits: [
      "Powerful Admin Panel 1",
      "1 Native  App",
      "Multi-Language Support",
      "Support via E-mail and Phone",
      "and many more",
    ],
  },
  {
    name: "Gold",
    icon: "/images/0002.webp",
    price: "$100 - $300",
    packageType: "Monthly Package",
    benefits: [
      "Powerful Admin Panel",
      "2 Native  App",
      " Multi-Language Support",
      "Support via E-mail and Phone",
      "and many more",
    ],
  },
  {
    name: "Platinum",
    icon: "/images/3.webp",
    price: "$300 - $500",
    packageType: "Monthly Package",
    benefits: [
      "Powerful Admin Panel",
      "3 Native App",
      " Multi-Language Support",
      "Support via E-mail and Phone",
      "and many more",
    ],
  },
];
