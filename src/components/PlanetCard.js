import { useState } from 'react';
import Styles from './PlanetCard.module.scss';
import Modal from '@material-ui/core/Modal';
import PlanetModal from './PlanetModal';

function PlanetCard({data}) {

  const [modalOpen, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <div className={Styles.card} onClick={() => handleOpen()}>
        <h3>{data.name}</h3>
        <p>{`Clima: ${data.climate}`}</p>
        <p>{`Terreno: ${data.terrain}`}</p>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <PlanetModal close={handleClose} data={data} />
      </Modal>
    </div>
  )
}

export default PlanetCard;
