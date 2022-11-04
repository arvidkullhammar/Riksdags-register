import * as React from "react";
import styles from "./Member.module.css";

export default function Membercard(props: any) {
  const {
    tilltalsnamn: firstName,
    efternamn: lastName,
    bild_url_192: memberImg,
    fodd_ar: born,
    valkrets: area,
    parti: party,
  } = props.data;

  const getLogo = (partyName: string): string => {
    return `/images/${partyName}-logga.jpg`;
  };

  return (
    <div className={styles.card}>
      <img src={memberImg} />
      <div className={styles.container}>
        <span className={styles.logodiv}>
          <img className={styles.imgdiv} src={getLogo(party)} />
        </span>
        <h4 className={styles.textfield}>
          {firstName} {lastName}
        </h4>
        <p className={styles.textfield}>Född: {born}</p>
        <p className={styles.textfield}>{area}</p>
      </div>
    </div>
  );
}
