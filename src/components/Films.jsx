import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {GetURLId} from '../helper/GetURLId'

const Films = () => {
    const [films, setFilms] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getFilms = async () => {
        setLoading(true)
        try{
            const data = await SWAPI.getAllFilms()
            setFilms(data)
            setLoading(false)
        }catch(err){
            setError(err.message)
        }

    }

    useEffect(() => {
        getFilms()

    },[])
    return (
        <>
            <h1>Films</h1>
            {loading && (
                 <h1 className="text-center mt-5">Loading...</h1>
            )}

            <div className="card-wrapper">
                {error && {
                    error
                }}

                {films && films.results.map((film, index) => (
                    <div key={index} className="col-6">
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center" as="h3">{film.title}</Card.Title>
                                <hr />
                                <Row className="episode" as="h5">
                                    {`Episode ${film.episode_id}`}    
                                </Row>
                                <Row as ="h5">
                                    {`Release Date: ${film.release_date}`}
                                </Row>
                                <hr />
                                <Button
                                as = {Link}
                                to = {`/films/${GetURLId(film.url)}`}
                                className="btn btn-dark"
                                >
                                    Read more ⭐️
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
    }

    export default Films