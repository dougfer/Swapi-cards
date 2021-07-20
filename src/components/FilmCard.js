import Styles from './FilmCard.module.scss';

function FilmCard({data}) {
  return (
    <div className={Styles.mainCard}>
      <h3>{data.title}</h3>
      <p>{`Diretor: ${data.director}`}</p>
      <p>{`Data de lançamento: ${data.release_date}`}</p>
    </div>
  )
}

export default FilmCard;
