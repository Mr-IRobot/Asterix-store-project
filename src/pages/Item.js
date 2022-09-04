import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            
            <div>
                <div className="grr">
                    <div className="gr">
                        <div className="im">
                            <img src={require("./image/item.jpg")} alt=""/>
                        </div>
                        <div className="info">
                            <h3>Headset</h3>
                            <h2>G6-3400 BASS 3D SURROUND SOUND HEADSET</h2>
                            <p className="brief">Aseju ni story, one or two sentences ti wa okay, ma fi oro pa mi. Do you gerrit? Just approach straight to the point make we know how we go take reason am, anyhow e wan be make e be</p>
                            <p className="price">$600</p>
                            <button className="primary">BUY</button>
                        </div>
                        <div className="more-info">
                            <p>Overview</p>
                            <hr/>
                            <p>Description</p>
                            <hr/>
                            <p>Return policy</p>
                            <hr/>
                            <p>Delivery</p>
                            <hr/>
                        </div>
                        <div className="contact">
                            <h4>Contact seller</h4>
                            <p>0812 345 6789</p>
                            <p>sell@email.com</p>
                            <br/>
                            <h4>Shop address</h4>
                            <p>Shop 212A, highway plaza white state green country</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default Item;