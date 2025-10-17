import React from 'react';
import Servicessection from '../../components/servicessection';
import ServicesHorizontalScroll from '../../components/serviceshorizontalscroll';
import Contactnow from '../../components/contactnow';

const Services = () => {
    return (
        <div>
            <Servicessection/>
            <ServicesHorizontalScroll/>
            <Contactnow/>
        </div>
    );
}

export default Services;
