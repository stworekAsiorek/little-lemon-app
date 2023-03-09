import logo from './assets/logo.svg'
import Navigation from './Navigation';

function Footer() {
    return (
        <footer>
            <img src={logo} alt='little lemon logo'/>
            <div>
                <h4>Dormat Navigation</h4>
                <Navigation />
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://pinterest.com">Pinterest</a></li>
                </ul>
            </div>
        </footer>
    );
  }

export default Footer;