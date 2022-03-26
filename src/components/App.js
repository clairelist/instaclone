import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Routes from './Routes';

function App(){
    return(
        <div classname='app'>
            <Nav />
            <Routes />
        </div>
    )
}

export default App;