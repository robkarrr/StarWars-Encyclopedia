    import React from 'react'
    import {Card, Button} from 'react-bootstrap'
    import { Link } from 'react-router-dom'
    const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <Card className="text-center">
                    <Card.Title as ="h1">Welcome to the Star Wars Encyclopeia</Card.Title>
                    <Card.Text as ="h2">
                        May The Force Be With You
                    </Card.Text>
                    <Card.Body className="home-page-buttons">
                        <Button as={Link} to={`/people`} className="back col-3 btn-dark">
                            People
                        </Button>

                        <Button as={Link} to={`/films`} className="back col-3 btn-dark">
                            Films
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
    }

    export default HomePage