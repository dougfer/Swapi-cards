import Styles from './PeopleCard.module.scss';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import PeopleModal from './PeopleModal';

function PeopleCard({data}) {

  const [modalOpen, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return(
    <div>
      <div className={Styles.card} onClick={() => handleOpen()} >
        <h3>{data.name}</h3>
        <p>{`Data de nascimento: ${data.birth_year}`}</p>
        <p>{ data.gender !== "n/a" && `Sexo: ${data.gender}`}</p>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <PeopleModal close={handleClose} data={data} />
      </Modal>
    </div>
  )
}

export default PeopleCard;
