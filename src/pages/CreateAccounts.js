import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class CreateAccounts extends Component {
    render() {
        return (
            <div>
                <body>
                    {/* <header>
                        <Link to="verify.html"><h4 style={{backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '20px'}}>Xtore</h4></Link>
                    </header> */}
                    <section className="onboard ob2">
                        <div className="start board oob2">
                            <p>We would like to know you more</p>
                        </div>
                        <div className="formbx board">
                            <form action="">
                                <div className="blk blk1 oooob">
                                    <div className="blk blk2">
                                        <div>
                                            <label for="">Country</label>
                                            <input type="text" name="" id=""/>
                                        </div>
                                        <div>
                                            <label for="">State</label>
                                            <input type="text" name="" id=""/>
                                        </div>
                                        <div>
                                            <label for="">City</label>
                                            <input type="text" name="" id=""/>
                                        </div>
                                        <div>
                                            <label for="">Address</label>
                                            <input type="text" name="" id=""/>
                                        </div>
                                    </div>
                                    <div className="blk blk2">
                                        <div>
                                            <label for="">Brand</label>
                                            <input type="text" name="" id=""/>
                                        </div>
                                        <div>
                                            <label for="">Category</label>
                                            <input type="text" name="" id=""/>
                                        </div>
                                        <div>
                                            <label for="">Description</label>
                                            <textarea name="" id="" cols="30" rows="7"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="blk blk1">
                                    
                                </div>
                                <div className="blk blk2 submit" style={{marginTop: '-30px'}}>
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

export default CreateAccounts;