import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Membercard(props: any) {
  const { ageCallback, partyCallback, age, party } = props;

  const partyChange = (event: any) => {
    console.log(event);
    partyCallback(event);
  };
  const ageChange = (event: any) => {
    console.log(event);
    ageCallback(event);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 150, maxWidth: 400 }}
        >
          <InputLabel id="age-label">Ålder</InputLabel>
          <Select
            labelId="age-label"
            id="age-select"
            value={age || ""}
            label="age"
            onChange={(e) => ageChange(e?.target.value)}
          >
            <MenuItem value="DEFAULT" disabled>
              None
            </MenuItem>
            <MenuItem value="ascending">Stigande</MenuItem>
            <MenuItem value="descending">Fallande</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 150, maxWidth: 400 }}
        >
          <InputLabel id="party-label">Parti</InputLabel>
          <Select
            labelId="party-label"
            id="party-select"
            value={party || ""}
            label="party"
            onChange={(e) => partyChange(e?.target.value)}
          >
            <MenuItem value="DEFAULT" disabled>
              None
            </MenuItem>
            <MenuItem value="C">Centerpartiet</MenuItem>
            <MenuItem value="L">Liberalerna</MenuItem>
            <MenuItem value="MP">Miljöpartiet</MenuItem>
            <MenuItem value="M">Moderaterna</MenuItem>
            <MenuItem value="S">Socialdemokraterna</MenuItem>
            <MenuItem value="SD">Sverigedemokraterna</MenuItem>
            <MenuItem value="KD">Kristdemokraterna</MenuItem>
            <MenuItem value="V">Vänsterpartiet</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
