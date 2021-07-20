import { useState } from 'react';
import Styles from './StarshipCard.module.scss';
import Modal from '@material-ui/core/Modal'
import StarshipModal from './StarshipModal';


function StarshipCard({data}) {

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
        <p>{`Fabricante: ${data.manufacturer}`}</p>
        <p>{`Custo: ${data.cost_in_credits}`}</p>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <StarshipModal close={handleClose} data={data} />
      </Modal>
    </div>
  )
}

export default StarshipCard;
