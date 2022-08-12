import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../Components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  //   const useStyles = makeStyles({
  //     container: {
  //       display: "flex",
  //     },
  //     sidebar: {
  //       width: "30%",
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "center",
  //       marginTop: "25",
  //       borderRight: "2px solid grey",
  //     },
  //   });

  const styles = (theme) => ({
    container: {
      display: "flex",
      //   [theme.breakpoints.down("md")]: {
      //     flexDirection: "column",
      //     alignItems: "center",
      //   },
    },
    sidebar: {
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "25",
      borderRight: "2px solid grey",
    },
  });

  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>aidebar</div>

      {/* chart */}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
