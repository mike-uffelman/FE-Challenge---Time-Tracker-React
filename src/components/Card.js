
import React from 'react';

const Card = ({items}) => {

    console.log(items[0].title)
    // console.log('times: ', times.times[0].title)

    const renderedItems = items.map(item => {
        return ( 
            <div key={item.title}>

                <section className="card" data-type="">
                    <div className="card__detail">
                        <div className="card__heading">
                        <h4 className="card__header">{item.title}</h4>
                        <div className="card__menu-icon"></div>
                        </div>
                        <div className="card__detail">
                        <p className="card__current">{item.timeframes.daily.current}hrs</p>
                        <p className="card__previous">Last Week - <span>36hrs</span></p>
                        </div>
                    </div>
                </section>
            </div>
        )

        
    })

    return (
        <div >
            {renderedItems}
        </div>
    )

    
}

export default Card;


