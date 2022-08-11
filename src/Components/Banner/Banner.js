import { ClassNames } from "@emotion/react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles({
  banner: {
    backgroundImage: "url(..//banner.jpeg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
});

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            get all the information regarding your favoriate crypto
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
