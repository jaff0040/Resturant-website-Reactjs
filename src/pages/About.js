import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to our restaurant, where great food and warm hospitality come together.
          We believe that every meal should be a memorable experience, whether you are
          dining with family, friends, or enjoying a quiet moment for yourself. Our chefs
          use fresh, high-quality ingredients to create dishes that are rich in flavor
          and inspired by both traditional and modern cuisine.
        </p>
        <br />
        <p>
            From carefully prepared starters to satisfying main courses and delicious
            desserts, our menu is designed to offer something for everyone. We take pride
            in our attention to detail, friendly service, and comfortable atmosphere.
            Our goal is simple: to serve food that you will love and an experience that
            keeps you coming back.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
