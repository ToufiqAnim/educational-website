
import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card} from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import "./course.css";

const Course = (props) => {
    const {name,tutor,ratings,price,image,people} = props.course;
    return (
        <div className="m-3">
            <Card>
                <Card.Img variant="top" className="h-50 img" src={image}/>  
                <Card.Body>
                    <Card.Title className="text-danger">{name}</Card.Title>
                    <Card.Text>{tutor}</Card.Text>
                    <Card.Text className="fw-bold"> {ratings} <AiFillStar color="salmon"></AiFillStar> ({people})</Card.Text>
                    <Card.Text className="fw-bold text-primary fs-4">{price}</Card.Text>
                    <Button className="btn text-primary fs-5 py-2 px-4" variant="primary">Enroll Now</Button>
                </Card.Body>
            </Card>




            
        </div>
    );
};

export default Course;
