import '.././src/assets/css/style.css'
import React from 'react';
import Profile from './components/Profile';
import Card from './components/Card';
const {times} = require('./data.json');

const App = () => {


    console.log(times);


    return (
        <div>
            <Profile />
            <Card items={times}/>
        </div>
        
    )
}

export default App;