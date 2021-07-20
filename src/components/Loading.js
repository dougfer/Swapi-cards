import load from '../Images/loading2.gif';
import './Loading.scss';

function Loading() {
  return (
    <div className="mainLoading">
      <h1>Carregando...</h1>
      <img src={load} alt="loading" />
    </div>
  )
}

export default Loading;
