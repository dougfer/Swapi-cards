import CloseIcon from '@material-ui/icons/Close';
import Styles from './Modal.module.scss';


function FilmModal({close, data}) {
  return (
    <div className={Styles.modalContainer}>
      <CloseIcon className={Styles.closeIcon} fontSize="large" onClick={() => close()} />
      {console.log(data)}
      <h1>{data.title}</h1>
      <p>{`Diretor: ${data.director}`}</p>
      <p>{`Produtor: ${data.producer}`}</p>
      <p>{`Data de lançamento: ${data.release_date}`}</p>
      <p>{`Sequência de abertura: ${data.opening_crawl}`}</p>
    </div>
  )
}

export default FilmModal;
