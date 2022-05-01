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
        <h1>{person.name}</h1>

        <div className="film-wrapper">
          {films.map(film => (
            <ListGroup>
              <ListGroup.Item
                as={Link}
                to={`/films/${GetURLId(film)}`}
              >{`Film ${GetURLId(film)}`}</ListGroup.Item>
            </ListGroup>
          ))}  
        </div>
    </>
  )
}

export default Person