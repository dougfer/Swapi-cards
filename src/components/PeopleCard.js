import Styles from './PeopleCard.module.scss';
import bob from '../Images/bob.png';


function PeopleCard({data}) {

  return(
    <div className={Styles.card}>
      <h3>{data.name}</h3>
      <img src={bob } alt="Character" />
      <p>{`Data de nascimento: ${data.birth_year}`}</p>
      <p>{ data.gender !== "n/a" && `Sexo: ${data.gender}`}</p>
    </div>
  )
}

export default PeopleCard;
