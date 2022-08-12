import React from "react";
import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useNavigate();

  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history("/")}
                className={classes.title}
              >
                Crypto Tracker
              </Typography>
              <Select
                variant="outlined"
                sx={{ width: 100, height: 40, marginLeft: 15 }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"usd"}>USD</MenuItem>
                <MenuItem value={"cny"}>CNY</MenuItem>
                <MenuItem value={"cad"}>CAD</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Header;
