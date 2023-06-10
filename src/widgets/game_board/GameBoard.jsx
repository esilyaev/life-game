import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { GameOfLife } from "../../entity/Game";
import { Tile } from "../../entity/tile/ui/Tile";

const game = new GameOfLife();

export const GameBoard = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [generation, setGeneration] = React.useState(0);

  const [intervalId, setIntervalId] = React.useState(0);

  const handleStart = () => {
    const newIntervalId = setInterval(() => handleNewGeneration(), 25);
    setIntervalId(newIntervalId);
  };

  const handleStop = () => {
    clearInterval(intervalId);
  };

  const handleNewGeneration = () => {
    game.nextTurn();
    forceUpdate();
  };

  const handleRestart = () => {
    handleStop();
    game.restart();
    forceUpdate();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "616px",
          flexWrap: "wrap",
          borderColor: "#c9c9c9",
          border: "2px solid",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        {game.grid.map((row, index) => {
          return row.map((el, col) => {
            return <Tile key={index * 120 + col} isAlive={!!el} />;
          });
        })}
      </Box>
      <Box sx={{ width: "600px", display: "flex", gap: 1, mt: 5 }}>
        <Button onClick={handleStart} variant="contained" fullWidth>
          Start
        </Button>
        <Button onClick={handleStop} variant="contained" fullWidth>
          Stop
        </Button>
        <Button onClick={handleRestart} variant="contained" fullWidth>
          Restart
        </Button>
      </Box>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Generation #{game.generation}
      </Typography>
    </>
  );
};
