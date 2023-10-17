import React from 'react';
import Header from '../components/Header';
import {eesa} from '../HeaderData';
import Navbar from '../components/BodyNavbar/BodyNavbar';
import { Container } from '@mui/material';

const EESAPage = () => {
    return (
        <div>
            <Navbar/>
            <Header title={eesa.title} description={eesa.description} image={eesa.image}/>
            <Container>
                <img src="Images/eesa.JPG" alt="not found" width="100%" />
            </Container>
        </div>
    );
}

export default EESAPage;
