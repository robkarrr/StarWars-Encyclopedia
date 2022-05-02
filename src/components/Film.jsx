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
            console.log(data)
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
            <Card.Header>Films</Card.Header>
            <Card.Body>
            <Card.Title as="h2">{film.title}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            {people.map(person => (
                <ListGroup className="col-3">
                <ListGroup.Item
                    as={Link}
                    to={`/people/${GetURLId(person)}`}
                    className=""
                >{`Character ${GetURLId(person)}`}</ListGroup.Item>
                </ListGroup>
            ))}  
            </Card.Body>
        </Card>

        <div className="">
                <Button
                    as = {Link}
                    to = {`/films`}
                >
                    Back
                </Button>
            </div>
    </>
  )
}

export default Film