import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col } from "reactstrap";
import "./CardCSS.css";


const ProfileCard = (props) =>{



    return (
            <Col xs="6" md="4" xl="3">
                <Card className="cards">
                    <CardHeader className="name" >Name: {props.starWars.name}</CardHeader>
                    <CardBody className="info">
                        <CardText>Birth Year: {props.starWars.birth_year}</CardText>
                        <CardTitle>Gender: {props.starWars.gender}</CardTitle> 
                    </CardBody>
                    <CardFooter className="films">Films: {(props.starWars.films).length}</CardFooter>
                </Card>
            </Col>




    )
}

export default ProfileCard