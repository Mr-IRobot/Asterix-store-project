import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
    render() {
        return (
            <div>
                <body>
                    {/* <header>
                        <h4 style={{backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '20px'}}>Xtore</h4>
                    </header> */}
                    <section className="onboard">
                        <div className="start board">
                            <h2>Welcome to</h2>
                            <h1>XTORE</h1>
                            <h2>Let's Get Started</h2>
                        </div>
                        <div className="formbx board">
                            <form action="">
                                <div className="blk blk1">
                                    <div>
                                        <label for="firstname">First name</label>
                                        <input type="text" name="" id=""/>
                                    </div>
                                    <div>
                                        <label for="lastname">Last name</label>
                                        <input type="text" name="" id=""/>
                                    </div>
                                </div>
                                <div className="blk blk2">
                                    <div>
                                        <label for="email">Email</label> <br/>
                                        <input type="email" name="" id=""/>
                                    </div>
                                </div>
                                <div className="blk blk3">
                                    <div>
                                        <label for="code">Code</label>
                                        <input type="text" name="" id=""/>
                                    </div>
                                    <div>
                                        <label for="phone">Phone</label>
                                        <input type="tel" name="" id=""/>
                                    </div>
                                </div>
                                <div className="blk blk2">
                                    <div>
                                        <label for="password">Password</label> <br/>
                                        <input type="password" name="" id=""/>
                                    </div>
                                </div>
                                <div className="blk4">
                                    <input type="checkbox" name="" id=""/>
                                    <p>I agree to the <Link to="/CreateAccounts">Terms</Link> and <Link to="/CreateAccounts">conditions</Link></p>
                                </div>
                                <div className="blk blk2 submit">
                                    <div>
                                        <input type="submit" name="" value="CREATE ACCOUNT" id=""/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </body>
            </div>
        );
    }
}

export default CreateAccount;