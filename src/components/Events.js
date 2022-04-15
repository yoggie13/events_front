import React, { useEffect, useState } from 'react'
import event_services from '../services/event_services'
import Event from './Event'

export default function Events({ filter }) {

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getEvents();
    }, [filter])

    const getEvents = async () => {

        var res = [];
        console.log(filter)
        if (filter === undefined)
            res = await event_services.getEvents();
        else
            res = await event_services.getEventsWithParam(filter)

        if (res.status === 200) {
            res.json()
                .then(response => {
                    setEvents(response.data);
                    setLoading(false);
                })
        }
        else {
            setLoading(false)
            alert('greska')
        }
    }

    return (
        <div className='Events'>
            {
                loading
                    ? null
                    : events.map((event, index) => <Event key={index} data={event} />)
            }
        </div>

    )
}
