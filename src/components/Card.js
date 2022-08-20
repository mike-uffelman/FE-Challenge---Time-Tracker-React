import React, { useEffect, useRef } from 'react';

const Card = ({timeframe, data}) => {
    const ref = useRef();
    // console.log('times: ', times.times[0].title)

    useEffect(() => {
        // console.log('ref: ', ref)
        // ref.current.style.backgroundImage= `../assets/images/icon-work.svg`;
        // console.log('displaying background image')
        // ref.current.style.backgroundColor = 'orange';
        // ref.current.backgroundImage = `url(../assets/images/icon-${item.title}`

        return () => {
            console.log('useEffect cleanup')
            // ref.current.style.color = '';
        }
    }, [])

    const renderedItems = data.map((item, index) => {


        return ( 

                <section className={`card card-${item.title.split(' ').join('').toLowerCase()}`} key={item.title} >
                    <div className="card__container">
                        <div className='card__bg-image' alt={item.title} ref={ref}>svg</div>
                        <div className="card__heading">
                            <h4 className="card__header">{item.title}</h4>
                            <svg className="card__menu-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="5"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                        </div>
                        <div className="card__detail">
                            <p className="card__current">{item.timeframes[timeframe].current}hrs</p>
                            <p className="card__previous">Last Week - <span>{item.timeframes[timeframe].previous}hrs</span></p>
                        </div>
                    </div>
                </section>
        )

        
    })

    return (
        <div className='cards__container'>
            {renderedItems}
        </div>
    )

    
}

export default Card;


