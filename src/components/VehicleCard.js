import Styles from './VehicleCard.module.scss';

function VehicleCard({data}) {
  return(
    <div className={Styles.card}>
      <h3>{data.name}</h3>
      <p>{`Fabricante: ${data.manufacturer}`}</p>
      <p>{`Custo: ${data.cost_in_credits}`}</p>
    </div>
  )
}

export default VehicleCard;
