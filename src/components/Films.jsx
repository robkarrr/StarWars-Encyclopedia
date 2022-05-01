import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Films = () => {
const [films, setFilms] = useState("")
const getFilms = async () => {
    const data = await SWAPI.getAllFilms()
    setFilms(data)
    console.log(data)
}

useEffect(() => {
    getFilms()

},[])
return (
    <>
        {films && films.results.map((film, index) => (
            <div>
                <Card style={{ width: '18rem' }} key={index}>
                    <Card.Body>
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))}
    </>
)
}

export default Films