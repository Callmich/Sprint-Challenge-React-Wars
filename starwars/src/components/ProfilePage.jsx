import React, {useState, useEffect} from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import { Container, Row } from "reactstrap";
import styled from "styled-components";



const ProfilePage = () => {
    const [char, setChar] = useState([])

    const BigDiv = styled.div`
    height: 100vh;
`

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                console.log(response.data.results)
                setChar(response.data.results)
            })
            .catch(error => {
                console.log("No Star Wars for you", error)
            })

    }, [])

    return (
        <BigDiv>
            <Container>
                <Row>
                    {char.map(function(starWars, index){
                        return <ProfileCard starWars={starWars} key={index}/>
                    })}
                </Row>
            </Container>
        </BigDiv>
    )

}



export default ProfilePage