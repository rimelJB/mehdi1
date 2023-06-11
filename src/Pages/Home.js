import React, { Fragment } from 'react'
import Hero from '../Components/Herosection/Hero'
import Company from '../Components/Company/Company'
import Compteur from '../Components/compteur/Compteur'
import Chouse from '../Components/Chouse/Chouse'
import Inscription from './Inscription'
import Slider from '../Components/slider/slider'
import PopularCour from '../Components/cours-section/PopularCour'



 
function Home() {
  return (
   
        <Fragment>
            
            <Hero />
            <Company />
            <Compteur />
            <PopularCour/>
            <Chouse />
            <Inscription/>
            <Slider/>
            
        </Fragment>
        

  )
}

export default Home


