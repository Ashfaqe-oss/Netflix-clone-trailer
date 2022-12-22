import React, {useEffect, useState} from 'react'
import "./Nav.css";

function Nav () {
    const [show, handleShow] = useState( false );
    
    useEffect( () => {
        window.addEventListener( "scroll", () => {
            if ( window.scrollY > 250 ) {
                handleShow( true );
            } else handleShow( false );
        } );
        return () => {
            window.removeEventListener( "scroll", null );
        };
    }, [] );
    
    return (
        <div className={`Navbar ${show && "Navbar__black"}`}>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className="nav__logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOrQpQ_xH-h3H8_K-maor_cyVdAYOOOoXrYA&usqp=CAU" alt="" className="nav__avatar"/>
        </div>
    )
}

export default Nav
