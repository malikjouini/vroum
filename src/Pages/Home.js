import React from 'react'
import Listarticle from '../components/List-article'
import { Car } from '../Cars'
import Arrow from '../components/Arrow'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <div id="home" className="container">
                <h1 className="title-of-box">Browse our latest cars</h1>
                <div className="box-cars-home">
                    <Listarticle Car={Car} />
                    <Arrow />
                </div>

                <div className="search-button">
                    <button className="btn btn-secondary">Search Car</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home
