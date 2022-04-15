import React, { useEffect, useState } from 'react'
import location_services from '../services/location_services'


export default function Filter({ setFilter }) {
    const [filters, setFilters] = useState(["all"])
    const [loading, setLoading] = useState(false)
    const [addLocationOpen, setAddLocationOpen] = useState(false)
    const [locationValue, setLocationValue] = useState("")

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

    const openLocation = (e) => {
        e.preventDefault();
        setAddLocationOpen(true)
    }

    const addLocation = async (e) => {
        e.preventDefault();

        if (locationValue === undefined || locationValue === null || locationValue === "")
            setAddLocationOpen(false)

        var res = await location_services.addNewLocation(locationValue)

        if (res.status === 200)
            setAddLocationOpen(false)
        else
            alert("Greška, pokušaj ponovo")
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
                                {
                                    addLocationOpen
                                        ? <div className='addLocationOpen'>
                                            <input
                                                type='text'
                                                id='addLocationInput'
                                                placeholder='Unesi link do fb stranice'
                                                value={locationValue}
                                                onChange={e => {
                                                    e.preventDefault()
                                                    setLocationValue(e.target.value)
                                                }}
                                            />
                                            <button className='addLocationButton' onClick={e => addLocation(e)}>ok</button>
                                        </div>
                                        : <i id='addLocation' class="fas fa-plus-circle fa-lg" onClick={e => openLocation(e)}></i>
                                }
                            </li>
                        </ul>
                    </>
            }
        </div >
    )
}
