import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Onboard extends Component {
    render() {
        return (
            <div>
                <body>
                    {/* <header>
                        <Link to="/"><h4 style={{backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '20px'}}>Xtore</h4></Link>
                    </header> */}
                    <section className="onboard">
                        <div className="board start">
                            <h2>Welcome to</h2>
                            <h1>XTORE</h1>
                            <h2>Let's Get Started</h2>
                        </div>
                        <div className="board">
                            <h1>I want to...</h1>
                            <Link to="/CreateAccount"><button className="primary">BUY</button></Link><br/>
                            <Link to="/CreateAccount"><button className="primary">sell</button></Link>
                        </div>
                    </section>
                </body>
            </div>
        );
    }
}

export default Onboard;