import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
    render() {
        return (
            <div>
                <body>
                    {/* <header>
                        <h4 style={{backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '20px'}}>Xtore</h4>
                    </header> */}
                    <section class="onboard">
                        <div class="start board oob2">
                            <p>Welcome back to the Xtore</p>
                        </div>
                        <div class="formbx board">
                            <form action="">
                                <div class="blk blk2">
                                    <div>
                                        <label for="email">Email</label> <br/>
                                        <input type="email" name="" id=""/>
                                    </div>
                                </div>
                                <div class="blk blk2">
                                    <div>
                                        <label for="password">Password</label> <br/>
                                        <input type="password" name="" id=""/>
                                    </div>
                                </div>
                                <div class="blk blk2 submit">
                                    <div>
                                        <input type="submit" name="" value="Login" id=""/>
                                    </div>
                                </div>
                                <div class="blk2 fp">
                                    <span>Don't have an account? <Link to="/CreateAccount">Sign up</Link></span>
                                    <span style={{marginLeft: '20px'}}><Link to="/Onboard">Forgot password</Link></span>
                                </div>
                            </form>
                        </div>
                    </section>
                </body>
            </div>
        );
    }
}

export default Signin;