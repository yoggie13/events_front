import React from 'react'
import testPicture from '../assets/test.png'

export default function Event({ event }) {
    return (
        <div className="Event">
            <img src={testPicture} />
            <div className='info'>
                <div className='date'>
                    <h4>{event.month}</h4>
                    <h5>{event.day}</h5>
                </div>
                <div className='main_info'>
                    <h3>{event.name}</h3>
                    <p className='p_date'>{event.date}</p>
                    <p>{event.location}</p>
                </div>
            </div>
        </div>
    )
}
