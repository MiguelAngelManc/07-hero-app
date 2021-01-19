import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import queryString from "query-string";
import { getHeroByName } from '../../selectors/getHeroByName'

export const SearchScreen = ({ history }) => {

    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)


    const [{ search }, handleInputChange, reset] = useForm({ search: q })

    const filtered = useMemo(() => getHeroByName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">

                    <h4>Search form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control"
                            name="search"
                            autoComplete="off"
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>

                </div>


                <div className="col-7">
                    <h4>Results</h4>
                    <hr />


                    {
                        q === '' && <div className="alert alert-info"> Search a hero...</div>
                    }

                    {
                        (q !== '' && filtered.length == 0) && <div className="alert alert-danger"> No results found</div>
                    }

                    <div>
                        {filtered.map(hero => <HeroCard key={hero.id} {...hero} />)}
                    </div>






                </div>

            </div>
        </>
    )
}
