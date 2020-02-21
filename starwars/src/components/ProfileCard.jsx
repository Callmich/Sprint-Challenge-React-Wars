import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col } from "reactstrap";
import styled from "styled-components";

const ProfileCard = (props) =>{

    const BigDiv = styled.div`
        height: 100vh;
    `

    return (
        <BigDiv>
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
         </BigDiv>



    )
}

export default ProfileCard