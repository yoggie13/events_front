import React from 'react'
import testPicture from '../assets/test.png'

export default function Event({ data }) {
    return (
        <div className="Event" href={data.event_link}>
            <img src={testPicture} />
            <div className='info'>
                <div className='date'>
                    <h4>{data.month}</h4>
                    <h5>{data.day}</h5>
                </div>
                <div className='main_info'>
                    <h3>{data.event_name}</h3>
                    <p className='p_date'>{data.event_date}</p>
                    <p>{data.loc_name}</p>
                </div>
            </div>
        </div>
    )
}
