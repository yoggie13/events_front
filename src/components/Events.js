import React, { useEffect, useState } from 'react'
import event_service from '../services/event_services'
import Event from './Event'

export default function Events() {

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getEvents();
    }, [])

    const getEvents = async () => {
        var res = await event_service.getEvents();

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
        <div>
            {
                loading
                    ? null
                    : events.map((event, index) => <Event key={index} data={event} />)
            }
        </div>

    )
}
