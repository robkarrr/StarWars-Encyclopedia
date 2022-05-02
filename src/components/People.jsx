import {useEffect, useState} from 'react'
import SWAPI from '../services/SWAPI'
import {Button, Row, Card} from 'react-bootstrap'
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


            {loading && (
                <h1 className="text-center mt-5">Loading...</h1>
            )}

            <div className="card-wrapper">
                {error && {
                    error
                }}

                {people && people.results.map((person, index) => (
                        <div key ={index} className="col-4">
                            <Card>
                                <Card.Body className="">
                                    <Card.Title>{person.name}</Card.Title>
                                    <hr />
                                    <Row >
                                        {`Gender: ${person.gender}`}
                                    </Row>
                                    <Row>
                                        {`Born: ${person.birth_year}`}
                                    </Row>
                                        
                                    <Row>
                                        {`In ${person.films.length} Films`}
                                    </Row>

                                    <hr />

                                    <Button
                                        as = {Link}
                                        to = {`/people/${GetURLId(person.url)}`}
                                        className = 'btn btn-dark'
                                        >
                                            Read more ⭐️
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>

                ))}

            </div>

            {!loading &&(
                <div className="d-flex PageButton-wrapper">
       
                     <Button
                         onClick={() => setPage(prevValue => prevValue -1)}
                         disabled = {!people.previous}
                         className="btn-dark col-3"
                     >
                         Prev
                     </Button>
                     <p>{page}/9</p>
                     <Button
                         onClick={() => setPage(prevValue => prevValue +1)}
                         disabled = {!people.next}
                         className="btn-dark col-3"
                     >
                         Next
                     </Button>
                </div>
            )}
        </>
    )
}

export default People