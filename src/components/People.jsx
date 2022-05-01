import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {GetURLId} from '../helper/GetURLId'

const People = () => {
    const [people, setPeople] = useState("")
    const [page, setPage] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

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
            {error && {
                error
            }}

            {loading && (
                <h1 className="text-center mt-5">Loading...</h1>
            )}
            <h1>People</h1>
            {people && people.results.map((person, index) => (
                <div>
                    <Card key={index}>
                        <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                        <Button
                        as = {Link}
                        to = {`/people/${GetURLId(person.url)}`}
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

export default People