import React from 'react';
import "../Cabecalho/cabecalho.css"


const Logo = (props) =>{
    return(
        <header>
            <div className="container d-flex flex-row bd-highlight mb-3 justify-content-between pt-3 align-items-center">
                <p className="titulo text-uppercase">CRUD|Six-Dev</p>
                <div className="Info ">{props.children}</div>
            </div>
        </header>
    )
}

export default Logo;