'use client';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Func2 from '../Carouesl/page';


async function getcar() {
    const res = await fetch('http://localhost:4000/car')
    return res.json()
}
export default async function Home() {
    const cars = await getcar()
    return (
        <div>
            <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', paddingBottom: 20 }}>Have a great ride!</h3>
            <Func2 />
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: 20 }}>All Avaliable cars</h2>
            {cars.map((car) => (
                <div key={car.id}>
                    <Card className="mb-3">
                        <Row className="g-0">
                            <Col md={4}>
                                <Card.Img variant="top" src="images/2.jpeg" />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Text>
                                        <h3>{car.name}</h3>
                                        <h4>Brand: {car.brand}</h4>
                                        <h5>Price: {car.price}</h5>
                                        <p>State: it is a/an {car.category} car</p>
                                        <p>Color: {car.color}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            ))}
            {cars.length == 0 && (
                <p>Thier is no cars to sold!!</p>
            )}
        </div>
    )
}