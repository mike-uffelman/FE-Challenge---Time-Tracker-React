import React from 'react';

const Profile = () => {
    return (
        <section className="profile">
            <header className="profile__header">
                <div className="profile__image" src="" alt="" />
                <div className="profile__id">
                <p className="profile__subheader">Report for</p>
                <p className="profile__name">Jeremy Robson</p>
                </div>
            </header>
            <div className="time-toggle">
                <ul className="time-toggle__list">
                <li className="time-toggle__item">Daily</li>
                <li className="time-toggle__item">Weekly</li>
                <li className="time-toggle__item">Monthly</li>
                </ul>
            </div>
    </section>
    )
}

export default Profile;