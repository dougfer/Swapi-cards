import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchData, renderOrder } from '../Services';
import Loading from '../components/Loading';
import Header from "../components/Header";
import Styles from "./Pages.module.scss"
import GenericCard from "../components/GenericCard";

function Planets() {

  const [planets, setPlanets] = useState([]);
  const [order, setOrder] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const urlText = history.location.pathname.split('/')[1];

  const getSpecies = async () => {
    const results = await fetchData(urlText);
    setPlanets(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getSpecies();
  }, [])

  return(
    <div>
      <Header page={urlText} />
      <div className={Styles.topic}>
        <h1>{urlText}</h1>
        {renderOrder(planets, setOrder, setPlanets)}
      </div>
      <div className={Styles.mainContainer}>
        {isLoading && <Loading />}
        {planets.map((data,index) => <GenericCard page={urlText} key={index} data={data} />)}
      </div>
    </div>
  )
}

export default Planets;
