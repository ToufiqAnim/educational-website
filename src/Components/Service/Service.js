import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card} from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import './Service.css';

const Service = (props) => {
    const {name,tutor,ratings,price,image,people} = props.service;
    return (

            <div className="m-3 img-card">
                <Card>
                    <Card.Img variant="top" className="h-50 img" src={image}/>  
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{tutor}</Card.Text>
                        <Card.Text><AiFillStar color="salmon"></AiFillStar> {ratings} ({people})</Card.Text>
                        <Card.Text>{price}</Card.Text>
                        <Button className="btn" variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>     
                
            </div>        
        
    );
};

export default Service;