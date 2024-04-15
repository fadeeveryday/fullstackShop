import React from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
      >
        <Card style={{width: "600px"}} className="p-5">
          <h2 className="m-auto">
            {isLogin ? 'Авторизация' : 'Регестрация'}
          </h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-3"
              placeholder="Введите e-mail"
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите пароль"
            />
            <Row className="d-flex justify-content-between mt-3">
              {isLogin ? 
                <div>
                  <NavLink to={REGISTRATION_ROUTE}>Регестрация</NavLink>
                </div> :
                <div>
                  <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                </div>
              }
              <Button 
                className="mt-3" 
                variant="outline-success"
              >
                {isLogin ? 'Войти' : 'Зарегестрироваться'}
              </Button>
            </Row>
          </Form>
        </Card>
    </Container>
  )
};

export default Auth
