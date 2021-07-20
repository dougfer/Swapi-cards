import Styles from './Modal.module.scss';
import CloseIcon from '@material-ui/icons/Close';

function SpecieModal({data, close}) {
  return (
    <div className={Styles.modalContainer}>
      <CloseIcon className={Styles.closeIcon} fontSize="large" onClick={() => close()} />
      <h1>{data.name}</h1>
      <p>{`Designação: ${data.designation}`}</p>
      <p>{`Altura média: ${data.average_height}cm`}</p>
      <p>{`Tempo de vida médio: ${data.average_lifespan}`}</p>
      <p>{`Cor dos olhos: ${data.eye_colors}`}</p>
      <p>{`Cor dos cabelos: ${data.hair_colors}`}</p>
      <p>{`Cor da pele: ${data.skin_colors}`}</p>
      <p>{`Idioma: ${data.language}`}</p>
    </div>
  )
}

export default SpecieModal;
