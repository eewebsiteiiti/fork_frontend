import React from 'react';
import Header from '../components/Header';
import {eesa} from '../HeaderData';
import Navbar from '../components/BodyNavbar/BodyNavbar';

const EESAPage = () => {
    return (
        <div>
            <Navbar/>
            <Header title={eesa.title} description={eesa.description} image={eesa.image}/>
        </div>
    );
}

export default EESAPage;
