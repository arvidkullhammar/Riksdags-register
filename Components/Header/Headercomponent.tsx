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
  const [age, setAge] = useState("");
  const [party, setParty] = useState<any | null>(null);

  const partyChange = (event: SelectChangeEvent) => {
    setParty(event.target.value as string);
  };
  const ageChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className={styles.container}>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, maxWidth: 400 }}
      >
        <InputLabel id="age-label">Ålder</InputLabel>
        <Select
          labelId="age-label"
          id="age-select"
          value={age}
          label="age"
          onChange={ageChange}
        >
          <MenuItem value="DEFAULT" disabled>
            None
          </MenuItem>
          <MenuItem value="ascending">Ascending</MenuItem>
          <MenuItem value="descending">Descending</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, maxWidth: 400 }}
      >
        <InputLabel id="party-label">Parti</InputLabel>
        <Select
          labelId="party-label"
          id="party-select"
          value={party}
          label="party"
          onChange={partyChange}
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
  );
}
