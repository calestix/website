import React from 'react'
import "./style.scss"
import img1 from "@/assests/aboutus/Custom.webp"
import img2 from "@/assests/aboutus/E-Commerce.webp"
import img3 from "@/assests/aboutus/E-Learning.webp"
import img4 from "@/assests/aboutus/Industry.webp"
import img5 from "@/assests/aboutus/School.webp"
import Image from 'next/image'

const Solution = () => {
    const data=[{
        img:img1,
        title:"Industry Solutions",
        description:"A modern industrial facility with a digital dashboard and automation system"
    },
    {
        img:img2,
        title:"School & College Solutions",
        description:"A digital classroom with students and teachers using an interactive learning portal."
    },
    {
        img:img3,
        title:"E-Commerce Solutions",
        description:" An online store interface with shopping carts, products, and a secure payment gateway."
    },
    {
        img:img4,
        title:"E-Learning Solutions",
        description:"A virtual learning platform with students accessing courses on different devices."
    },
    {
        img:img5,
        title:"Custom Web & App Development",
        description:"A team of developers working on a website and mobile app with coding elements."
    }
]
  return (
    <div className="solution">
      <div className="heading">
        <h4>Calestix Solution</h4>
      </div>
      <div className='mt-16'>
      <div className="cards-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <Image src={item.img} alt={item.title} className="img-fluid" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Solution