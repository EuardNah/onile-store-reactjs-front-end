import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {Context} from "../index";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [infoMessage, setInfoMessage] = useState('')
    const [password, setPassword] = useState('')
    const [passInfo, setPassInfo] = useState([
        {
            emailinfo: "eduard",
            passwordinfo: "3625",
            number: 1665507185794
        },
        {
            emailinfo: "gugo",
            passwordinfo: "3532",
            number: 1665507246212
        }
    ])

    const {user} = useContext(Context)
    const history = useHistory()



    const Click = () =>{

        if (isLogin){
            passInfo.map(item =>{
                if (item.emailinfo === email && item.passwordinfo === password)
                {
                    history.push(SHOP_ROUTE)
                    user.setIsAuth(true)
                }else{
                    setInfoMessage("не верный email или password")
                }
            })
        }else {
            setPassInfo([...passInfo,{emailinfo: email, passwordinfo:password, number: Date.now()}])
            setInfoMessage("")

        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54 }}
        >
            <Card style={{width:600}} className="p-5">
                <h4 style={{color:"red"}} >{infoMessage}</h4>
                <h2 className="m-auto">{ isLogin ? "Автаризация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваше Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваше Password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={"password"}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3" >
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }

                        <Button
                            onClick={Click}
                            variant={"outline-success"}
                        >
                        {isLogin? 'Воити':'Регистрация' }
                        </Button>
                    </Row>

                </Form>

            </Card>
        </Container>
    );
};

export default Auth;