import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import star from '../assets/Star 1.png'
import {Context} from "../index";

const Basket =  () => {
    const {device} = useContext(Context)
    const [id, setId] =useState([])
    const [cartId, setCartId] = useState([])
    const [priceCount, setPriceCount] = useState([])
    const saveCart = localStorage.getItem("saveCart")
    //localStorage.setItem("saveCart"," ")
    const saveCartId = saveCart.split("-")

    saveCartId?.forEach(e => id.push(parseInt(e)))
    const uniqId = id?.reduce((uniq, item) =>{
        return uniq.includes(item) ? uniq  : [...uniq,item]
    },[])

    useMemo(()=>{
        uniqId.forEach(e => {
            device?.devices?.map(item => item.id === e ? cartId.push(item):cartId)
            // setInfo([...info,{title: '', description:'', number: Date.now()}])
            // console.log(e)
        })
    },[])

    const  removeCart = (id) => {
        setCartId(cartId.filter(i => i.id !==id))

        console.log("removeId" + id)
    }


    console.log(cartId)


    return (
        <>
        { cartId.map(item =>
                <Row className="mt-2 d-flex"  key={item.id}>

                    <Col md={2} className=" ml-4 p-4" style={{textAlign:'center', justifyContent:"center"}}>
                        <Image src={item.img} width={120} height={120} />
                    </Col>
                    <Col md={2} className=" ml-4 p-4" style={{textAlign:'center', justifyContent:"center"}} >
                        <h4>Описание</h4>
                        <p className ="mt-3">{item.type}    {item.name}</p>
                    </Col>
                    <Col md={2} className="ml-4 p-4" style={{textAlign:'center', justifyContent:"center"}} >
                        <h6>количество товара</h6>
                        <p className="mt-3">{item.rating}</p>
                    </Col>
                    <Col md={2} className="ml-4 p-4" style={{textAlign:'center', justifyContent:"center"}} >
                        <h5>Цена</h5>
                        <p className="mt-3"  >ОТ: {item.price} руб</p>
                    </Col>
                    <Col md={2} className="ml-4 p-4" style={{textAlign:'center', justifyContent:"center"}} >
                        <Button  className="mt-3 " variant={"outline-dark"} onClick={()=> removeCart(item.id)} >Удалить</Button>
                    </Col>
                </Row>
                )

        }

        </>
    );
};

export default Basket;