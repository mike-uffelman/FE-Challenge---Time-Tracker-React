import '.././src/assets/css/style.css'
import React, { useState } from 'react';
import Profile from './components/Profile';
import Card from './components/Card';
const {users} = require('./data.json'); // app data


const App = () => {
    // define state variable timeframe and setTimeFrame, set default to 'daily'
    const [timeframe, setTimeFrame] = useState('daily'); 

    return (
        <div className='tracker'>
            <Profile 
                users={users}
                timeframe={timeframe} 
                setTimeFrame={setTimeFrame} 
            />
            <Card timeframe={timeframe} data={users[0].data}/>
        </div>
        
    )
}

export default App;