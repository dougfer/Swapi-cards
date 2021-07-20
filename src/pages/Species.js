import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Loading from '../components/Loading';
import SpecieCard from "../components/SpecieCard";
import { fetchData, renderOrder, renderCards } from '../Services';
import Styles from './Species.module.scss';


function Species() {

  const [species, setSpecies] = useState([]);
  const [order, setOrder] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const urlText = history.location.pathname.split('/')[1];

  const getSpecies = async () => {
    const results = await fetchData(urlText);
    setSpecies(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getSpecies();
  },[])

  return (
    <div>
      <Header />
      <div className={Styles.topic}>
        <h1>{urlText}</h1>
        {renderOrder(species, setOrder, setSpecies)}
      </div>
      <div className={Styles.mainContainer}>
        {isLoading && <Loading />}
        {renderCards(species, SpecieCard)}
      </div>
    </div>
  )
}

export default Species;
