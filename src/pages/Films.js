import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import {fetchData, renderCards, renderOrder} from '../Services';
import Loading from "../components/Loading";
import FilmCard from "../components/FilmCard";
import Styles from './Films.module.scss';

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
        {renderCards(films, FilmCard)}
      </div>
    </div>
  )
};

export default Films;
