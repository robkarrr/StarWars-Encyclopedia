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
            <h1>People</h1>

            {error && {
                error
            }}

            {loading && (
                <h1 className="text-center mt-5">Loading...</h1>
            )}
            {people && people.results.map((person, index) => (
                
                    <div key ={index} className="card-wrapper col-3">
                        <Card>
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


            <div className="d-flex PageButton-wrapper">
                <Button
                    onClick={() => setPage(prevValue => prevValue -1)}
                    disabled = {!people.previous}
                >
                    Prev
                </Button>
                <p>{page}/9</p>
                <Button
                    onClick={() => setPage(prevValue => prevValue +1)}
                    disabled = {!people.next}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default People