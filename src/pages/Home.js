import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <>
                <div id="page">
                    <div id="landing">
                        <div className="welcome">
                            <div className="w50">
                                <h1>ALL IN ONE</h1>
                                <h3>ONLINE STORE</h3>
                                <a href="product.html"><button className="primary">shop</button></a>
                            </div>
                            <div className="w50">
                                <img src={require("./illustration.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="switch">
                        <div id="on" onclick="light()" style={{display: "none"}}>light</div>
                        <div id="off" onclick="dark()">dark</div>
                    </div>
                </div>
            </>
        );
    }
}


export default Home;










