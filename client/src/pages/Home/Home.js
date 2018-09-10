import React from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";
import MeBox from "../../components/meBox";
import SmallNote from "../../components/smallNote";
import ItemList from "../../components/itemList";



const Home = () => (
    <Container fluid>
        <h1>Home Page</h1>
        <MeBox/>
        <Links/>
        <SmallNote/>
        <ItemList/>

    </Container>
);

export default Home;