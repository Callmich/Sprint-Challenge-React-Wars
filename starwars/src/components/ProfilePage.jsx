import React, {useState, useEffect} from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import { Container, Row, Pagination, PaginationItem, PaginationLink  } from "reactstrap";
import styled from "styled-components";



const ProfilePage = () => {
    const [char, setChar] = useState([])

    const [nextPage, setNextPage] = useState()

    useEffect(async () => {
        const response = await axios.get("https://swapi.co/api/people")
        .then(response => {
            setNextPage(response.data.next)
        })
        .catch(error => {
            console.log("issue with page", error)
        })
    }, [])

    const BigDiv = styled.div`
    height: 100vh;
`

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                console.log(response.data.next)
                setChar(response.data.results)
            })
            .catch(error => {
                console.log("No Star Wars for you", error)
            })

    }, [])

    return (
        <BigDiv>
            <Pagination aria-label="Page navigation">
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next href={nextPage} />
            </PaginationItem>
            </Pagination>
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