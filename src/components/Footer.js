import logo from '../assets/logo.svg'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="little lemon logo"/>
            </div>
            <div className="dormat-navigation">
                <h4 className="green small-margin">Dormat Navigation</h4>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/log-in">Log in</a></li>
                </ul>
            </div>
            <div className="contact">
                <h4 className="green small-margin">Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="social-media">
                <h4 className="green small-margin">Social Media Links</h4>
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