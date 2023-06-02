import '../Style/Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
            <footer>
                <div class="footer-col">
                    <h4>products</h4>
                    <ul>
                        <li><a href="#">teams</a></li>
                        <li><a href="#">advertising</a></li>
                        <li><a href="#">talent</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>network</h4>
                    <ul>
                        <li><a href="#">technology</a></li>
                        <li><a href="#">science</a></li>
                        <li><a href="#">business</a></li>
                        <li><a href="#">professional</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about</a></li>
                        <li><a href="#">legal</a></li>
                        <li><a href="#">contact us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4> <div class="links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><IoLogoInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </footer>

    );
}

export default Footer;