import '../../App.css'
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';
import React from 'react'
import Info from '../Info/Info';

function Home(){
    return(
        <>
        <Hero />
        <Cards />
        <Info/>
        </>
    );
}

export default Home;