import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="navbar-expand navbar-dark bg-dark text-white">
                <div className="container col-6 align-items-center">
                    <div className="row align-items-center">
                        <div className="col align-items-center">
                            <h1>Daniel Hawn</h1>
                        </div>
                        <div className="col align-items-center">
                            <div className="navbar-nav justify-content-end align-items-center">
                                <a className="nav-item nav-link active align-items-center" href="index.html">About</a> |
                            <a className="nav-item nav-link" href="./portfolio.html">Portfolio</a> |
                            <a className="nav-item nav-link" href="./contact.html">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
