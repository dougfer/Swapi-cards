import Styles from './Modal.module.scss';
import CloseIcon from '@material-ui/icons/Close';

function VehicleModal({data, close}) {
  return (
    <div className={Styles.modalContainer}>
      <CloseIcon className={Styles.closeIcon} fontSize="large" onClick={() => close()} />
      <h1>{data.name}</h1>
      <p>{`Modelo: ${data.model}`}</p>
      <p>{`Capacidade de carga: ${data.cargo_capacity}`}</p>
      <p>{`Custo: ${data.cost_in_credits}`}</p>
      <p>{`Consumíveis: ${data.consumables}`}</p>
      <p>{`Capacidade de tripulação: ${data.crew}`}</p>
      <p>{`Cumprimento: ${data.length}`}</p>
      <p>{`Capacidade de passageiros: ${data.passengers}`}</p>
      <p>{`Fabricante: ${data.manufacturer}`}</p>
      <p>{`Classe: ${data.vehicle_class}`}</p>
      
    </div>
  )
}

export default VehicleModal;
