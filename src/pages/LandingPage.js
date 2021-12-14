import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import MediumPost from '../components/MediumPost';
import MainBlogContainer from '../components/MainBlogContainer';
import { Container } from '@material-ui/core';
import Footer from '../components/Footer';

const LandingPage = () => {
    return <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Container>
            <MainBlogContainer >

            </MainBlogContainer>
           
        </Container>

        <Footer></Footer>
        
    </div>;
}


export default LandingPage;