import React from "react"
import { Container, Col, Image, Row, Card, Button} from "react-bootstrap";
import star from "../assets/star.svg"

const DevicePage = () => {
  const device = {
    id: 1, 
    name: "Iphone 12 pro", 
    price: 65000, 
    rating: 5, 
    img: `https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
  
  const description = [
    {id: 1, title: "Оперативная память", description: '5 ГБ'},
    {id: 2, title: "Оперативная память", description: '5 ГБ'},
    {id: 3, title: "Оперативная память", description: '5 ГБ'},
    {id: 4, title: "Оперативная память", description: '5 ГБ'},
    {id: 5, title: "Оперативная память", description: '5 ГБ'},
  ]
  return (
    <Container className="mt-3">
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={4}>
          <Image style={{borderRadius: 5}} width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <h2 style={{display: 'flex', justifyContent: 'center'}}>{device.name}</h2>
            <div 
              className="d-flex align-items-center justify-content-center"
              style={{background: `url(${star}) no-repeat center center`, 
                      width: 240, height: 240, backgroundSize: 'cover', fontSize: 24}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card 
            className="d-flex f-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>{device.price}</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        {description.map((info, index) => 
          <Row key={info.id} style={{margin: 3, background: index % 2 === 0 ? 'lightgray' : 'transparent', }}>
            {info.title}: {info.description}
          </Row>)}
      </Row>
    </Container>
  )
};

export default DevicePage
