import React from 'react'

const getMonth = (date) => {
    return new Date(date).toLocaleString('default', { month: 'short' })
}

const getDay = (date) => {
    return new Date(date).getDate()
}

const formatDate = (date) => {
    return new Date(date).toLocaleString('default', { dateStyle: 'full' })
}

export default function Event({ data }) {
    return (
        <div className="Event" onClick={e => { e.preventDefault(); window.open(data.event_link, "_blank") }}>
            <img src={data.event_pic_link} />
            <div className='info'>
                <div className='date'>
                    <h4>{getMonth(data.event_date)}</h4>
                    <h5>{getDay(data.event_date)}</h5>
                </div>
                <div className='main_info'>
                    <h3>{data.event_name}</h3>
                    <p className='p_date'>{formatDate(data.event_date)}</p>
                    <p>{data.loc_name}</p>
                </div>
            </div>
        </div>
    )
}
