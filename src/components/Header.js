import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import Styles from './Header.module.scss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <MenuIcon fontSize="large" onClick={handleClick} className={Styles.menuIcon} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose}><Link to="/"><button className={Styles.buttonMenu}>Home</button></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/people"><button className={Styles.buttonMenu}>People</button></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/films"><button className={Styles.buttonMenu}>Films</button></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/starships"><button className={Styles.buttonMenu}>Starships</button></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/vehicles"><button className={Styles.buttonMenu}>Vehicles</button></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/species"><button className={Styles.buttonMenu}>Species</button></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/planets"><button className={Styles.buttonMenu}>Planets</button></Link></MenuItem>

      </Menu>
    </div>
  )
};

export default Header;
