import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from '../components/Loading';
import { fetchData, renderOrder } from '../Services';
import Header from "../components/Header";
import Styles from "./Pages.module.scss"
import GenericCard from "../components/GenericCard";


function Starships() {

  const [starships, setStarships] = useState([]);
  const [order, setOrder] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const urlText = history.location.pathname.split('/')[1];

  const getStarships = async () => {
    const results = await fetchData(urlText);
    setStarships(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getStarships();
  },[])

  return (
    <div>
      <Header />
      <div className={Styles.topic}>
        <h1>{urlText}</h1>
        {renderOrder(starships, setOrder, setStarships)}
      </div>
      <div className={Styles.mainContainer}>
        {isLoading && <Loading />}
        {starships.map((data,index) => <GenericCard page={urlText} key={index} data={data} />)}

      </div>
    </div>
  )
}

export default Starships;
