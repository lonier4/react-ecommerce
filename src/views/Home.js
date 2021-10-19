import '../CSS.css';
import React from 'react';
import clown1 from '../static/images/clown1.jpg'

const Home = (props) => {

    return (
        <div className="container-fluid">
            <div className="row homepage">
             {/* <h1 className="homepageh1">Best Clown Shop In The World </h1> */}
             <img src={clown1} className="homepage_clown" alt="Clown Shoes"/>
            </div>
        </div>
    )
};
export default Home;