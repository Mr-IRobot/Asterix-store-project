import React from 'react';
import { Link } from 'react-router-dom';


class Products extends React.Component {
    render () {
        return (
            <body>
                <header>
                    <h4>Xtore</h4>
                    <input type="search" placeholder="search"/>
                    <div className="toggle" onclick="toggleMenu();"></div>
                    <ul className="menu">
                        <li><Link to='/' onclick="toggleMenu();">home</Link></li>
                        <li><Link to='/Products' onclick="toggleMenu();">Products</Link></li>
                        <li><Link to='/help' onclick="toggleMenu();">help</Link></li>
                        <li><Link to='/signin' onclick="toggleMenu();">sign in</Link></li>
                    </ul>
                </header>
                <section>
                    <div className="cards">
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")}alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src={require("./image/close.png")} alt=""/>
                                <p>Digion</p>
                            </div>
                            <div className="prdimage">
                                <img src={require("./image/pic.jpg")} alt="" width="230px"/>
                            </div>
                            <p>Product name</p>
                            <p className="price">$600</p>
                            <div className="center">
                                <button className="primary view">view</button></div>
                        </div>
                    </div>
                </section>
                


                {/* <script type="text/javascript">
                    window.addEventListener('scroll', function(){
                        var header = document.querySelector('header');
                        header.classList.toggle('sticky', window.scrollY > 0);
                    });

                    function toggleMenu() {
                        var menuToggle = document.querySelector('.toggle');
                        var menu = document.querySelector('.menu');
                        menuToggle.classList.toggle('active');
                        menu.classList.toggle('active');
                    };
                </script> */}
            </body>
        );
    }
}



export default Products;











