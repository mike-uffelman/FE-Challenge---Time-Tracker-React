import React, { useEffect, useState } from 'react';
import TimeToggle from './TimeToggle';

const Profile = ({timeframe, setTimeFrame, users}) => {

    return (
        <section className="profile">
            <header className="profile__header">
                <img className="profile__image" alt='profile-img' src={require(`../assets/images/image-${users[0].firstName.toLowerCase()}.png`)}  />
                <div className="profile__id">
                    <p className="profile__subheader">Report for</p>
                    <p className="profile__name">{users[0].firstName} {users[0].lastName}</p>
                </div>
            </header>
            <TimeToggle 
                timeframe={timeframe} 
                setTimeFrame={setTimeFrame}
            />
        </section>
    )
}

export default Profile;