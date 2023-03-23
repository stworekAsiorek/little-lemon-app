import logo from '../assets/logo.svg'
import './Header.css'

function Header() {
    return (
        <header>
          <img src={logo} alt='little lemon logo'/>
        </header>
    );
  }

export default Header;