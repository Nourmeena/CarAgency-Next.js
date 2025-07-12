'use client';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

async function getcar() {
    const res = await fetch('http://localhost:4000/car')
    return res.json()
}
export default async function Home() {
    const cars = await getcar();
    const importCars = cars.filter((car) => car.category === "imported")
    return (
        <div>
            <h3 style={{ textAlign: 'center', color: 'red', fontFamily: 'Arial, sans-serif', fontWeight: 'bold',paddingBottom:20 }}>Our collection of the best imported car</h3>
            {importCars.map((car) => (
                <div key={car.id}>
                    <Card className="mb-3">
                        <Row className="g-0">
                            <Col md={4}>
                                <Card.Img variant="top" src="images/3.jpeg" />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Text>
                                        <h3>{car.name}</h3>
                                        <h4>Brand: {car.brand}</h4>
                                        <h5>Price: {car.price} $</h5>
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