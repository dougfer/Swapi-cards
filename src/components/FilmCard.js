import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import Styles from './FilmCard.module.scss';
import FilmModal from './FilmsModal';

function FilmCard({data}) {

  const [modalOpen, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={Styles.mainCard} onClick={() => handleOpen()}>
        <h3>{data.title}</h3>
        <p>{`Diretor: ${data.director}`}</p>
        <p>{`Data de lançamento: ${data.release_date}`}</p>
      </div>
      <Modal 
        open={modalOpen}
        onClose={handleClose}
      >
        <FilmModal close={handleClose} data={data} />

      </Modal>
    </div>
  )
}

export default FilmCard;
