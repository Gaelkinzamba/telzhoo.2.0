import React from 'react';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>Copyright 2019 - 
                <Link to="https://platinovida.com/">A PlatinoVida Creation</Link>
            </p>
            <ul>
                <li>
                    <a href="facebook.com">
                        <Facebook />
                    </a>
                </li>
                <li>
                    <a href="twitter.com">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a href="instagram">
                        <Instagram />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer