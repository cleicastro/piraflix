import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';
// import Button from '../Button';
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';

function Menu({ handleSearch }) {
    const [search, setSearch] = useState('');

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Piraflix logo" />
            </Link>
            <input
                type="text"
                placeholder="Pesquisar"
                onChange={(e) => { setSearch(e.target.value); handleSearch(e.target.value) }}
                value={search}
                style={
                    {
                        height: 40,
                        width: 200,
                        color: 'white',
                        backgroundColor: 'rgb(185, 185, 185)'
                    }
                } />
            {/* <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button> */}
        </nav>
    );
}

export default Menu;