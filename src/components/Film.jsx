import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {GetURLId} from '../helper/GetURLId'
import { ListGroup } from 'react-bootstrap'
 
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

        <div>
            <h2>{film.title}</h2>
        </div>

        <div className="character-wrapper">
          {people.map(person => (
            <ListGroup>
              <ListGroup.Item
                as={Link}
                to={`/people/${GetURLId(person)}`}
              >{`Character ${GetURLId(person)}`}</ListGroup.Item>
            </ListGroup>
          ))}  
        </div>
    </>
  )
}

export default Film