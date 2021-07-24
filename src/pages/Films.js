import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import {fetchData, renderOrder} from '../Services';
import Loading from "../components/Loading";
import Styles from "./Pages.module.scss"
import GenericCard from "../components/GenericCard";

function Films () {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [films, setFilms] = useState([]);
  const [order, setOrder] = useState('');
  const urlText = history.location.pathname.split('/')[1];

  const getFilms = async () => {
    const results = await fetchData(urlText);
    setFilms(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getFilms();
  },[])

  return (
    <div> 
      <Header />
      <div className={Styles.topic}>
        <h1>{urlText}</h1>
        {renderOrder(films, setOrder, setFilms)}
      </div>
      <div className={Styles.mainContainer}>
        {isLoading && <Loading />}
        {films.map((data,index) => <GenericCard page={urlText} key={index} data={data} />)}


      </div>
    </div>
  )
};

export default Films;
