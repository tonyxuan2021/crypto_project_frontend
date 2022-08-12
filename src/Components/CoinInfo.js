import axios from "axios";
import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress, Grid } from "@mui/material";

import { Line } from "react-chartjs-2";
import CryptoChart from "./CryptoChart";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag, setflag] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days, currency]);

  //   console.log(historicData);

  if (historicData) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Grid item>
          <CryptoChart historicData={historicData} currency={currency} />
          {/* charjs */}
        </Grid>
      </ThemeProvider>
    );
  }
};

export default CoinInfo;
