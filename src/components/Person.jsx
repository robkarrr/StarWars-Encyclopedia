import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import { GetURLId } from '../helper/GetURLId'

const Person = () => {
  const [person, setPerson] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  const [films, setFilms] = useState([])

  const getOnePerson = async (id) => {
    setLoading(true)
    try {
      const data = await SWAPI.getOnePerson(id)
      setPerson(data)
      setFilms(data.films)
      setLoading(false)
    } catch (err) {
      setError(err.message)
    }
    
  }

  useEffect(() => {
    getOnePerson(id)
  }, [id])

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
            >People</Card.Header>
            <Card.Body>
            <Card.Title as="h1">{person.name}</Card.Title>
            <hr />

            <Card.Title>
                <h4>General info</h4>
            </Card.Title>            
            <div className="info-wrapper">
                <div>
                      <Row>
                        {`Birth Year: ${person.birth_year}`}
                      </Row>

                      <Row>
                          {`Height: ${person.height}cm`}
                      </Row>
                      
                      <Row>
                          {`Weight: ${person.mass}kg`}
                      </Row>
                </div>
                <div>
                      <Row>
                        {`Hair Color: ${person.hair_color}`}
                      </Row>

                      <Row>
                          {`Eye Color: ${person.eye_color}`}
                      </Row>
                      
                      <Row>
                          {`Gender: ${person.gender}`}
                      </Row>
                </div> 
            </div>
            <hr />

            <Card.Title>
                <h4>Characters seen in this film</h4>
            </Card.Title>
            <hr />
            <div className="films-characters-wrapper">
                {films.map((film, index) => (
                    <ListGroup key={index} className="col-4 ">
                    <ListGroup.Item
                        as={Link}
                        to={`/film/${GetURLId(film)}`}
                        className=""
                    >{`Film ${GetURLId(film)}`}</ListGroup.Item>
                    </ListGroup>
                ))}  
            </div>
            
            </Card.Body>
        </Card>

        <div>
            <Button
                as = {Link}
                to = {`/people`}
                className="back col-3 col-3 btn-dark"
            >   
                    Back
            </Button>
        </div>
    </>
  )
}

export default Person