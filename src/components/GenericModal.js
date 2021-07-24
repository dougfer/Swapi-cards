import CloseIcon from '@material-ui/icons/Close';
import obj from './ModalObject';
import Styles from './Modal.module.scss';

function GenericModal({close, data, page}) {

  const arr = Object.entries(obj[page])
  return (
    <div className={Styles.modalContainer}>
      <CloseIcon className={Styles.closeIcon} fontSize="large" onClick={() => close()} />
      <h1>{data[arr[0][0]]}</h1>
      {arr.map((singleData, index) => {
        if(index > 0) {
          return <p>{`${singleData[1]}: ${data[singleData[0]]}`}</p>
        }
        return '';
      })}

    </div>
  )
}

export default GenericModal;
