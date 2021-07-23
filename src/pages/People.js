import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Loading from '../components/Loading';
import Styles from "./People.module.scss"
import { fetchData, renderOrder } from '../Services';
import GenericCard from "../components/GenericCard";

function People() {

  const [people, setPeople] = useState([]);
  const [order, setOrder] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const urlText = history.location.pathname.split('/')[1];
  

  const getPeople = async () => {
    const results = await fetchData(urlText);
    setPeople(results);
    setIsLoading(false);
  }

  useEffect(() => {
   getPeople();
  }, [])


  return (
    <div>
      <Header />
      <div className={Styles.topic}>
        <h1>{urlText}</h1>
      {renderOrder(people, setOrder, setPeople)}
      </div>
      <div className={Styles.mainContainer}>
        {isLoading && <Loading />}
        {people.map((data,index) => <GenericCard page={urlText} key={index} data={data} />)}
      </div>

    </div>
  )
}

export default People;
