import React, { useState } from 'react'
import Filter from './components/Filter'
import Events from './components/Events'

export default function Container() {

    const [filter, setFilter] = useState(undefined)

    return (
        <div className='Container'>
            <Filter setFilter={setFilter} />
            <Events filter={filter} />
        </div>
    )
}
