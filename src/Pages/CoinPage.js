import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import parse from "html-react-parser";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../Components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { Box, Divider, Grid, LinearProgress, Typography } from "@mui/material";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
  },
};

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  //   console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Grid container item sx={[styles.flexRow]} alignItems="center">
      <Grid
        item
        xs={4}
        sx={[styles.flexColumn, { p: 2 }]}
        alignItems="center"
        gap={2}
      >
        <img style={{ width: 200 }} src={coin.image.large}></img>
        <Typography variant="h3" fontWeight={700}>
          {coin.name}
        </Typography>
        <Typography textAlign="justify" variant="h6">
          {parse(coin.description.en.split(".")[0])}
        </Typography>
        <Grid item sx={[styles.flexRow]} gap={2}>
          <Typography variant="h5" fontWeight={700}>
            Rank:
          </Typography>
          <Typography variant="h5">{coin.market_cap_rank}</Typography>
        </Grid>
        <Grid item sx={[styles.flexRow]} gap={2}>
          <Typography variant="h5" fontWeight={700}>
            Current Price:
          </Typography>
          <Typography variant="h5">
            {symbol}
            {numberWithCommas(
              coin.market_data.current_price[currency.toLowerCase()]
            )}
          </Typography>
        </Grid>
        <Grid item sx={[styles.flexRow]} gap={2}>
          <Typography variant="h5" fontWeight={700}>
            Market Cap:
          </Typography>
          <Typography variant="h5">
            {symbol}
            {numberWithCommas(
              coin.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
            )}
            M
          </Typography>
        </Grid>
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ background: "grey" }} />
      <Grid item xs={7} sx={{p:3}}>
        <CoinInfo coin={coin} />
      </Grid>
    </Grid>
  );
};

export default CoinPage;
