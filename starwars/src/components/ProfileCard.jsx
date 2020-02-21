import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col } from "reactstrap";

const ProfileCard = (props) =>{

    return (

        <Col xs="6" md="4" xl="3">
            <Card>
    <CardHeader>Name: {props.starWars.name}</CardHeader>
                <CardBody>
                    <CardText>Birth Year: {props.starWars.birth_year}</CardText>
                    <CardTitle>Gender: {props.starWars.gender}</CardTitle> 
                </CardBody>
                <CardFooter>Films: {(props.starWars.films).length}</CardFooter>
            </Card>
         </Col>



    )
}

export default ProfileCard