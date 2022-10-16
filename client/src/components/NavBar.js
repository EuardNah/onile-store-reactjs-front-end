import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import basket from '../assets/shopping-basket.png'

import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const LogOut =()=>{
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'cyan', textDecoration:'none'}} to={SHOP_ROUTE}><h1>GOLD DEVICE</h1></NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'cyan'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={()=> history.push(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-3"
                            onClick={LogOut}
                        >Выйти</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-3"
                            onClick={()=> history.push(BASKET_ROUTE)}
                        ><Image src={basket} height={30} width={30}/></Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'cyan'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={()=> history.push(LOGIN_ROUTE)}
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;