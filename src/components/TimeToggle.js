import React, { useEffect, useRef } from 'react';


const TimeToggle = ({timeframe, setTimeFrame, activeIndex, setActiveIndex}) => {
    const ref = React.createRef();
    console.log('timeframe', timeframe)
    
    const times = ['Daily', 'Weekly', 'Monthly']

    // useEffect(() => {
        
    // }, [timeframe])

    const toggleTime = (index, ref) => {

        
        console.log(index, ref.current);
        setTimeFrame(times[index].toLowerCase())

        console.log('ref: ', ref.current[index]);
        // ref.current.style.color = 'white'
    }

    const renderTimeToggle = times.map((time, index) => {

        return (
            <React.Fragment key={index}>
                <li onClick={() => toggleTime(index, ref)} ref={ref} className="time-toggle__item">{time}</li>
            </React.Fragment>
        )
    })

    // console.log('children', children);

    return (
        <div className="time-toggle">
            <ul className="time-toggle__list">
                {renderTimeToggle}
            </ul>
        </div>
    )
}

export default TimeToggle;