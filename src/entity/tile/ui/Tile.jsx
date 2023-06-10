import React from "react";
import { Box } from "@mui/material";
import clsx from "clsx";

import style from "./Tile.module.css";

export const Tile = ({ isAlive }) => {
  return (
    <Box
      sx={{
        width: "20px",
        height: "20px",
        // border: "2px solid green",
        borderRadius: "20px",
      }}
      className={clsx({
        [style["tile-active"]]: isAlive,
      })}
    />
  );
};
