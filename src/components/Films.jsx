import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
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
            {error && {
                error
            }}

            {loading && (
                <h1 className="text-center mt-5">Loading...</h1>
            )}

            {films && films.results.map((film, index) => (
                <div>
                    <Card key={index} >
                        <Card.Body>
                        <Card.Title>{film.title}</Card.Title>
                        <Button
                        as = {Link}
                        to = {`/films/${GetURLId(film.url)}`}
                        >
                            Read more ➡
                        </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    )
    }

    export default Films