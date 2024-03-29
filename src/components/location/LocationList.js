import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <section className="locations">
            {
                locations.map(location => {
                    return (
                        <div className="location" key={location.id} id={`location--${location.id}`}>
                            <div className="location__address">
                                Location: {location.address}
                            </div>
                            <div className="location__squarefootage">
                                Size: {location.squareFootage}
                            </div>
                            <div className="location__handicap">
                                handicap: {location.handicap}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}