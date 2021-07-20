import Styles from './SpecieCard.module.scss';

function SpecieCard({data}) {
  return(
    <div className={Styles.card}>
      <h3>{data.name}</h3>
      <p>{`Classificação: ${data.classification}`}</p>
      <p>{`Designação: ${data.designation}`}</p>
    </div>
  )
}

export default SpecieCard;
