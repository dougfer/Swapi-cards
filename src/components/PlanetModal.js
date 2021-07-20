import Styles from './Modal.module.scss';
import CloseIcon from '@material-ui/icons/Close';

function PlanetModal({data, close}) {
  return (
    <div className={Styles.modalContainer}>
      <CloseIcon className={Styles.closeIcon} fontSize="large" onClick={() => close()} />
      <h1>{data.name}</h1>
      <p>{`Clima: ${data.climate}`}</p>
      <p>{`Diâmetro: ${data.diameter}`}</p>
      <p>{`Gravidade: ${data.gravity}`}</p>
      <p>{`População: ${data.population}`}</p>
      <p>{`Período orbital: ${data.orbital_period}`}</p>
      <p>{`Período de rotação: ${data.rotation_period}`}</p>
      <p>{`Terreno: ${data.terrain}`}</p>
    </div>
  )
};

export default PlanetModal;
