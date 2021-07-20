import Styles from './Modal.module.scss';
import CloseIcon from '@material-ui/icons/Close';

function PeopleModal({close, data}) {
  return (
    <div className={Styles.modalContainer}>
      <CloseIcon className={Styles.closeIcon} fontSize="large" onClick={() => close()} />
      <h1>{data.name}</h1>
      <p>{`Cor dos olhos: ${data.eye_color}`}</p>
      <p>{ data.hair_color !== "n/a" && `Cor do cabelo: ${data.hair_color}`}</p>
      <p>{`Cor da pele: ${data.skin_color}`}</p>
      <p>{ data.gender !== "n/a" && `Sexo: ${data.gender}`}</p>
      <p>{`Altura: ${data.height}cm`}</p>
      <p>{`Peso: ${data.mass}Kg`}</p>
    </div>
  )
};

export default PeopleModal;
