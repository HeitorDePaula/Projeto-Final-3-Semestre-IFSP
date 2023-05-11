import '../Style/Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <footer>
                <div id="footer_content">
                    <div id="footer_contacts">
                        <h1>Logo</h1>
                        <p>It's all about your dreams.</p>

                        <div id="footer_social_media">
                            <a href="#" className="footer-link" id="instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" className="footer-link" id="facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#" className="footer-link" id="whatsapp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>


                    <ul className="footer-list">
                        <li>
                            <h3>Blog</h3>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Tech</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Adventures</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Music</a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <h3>Blog</h3>
                        </li>
                        <li>
                            <a href="#" className="footer-link">App</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Desktop</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Cloud</a>
                        </li>
                    </ul>

                    <div id="footer_subscribe">
                        <h3>Subscribe</h3>
                        <p>Enter your e-mail to get notified about our news solutions</p>
                        <div id="input_group">
                            <input type="email" id="email" placeholder='Email'></input>
                            <button>
                                <i className="fa-regular fa-envelope" ></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="footer_copyright">
                  @
                  2023 all rights reserved
                </div>
            </footer>
        </div>
    );
}

export default Footer;