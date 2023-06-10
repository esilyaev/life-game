import { useState } from "react";

import "./App.css";
import { CssBaseline, Stack } from "@mui/material";
import { GameBoard } from "../widgets/game_board/GameBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Stack
        sx={{ height: "100vh", justifyItems: "center", alignItems: "center" }}
      >
        <h1>Game of Life</h1>
        <GameBoard />
      </Stack>
    </>
  );
}

export default App;
