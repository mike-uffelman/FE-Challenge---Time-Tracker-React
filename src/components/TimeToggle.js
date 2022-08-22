import React, { useState } from 'react';


const TimeToggle = ({setTimeFrame}) => {
    // activeIndex identifies which timeframe is selected
    const [activeIndex, setActiveIndex] = useState(0);

    // available timeframes for selection
    const times = ['Daily', 'Weekly', 'Monthly']

    // when timeframe selected execute callback to setTimeFrame (change hours in cards) and setActiveIndex (change selected timeframe option color)
    const toggleTime = (index) => {
        setTimeFrame(times[index].toLowerCase())
        setActiveIndex(index);
    }

    const renderTimeToggle = times.map((time, index) => {
        // assign 'isActive' class to element where the clicked index is the activeIndex
        const active = activeIndex === index ? 'isActive' : '';

        return (
            <React.Fragment key={index}>
                <li 
                    onClick={() => toggleTime(index)} 
                    className={`time-toggle__item ${active}`}>{time}
                </li>
            </React.Fragment>
        )
    })

    return (
        <div className="time-toggle">
            <ul className="time-toggle__list">
                {renderTimeToggle}
            </ul>
        </div>
    )
}

export default TimeToggle;