import React, { useMemo } from 'react'
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    const heroe = useMemo(() => getHeroById(heroeId), [heroeId])

    if(!heroe){
        return <Redirect to="/" />
    }

    const {superhero, alter_ego, characters, first_appearance, publisher} = heroe

    const handleReturn = (e) =>{
        history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                />
            </div>

            <dib className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Alter ego: {alter_ego}</li>
                    <li className="list-group-item">Publisher: {publisher}</li>
                    <li className="list-group-item">First Appearance: {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    onClick={handleReturn}
                    className="btn btn-outline"
                    >
                    Return
                </button>

            </dib>
        </div>
    )
}
