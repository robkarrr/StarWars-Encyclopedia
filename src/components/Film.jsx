import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {GetURLId} from '../helper/GetURLId'
import { ListGroup } from 'react-bootstrap'
import Container from 'react-bootstrap'
 
const Film = () => {
    const [film, setFilm] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const [people, setPeople] = useState([])

    const getOneFilm = async (id) => {
        setLoading(true)
        try{
            const data = await SWAPI.getOneFilm(id)
            setFilm(data)
            setPeople(data.characters)
            setLoading(false)
        }catch(err){
            setError(err.message)
        }

    }

    useEffect(() =>{
        getOneFilm(id)
    },[id])
  return (
    <>
        {error && {
            error
        }}

        {loading && (
            <h1 className="text-center mt-5">Loading...</h1>
        )}


        <Card border="dark" className="mt-5">
            <Card.Header
            >Films</Card.Header>
            <Card.Body>
            <Card.Title as="h1">{film.title}</Card.Title>
            <hr />
            <Card.Text>
                <h4>Description</h4>
                {film.opening_crawl}
            </Card.Text>

            <hr />

            <Card.Title>
                <h4>General info</h4>
            </Card.Title>            
            <div className="info-wrapper">
                    <div>
                        <Row>
                        {`Episode: ${film.episode_id}`}
                        </Row>
                    
                        <Row>
                            {`Producer: ${film.producer}`}
                        </Row>
                    </div>

                    <div>                        
                        <Row>
                            {`Director: ${film.director}`}
                        </Row>

                        <Row>
                            {`Release Date: ${film.release_date}`}
                        </Row>
                    </div>
            </div>
            
            <hr />

            <Card.Title>
                <h4>Characters seen in this film</h4>
            </Card.Title>
            <hr />
            <div className="film-characters-wrapper">
                {people.map((person, index) => (
                    <ListGroup key={index} className="col-4 ">
                    <ListGroup.Item
                        as={Link}
                        to={`/people/${GetURLId(person)}`}
                        className=""
                    >{`Character ${GetURLId(person)}`}</ListGroup.Item>
                    </ListGroup>
                ))}  
            </div>
            
            </Card.Body>
        </Card>

        <div>
             <Button
                as = {Link}
                to = {`/films`}
                className="btn-dark col-3 back"
            >
                    Back
            </Button>
        </div>
    </>
  )
}

export default Film