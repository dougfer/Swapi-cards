import Styles from './PlanetCard.module.scss';

function PlanetCard({data}) {
  return (
    <div className={Styles.card}>
      <h3>{data.name}</h3>
      <p>{`Clima: ${data.climate}`}</p>
      <p>{`Terreno: ${data.terrain}`}</p>
    </div>
  )
}

export default PlanetCard;
