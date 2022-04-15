import React, { useEffect, useState } from 'react'
import location_services from '../services/location_services'


export default function Filter({ setFilter }) {
    const [filters, setFilters] = useState(["all"])
    const [loading, setLoading] = useState(false)


    const getLocations = async () => {
        var res = await location_services.getLocations()

        if (res.status === 200) {
            res.json()
                .then(response => {
                    var f = [{ "loc_name": "all", "loc_link_part": "all", "checked": true }]
                    f = f.concat(response.data)
                    f.forEach(element => {
                        if (element.loc_link_part !== "all")
                            element.checked = false
                    });
                    setFilters(f)
                    setLoading(false)
                })
        }
    }

    const applyFilter = async (e, index) => {
        e.preventDefault();

        var f = filters;
        f.forEach(element => {
            element.checked = false
        });
        f[index].checked = true
        setFilters(f)

        if (e.target.id === "all")
            setFilter(undefined)
        else
            setFilter(e.target.id)
    }

    const addLocation = (e) => {
        e.preventDefault();
        console.log('click')
    }

    useEffect(() => {
        setLoading(true)
        getLocations()
    }, [])

    return (
        <div className='Filter'>
            {
                loading
                    ? null
                    : <>
                        <ul>
                            {
                                filters.map((filter, index) =>
                                    <li
                                        id={filter.loc_link_part}
                                        key={index}
                                        onClick={e => applyFilter(e, index)}
                                        className={filter.checked ? 'checked' : 'unchecked'}
                                    >{filter.loc_name}</li>
                                )
                            }
                            <li>
                                <i id='addLocation' class="fas fa-plus-circle fa-lg" onClick={e => addLocation(e)}></i>
                            </li>
                        </ul>
                    </>
            }
        </div>
    )
}
