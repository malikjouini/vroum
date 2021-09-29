import React from 'react';
import Article from './Article';
function Listarticle({ Car }) {
    return (

        <>

            {
                Car.map(i => (
                    <Article
                        image={i.image}
                        marque={i.marque}
                        model={i.model}
                        cylindrée={i.cylindrée}
                        carburant={i.carburant}
                        année={i.année}
                        kilométrage={i.kilométrage}
                        prix={i.prix}
                    />
                ))
            }
        </>
    )

}

export default Listarticle
