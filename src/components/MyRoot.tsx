import React from 'react'
import { Nav } from 'react-bootstrap'
import MyNavbar from './MyNavbar'
import { Outlet } from 'react-router-dom'

function MyRoot=(() => {
    return (
        <>
            <MyNavbar />
            <Outlet />

        </>
    )

})

export default MyRoot