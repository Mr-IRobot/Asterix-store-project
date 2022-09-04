import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class Verify extends Component {
    render() {
        return (
            <div>
                <body>
                    {/* <header>
                    <Link to="/"><h4 style={{backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '20px'}}>Xtore</h4></Link>
                    </header> */}
                    <section className="onboard">
                        <div className="start board wp">
                            <p>Enter the codes sent to your email and phone number</p>
                        </div>
                        <div className="formbx board">
                            <form action="">
                                <div className="blk blk2">
                                    <div>
                                        <label for="email">Verify email</label> <br/>
                                        <input type="email" name="" id=""/>
                                    </div>
                                </div>
                                <div className="blk blk2">
                                    <div>
                                        <label for="phone">Verify phone</label> <br/>
                                        <input type="tel" name="" id=""/>
                                    </div>
                                </div>
                                <div className="blk blk2 submit">
                                    <div>
                                        <input type="submit" name="" value="SUBMIT" id=""/>
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

export default Verify;