import React from 'react'

function projectCard(props) {
    return (
        <div>
            <div className="col">
                <div className="row">
                    <div className="col p-0 position-relative bg-dark m-2 shadow">
                        <a href={props.url}>
                            <img src={props.img}
                                className="img-responsive w-100" alt="..." /></a>
                        <h5 className="h-30 m-3 text-white">{props.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projectCard
