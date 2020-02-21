import React, {useState, useEffect} from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import { Container, Row } from "reactstrap";



const ProfilePage = () => {
    const [char, setChar] = useState([])

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
        <Container>
            <Row>
                {char.map(function(starWars, index){
                    return <ProfileCard starWars={starWars} key={index}/>
                })}
            </Row>
        </Container>
    )

}



export default ProfilePage