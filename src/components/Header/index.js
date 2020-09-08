import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    console.log('oi');
    return (
        <nav className="header">
            <ul>
                <li>
                    <NavLink activeClassName="active" className="link" to="/" exact>
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" className="link" to="/contato" exact>
                        Contato
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
