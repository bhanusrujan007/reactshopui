
import React, {useState} from 'react'
import Header from '../comp/Header'
import Banner from '../comp/Banner'
import Collections from '../comp/Collections'
import Footer from '../comp/Footer'
import Womancollection from '../comp/Womancollection'

import { Gents,Ladies} from '../data'


const Mainpage = () => {

    const[gentsFashion,setGentsFashion] = useState(Gents)
    const[ladiesFashion,setLadiesFashion]= useState(Ladies)

    console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion}/>
        <Womancollection ladiesFashion={ladiesFashion}/>
        <Footer />

    </div>
  )
}

export default Mainpage