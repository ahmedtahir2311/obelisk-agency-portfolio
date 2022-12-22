import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import Lottie from "lottie-react";
import spaceManAnimation from "./127848-happy-spaceman.json";

const Index = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/004.webp)",
        backgroundSize: "cover",
        backgroundPosition: "top",

        color: "text.bright",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0 100px 0 ",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography variant="h4">Have Something in Mind?</Typography>

          <Box sx={{ padding: "50px 0" }}>
            <form>
              {inputFields?.map((item) => (
                <Box
                  key={item?.name}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "10px 0",
                  }}
                >
                  <InputLabel
                    sx={{
                      fontSize: "22px",
                      fontWeight: 500,
                    }}
                  >
                    {item?.label}
                  </InputLabel>
                  <TextField
                    sx={{ width: "80%" }}
                    variant="standard"
                    name={item?.name}
                    autoComplete="off"
                    defaultValue={item?.defaultValue}
                    type={item?.type}
                    placeholder={item?.placeholder}
                    inputProps={{
                      sx: { color: "text.bright" },
                      pattern: item?.pattern,
                    }}
                  />
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "50px",
                }}
              >
                <Box>
                  <Button
                    variant="outlined"
                    color="dark2"
                    sx={{
                      borderRadius: "50px",
                      display: "flex",
                      fontStyle: "italic",
                      gap: "10px",
                      color: "#fff",
                    }}
                    size="large"
                  >
                    <Typography variant="f18">Send Query</Typography>
                    <EastIcon sx={{ color: "#fff" }} />
                  </Button>
                </Box>{" "}
              </Box>
            </form>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "1px",
          }}
        />

        <Box sx={{ width: "50%" }}>
          {" "}
          <Box sx={{ paddingBottom: "30px" }}>
            <Typography variant="h4" sx={{ textDecoration: "underline" }}>
              hello@helloWorld.com
            </Typography>
            <Box
              sx={{
                padding: "1px",
                margin: "30px 0 ",
                backgroundColor: "background.paper",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "50%",
                }}
              >
                <Typography variant="f24" sx={{ fontWeight: 700 }}>
                  USA
                </Typography>
                <Typography variant="f18">
                  2430 Laconia Ave, 2430 , Bronx, New York 10469, US
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="f16">Contact us:</Typography>
                  <Typography variant="f18">+646 499 2997</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Lottie
                  animationData={spaceManAnimation}
                  loop={true}
                  style={{
                    // height: "100%",
                    width: "250px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

const inputFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "John Doe",
    rules: {},
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "johndoe@email.com",
    rules: {},
  },
  {
    name: "phoneNo",
    label: "Phone No ",
    type: "email",
    placeholder: "+62 123 4567 8900",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    rules: {},
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    placeholder: "You Need to see your Reels",
    rules: {},
  },
];
