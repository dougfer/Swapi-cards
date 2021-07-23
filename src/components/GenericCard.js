import { Modal } from '@material-ui/core';
import { useState } from 'react';
import obj from './CardsObject';
import Styles from './GenericCard.module.scss';
import GenericModal from './GenericModal';

function GenericCard({page, data}) {
  const [modalOpen, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const arr = Object.entries(obj[page]);

  return (
    <div>
      <div className={Styles.card} onClick={() => handleOpen()}>
        <h3>{data[arr[0][0]]}</h3>
        {arr.map((singleData, index) => {
          if(index > 0 && index < 3) {
            return<p>{`${singleData[1]}: ${data[singleData[0]]}`}</p>
          }
          return '';
        })}
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}

      >
        <GenericModal close={handleClose} data={data} page={page} />
      </Modal>
    </div>
  )
}

export default GenericCard;
