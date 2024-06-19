import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <div className='footer' id="footer">
            <div className="footer-wrapper">

                {/* <Link to='/'>
                    <div className="footer-logo">
                        <img src={`${process.env.PUBLIC_URL}/assests/logo.svg`} alt="" />
                    </div>
                </Link>
                <div className="footer-wrapper-right">
                    <div className="footer-product-line">
                        <div className="footer-product">Product</div>
                        <Link to='/document' className='footer-link'>
                        <div className="footer-document">Documentation</div>
                        </Link>
                        <a href='https://wordpress.org/support/plugin/login-designer/' target='_blank' className="footer-support">Support - WordPress.org </a>
                        <a href='https://objectsws.atlassian.net/servicedesk/customer/portal/19' target='_blank' className="footer-support">Support - Pro Version</a>
                    </div>
                    <div className="footer-extras-line">
                        <div className="footer-extras">Extras</div>
                        <Link to='/terms' className='footer-link'>
                            <div className="footer-terms">Terms</div>
                        </Link>
                        <Link to='/privacy' className='footer-link'>
                            <div className="footer-privacy">Privacy</div>
                        </Link>

                    </div>
                    <div className="footer-social-line">
                        <div className="footer-social">Social</div>
                        <a className='footer-link' href="https://twitter.com/logindesigner" target='_blank'>
                        <div className="footer-twitter">@logindesigner</div></a>
                    </div>
                </div>
            </div> */}
                <div className="footer-copy">© 2024 Farouk Emad, from Fake Api Store</div>
                <div className="footer-blue-shape">
                    <img src={`${process.env.PUBLIC_URL}/assests/blue-shape.svg`} alt="" />
                </div>
            </div>
        </div>
    )
}
