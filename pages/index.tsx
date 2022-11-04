import styles from "../styles/Home.module.css";
const axios = require("axios");
import { useEffect, useState } from "react";
import Membercard from "../Components/Membercard/Membercard";

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
      .then((res: any) => (age ? sortFunction(res, age) : res))
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
      <div className={styles.searchbar}>
        <div>
          Ålder:
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => sortAge(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              None
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div>
          Parti:
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => sortParty(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              None
            </option>
            <option value="C">Centerpartiet</option>
            <option value="L">Liberalerna</option>
            <option value="MP">Miljöpartiet</option>
            <option value="M">Moderaterna</option>
            <option value="S">Socialdemokraterna</option>
            <option value="SD">Sverigedemokraterna</option>
            <option value="KD">Kristdemokraterna</option>
            <option value="V">Vänsterpartiet</option>
          </select>
        </div>
      </div>

      {getSortedList() ? (
        <div className={styles.container}>
          {getSortedList().map((member: any, i: any) => {
            return <Membercard key={member.sourceid} data={member} />;
          })}
        </div>
      ) : (
        <p className={styles.preText}>Välkommen</p>
      )}
    </div>
  );
}
