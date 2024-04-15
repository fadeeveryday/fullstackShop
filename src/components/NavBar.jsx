import React, { useContext } from "react"
import { Context } from "../index";
import {Container, Nav, Navbar, Button } from 'react-bootstrap';
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Nav.Link style={{color: "white",}} to={SHOP_ROUTE}>КупиДевайс</Nav.Link>
        { user.isAuth ?
            <Nav className="ml-auto" style={{color: "white",}}>
              <Button variant="outline-light" style={{marginRight: "12px",}}>Админка</Button>
              <Button variant="outline-light">Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: "white",}}>
              <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
              }
      
    </Container>
  </Navbar>
  )
});

export default NavBar
