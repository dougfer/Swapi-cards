import Modal from '@material-ui/core/Modal'
import { useState } from 'react';
import Styles from './SpecieCard.module.scss';
import SpecieModal from './SpecieModal';

function SpecieCard({data}) {

  const [modalOpen, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return(
    <div>
      <div className={Styles.card} onClick={() => handleOpen()}>
        <h3>{data.name}</h3>
        <p>{`Classificação: ${data.classification}`}</p>
        <p>{`Designação: ${data.designation}`}</p>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <SpecieModal close={handleClose} data={data} />
      </Modal>
    </div>
  )
}

export default SpecieCard;
