import load from '../Images/loading.gif';
import './Loading.scss';

function Loading() {
  return (
    <div className="mainLoading">
      <img src={load} alt="loading" />
    </div>
  )
}

export default Loading;
