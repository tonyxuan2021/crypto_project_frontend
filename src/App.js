import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
