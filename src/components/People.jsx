import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const People = () => {
    const [people, setPeople] = useState("")
    const [page, setPage] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState = (false)
    const getPeople = async (page) => {
        setLoading(true)
        try {
            const data = await SWAPI.getAllPeople(page)
            setPeople(data)
            setLoading(false)
        } catch(err) {
            setError(err)
        }
    }

    useEffect(() => {
        getPeople(page)

    },[page])
    return (
        <>
            {people && people.results.map((person, index) => (
                <div>
                    <Card key={index}>
                        <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    )
}

export default People