import React from 'react';
import { GiCutDiamond } from 'react-icons/gi'

const Schedule = (props) => {
    const { date, activities } = props.day;

    const renderActivities = () => {
        return activities.map(activity => {
            return (
                <li>{activity.time} <GiCutDiamond /> {activity.description}</li>
            )
        })
    };

    return (
        <section>
            <h2>{date}</h2>
            <ul>{renderActivities()}</ul>
        </section>
    )
}

export default Schedule;