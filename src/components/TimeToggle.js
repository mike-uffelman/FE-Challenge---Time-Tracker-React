import React, { useState } from 'react';


const TimeToggle = ({setTimeFrame}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = React.createRef();
    const times = ['Daily', 'Weekly', 'Monthly']

    const toggleTime = (index) => {
        setTimeFrame(times[index].toLowerCase())
        setActiveIndex(index);
    }

    const renderTimeToggle = times.map((time, index) => {
        const active = activeIndex === index ? 'isActive' : '';

        return (
            <React.Fragment key={index}>
                <li 
                    onClick={() => toggleTime(index, ref)} 
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