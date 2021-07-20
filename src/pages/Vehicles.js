import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { fetchData, renderOrder, renderCards } from '../Services';
import Loading from '../components/Loading';
import VehicleCard from "../components/VehicleCard";
import Styles from './Vehicles.module.scss';


function Vehicles() {

  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState('');
  const history = useHistory();
  const urlText = history.location.pathname.split('/')[1];

  const getVehicles = async () => {
    const results = await fetchData(urlText);
    setVehicles(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getVehicles();
  }, [])

  return(
    <div>
      <Header />
      <div className={Styles.topic}>
        <h1>{urlText}</h1>
        {renderOrder(vehicles, setOrder, setVehicles)}
      </div>
      <div className={Styles.mainContainer}>
        {isLoading && <Loading />}
        {renderCards(vehicles, VehicleCard)}
      </div>
    </div>
  )
}

export default Vehicles;
