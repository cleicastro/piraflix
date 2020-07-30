import React from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Piraflix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;