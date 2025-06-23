import React from 'react'
import "./style.scss"
import Image from 'next/image'
import img from "@/assests/about js.jpg"
export const AboutUS = () => {
  return (
    <section className='aboutus'>
        <div className="heading">
            <h4>About Us</h4>
        </div>
        <div className="lg:flex pt-4 items-center mt-12">
              <div className="basis-1/2">
              <p>At Celestix, we specialize in a designing and developing high-quality websites and applications tailored to your business needs. Whether you&apos;re an industry, school, college, e-commerce business, or e-learning platform, we provide cutting-edge digital solutions to help you grow and succeed online.</p>
              <p>Our team of experts is dedicated to delivering custom, scalable, and user-friendly solutions that enhance your online presence and drive results. From dynamic websites to feature-rich applications, we ensure seamless functionality and an outstanding user experience.</p>
              <h4 className='text-white text-3xl'>Let&apos;s build something amazing together!</h4>
              </div>
              <div className="basis-1/2">
              <Image 
              src={img}
              alt='img'
              className='img-fluid lg:mt-0 mt-4'
              />
              </div>
            </div>
    </section>
  )
}
