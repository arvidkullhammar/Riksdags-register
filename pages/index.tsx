import styles from "../styles/Home.module.css";
const axios = require("axios");
import { useEffect, useState } from "react";
import Membercard from "../Components/Membercard/Membercard";
import Headercomponent from "../Components/Header/Headercomponent";

export default function Home() {
  const [list, setList] = useState([] as any[]);
  const [age, sortAge] = useState<any | null>(null);
  const [party, sortParty] = useState<any | null>(null);

  const fetchData = async () => {
    await axios
      .get(
        `https://data.riksdagen.se/personlista/?parti=${party}&utformat=json`
      )
      .then((res: any) => res.data.personlista.person)
      // .then((res: any) => (age ? sortFunction(res, age) : res))
      .then((res: any) => setList(res));
  };

  const getSortedList = () => {
    return sortFunction(list, age);
  };

  const sortFunction = (data: any, currentAge: any) => {
    if (!data) {
      return data;
    }

    if (currentAge === "ascending") {
      data.sort((a: any, b: any) => {
        return (b as any).fodd_ar - (a as any).fodd_ar;
      });
    }
    if (currentAge === "descending") {
      data.sort((a: any, b: any) => {
        return (a as any).fodd_ar - (b as any).fodd_ar;
      });
    }
    console.log("sorted", currentAge);

    return data;
  };

  useEffect(() => {
    fetchData();
    console.log(list);
  }, [party]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.header}>
        <Headercomponent
          age={age}
          party={party}
          ageCallback={sortAge}
          partyCallback={sortParty}
        />
      </div>

      {getSortedList() ? (
        <div className={styles.container}>
          {getSortedList().map((member: any, i: any) => {
            return (
              <Membercard
                className={styles.card}
                key={member.sourceid}
                data={member}
              />
            );
          })}
        </div>
      ) : (
        <p className={styles.preText}>Välkommen</p>
      )}
    </div>
  );
}
