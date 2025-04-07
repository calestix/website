import { AboutUS } from '@/component/aboutus/AboutUS'
import Banner from '@/component/bannersection/Banner'
import Footer from '@/component/footer/footer'
import { Header } from '@/component/header/header'
import Solution from '@/component/solution/solution'
import React from 'react'


function Homepage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <AboutUS/>
        <Solution/>
        <Footer/>
    </div>
  )
}

export default Homepage