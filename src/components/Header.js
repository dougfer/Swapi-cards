import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import Styles from './Header.module.scss';

function Header({page}) {
  return (
    <div className={Styles.header}>
      <img src={logo} alt="logo" />
      <nav>
      <Link to="/"><button>Home</button></Link>
        <Link to="/people"><button>People</button></Link>
        <Link to="/films"><button>Films</button></Link>
        <Link to="/starships"><button>Starships</button></Link>
        <Link to="/vehicles"><button>Vehicles</button></Link>
        <Link to="/species"><button>Species</button></Link>
        <Link to="/planets"><button>Planets</button></Link>
      </nav>
    </div>
  )
};

export default Header;
