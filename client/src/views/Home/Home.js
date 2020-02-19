import React from 'react';
import {Button} from 'antd';
import './Home.css';

function Home() {
    return (
        <div id="home-hero" className="App">
            <a href="/"><Button className="start" type="ghost" size="large" icon="right">Start</Button></a>
        </div>
    );
}

export default Home;
