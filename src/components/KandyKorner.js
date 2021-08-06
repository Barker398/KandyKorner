import React from "react"
import { LocationList } from "./LocationList"
import { LocationProvider } from "./LocationProvider"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
    <h2>Kandy Korner</h2>

    <h2>Locations</h2>
    <article className="locations">
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </article>

    </>
)