import React from 'react'

const Article = (i) => {
    return (

        <div className="article">

            <div className="image-box">
                <img src={i.image} />
            </div>
            <div className="article-detail">
                <h1 className="name-style"> {i.marque} {i.model}</h1>
                <h3 className="detail-car">{i.cylindrée} {i.carburant} {i.année}</h3>
                <h3 className="km">{i.kilométrage}</h3>
                <h2 className="prix">{i.prix} </h2>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <a className="btn btn-outline-danger">View the car</a>
                <h6>Added 6 hours ago</h6>
            </div>

        </div>

    )
}

export default Article
