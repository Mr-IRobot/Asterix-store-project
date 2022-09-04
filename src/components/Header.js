import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render () {
        return (
            <>
                <div>
                    <header >
                        <h4>Xtore</h4>
                        <div className="toggle" onclick="toggleMenu();"></div>
                        <ul className="menu">
                            <li><Link to='/' onclick="toggleMenu();">home</Link></li>
                            <li><Link to='/Products' onclick="toggleMenu();">Products</Link></li>
                            <li><Link to='/help' onclick="toggleMenu();">help</Link></li>
                            <li><Link to='/Signin' onclick="toggleMenu();">sign in</Link></li>
                        </ul>
                    </header>
                </div>
            </>
        );
    }
}

export default Header;






