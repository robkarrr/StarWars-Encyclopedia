import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
 
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
            setPeople(data.people)
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
    </>
  )
}

export default Film